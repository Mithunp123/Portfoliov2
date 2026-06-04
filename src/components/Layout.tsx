import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import LottieLoader from './LottieLoader';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-[#0c0c0c] text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Floating Left Social Dock */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[99] hidden lg:flex flex-col gap-6 items-center px-3.5 py-6 rounded-full glass-card shadow-2xl transition-all duration-300 hover:border-[#f46c38]/30">
        {/* GitHub */}
        <a 
          href="https://github.com/Mithunp123/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center justify-center p-2 rounded-full hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          {/* Tooltip */}
          <div className="absolute left-14 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
            GitHub
          </div>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/mithun-p-0100782a2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#0077b5] transition-all duration-300 relative group flex items-center justify-center p-2 rounded-full hover:bg-[#0077b5]/10 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          {/* Tooltip */}
          <div className="absolute left-14 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
            LinkedIn
          </div>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/919443207221" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#25d366] transition-all duration-300 relative group flex items-center justify-center p-2 rounded-full hover:bg-[#25d366]/10 hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]"
        >
          <LottieLoader 
            url="/lottie/Whatsapp.json" 
            style={{ width: '28px', height: '28px' }} 
            fallbackIcon="chat" 
            fallbackColor="text-[#25d366]" 
          />
          {/* Tooltip */}
          <div className="absolute left-14 bg-neutral-900 border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none shadow-2xl whitespace-nowrap">
            WhatsApp
          </div>
        </a>
      </div>
      
      {/* Centered main container layout */}
      <div className="max-w-[1300px] mx-auto w-full px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-40">
        
        {/* Main Column (Scrollable content) */}
        <main className="py-6 lg:py-16 pb-24 lg:pb-16 min-h-screen flex flex-col justify-between">
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
