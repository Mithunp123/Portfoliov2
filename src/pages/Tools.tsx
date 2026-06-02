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
    scope: 'Select range...',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent successfully to Mithun P.`);
    setFormData({ name: '', email: '', scope: 'Select range...', message: '' });
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
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Let's Work</h2>
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Together</h2>
        </div>

        <div className="glass-card p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f46c38]/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Your Name</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1d1b1a]/50 border border-white/10 rounded-2xl p-4 focus:ring-1 focus:ring-[#f46c38] focus:border-[#f46c38] outline-none text-white placeholder-gray-600 transition-all font-body-md" 
                  placeholder="Enter name" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Email Address</label>
                <input 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1d1b1a]/50 border border-white/10 rounded-2xl p-4 focus:ring-1 focus:ring-[#f46c38] focus:border-[#f46c38] outline-none text-white placeholder-gray-600 transition-all font-body-md" 
                  placeholder="name@domain.com" 
                  type="email" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Project Scope</label>
              <select 
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                className="w-full bg-[#151312] border border-white/10 rounded-2xl p-4 focus:ring-1 focus:ring-[#f46c38] focus:border-[#f46c38] outline-none text-white cursor-pointer transition-all font-body-md"
              >
                <option value="Select range...">Select range...</option>
                <option value="Freelance Consultation">Freelance Consultation</option>
                <option value="Full-stack Integration">Full-stack Integration</option>
                <option value="AI / ML Development">AI / ML Development</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Message</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#1d1b1a]/50 border border-white/10 rounded-2xl p-4 focus:ring-1 focus:ring-[#f46c38] focus:border-[#f46c38] outline-none text-white placeholder-gray-600 resize-none transition-all font-body-md" 
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

      {/* Footer Credits */}
      <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] gap-4">
        <p>© 2026 Mithun P. Crafted with React &amp; Tailwind CSS</p>
        <div className="flex space-x-8">
          <a className="hover:text-white transition-colors" href="https://github.com/Mithunp123/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-white transition-colors" href="https://linkedin.com/in/mithun-p-0100782a2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Tools;
