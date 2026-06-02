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
    budget: 'Select...',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', budget: 'Select...', message: '' });
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
          <h1 className="font-extrabold uppercase leading-[0.8] tracking-tighter text-white z-10 relative text-5xl md:text-8xl">
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
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#f46c38] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed line-clamp-3 mb-6 font-body-md">
                    {article.excerpt}
                  </p>
                </div>
                <span className="text-[#f46c38] material-symbols-outlined text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 mt-1">
                  north_east
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold tracking-wider">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <div className="mt-8 h-px w-full bg-white/10 group-hover:bg-[#f46c38]/20 transition-colors"></div>
            </article>
          ))}
        </div>
      </section>

      {/* Let's Work Together Form */}
      <section id="contact">
        <div className="flex flex-col mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-[0.8] tracking-tighter text-white z-10 relative">
            LET'S WORK
          </h2>
          <div className="text-outline text-5xl md:text-6xl font-black uppercase leading-[0.8] tracking-tighter opacity-40 mt-2">
            TOGETHER
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-[#998F8F] uppercase font-bold tracking-wider">Name</label>
            <input 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#211f1e] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[#f46c38] focus:ring-0 transition-colors outline-none font-body-md" 
              placeholder="Your Name" 
              type="text" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-[#998F8F] uppercase font-bold tracking-wider">Email</label>
            <input 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#211f1e] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[#f46c38] focus:ring-0 transition-colors outline-none font-body-md" 
              placeholder="Your@email.com" 
              type="email" 
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] text-[#998F8F] uppercase font-bold tracking-wider">Budget/Scope</label>
            <select 
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="bg-[#211f1e] border border-white/10 rounded-xl px-6 py-4 text-[#998F8F] focus:border-[#f46c38] focus:ring-0 transition-colors outline-none cursor-pointer appearance-none font-body-md"
            >
              <option value="Select...">Select...</option>
              <option value="Freelance Consultation">Freelance Consultation</option>
              <option value="Full-stack Integration">Full-stack Integration</option>
              <option value="AI / ML Development">AI / ML Development</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] text-[#998F8F] uppercase font-bold tracking-wider">Message</label>
            <textarea 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#211f1e] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[#f46c38] focus:ring-0 transition-colors outline-none resize-none font-body-md" 
              placeholder="Message" 
              rows={4} 
            />
          </div>
          <button 
            className="md:col-span-2 bg-[#f46c38] text-white font-bold py-5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#f46c38]/20 uppercase tracking-widest text-xs"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer Small */}
      <footer className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-[#998F8F] font-bold tracking-wider uppercase">
        <p>© 2026 Mithun P. Crafted with React &amp; Tailwind CSS</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="https://github.com/Mithunp123/" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a className="hover:text-white transition-colors" href="https://linkedin.com/in/mithun-p2006/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
