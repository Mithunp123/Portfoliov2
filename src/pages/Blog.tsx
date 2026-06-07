import React, { useState } from 'react';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Select range...',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent successfully to Mithun P.`);
    setFormData({ name: '', email: '', scope: 'Select range...', message: '' });
  };

  const articles: Article[] = [
    {
      title: "Deepfake Detection Forensics & Presentation",
      excerpt: "Sharing insights from presenting deepfake video detection systems and media forensics directly to the Namakkal Police Cybercrime unit to mitigate synthetic media manipulation.",
      date: "OCT 14, 2024",
      readTime: "8MIN READ"
    },
    {
      title: "TrueSight AI: 2nd Prize Winning Architecture",
      excerpt: "Designing multi-modal convolutional networks and GPU-trained models for real-time video spoof checks and face verification pipelines.",
      date: "AUG 28, 2024",
      readTime: "6MIN READ"
    },
    {
      title: "Pashuthalam Veterinary Care overdose prevention",
      excerpt: "A look inside our Smart India Hackathon veterinary care system preventing animal drug overdose by automating real-time critical Twilio voice call and SMS integrations.",
      date: "DEC 12, 2023",
      readTime: "7MIN READ"
    },
    {
      title: "FiveM Scripting & Multiplayer server architecture",
      excerpt: "Exploring custom game server development and system integrations inside GTA V multiplayer using Lua/Python backend scripts and event handlers.",
      date: "FEB 6, 2023",
      readTime: "5MIN READ"
    },
    {
      title: "Time2Bus: IoT Geolocation Tracking Systems",
      excerpt: "Building passenger bus locators and driver trackers using IoT hardware, passive geolocation APIs, and WebSockets for fluid map updates.",
      date: "NOV 12, 2022",
      readTime: "6MIN READ"
    }
  ];

  return (
    <div className="space-y-32">
      {/* Blog List Section */}
      <section id="blog">
        <div className="relative mb-24 flex flex-col">
          <h1 className="font-extrabold uppercase leading-[0.8] tracking-tighter text-[var(--text-primary)] z-10 relative text-5xl md:text-8xl">
            INSIGHTS &amp;
          </h1>
          <div className="text-outline font-extrabold uppercase leading-[0.8] tracking-tighter opacity-40 text-5xl md:text-8xl mt-2">
            RESEARCH
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {articles.map((article, idx) => (
            <article key={idx} className="group relative cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="max-w-[85%]">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[#f46c38] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed line-clamp-3 mb-6 font-body-md">
                    {article.excerpt}
                  </p>
                </div>
                <span className="text-[#f46c38] material-symbols-outlined text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 mt-1">
                  north_east
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-[var(--text-muted)] font-bold tracking-wider">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <div className="mt-8 h-px w-full bg-[var(--border-medium)] group-hover:bg-[#f46c38]/20 transition-colors"></div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Form — Let's Work Together */}
      <section id="contact">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Let's Work</h2>
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Together</h2>
        </div>

        <div className="glass-card p-5 sm:p-8 lg:p-12 rounded-[1.8rem] sm:rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f46c38]/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold">Your Name</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-2xl p-4 focus:ring-1 focus:ring-[#f46c38] focus:border-[#f46c38] outline-none text-[var(--text-primary)] placeholder-[var(--text-dim)] transition-all font-body-md" 
                  placeholder="Enter name" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold">Email Address</label>
                <input 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-2xl p-4 focus:ring-1 focus:ring-[#f46c38] focus:border-[#f46c38] outline-none text-[var(--text-primary)] placeholder-[var(--text-dim)] transition-all font-body-md" 
                  placeholder="name@domain.com" 
                  type="email" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold">Project Scope</label>
              <select 
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                className="w-full bg-[var(--bg-input-solid)] border border-[var(--border-medium)] rounded-2xl p-4 focus:ring-1 focus:ring-[#f46c38] focus:border-[#f46c38] outline-none text-[var(--text-primary)] cursor-pointer transition-all font-body-md"
              >
                <option value="Select range...">Select range...</option>
                <option value="Freelance Consultation">Freelance Consultation</option>
                <option value="Full-stack Integration">Full-stack Integration</option>
                <option value="AI / ML Development">AI / ML Development</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold">Message</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-2xl p-4 focus:ring-1 focus:ring-[#f46c38] focus:border-[#f46c38] outline-none text-[var(--text-primary)] placeholder-[var(--text-dim)] resize-none transition-all font-body-md" 
                placeholder="Describe your project goals..." 
                rows={5}
              />
            </div>
            
            <button 
              className="w-full bg-[#f46c38] text-white font-extrabold py-5 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-[0.3em] text-xs shadow-2xl shadow-[#f46c38]/20" 
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center text-[var(--text-dim)] text-[10px] font-bold uppercase tracking-[0.2em] gap-4">
        <p>© 2026 Mithun P. Crafted with React &amp; Tailwind CSS</p>
        <div className="flex space-x-8">
          <a className="hover:text-[var(--text-primary)] transition-colors" href="https://github.com/Mithunp123/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-[var(--text-primary)] transition-colors" href="https://linkedin.com/in/mithun-p-0100782a2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
