import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const MobileLanyard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking cursor/touch coordinates relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid animation transitions
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  const scaleSpring = useSpring(1, springConfig);
  
  // Glowing radial gradient position that follows the pointer
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowXSpring = useSpring(glowX, springConfig);
  const glowYSpring = useSpring(glowY, springConfig);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized position relative to center (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);

    // Glow position in percentages
    glowX.set((mouseX / width) * 100);
    glowY.set((mouseY / height) * 100);
  };

  const handlePointerEnter = () => {
    scaleSpring.set(1.04);
  };

  const handlePointerLeave = () => {
    scaleSpring.set(1);
    x.set(0);
    y.set(0);
  };

  // Construct the radial glow background style using spring-interpolated coordinates
  const glowStyle = {
    background: useTransform(
      [glowXSpring, glowYSpring],
      ([latestX, latestY]) => `radial-gradient(circle 120px at ${latestX}% ${latestY}%, rgba(244, 108, 56, 0.15) 0%, transparent 100%)`
    )
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start pointer-events-auto">
      {/* 1. Lanyard Hanging Strap (SVG and CSS) */}
      <div className="absolute top-0 w-32 h-20 -translate-y-4 pointer-events-none select-none z-[5]">
        {/* SVG Drawing the strap loop */}
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full overflow-visible opacity-45">
          {/* Strap path hanging down to the clip */}
          <path 
            d="M 50,-20 C 15,20 15,65 50,75 C 85,65 85,20 50,-20 Z" 
            stroke="#ffffff" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          />
          {/* Saffron accent outline inside the strap */}
          <path 
            d="M 50,-16 C 20,22 20,62 50,72 C 80,62 80,22 50,-16 Z" 
            stroke="#f46c38" 
            strokeWidth="1" 
            strokeLinecap="round"
            strokeDasharray="4 3"
          />
          {/* Metal ring/clip connecting strap to card */}
          <circle cx="50" cy="76" r="5" fill="#555555" stroke="#888888" strokeWidth="1.5" />
          <path d="M 46,79 L 46,92 L 54,92 L 54,79 Z" fill="#444444" stroke="#666666" strokeWidth="1" />
        </svg>
      </div>

      {/* 2. Interactive Card Body with 3D Tilt */}
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          scale: scaleSpring,
          transformStyle: 'preserve-3d',
        }}
        className="w-[280px] h-[440px] rounded-[1.8rem] border border-white/10 relative overflow-hidden shadow-2xl bg-[#0e0e0f]/90 backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[#f46c38]/10 cursor-grab active:cursor-grabbing select-none mt-14 z-10"
      >
        {/* Card Background: Cropped Mithun.png */}
        <div 
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage: "url('/Mithun.png')",
            backgroundSize: '202% 100%',
            backgroundPosition: '43.6% 0%',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Shimmer / Holographic Radial Glow Effect */}
        <motion.div 
          style={glowStyle}
          className="absolute inset-0 z-10 pointer-events-none"
        />

        {/* Card Border Saffron Overlay Glow */}
        <div className="absolute inset-0 border border-[#f46c38]/15 rounded-[1.8rem] pointer-events-none z-10" />

        {/* Technical Pass Branding / Details Overlay */}
        <div 
          style={{ transform: 'translateZ(25px)' }}
          className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start pointer-events-none font-mono"
        >
          {/* NFC Chip Graphic */}
          <div className="w-8 h-7 rounded-md bg-gradient-to-br from-amber-600/30 to-amber-500/10 border border-amber-500/30 relative overflow-hidden flex flex-col justify-around p-0.5 opacity-80">
            <div className="h-px bg-amber-500/30 w-full" />
            <div className="h-px bg-amber-500/30 w-full" />
            <div className="h-px bg-amber-500/30 w-full" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-amber-500/30" />
          </div>

          {/* Access status */}
          <div className="flex items-center gap-1.5 border border-emerald-500/20 bg-emerald-950/40 px-2 py-0.5 rounded-full text-[7.5px] text-emerald-400 font-extrabold uppercase tracking-widest shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYS ACTIVE</span>
          </div>
        </div>

        {/* Bottom Banner Overlay (Matches Canvas drawing in Lanyard.tsx) */}
        <div 
          style={{ transform: 'translateZ(35px)' }}
          className="absolute bottom-6 left-3.5 right-3.5 z-20 pointer-events-none font-mono"
        >
          {/* Rich Glassmorphic Plate */}
          <div className="w-full bg-[#0c0c0e]/92 border border-white/12 rounded-xl py-2 px-2.5 flex justify-between items-center shadow-xl">
            {/* Left side text: @ SOFTWARE ENGINEER */}
            <div className="flex items-center text-[7.5px] font-extrabold tracking-wide">
              <span className="text-[#f46c38]">@</span>
              <span className="ml-0.5 bg-clip-text text-transparent bg-gradient-to-r from-[#f46c38] via-[#ffb347] to-[#f46c38] font-black">
                SOFTWARE ENGINEER
              </span>
            </div>

            {/* Right side text: @ MITHUN_P */}
            <div className="flex items-center text-[7.5px] font-extrabold tracking-wide">
              <span className="text-[#f46c38]">@</span>
              <span className="ml-0.5 bg-clip-text text-transparent bg-gradient-to-r from-[#f46c38] via-[#ffb347] to-[#f46c38] font-black">
                MITHUN_P
              </span>
            </div>
          </div>

          {/* Styled Barcode Graphic at the absolute bottom */}
          <div className="flex items-center justify-center gap-0.5 w-full mt-3 px-6 opacity-30 select-none">
            {[1,3,2,1,4,1,2,3,1,2,1,4,2,1,3,1,2,4,1,2,1,3].map((val, idx) => (
              <div 
                key={idx} 
                style={{ width: `${val * 0.75}px` }} 
                className="h-3 bg-white" 
              />
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default MobileLanyard;
