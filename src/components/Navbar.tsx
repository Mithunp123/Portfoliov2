import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // 1. Initialize audio looping generic1.mp3
    const audio = new Audio('/generic1.mp3');
    audio.loop = true;
    audio.volume = 0.4; // Soft background ambient level
    audioRef.current = audio;

    // 2. Play audio by default (ON status)
    const playAudio = () => {
      audio.play().catch((err) => {
        console.log("Autoplay blocked by browser. Waiting for first click/interaction to play generic1.mp3:", err);
        setIsPlaying(false);
      });
    };

    playAudio();

    // 3. Add listener to trigger audio automatically on first interaction if initially blocked by browser autoplay rules
    const handleUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.log("Play failed on interaction:", e));
      }
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      audio.pause();
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Sound play error:", e));
    }
  };

  const navLinks = [
    { to: "/", icon: "home", label: "Home", isHome: true },
    { to: "/experience", icon: "work", label: "Experience" },
    { to: "/projects", icon: "folder", label: "Projects" },
    { to: "/tools", icon: "build", label: "Tools" },
    { to: "/blog", icon: "edit_note", label: "Blog" }
  ];

  return (
    <>
      {/* Top Navbar Header (Horizontal on all devices) */}
      <nav className="absolute top-6 left-0 right-0 z-[100] flex flex-row items-center justify-between px-6 xl:px-16 w-full pointer-events-none">
        
        {/* 1. Left Side: Top-left Logo */}
        <div className="pointer-events-auto shrink-0 flex items-center justify-start">
          <NavLink to="/">
            <img 
              src="/Top-left.png" 
              alt="Logo" 
              className="h-12 sm:h-16 xl:h-28 w-auto object-contain hover:scale-102 transition-transform duration-300 select-none" 
              draggable="false"
            />
          </NavLink>
        </div>

        {/* 2. Middle Side: Centered Nav Link Pill Container (Desktop only: lg and above) */}
        <div className="hidden lg:flex nav-pill px-8 py-1.5 rounded-full items-center justify-around space-x-6 xl:space-x-12 pointer-events-auto shadow-2xl transition-all duration-300">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              id={link.isHome ? "navbar-home-link" : undefined}
              className={({ isActive }) => 
                `transition-colors flex flex-col items-center p-2 rounded-full hover:scale-110 duration-200 relative group ${
                  isActive ? 'text-[#f46c38]' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              <span className="material-symbols-outlined text-[22px]">{link.icon}</span>
              <div className="absolute top-12 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
                {link.label}
              </div>
            </NavLink>
          ))}
        </div>

        {/* 3. Right Side: Available for Work badge and Sound controller */}
        <div className="flex items-center gap-3 sm:gap-6 pointer-events-auto shrink-0 select-none">
          
          {/* Available now for work badge pill (Responsive layout and texts) */}
          <div 
            className="style-module-scss-module__Ooia0G__availability flex items-center gap-2 border px-3.5 py-2.5 rounded-full font-mono text-[8px] sm:text-[9.5px] uppercase tracking-widest font-bold shadow-md select-none transition-all duration-300 hover:brightness-105" 
            style={{ borderColor: '#219653', backgroundColor: 'rgba(33, 150, 83, 0.15)' }}
          >
            <div className="style-module-scss-module__Ooia0G__text text-white hidden sm:block">available now for work</div>
            <div className="style-module-scss-module__Ooia0G__text text-white block sm:hidden">available</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5 sm:w-3 h-3 flex items-center justify-center shrink-0">
              <circle cx="6" cy="6" r="4.5" fill="#219653" className="animate-pulse"></circle>
            </svg>
          </div>

          {/* Music Sound Toggle controller */}
          <span 
            {...{ beforecolor: "#F0F1FA" } as any}
            data-replace={isPlaying ? "Sound | OFF" : "Sound | ON"} 
            className="sc-gJhJfT cTLsyx cursor-pointer select-none font-mono text-[10px] sm:text-[11px] font-semibold tracking-widest text-white hover:text-[#219653] transition-colors duration-300 py-2.5 px-1 shrink-0"
            onClick={toggleSound}
            title={isPlaying ? "Mute Background Music" : "Unmute Background Music"}
          >
            <p>{isPlaying ? "Sound | ON" : "Sound | OFF"}</p>
          </span>

        </div>

      </nav>

      {/* 4. Bottom Fixed Nav Link Pill Container (Mobile / Tablet only: hidden on lg and above) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] nav-pill px-6 py-1.5 rounded-full flex items-center justify-around space-x-6 sm:space-x-8 pointer-events-auto shadow-2xl transition-all duration-300 w-[90%] max-w-[380px]">
        {navLinks.map((link) => (
          <NavLink 
            key={`mobile-${link.to}`}
            to={link.to} 
            className={({ isActive }) => 
              `transition-colors flex-grow flex flex-col items-center p-2 rounded-full hover:scale-115 duration-200 relative group ${
                isActive ? 'text-[#f46c38]' : 'text-gray-400 hover:text-white'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">{link.icon}</span>
            <div className="absolute bottom-12 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
              {link.label}
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
