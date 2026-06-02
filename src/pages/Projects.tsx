import React, { useState } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string;
  status: string;
  image: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
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

  const projects: Project[] = [
    {
      title: "TrueSight AI",
      category: "AI / Cybercrime Forensics",
      description: "Deepfake video and image detection forensics system. Won 2nd Prize at Hackathon. Officially presented detection analytics to the Namakkal Police Cybercrime unit.",
      tech: "Python, PyTorch, Deep Learning, Flask",
      status: "Research & Award Winner",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
      liveUrl: "https://github.com/Mithunp123/"
    },
    {
      title: "Time2Order",
      category: "Full Stack / Operations",
      description: "Preorder management platform that simplifies sales cycles, integrates secure payment APIs, and secures dashboards for merchants. Active with live users.",
      tech: "Python, SQL, Cashfree Payment API",
      status: "Live at time2orders.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      liveUrl: "https://time2orders.com"
    },
    {
      title: "Time2Due",
      category: "Full Stack / Operations",
      description: "Operations and dues management platform for cable operators and businesses to track payments, secure logs, and manage offline ledgers with secure dashboard reporting.",
      tech: "Node.js, Express, PostgreSQL, React, Bootstrap",
      status: "Live at time2due.com",
      image: "/time2due.png",
      liveUrl: "https://time2due.com"
    },
    {
      title: "AutoRevives",
      category: "Full Stack / E-Commerce",
      description: "Comprehensive vehicle bidding and live auction system. Supports real-time listing updates, bid increments, and user notifications.",
      tech: "Python, Flask, SQL, HTML/CSS/JS, WebSockets",
      status: "Live at autorevives.com",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80",
      liveUrl: "https://autorevives.com"
    },
    {
      title: "Neurobloom",
      category: "AI / Game Development",
      description: "AI Mental Wellness Platform built during Nallas Hackathon. Detects user emotions via GPU-trained models, plays therapeutic Spotify playlists, and includes a Three.js relaxation world.",
      tech: "Python, Spotify API, Three.js, GPU Machine Learning",
      status: "Hackathon Showcase",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
    },
    {
      title: "Propic",
      category: "Full Stack / E-Commerce",
      description: "Specialized inventory-centric e-commerce platform for cleaning product supplies with dynamic cart systems and secure checkout pipelines.",
      tech: "Python, Flask, SQLite, HTML/CSS/JS",
      status: "Live at propic.in",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
      liveUrl: "https://propic.in"
    },
    {
      title: "Pashuthalam",
      category: "Healthcare Tech",
      description: "Smart India Hackathon project in veterinary care preventing animal drug overdosing. Integrates Twilio automated critical voice calls and SMS alerts.",
      tech: "Python, Flask, Twilio Voice API, SQLite",
      status: "National SIH Showcase",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=80"
    },
    {
      title: "Time2Bus",
      category: "IoT / Geolocation",
      description: "Driver tracking app and real-time passenger bus locator with dynamic geolocation markers, WebSocket updates, and arrival voice alerts.",
      tech: "IoT hardware, WebSockets, Python, React Native",
      status: "In Active Development",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80"
    }
  ];

  return (
    <div className="space-y-32">
      {/* Projects List Section */}
      <section id="projects">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">Featured</h2>
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter text-outline -mt-4">Projects</h2>
        </div>

        <div className="space-y-2">
          {projects.map((project, idx) => {
            const CardComponent = project.liveUrl ? 'a' : 'div';
            return (
              <CardComponent
                key={idx}
                href={project.liveUrl}
                target={project.liveUrl ? "_blank" : undefined}
                rel={project.liveUrl ? "noopener noreferrer" : undefined}
                className="flex items-center group py-6 border-b border-white/5 hover:border-white/10 transition-colors w-full gap-6 cursor-pointer"
              >
                {/* Left Rounded Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden shrink-0 border border-white/5 bg-neutral-900 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                {/* Center Title & Description */}
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#f46c38] transition-colors leading-tight mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-semibold">{project.category}</p>
                </div>
                {/* Right Orange Diagonal Arrow */}
                <div className="text-[#f46c38] shrink-0 mr-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </CardComponent>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Let's Work</h2>
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Together</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#998f8f]">Name</label>
              <input 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#1c1a19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#f46c38] transition-colors placeholder:text-[#998f8f]/30 font-body-md" 
                placeholder="Your Name" 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#998f8f]">Email</label>
              <input 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#1c1a19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#f46c38] transition-colors placeholder:text-[#998f8f]/30 font-body-md" 
                placeholder="Your@email.com" 
                type="email" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#998f8f]">Budget/Scope</label>
            <select 
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full bg-[#1c1a19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#f46c38] transition-colors appearance-none cursor-pointer font-body-md"
            >
              <option value="">Select...</option>
              <option value="freelance">Freelance Collaboration</option>
              <option value="fulltime">Full-time Roles</option>
              <option value="research">Academic / Research Partnerships</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#998f8f]">Message</label>
            <textarea 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#1c1a19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#f46c38] transition-colors placeholder:text-[#998f8f]/30 resize-none font-body-md" 
              placeholder="Describe your goals..." 
              rows={5} 
            />
          </div>
          <button 
            className="w-full bg-[#f46c38] hover:brightness-110 text-white font-bold py-5 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-[#f46c38]/20 uppercase tracking-widest text-xs" 
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] gap-4">
        <p>© 2026 Mithun P. Crafted with React &amp; Tailwind CSS</p>
        <div className="flex space-x-8">
          <a className="hover:text-white transition-colors" href="https://github.com/Mithunp123/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-white transition-colors" href="https://linkedin.com/in/mithun-p2006/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
