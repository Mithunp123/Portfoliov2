import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lanyard from '../components/Lanyard';
import LottieLoader from '../components/LottieLoader';
import GradientText from '../components/GradientText/GradientText';
import LightRays from '../components/LightRays';


interface MainProject {
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  status: string;
}

const mainProjects: MainProject[] = [
  {
    title: "TrueSight AI",
    category: "AI / Cybercrime Forensics",
    description: "Deepfake video and image detection forensics system. Officially presented to Namakkal Police Cybercrime unit.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
    url: "https://github.com/Mithunp123/",
    status: "🏆 2nd Prize Winner"
  },
  {
    title: "Time2Order",
    category: "Full Stack / Operations",
    description: "Preorder management platform that simplifies sales cycles and integrates secure payment APIs.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    url: "https://time2orders.com",
    status: "Live"
  },
  {
    title: "AutoRevives",
    category: "Full Stack / E-Commerce",
    description: "Comprehensive vehicle bidding and live auction system with real-time bidding functionalities.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80",
    url: "https://autorevives.com",
    status: "Live"
  }
];

interface PreviewTool {
  name: string;
  category: string;
  bgColor: string;
  iconUrl: string;
}

const previewTools: PreviewTool[] = [
  {
    name: "Python",
    category: "AI & Scripting",
    bgColor: "bg-amber-400/10",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "SQL Databases",
    category: "Analytics & Data",
    bgColor: "bg-blue-400/10",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "Flask",
    category: "Backend Dev",
    bgColor: "bg-gray-400/10",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
  },
  {
    name: "Power BI",
    category: "Dashboards & BI",
    bgColor: "bg-yellow-400/10",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
  },
  {
    name: "React & UI",
    category: "Frontend Dev",
    bgColor: "bg-cyan-400/10",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Tailwind CSS",
    category: "Modern CSS",
    bgColor: "bg-teal-400/10",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "JavaScript",
    category: "Logic & Code",
    bgColor: "bg-yellow-500/10",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Supabase",
    category: "Cloud Database",
    bgColor: "bg-emerald-400/10",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
  },
  {
    name: "Three.js",
    category: "3D Graphics",
    bgColor: "bg-white/10",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
  }
];

/* Journey timeline entries */
interface JourneyEntry {
  year: string;
  badge: string;
  sideLabel: string;
  title: string;
  description: string;
}

