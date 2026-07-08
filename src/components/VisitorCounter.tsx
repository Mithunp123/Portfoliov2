import React, { useEffect, useState } from 'react';
import { ref, onValue, set, get } from 'firebase/database';
import { database } from '../firebase/config';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const visitorsRef = ref(database, 'stats/total_visitors');

    // Increment visitor count if not already done in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      // Use a transaction or simply increment. 
      // For simplicity and real-time without overwrites, we can use the atomic increment logic via set/get,
      // but Firebase SDK v9 has a built-in atomic increment if we use `update`.
      // Using a simple get and set since we just want a basic counter.
      get(visitorsRef).then((snapshot) => {
        const currentCount = snapshot.val() || 0;
        set(visitorsRef, currentCount + 1);
        sessionStorage.setItem('hasVisited', 'true');
      }).catch(err => console.error("Firebase counter error:", err));
    }

    // Listen for real-time updates
    const unsubscribe = onValue(visitorsRef, (snapshot) => {
      setCount(snapshot.val() || 0);
    });

    return () => unsubscribe();
  }, []);

  if (count === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[40] flex items-center gap-2 px-3.5 py-2 rounded-full glass-card shadow-2xl border border-[#3b82f6]/30 text-[10px] font-mono uppercase tracking-widest text-[#3b82f6]">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
      <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
        <span className="material-symbols-outlined text-[14px] text-[var(--text-muted)]">visibility</span>
        {count.toLocaleString()}
      </span>
      <span className="text-[var(--text-muted)] ml-1">Visits</span>
    </div>
  );
};

export default VisitorCounter;
