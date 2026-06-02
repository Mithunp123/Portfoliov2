import React from 'react';
import { Link } from 'react-router-dom';

interface TimelineCertItem {
  title: string;
  issuer: string;
  skills: string[];
  pdfUrl: string;
  accentColor: string;
  badge: string;
}

interface YearGroup {
  year: string;
  certificates: TimelineCertItem[];
}

const timelineData: YearGroup[] = [
  {
    year: "2023",
    certificates: [
      {
        title: "Python Certificate",
        issuer: "HackerRank Academy",
        skills: ["OOP Concepts", "Data Structures", "Algorithmic Logic"],
        pdfUrl: "/certificate/python_basic certificate.pdf",
        accentColor: "#f46c38",
        badge: "Verified Expert"
      }
    ]
  },
  {
    year: "2024",
    certificates: [
      {
        title: "SQL Certificate",
        issuer: "HackerRank & Forage Program",
        skills: ["Database Queries", "Subqueries & Joins", "Schema Design"],
        pdfUrl: "/certificate/Digitak-Engineering.pdf",
        accentColor: "#38bdf8",
        badge: "Database Certified"
      },
      {
        title: "Power BI Certificate",
        issuer: "Business Intelligence Suite",
        skills: ["Data Modeling", "BI Visualizations", "Stakeholder insights"],
        pdfUrl: "/certificate/Digitak-Engineering.pdf",
        accentColor: "#facc15",
        badge: "BI Analyst"
      }
    ]
  },
  {
    year: "2025",
    certificates: [
      {
        title: "AI & AIML Internship",
        issuer: "Google Virtual Program",
        skills: ["Neural Networks", "Inference Pipelines", "Model Optimization"],
        pdfUrl: "/certificate/google-intern.pdf",
        accentColor: "#10b981",
        badge: "Google Certified"
      },
      {
        title: "Data Analytics Certificate",
        issuer: "Cognizant / Forage Academy",
        skills: ["Data Wrangling", "Statistical Modeling", "Enterprise BI"],
        pdfUrl: "/certificate/Digitak-Engineering.pdf",
        accentColor: "#2dd4bf",
        badge: "Data Scientist"
      }
    ]
  },
  {
    year: "2026",
    certificates: [
      {
        title: "UiPath RPA Certificate",
        issuer: "Automation Academy",
        skills: ["Process Automation", "RPA Workflows", "Orchestrator APIs"],
        pdfUrl: "/certificate/Cyber-hack.pdf",
        accentColor: "#a855f7",
        badge: "RPA Developer"
      }
    ]
  }
];