const journeyEntries: JourneyEntry[] = [
  {
    year: "2023",
    badge: "Genesis",
    sideLabel: "B.Tech Specialization",
    title: "AI & Data Science Specialized",
    description: "Specialized in statistical models and machine learning pipelines at KSRCT, engineering initial data structures and predictive analytical models."
  },
  {
    year: "2024",
    badge: "SaaS Launch",
    sideLabel: "Product Ecosystem",
    title: "SaaS Product Suite Launches",
    description: "Engineered and shipped three production SaaS platforms (Time2Order, Time2Due, Time2Farm), handling secure payment APIs, merchant logs, and offline ledgers."
  },
  {
    year: "2025",
    badge: "Recognition",
    sideLabel: "Industry Internship",
    title: "Gradix AI Internship & Awards",
    description: "Completed AI/ML engineering at Gradix. Won 2nd Prize globally for TrueSight AI deepfake forensics system, presenting detection tools to cybercrime units."
  },
  {
    year: "2026",
    badge: "Frontiers",
    sideLabel: "Advanced Systems",
    title: "Next-Gen Autonomous Horizons",
    description: "Architecting distributed multi-agent systems and high-scale neural models. Investigating state-of-the-art developments in vector search and cognitive pipelines."
  }
];

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Select range...',
    message: ''
  });

  const lanyardParentRef = useRef<HTMLDivElement | null>(null);
  const lanyardContainerRef = useRef<HTMLDivElement | null>(null);
  const [alignmentStyle, setAlignmentStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const alignLanyard = () => {
      if (window.innerWidth < 1024) {
        setAlignmentStyle({});
        return;
      }
      
      const homeLink = document.getElementById('navbar-home-link');
      const lanyardParent = lanyardParentRef.current;
      
      if (!homeLink || !lanyardParent) return;
      
      const homeRect = homeLink.getBoundingClientRect();
      const parentRect = lanyardParent.getBoundingClientRect();
      
      // Horizontal center of Home link relative to viewport
      const homeCenterX = homeRect.left + homeRect.width / 2;
      // Horizontal center of Lanyard Parent relative to viewport
      const parentCenterX = parentRect.left + parentRect.width / 2;
      
      const translateX = homeCenterX - parentCenterX;
      
      // Vertical translation to align top of Lanyard Canvas with Navbar Home icon bottom
      // Using an increased vertical overlap (28px) to pull the strap higher upwards
      const translateY = (homeRect.bottom - 28) - parentRect.top;
      
      setAlignmentStyle({
        transform: `translate(${translateX}px, ${translateY}px)`,
      });
    };

    // Run initial alignment
    alignLanyard();
    
    // Multiple timeouts to guarantee perfect alignment after fonts, images, and layout finish settling
    const timer1 = setTimeout(alignLanyard, 100);
    const timer2 = setTimeout(alignLanyard, 300);
    const timer3 = setTimeout(alignLanyard, 600);
    const timer4 = setTimeout(alignLanyard, 1000);

    window.addEventListener('resize', alignLanyard);
    window.addEventListener('scroll', alignLanyard);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener('resize', alignLanyard);
      window.removeEventListener('scroll', alignLanyard);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent successfully to Mithun P.`);
    setFormData({ name: '', email: '', scope: 'Select range...', message: '' });
  };

  return (
    <div className="space-y-32">
      {/* Dynamic ambient light rays above the navbar */}
      <div className="absolute top-0 left-0 right-0 h-[650px] pointer-events-none overflow-hidden z-[101]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f46c38"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Hero Section */}
      <section data-purpose="hero" className="pt-4 lg:pt-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-20">
          {/* Interactive 3D Lanyard Canvas (Floating seamlessly without container) */}
          <div 
            ref={lanyardParentRef}
            className="w-full lg:w-[550px] h-[680px] shrink-0 relative flex items-center justify-center"
          >
            <div 
              ref={lanyardContainerRef} 
              className="w-full h-full relative flex items-center justify-center transition-transform duration-100 ease-out"
              style={alignmentStyle}
            >
              <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
            </div>
          </div>

          {/* Software Engineer Identity Content */}
          <div className="flex-1 w-full flex flex-col justify-between min-h-[750px]">
            <div>
              <div className="mb-8 space-y-4 -ml-6">
                <div className="w-fit border border-transparent hover:border-white py-2 px-6 transition-all duration-300 cursor-default select-none rounded-none">
                  <h2 className="text-6xl md:text-8xl xl:text-9xl font-black uppercase leading-[0.9] tracking-tighter">
                    <GradientText
                      colors={["#f46c38", "#ffb347", "#f46c38", "#ffb347", "#f46c38"]}
                      animationSpeed={4}
                      showBorder={false}
                      className="!m-0 !max-w-none !justify-start !rounded-none !bg-transparent !p-0 !cursor-default select-none"
                    >
                      Software
                    </GradientText>
                  </h2>
                </div>
                <div className="w-fit border border-transparent hover:border-white py-2 px-6 transition-all duration-300 cursor-default select-none rounded-none">
                  <h2 className="text-6xl md:text-8xl xl:text-9xl font-black uppercase leading-[0.9] tracking-tighter">
                    <GradientText
                      colors={["#f46c38", "#ffb347", "#f46c38", "#ffb347", "#f46c38"]}
                      animationSpeed={4}
                      showBorder={false}
                      className="!m-0 !max-w-none !justify-start !rounded-none !bg-transparent !p-0 !cursor-default select-none"
                    >
                      Engineer
                    </GradientText>
                  </h2>
                </div>
              </div>
              
              <div className="mb-12 space-y-6">
                <p className="text-gray-400 text-base xl:text-lg leading-relaxed font-body-md text-justify">
                  I engineer high-impact digital experiences where Artificial Intelligence, Data Science, and Software Architecture converge. As a Full Stack Developer, I specialize in building scalable web applications, intelligent automation systems, and high-performance data platforms that solve real-world operational challenges.
                </p>
                <p className="text-gray-400 text-base xl:text-lg leading-relaxed font-body-md text-justify">
                  From developing AI-powered forensics systems presented to cybercrime units to architecting robust full-stack business ecosystems serving real merchants, I transform ambitious ideas into production-ready products. My approach merges clean, rigorous engineering with modern technologies to deliver systems that are reliable, secure, and built to scale.
                </p>
              </div>
            </div>

            {/* Stats & Resume Download */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-8 border-t border-white/5 pt-8">
              {/* Stats Block */}
              <div className="flex gap-12 shrink-0">
                <div>
                  <div className="text-5xl xl:text-6xl font-black text-white mb-1">+3</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#f46c38] font-bold">Years Coding</div>
                </div>
                <div>
                  <div className="text-5xl xl:text-6xl font-black text-white mb-1">+12</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#f46c38] font-bold">Real Projects</div>
                </div>
              </div>

              {/* Download Resume Button & Mobile Social Links */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="w-full sm:w-auto px-8 py-5 bg-white hover:bg-neutral-100 text-black rounded-2xl font-extrabold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 shadow-2xl transition-all hover:-translate-y-0.5 active:scale-95 group cursor-pointer border border-neutral-200"
                  title="Download Resume"
                >
                  <span className="material-symbols-outlined text-lg text-[#f46c38] group-hover:scale-110 transition-transform duration-300">download</span>
                  <span>Download Resume</span>
                </a>
                
                {/* Mobile Social Links Row (Hidden on Desktop, Visible on Mobile) */}
                <div className="flex lg:hidden items-center justify-center gap-4 mt-2 sm:mt-0">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/Mithunp123/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/mithun-p-0100782a2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-[#0077b5] flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/919443207221" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-[#25d366] flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                    title="WhatsApp"
                  >
                    <LottieLoader 
                      url="/lottie/Whatsapp.json" 
                      style={{ width: '28px', height: '28px' }} 
                      fallbackIcon="chat" 
                      fallbackColor="text-[#25d366]" 
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/tools" className="block group">
            <div className="bg-[#f46c38] p-8 xl:p-10 rounded-[2rem] h-64 xl:h-72 flex flex-col justify-between overflow-hidden relative shadow-2xl shadow-[#f46c38]/10 cursor-pointer">
              <div className="absolute -right-6 -top-6 opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                <svg className="w-48 h-48" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2L1 7l11 5 11-5-11-5zM1 12l11 5 11-5-11-5-11 5zm0 5l11 5 11-5-11-5-11 5z" />
                </svg>
              </div>
              <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined text-white text-2xl font-bold">auto_awesome</span>
              </div>
              <div className="flex justify-between items-end relative z-10">
                <h3 className="text-2xl xl:text-3xl font-extrabold leading-none uppercase text-white">
                  Data Science &amp;<br />AI Analytics
                </h3>
                <div className="w-11 h-11 border border-white/40 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#f46c38] transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">arrow_outward</span>
                </div>
              </div>
            </div>
          </Link>
          
          <Link to="/projects" className="block group">
            <div className="glass-card p-8 xl:p-10 rounded-[2rem] h-64 xl:h-72 flex flex-col justify-between overflow-hidden relative cursor-pointer">
              <div className="absolute -right-8 -top-8 opacity-5 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <span className="material-symbols-outlined text-[180px] text-white">code</span>
              </div>
              <div className="bg-[#f46c38]/10 w-12 h-12 rounded-2xl flex items-center justify-center border border-[#f46c38]/20">
                <span className="material-symbols-outlined text-[#f46c38] text-2xl font-bold">terminal</span>
              </div>
              <div className="flex justify-between items-end relative z-10">
                <h3 className="text-2xl xl:text-3xl font-extrabold leading-none uppercase text-white">
                  Full Stack<br />Architecture
                </h3>
                <div className="w-11 h-11 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#f46c38] group-hover:text-white transition-all group-hover:border-[#f46c38] duration-300">
                  <span className="material-symbols-outlined text-xl">arrow_outward</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Honors H. Badge — Fixed vertical pill on right edge, clickable to /honors */}
      <Link to="/honors" className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col items-center group">
        {/* Right border accent line */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-52 bg-gradient-to-b from-transparent via-[#f46c38] to-transparent rounded-full"></div>
        
        {/* The badge pill itself — touching the right edge */}
        <div className="bg-white text-black w-[52px] rounded-l-2xl flex flex-col items-center justify-between py-6 shadow-2xl border border-neutral-100 border-r-0 select-none font-sans mr-0 cursor-pointer group-hover:shadow-[#f46c38]/20 group-hover:shadow-xl transition-all duration-300" style={{ height: '160px' }}>
          <span className="text-3xl font-extrabold tracking-tighter leading-none font-serif text-[#f46c38]">H.</span>
          <span 
            style={{ writingMode: 'vertical-rl' }} 
            className="rotate-180 text-[10px] font-black uppercase tracking-[0.25em] text-neutral-800"
          >
            Honors
          </span>
        </div>
      </Link>

      {/* Featured Projects Preview */}
      <section id="projects">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Featured</h2>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Projects</h2>
          </div>
          <Link 
            to="/projects" 
            className="text-sm font-bold uppercase tracking-widest text-[#f46c38] hover:text-white flex items-center gap-1.5 transition-colors group mb-1"
          >
            All Projects 
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        
        <div className="space-y-2">
          {mainProjects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center group py-6 border-b border-white/5 hover:border-white/10 transition-colors w-full gap-6"
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
            </a>
          ))}
        </div>
      </section>

      {/* Core Technologies & Tools Preview */}
      <section id="tools">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Premium</h2>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Stack</h2>
          </div>
          <Link 
            to="/tools" 
            className="text-sm font-bold uppercase tracking-widest text-[#f46c38] hover:text-white flex items-center gap-1.5 transition-colors group mb-1"
          >
            All Tech 
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-12 gap-y-6 sm:gap-y-8 max-w-[1100px] mx-auto pl-4 sm:pl-8 lg:pl-16">
          {previewTools.map((tool, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 sm:gap-5 cursor-pointer transition-all duration-300 group py-3 sm:py-5 hover:translate-x-2"
            >
              <div className="w-16 h-16 sm:w-22 sm:h-22 bg-white rounded-2xl sm:rounded-[1.75rem] flex items-center justify-center shrink-0 shadow-xl p-3 sm:p-4.5">
                <img 
                  src={tool.iconUrl} 
                  alt={tool.name} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div>
                <div className="text-base sm:text-2xl font-black text-white leading-tight group-hover:text-[#f46c38] transition-colors">{tool.name}</div>
                <div className="text-[10px] sm:text-xs text-[#8a8a8a] font-bold leading-none mt-1 sm:mt-1.5">{tool.category}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My Journey — Uniform card height, professional tile design */}
      <section id="journey" className="relative py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-body-md leading-relaxed">
            A temporal mapping of engineering milestones, product launches, and the pursuit of artificial intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical central line (cyan/orange gradient) */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f46c38] via-cyan-400 to-transparent"></div>

          <div className="space-y-12 relative z-10">
            {journeyEntries.map((entry, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={entry.year}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:items-center justify-between gap-8 lg:gap-0 relative`}
                >
                  {/* Timeline Center Dot */}
                  <div className="absolute left-[25px] lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-auto w-4 h-4 rounded-full border-4 border-[#0c0c0c] bg-white ring-4 ring-[#f46c38]/30"></div>
                  
                  {/* Side Label (Desktop only) */}
                  <div className={`hidden lg:block lg:w-[45%] ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#f46c38] uppercase font-mono">{entry.sideLabel}</span>
                  </div>
                  
                  {/* Card */}
                  <div className={`w-full lg:w-[45%] ${isEven ? 'pl-16 lg:pl-12' : 'pl-16 lg:pr-12'}`}>
                    <div className="journey-card p-7 rounded-[1.5rem] border border-white/[0.06] bg-[#121212] relative overflow-hidden transition-all duration-300 hover:border-[#f46c38]/30 hover:shadow-2xl hover:shadow-[#f46c38]/5 hover:-translate-y-1 group">
                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f46c38]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-3xl font-black text-white/10 font-mono">{entry.year}</span>
                          <span className="text-[9px] font-bold tracking-widest text-white uppercase font-mono border border-[#f46c38] bg-[#f46c38]/5 px-3 py-1 rounded-full shrink-0">{entry.badge}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 leading-snug">{entry.title}</h3>
                        <p className="text-gray-400 text-[13px] leading-relaxed font-body-md line-clamp-3">
                          {entry.description}
                        </p>
                      </div>
                      
                      <div className="lg:hidden mt-4">
                        <span className="text-[9px] font-bold tracking-wider text-[#f46c38] uppercase font-mono">{entry.sideLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Completed Section — Two Internships */}
      <section id="internship" className="relative">
        <div className="mb-10">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Internship</h2>
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Completed</h2>
        </div>

        <div className="border-t border-white/10 mt-8 divide-y divide-white/10">
          {/* Google — AI & Machine Learning */}
          <article className="py-10 relative group transition-colors duration-500 hover:bg-white/[0.01] px-4 rounded-xl">
            {/* Content Area */}
            <div className="space-y-3 w-full">
              {/* Header Row: Title & Arrow */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#f46c38] transition-colors duration-300 leading-tight">
                  AI & Machine Learning Internship
                </h3>
                <span className="material-symbols-outlined text-gray-600 group-hover:text-[#f46c38] transition-colors duration-300 transform group-hover:rotate-45 text-lg shrink-0 mt-1">
                  north_east
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl font-body-md font-medium group-hover:text-gray-300 transition-colors duration-500">
                Completed a 10-week intensive AI & Machine Learning internship at Google, working on production neural network architectures, model optimization, and deploying inference pipelines for real-world applications.
              </p>

              {/* Footer Info Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                  <span>Google</span>
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                  <span>Virtual</span>
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                  <span>Apr – Jun 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-mono tracking-[0.2em] bg-transparent border border-[#f46c38] px-3 py-1.5 rounded-full shrink-0">10 weeks</span>
                  <span className="text-white font-mono tracking-[0.2em] bg-transparent border border-emerald-400 px-3 py-1.5 rounded-full shrink-0">Completed</span>
                </div>
              </div>
            </div>
          </article>

          {/* Gradix — Full Stack Web Development */}
          <article className="py-10 relative group transition-colors duration-500 hover:bg-white/[0.01] px-4 rounded-xl">
            {/* Content Area */}
            <div className="space-y-3 w-full">
              {/* Header Row: Title & Arrow */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#f46c38] transition-colors duration-300 leading-tight">
                  Web Development Intern
                </h3>
                <span className="material-symbols-outlined text-gray-600 group-hover:text-[#f46c38] transition-colors duration-300 transform group-hover:rotate-45 text-lg shrink-0 mt-1">
                  north_east
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl font-body-md font-medium group-hover:text-gray-300 transition-colors duration-500">
                Contributing directly to live product modules at Gradix Technologies, building scalable full-stack web applications and gaining hands-on industry experience with the development team.
              </p>

              {/* Footer Info Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                  <span>Gradix Technologies</span>
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                  <span>On-site • 3 Months</span>
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                  <span>Mar – Jun 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-mono tracking-[0.2em] bg-transparent border border-cyan-400 px-3 py-1.5 rounded-full shrink-0">3 Months</span>
                  <span className="text-white font-mono tracking-[0.2em] bg-transparent border border-emerald-400 px-3 py-1.5 rounded-full shrink-0">Completed</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Blog / Deep Dive Section — ABOVE Let's Work Together */}
      <section id="blog">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Academic &amp;</h2>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Research</h2>
          </div>
          <Link 
            to="/blog" 
            className="text-sm font-bold uppercase tracking-widest text-[#f46c38] hover:text-white flex items-center gap-1.5 transition-colors group mb-1"
          >
            All Insights 
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="space-y-6">
          <Link to="/blog" className="block group">
            <article className="py-6 border-b border-white/5 hover:border-[#f46c38] transition-colors cursor-pointer flex justify-between items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#f46c38] transition-colors leading-tight mb-3">
                  Deepfake Detection Research &amp; Presentation
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-4 font-body-md">
                  Presented advanced deepfake detection systems and forensic analytics to the Namakkal Police Cybercrime unit to prevent media manipulation.
                </p>
                <div className="flex items-center space-x-4 text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                  <span>Presented in 2024</span>
                  <span className="w-1 h-1 bg-[#f46c38] rounded-full"></span>
                  <span>Cybercrime Forensics</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-600 group-hover:text-[#f46c38] transition-all transform group-hover:rotate-45 text-xl shrink-0 mt-1">
                north_east
              </span>
            </article>
          </Link>

          <Link to="/blog" className="block group">
            <article className="py-6 border-b border-white/5 hover:border-[#f46c38] transition-colors cursor-pointer flex justify-between items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#f46c38] transition-colors leading-tight mb-3">
                  Power BI Analytics Dashboard Design
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-4 font-body-md">
                  Interactive business intelligence dashboards bridging raw data with actionable insights for decision-making.
                </p>
                <div className="flex items-center space-x-4 text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                  <span>Published 2025</span>
                  <span className="w-1 h-1 bg-[#f46c38] rounded-full"></span>
                  <span>Data Visualization</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-600 group-hover:text-[#f46c38] transition-all transform group-hover:rotate-45 text-xl shrink-0 mt-1">
                north_east
              </span>
            </article>
          </Link>
        </div>
      </section>

      {/* Contact Form — Let's Work Together (BELOW Blog) */}
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

export default Home;
