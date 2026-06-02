import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mithunmithun71548@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="w-full lg:w-[400px] xl:w-[420px] lg:sticky lg:top-24 h-fit py-6 lg:py-0 flex flex-col justify-center items-center z-40 shrink-0">
      
      {/* 1. Indian National Flag Colors Premium Gradient Border Wrapper Container */}
      <div 
        className="w-full max-w-md p-[1.5px] rounded-[2.5rem] bg-gradient-to-tr from-[#138808] via-white to-[#FF9933] shadow-2xl relative overflow-hidden group transition-all duration-500 hover:shadow-[#138808]/10"
        style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)" }}
      >
        {/* Inner Card Body with 95% opacity to overlay the gradient border perfectly */}
        <div className="bg-[#0e0e11]/95 backdrop-blur-2xl rounded-[2.5rem] w-full flex flex-col items-center relative overflow-hidden p-0">
          
          {/* Subtle, glowing ambient color orbs in saffron and green */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FF9933]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#138808]/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* 2. Premium LinkedIn-style Tech Cover Banner */}
          <div className="w-full h-32 bg-gradient-to-r from-[#18181b] via-[#2c1d18] to-[#18181b] relative overflow-hidden border-b border-white/5">
            {/* Subtle grid lines for high-tech aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FF9933]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#138808]/10 rounded-full blur-2xl"></div>
            
            {/* Sleek abstract tech line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF9933]/40 to-transparent"></div>
          </div>
          
          {/* Profile Card Body Area */}
          <div className="w-full px-6 xl:px-8 pb-8 pt-0 flex flex-col items-center">
            
            {/* 3. Overlapping Centered Circular Profile Photo (Clean format, no borders/dots per request) */}
            <div className="relative -mt-16 mb-4 z-10">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-105 flex items-center justify-center bg-neutral-900 border border-white/10">
                <img 
                  alt="Mithun P" 
                  className="w-full h-full object-cover object-top" 
                  src="/Mithun.png"
                />
              </div>
            </div>
            
            {/* 4. Name Identity */}
            <h1 
              className="text-2xl xl:text-3xl font-extrabold text-white mb-1 tracking-tight uppercase select-none z-10 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Mithun P
            </h1>

            {/* Technical Subtitle */}
            <div 
              className="text-[9px] font-black uppercase tracking-[0.25em] text-[#FF9933] mb-1 font-mono z-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              AI &amp; Software Developer
            </div>

            {/* Location Info */}
            <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold mb-5 font-mono select-none z-10">
              <span className="material-symbols-outlined text-xs text-gray-600">location_on</span>
              <span>Tamil Nadu, India</span>
            </div>

            {/* 5. Concise Biography */}
            <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed mb-6 px-2 text-center font-medium font-body-md z-10">
              B.Tech Artificial Intelligence &amp; Data Science student at KSRCT. Engineering scalable full-stack applications and automated platforms.
            </p>

            {/* 6. Factual Skill Focus tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 px-2 z-10">
              {["AI & ML Models", "Full Stack Web", "RPA Automation"].map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-[8px] font-mono tracking-wider text-gray-400 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Social Icons Row */}
            <div className="flex space-x-8 py-2 relative z-20 mb-4">
              <a 
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Mithunp123/" 
                className="text-gray-400 hover:text-[#FF9933] hover:scale-110 transition-all duration-200"
              >
                <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
              
              <a 
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/mithun-p2006/" 
                className="text-gray-400 hover:text-[#FF9933] hover:scale-110 transition-all duration-200"
              >
                <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              
              <a 
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/918122762374" 
                className="text-gray-400 hover:text-[#FF9933] hover:scale-110 transition-all duration-200"
              >
                <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.727-1.457L0 24zm6.59-4.846c1.785 1.058 3.535 1.614 5.34 1.616 5.4 0 9.79-4.39 9.795-9.79.002-2.61-1.01-5.067-2.855-6.915-1.847-1.848-4.305-2.862-6.924-2.863-5.398 0-9.786 4.39-9.79 9.793-.001 1.83.498 3.618 1.447 5.207l-.995 3.637 3.72-.976zm11.236-6.52c-.27-.135-1.602-.79-1.85-.88-.25-.09-.432-.136-.614.137-.182.273-.705.88-.863 1.058-.16.177-.318.2-.588.064-.27-.135-1.14-.42-2.17-1.34-.802-.716-1.79-1.09-1.926-.27-.135-.29-.203-.425-.333-.11-.104-.243-.288-.364-.432-.12-.144-.16-.24-.242-.406-.082-.166-.04-.31.02-.444.062-.134.614-.716.796-.97.18-.253.24-.422.36-.7.12-.278.06-.522-.03-.7-.09-.177-.613-1.478-.84-2.02-.222-.53-.448-.456-.615-.464-.16-.007-.34-.01-.52-.01-.18 0-.476.067-.726.34-.25.272-.953.93-.953 2.27 0 1.34.975 2.637 1.11 2.82.135.185 1.92 2.93 4.65 4.11 2.28.98 2.748.785 3.243.74.5-.044 1.603-.655 1.83-1.288.225-.633.225-1.177.158-1.288-.067-.113-.25-.18-.52-.315z" />
                </svg>
              </a>
            </div>

            {/* 7. Action CTA Hub */}
            <div className="w-full flex flex-col gap-2.5 z-20">
              <a 
                href="/Mithun-resume.pdf"
                download
                className="w-full py-4 bg-white hover:bg-neutral-100 text-black rounded-2xl font-extrabold uppercase tracking-widest text-[9.5px] flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] font-mono border border-neutral-200 select-none cursor-pointer"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="material-symbols-outlined text-sm text-[#FF9933] font-bold">download</span>
                <span>Download CV</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full py-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 text-white rounded-2xl font-extrabold uppercase tracking-widest text-[9.5px] flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] font-mono cursor-pointer select-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {copied ? (
                  <>
                    <span className="material-symbols-outlined text-sm text-emerald-400 font-bold animate-pulse">check_circle</span>
                    <span className="text-emerald-400 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm text-[#FF9933] font-bold">mail</span>
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
