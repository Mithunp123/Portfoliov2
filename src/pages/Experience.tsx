import React from 'react';

interface WorkExperience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  type: string;
  bullets: string[];
}

const Experience: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      role: 'Web Developer',
      company: 'Gradix Technologies',
      companyUrl: 'https://gradixtech.com/',
      period: 'Mar 2026 – Present',
      type: 'Intern',
      bullets: [
        'Engineered a full-stack event management web app built with React and Supabase, handling real-time registrations under peak traffic spikes with zero downtime.',
        'Integrated Razorpay payment gateway enabling secure transactions for 500+ event registrations in a live production environment.',
        'Built 3+ production features for the platform, serving 2,000+ registered users, collaborating with the team to deliver responsive, high-performance UI components.'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'Dakshaa T26 — National-Level Technical Symposium',
      companyUrl: 'https://dakshaa.ksrct.ac.in',
      period: '2025 – 2026',
      type: 'Product Development',
      bullets: [
        'Developed a full-stack web application for a national-level technical symposium to digitally manage 10,000+ users and event operations end-to-end.',
        'Built a high-performance, responsive frontend using React, delivering a seamless registration and event experience across all devices.',
        'Engineered robust backend services with Express.js and RESTful APIs to handle concurrent user loads during peak registration traffic with zero downtime.',
        'Implemented Supabase for secure database management, real-time data sync, and user authentication across the platform.',
        'Integrated the payment gateway to enable smooth online registration and transaction processing, handling high-volume payment flows with real-time reconciliation.',
        'Deployed the application on Cloudflare (Frontend) and a VPS server (Backend) ensuring fast global delivery, high availability, and production-grade reliability.'
      ]
    }
  ];

  return (
    <div className="space-y-24">
      {/* Header Section */}
      <div>
        <div className="flex items-center gap-2.5 text-xs text-[#f46c38] font-bold uppercase tracking-[0.25em] mb-4">
          <span className="material-symbols-outlined text-sm shrink-0 select-none animate-pulse">work</span>
          <span>My Experience</span>
        </div>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none m-0">
          Work
        </h2>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-outline -mt-2">
          History
        </h2>
      </div>

      {/* Experience List Container */}
      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="group py-8 border-b border-[var(--border-subtle)] transition-all duration-300"
          >
            {/* Company Name */}
            <div className="flex items-center gap-3 mb-1">
              <a 
                href={exp.companyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-[var(--text-brand-gray)] hover:text-[var(--text-primary)] transition-colors font-bold flex items-center gap-1"
              >
                {exp.company}
                <span className="material-symbols-outlined text-[10px] transform group-hover:translate-x-[2px] transition-transform">north_east</span>
              </a>
            </div>

            {/* Job Title / Role */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-[var(--text-primary)] group-hover:text-[#f46c38] transition-colors leading-none m-0">
              {exp.role} <span className="text-[var(--text-muted)] font-semibold lowercase text-xl sm:text-2xl">({exp.type})</span>
            </h3>

            {/* Duration Period */}
            <div className="text-sm font-mono text-[var(--text-subtle)] group-hover:text-neutral-400 transition-colors mt-2 select-none">
              {exp.period}
            </div>

            {/* Bullet Points */}
            <ul className="list-disc pl-5 space-y-3 mt-6 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-4xl font-body-md font-medium">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="hover:text-[var(--text-primary)] transition-colors duration-200">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
