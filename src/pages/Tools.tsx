import React, { useState } from 'react';

interface Tool {
  name: string;
  category: string;
  bgColor: string;
  iconUrl: string;
}

const Tools: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', budget: '', message: '' });
  };

  const tools: Tool[] = [
    {
      name: "Python",
      category: "AI, Machine Learning, & Scripting",
      bgColor: "bg-amber-400/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "SQL (MySQL & Postgres)",
      category: "Database Modeling & Optimization",
      bgColor: "bg-blue-400/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "Power BI",
      category: "Data Visualization & Dashboards",
      bgColor: "bg-yellow-400/10",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
    },
    {
      name: "React & React Native",
      category: "Full Stack UI Frameworks",
      bgColor: "bg-cyan-400/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "JavaScript",
      category: "Frontend/Backend Logic",
      bgColor: "bg-yellow-500/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "Flask",
      category: "Python Web Framework",
      bgColor: "bg-gray-400/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
    },
    {
      name: "Tailwind CSS",
      category: "Modern Utility-First Styles",
      bgColor: "bg-teal-400/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      name: "Three.js",
      category: "3D & WebGL Graphics",
      bgColor: "bg-white/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
    },
    {
      name: "Java",
      category: "Object-Oriented Architecture",
      bgColor: "bg-red-400/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "Git & GitHub",
      category: "Version Control & Collaboration",
      bgColor: "bg-orange-400/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "Supabase",
      category: "Backend-as-a-Service & Auth",
      bgColor: "bg-emerald-400/10",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
    }
  ];

  return (
    <div className="space-y-32">
      {/* Premium Tools Section */}
      <section id="tools">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none m-0">
            Technical
          </h2>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-outline -mt-2">
            Skills
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 cursor-pointer transition-all duration-300 group py-4 hover:translate-x-1 animate-fade-in"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg p-3">
                <img 
                  src={tool.iconUrl} 
                  alt={tool.name} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#f46c38] transition-colors leading-snug">{tool.name}</h3>
                <p className="text-[#8a8a8a] text-sm font-medium leading-none mt-0.5">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section id="contact">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Let's Work</h2>
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Together</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Field */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-onyx-text-dim" htmlFor="name">Name</label>
              <input 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-transparent rounded-xl px-5 py-4 text-white placeholder-onyx-text-dim/40 form-input-focus transition-all bg-[#111] border border-white/5 focus:outline-none focus:border-[#f46c38] font-body-md" 
                id="name" 
                placeholder="Your Name" 
                type="text" 
              />
            </div>
            {/* Email Field */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-onyx-text-dim" htmlFor="email">Email</label>
              <input 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-transparent rounded-xl px-5 py-4 text-white placeholder-onyx-text-dim/40 form-input-focus transition-all bg-[#111] border border-white/5 focus:outline-none focus:border-[#f46c38] font-body-md" 
                id="email" 
                placeholder="Your@email.com" 
                type="email" 
              />
            </div>
          </div>
          {/* Budget Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-onyx-text-dim" htmlFor="budget">Budget/Scope</label>
            <div className="relative">
              <select 
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full border-transparent rounded-xl px-5 py-4 text-white appearance-none cursor-pointer form-input-focus transition-all bg-[#111] border border-white/5 focus:outline-none focus:border-[#f46c38] font-body-md" 
                id="budget"
              >
                <option value="">Select...</option>
                <option value="freelance">Freelance Collaboration</option>
                <option value="fulltime">Full-time Roles</option>
                <option value="research">Academic / Research Partnerships</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-onyx-text-dim">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
          {/* Message Field */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-onyx-text-dim" htmlFor="message">Message</label>
            <textarea 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-transparent rounded-xl px-5 py-4 text-white placeholder-onyx-text-dim/40 form-input-focus transition-all resize-none bg-[#111] border border-white/5 focus:outline-none focus:border-[#f46c38] font-body-md" 
              id="message" 
              placeholder="Message" 
              rows={5} 
            />
          </div>
          {/* Submit Button */}
          <button 
            className="w-full bg-[#f46c38] hover:bg-[#e05a2d] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#f46c38]/20 active:scale-[0.98] uppercase tracking-widest text-xs" 
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer Credits */}
      <footer className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-onyx-text-dim gap-4 mt-20 font-bold uppercase tracking-widest text-[10px]">
        <p>© 2026 Mithun P. Crafted with React &amp; Tailwind CSS</p>
        <div className="flex space-x-8">
          <a className="hover:text-white transition-colors" href="https://github.com/Mithunp123/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-white transition-colors" href="https://linkedin.com/in/mithun-p2006/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Tools;
