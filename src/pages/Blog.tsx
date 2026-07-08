import React, { useState } from 'react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: React.ReactNode;
}

const Blog: React.FC = () => {
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Select range...',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult('');

    const formPayload = new FormData();
    formPayload.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE');
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("scope", formData.scope);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
      const data = await response.json();
      
      if (data.success) {
        setSubmitResult('Form Submitted Successfully!');
        setFormData({ name: '', email: '', scope: 'Select range...', message: '' });
      } else {
        setSubmitResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setSubmitResult('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitResult(''), 5000);
    }
  };

  const articles: Article[] = [
    {
      id: "time2order",
      title: "Time2Order: Architecting a SaaS Food Tech Platform",
      excerpt: "A deep dive into how I built a multi-tenant food ordering platform serving 15+ merchants and processing 12K+ orders using Python, Flask, and Cashfree.",
      date: "FEB 18, 2024",
      readTime: "10MIN READ",
      content: (
        <div className="space-y-8 text-[var(--text-secondary)] font-body-md leading-relaxed text-base lg:text-lg">
          <p className="text-xl text-[var(--text-primary)] font-semibold leading-snug">
            Time2Order isn't just another food delivery app. It's a B2B2C SaaS platform designed to empower local merchants by giving them complete control over their ordering ecosystem, bypassing the heavy commissions of traditional aggregators.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-[var(--border-subtle)] my-12">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">Architecture</div>
              <div className="font-mono text-[var(--text-primary)] text-sm">Flask / Python</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">Database</div>
              <div className="font-mono text-[var(--text-primary)] text-sm">PostgreSQL</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">Payments</div>
              <div className="font-mono text-[var(--text-primary)] text-sm">Cashfree API</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">Scale</div>
              <div className="font-mono text-[#3b82f6] text-sm font-bold">12K+ Orders</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">The Problem Statement</h3>
          <p>
            Local restaurants face a massive squeeze: aggregator platforms take 25-30% commissions, severing the direct relationship between the merchant and the consumer. The merchants don't own their data, and setting up an independent e-commerce layer is technically prohibitive.
          </p>

          <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">The Architecture</h3>
          <p>
            I architected Time2Order as a multi-tenant SaaS application. Using <strong>Flask</strong> and <strong>SQLAlchemy</strong>, the system dynamically isolates merchant data while maintaining a single unified codebase.
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 marker:text-[#3b82f6]">
            <li><strong>Dynamic Storefronts:</strong> Each merchant gets an auto-generated, mobile-optimized storefront.</li>
            <li><strong>Real-time Dashboard:</strong> A WebSocket-enabled control panel alerts kitchen staff the exact millisecond an order is placed.</li>
            <li><strong>Automated Ledger:</strong> Integrated with Cashfree Payment Gateway, splitting settlements directly into merchant accounts with zero manual reconciliation.</li>
          </ul>

          <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">Overcoming the Concurrency Hurdle</h3>
          <p>
            During our pilot phase with 3 busy campus cafeterias, peak lunch hours (12:30 PM - 1:15 PM) caused a massive spike in concurrent writes to the inventory tables. We faced database locking issues where orders were rejected due to transaction timeouts.
          </p>
          <div className="bg-[var(--bg-input)] border border-l-4 border-l-[#3b82f6] border-[var(--border-medium)] p-6 rounded-r-xl my-6">
            <p className="italic text-sm m-0">
              "By implementing Redis-based optimistic locking and migrating the core inventory decrement logic into atomic raw SQL transactions, we dropped order failure rates from 4.2% down to 0.01%."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">The Result</h3>
          <p>
            Today, Time2Order supports <strong>15+ active merchants</strong> and has successfully processed over <strong>12,000 orders</strong>, maintaining a 99.9% uptime SLA. It stands as a testament to the fact that clean, monolithic architectures written in Python can scale beautifully when engineered with care.
          </p>
        </div>
      )
    },
    {
      id: "deepfake",
      title: "Deepfake Detection Forensics & Presentation",
      excerpt: "Sharing insights from presenting deepfake video detection systems and media forensics directly to the Namakkal Police Cybercrime unit to mitigate synthetic media manipulation.",
      date: "OCT 14, 2024",
      readTime: "8MIN READ"
    },
    {
      id: "truesight",
      title: "TrueSight AI: 2nd Prize Winning Architecture",
      excerpt: "Designing multi-modal convolutional networks and GPU-trained models for real-time video spoof checks and face verification pipelines.",
      date: "AUG 28, 2024",
      readTime: "6MIN READ"
    },
    {
      id: "pashuthalam",
      title: "Pashuthalam Veterinary Care overdose prevention",
      excerpt: "A look inside our Smart India Hackathon veterinary care system preventing animal drug overdose by automating real-time critical Twilio voice call and SMS integrations.",
      date: "DEC 12, 2023",
      readTime: "7MIN READ"
    },
    {
      id: "fivem",
      title: "FiveM Scripting & Multiplayer server architecture",
      excerpt: "Exploring custom game server development and system integrations inside GTA V multiplayer using Lua/Python backend scripts and event handlers.",
      date: "FEB 6, 2023",
      readTime: "5MIN READ"
    },
    {
      id: "time2bus",
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
          {activeArticleId ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button 
                onClick={() => setActiveArticleId(null)}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[#3b82f6] transition-colors mb-12 group"
              >
                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to all articles
              </button>
              
              {articles.map((article) => {
                if (article.id !== activeArticleId) return null;
                return (
                  <div key={article.id}>
                    <div className="flex justify-between items-center text-[10px] text-[var(--text-muted)] font-bold tracking-wider mb-6">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-12 leading-tight tracking-tight">
                      {article.title}
                    </h2>
                    
                    {article.content ? (
                      article.content
                    ) : (
                      <div className="py-24 text-center border border-dashed border-[var(--border-medium)] rounded-3xl">
                        <span className="material-symbols-outlined text-4xl text-[var(--text-muted)] mb-4">construction</span>
                        <p className="text-[var(--text-secondary)] font-body-md">Full article content is being migrated.</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-12 lg:gap-16">
              {articles.map((article) => (
                <article 
                  key={article.id} 
                  onClick={() => setActiveArticleId(article.id)}
                  className="group relative cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="max-w-[85%]">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[#3b82f6] transition-colors mb-3 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-base leading-relaxed line-clamp-3 mb-6 font-body-md">
                        {article.excerpt}
                      </p>
                    </div>
                    <span className="text-[#3b82f6] material-symbols-outlined text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 mt-1">
                      north_east
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-[var(--text-muted)] font-bold tracking-wider">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="mt-8 h-px w-full bg-[var(--border-medium)] group-hover:bg-[#3b82f6]/20 transition-colors"></div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Form — Let's Work Together */}
      <section id="contact">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Let's Work</h2>
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Together</h2>
        </div>

        <div className="glass-card p-5 sm:p-8 lg:p-12 rounded-[1.8rem] sm:rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#3b82f6]/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold">Your Name</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-2xl p-4 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none text-[var(--text-primary)] placeholder-[var(--text-dim)] transition-all font-body-md" 
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
                  className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-2xl p-4 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none text-[var(--text-primary)] placeholder-[var(--text-dim)] transition-all font-body-md" 
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
                className="w-full bg-[var(--bg-input-solid)] border border-[var(--border-medium)] rounded-2xl p-4 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none text-[var(--text-primary)] cursor-pointer transition-all font-body-md"
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
                className="w-full bg-[var(--bg-input)] border border-[var(--border-medium)] rounded-2xl p-4 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none text-[var(--text-primary)] placeholder-[var(--text-dim)] resize-none transition-all font-body-md" 
                placeholder="Describe your project goals..." 
                rows={5}
              />
            </div>
            
            <button 
              className="w-full bg-[#3b82f6] text-white font-extrabold py-5 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-[0.3em] text-xs shadow-2xl shadow-[#3b82f6]/20 disabled:opacity-70 disabled:cursor-not-allowed" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitResult && (
              <div className={`text-center text-sm font-bold uppercase tracking-widest mt-4 ${submitResult.includes('Success') ? 'text-emerald-400' : 'text-red-400'}`}>
                {submitResult}
              </div>
            )}
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