const Honors: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 space-y-16 overflow-hidden">
      
      {/* 1. Header Section - Custom Bold Editorial Layout */}
      <section className="pt-8 lg:pt-0 space-y-6">
        <div>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#f46c38] hover:text-white transition-colors duration-300 group"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
            Back to Dashboard
          </Link>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#f46c38] rounded-full animate-ping"></span>
            <p className="text-gray-500 text-[10px] font-extrabold uppercase tracking-[0.3em] font-mono" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Accredited Portfolio timeline
            </p>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tight leading-none text-white select-none" style={{ fontFamily: "'Syne', sans-serif" }}>
            Credentials
          </h1>
          <h1 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tight leading-none text-outline select-none mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>
            &amp; Timeline
          </h1>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-medium font-body-md pt-1">
            A chronological tree of academic research, national hackathon rewards, and professional software engineering credentials.
          </p>
        </div>
      </section>

      {/* 2. Apple-Style Minimalist Stats HUD */}
      <section className="border border-white/10 rounded-[2.5rem] bg-[#121212]/30 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
        {[
          { value: "1", label: "Hackathon Win", icon: "emoji_events" },
          { value: "2", label: "Internships", icon: "badge" },
          { value: "3", label: "SaaS Platforms", icon: "rocket_launch" },
          { value: "6", label: "Total Certificates", icon: "workspace_premium" }
        ].map((stat, idx) => (
          <div key={idx} className="p-8 text-center group hover:bg-white/[0.01] transition-colors duration-300">
            <span className="material-symbols-outlined text-[#f46c38] text-2xl mb-3 block group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
            <div className="text-4xl font-extrabold text-white mb-1 group-hover:text-[#f46c38] transition-colors duration-300 font-mono" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {stat.value}
            </div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-gray-500 font-extrabold font-mono" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Re-engineered Chronological Tree timeline Showcase */}
      <section className="space-y-8 relative">
        <div className="border-b border-white/15 pb-4">
          <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Verification Tree
          </h2>
        </div>

        {/* Tree timeline wrapper */}
        <div className="relative pl-6 md:pl-12 w-full max-w-full">
          {/* Main vertical tree axis line - dynamic color gradient */}
          <div className="absolute left-[7px] md:left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#f46c38] via-emerald-500 to-purple-500 opacity-20 pointer-events-none"></div>

          {/* Chronological Year Groups */}
          <div className="space-y-12">
            {timelineData.map((group, gIdx) => (
              <div key={gIdx} className="relative space-y-6">
                
                {/* Year Marker Header */}
                <div className="flex items-center gap-4 relative">
                  {/* Glowing Node on Axis */}
                  <div 
                    className="absolute left-[-24px] md:left-[-38px] w-4 h-4 rounded-full bg-[#0c0c0c] border-2 flex items-center justify-center z-10 transition-transform duration-300 hover:scale-125"
                    style={{ borderColor: group.certificates[0].accentColor, boxShadow: `0 0 10px ${group.certificates[0].accentColor}40` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: group.certificates[0].accentColor }}></div>
                  </div>

                  <h3 
                    className="text-2xl font-black text-white uppercase tracking-wider font-mono select-none" 
                    style={{ fontFamily: "'Space Grotesk', sans-serif'" }}
                  >
                    {group.year}
                  </h3>
                </div>

                {/* Sub-Tree Branches (The Certificates) */}
                <div className="space-y-4 pl-4 md:pl-6 relative">
                  {group.certificates.map((cert, cIdx) => (
                    <div key={cIdx} className="relative w-full">
                      
                      {/* Horizontal Connector Branch Line representing "├──" */}
                      <div className="absolute left-[-24px] md:left-[-32px] top-1/2 w-4 md:w-8 h-[2px] bg-white/10 pointer-events-none"></div>
                      
                      {/* Interactive branch card wrapper */}
                      <a 
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full transition-transform duration-300 hover:scale-[1.01]"
                      >
                        <div 
                          className="w-full bg-[#121212]/30 hover:bg-[#121212]/60 border border-white/5 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 transition-all duration-500 relative overflow-hidden group shadow-lg"
                          style={{ boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)` }}
                        >
                          {/* Accent highlight strip */}
                          <div 
                            className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5"
                            style={{ backgroundColor: cert.accentColor }}
                          ></div>

                          {/* Left Panel: Details */}
                          <div className="pl-2 space-y-2 min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span 
                                className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 border rounded-full bg-transparent"
                                style={{ borderColor: `${cert.accentColor}40`, color: cert.accentColor, fontFamily: "'Space Grotesk', sans-serif" }}
                              >
                                {cert.badge}
                              </span>
                              <span className="text-[8.5px] uppercase tracking-widest text-gray-500 font-extrabold font-mono" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                {cert.issuer}
                              </span>
                            </div>

                            <h4 
                              className="text-base sm:text-lg font-black uppercase tracking-tight text-white leading-tight group-hover:text-[#f46c38] transition-colors duration-300 truncate"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {cert.title}
                            </h4>

                            {/* Core competencies */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {cert.skills.map((skill, sIdx) => (
                                <span 
                                  key={sIdx}
                                  className="text-[7.5px] font-mono tracking-wider text-gray-400 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-md"
                                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right Panel: View Certificate Action with Diagonal Arrow */}
                          <div className="flex items-center justify-center shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-[#f46c38] group-hover:bg-[#f46c38]/5 transition-all duration-300">
                            <span className="material-symbols-outlined text-gray-500 group-hover:text-[#f46c38] transition-colors duration-300 transform group-hover:rotate-45 text-lg shrink-0">
                              north_east
                            </span>
                          </div>

                        </div>
                      </a>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Return to Dashboard Controls */}
      <section className="flex justify-center pt-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#f46c38] hover:text-white transition-colors duration-300 group border border-[#f46c38]/20 px-8 py-4 rounded-full bg-[#f46c38]/5 hover:bg-[#f46c38] hover:border-[#f46c38] shadow-lg shadow-[#f46c38]/5"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
          Return to Dashboard
        </Link>
      </section>

      {/* 5. Footer */}
      <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-extrabold uppercase tracking-[0.2em] gap-4 font-mono" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <p>© 2026 Mithun P. Crafted with React &amp; Tailwind CSS</p>
        <div className="flex space-x-8">
          <a className="hover:text-white transition-colors duration-300" href="https://github.com/Mithunp123/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-white transition-colors duration-300" href="https://linkedin.com/in/mithun-p2006/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Honors;
