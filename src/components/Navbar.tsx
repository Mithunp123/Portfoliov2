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

  return (
    <nav className="absolute top-6 left-0 right-0 z-[100] flex flex-col xl:flex-row items-center justify-between px-6 xl:px-16 gap-6 w-full pointer-events-none">
      
      {/* 1. Left Side: Top-left Logo */}
      <div className="pointer-events-auto shrink-0 flex items-center justify-center xl:justify-start">
        <NavLink to="/">
          <img 
            src="/Top-left.png" 
            alt="Logo" 
            className="h-20 sm:h-28 w-auto object-contain hover:scale-102 transition-transform duration-300 select-none" 
            draggable="false"
          />
        </NavLink>
      </div>

      {/* 2. Middle Side: Centered Nav Link Pill Container */}
      <div className="nav-pill px-8 py-1.5 rounded-full flex items-center justify-around space-x-6 sm:space-x-12 pointer-events-auto shadow-2xl transition-all duration-300">
        
        {/* Home Link */}
        <NavLink 
          to="/" 
          id="navbar-home-link"
          className={({ isActive }) => 
            `transition-colors flex flex-col items-center p-2 rounded-full hover:scale-110 duration-200 relative group ${
              isActive ? 'text-[#f46c38]' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">home</span>
          <div className="absolute top-12 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
            Home
          </div>
        </NavLink>

        {/* Experience Link */}
        <NavLink 
          to="/experience" 
          className={({ isActive }) => 
            `transition-colors flex flex-col items-center p-2 rounded-full hover:scale-110 duration-200 relative group ${
              isActive ? 'text-[#f46c38]' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">work</span>
          <div className="absolute top-12 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
            Experience
          </div>
        </NavLink>

        {/* Projects Link */}
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `transition-colors flex flex-col items-center p-2 rounded-full hover:scale-110 duration-200 relative group ${
              isActive ? 'text-[#f46c38]' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">folder</span>
          <div className="absolute top-12 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
            Projects
          </div>
        </NavLink>

        {/* Tools Link */}
        <NavLink 
          to="/tools" 
          className={({ isActive }) => 
            `transition-colors flex flex-col items-center p-2 rounded-full hover:scale-110 duration-200 relative group ${
              isActive ? 'text-[#f46c38]' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">build</span>
          <div className="absolute top-12 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
            Tools
          </div>
        </NavLink>

        {/* Blog Link */}
        <NavLink 
          to="/blog" 
          className={({ isActive }) => 
            `transition-colors flex flex-col items-center p-2 rounded-full hover:scale-110 duration-200 relative group ${
              isActive ? 'text-[#f46c38]' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">edit_note</span>
          <div className="absolute top-12 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
            Blog
          </div>
        </NavLink>

      </div>

      {/* 3. Right Side: Available for Work badge and Sound controller */}
      <div className="flex items-center gap-6 pointer-events-auto shrink-0 select-none">
        
        {/* Available now for work badge pill (White text, green border/dot, as shown in image) */}
        <div 
          className="style-module-scss-module__Ooia0G__availability flex items-center gap-2 border px-4.5 py-2.5 rounded-full font-mono text-[9.5px] uppercase tracking-widest font-bold shadow-md select-none transition-all duration-300 hover:brightness-105" 
          style={{ borderColor: '#219653', backgroundColor: 'rgba(33, 150, 83, 0.15)' }}
        >
          <div className="style-module-scss-module__Ooia0G__text text-white">available now for work</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3 flex items-center justify-center shrink-0">
            <circle cx="6" cy="6" r="4.5" fill="#219653" className="animate-pulse"></circle>
          </svg>
        </div>

        {/* Music Sound Toggle controller (Clean borderless text link, as shown in image) */}
        <span 
          {...{ beforecolor: "#F0F1FA" } as any}
          data-replace={isPlaying ? "Sound | OFF" : "Sound | ON"} 
          className="sc-gJhJfT cTLsyx cursor-pointer select-none font-mono text-[11px] font-semibold tracking-widest text-white hover:text-[#219653] transition-colors duration-300 py-2.5 px-1 shrink-0"
          onClick={toggleSound}
          title={isPlaying ? "Mute Background Music" : "Unmute Background Music"}
        >
          <p>{isPlaying ? "Sound | ON" : "Sound | OFF"}</p>
        </span>

      </div>

    </nav>
  );
};

export default Navbar;
