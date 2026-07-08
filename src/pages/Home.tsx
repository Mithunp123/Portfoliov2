import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

import LottieLoader from '../components/LottieLoader';
import GradientText from '../components/GradientText/GradientText';
import LightRays from '../components/LightRays';
import SkillsSection from '../components/SkillsSection';
import GitHubActivity from '../components/GitHubActivity';


interface SelectedWork {
  title: string;
  category: string;
  image: string;
  url: string;
  year: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const selectedWorks: SelectedWork[] = [
  {
    title: "AutoRevives",
    category: "Full Stack / E-Commerce",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
    url: "https://autorevives.com",
    year: "2026",
    tech: ["Python", "Flask", "SQL", "WebSockets"],
    metrics: [
      { label: "Auctions Hosted", value: "1.8K+" },
      { label: "Bids Placed", value: "35K+" },
      { label: "Sync Latency", value: "0.1s" }
    ]
  },
  {
    title: "Dakshaa",
    category: "Full Stack / Event Tech",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    url: "https://dakshaa.ksrct.ac.in",
    year: "2025",
    tech: ["Node.js", "React", "PostgreSQL", "Tailwind"],
    metrics: [
      { label: "Symposium Users", value: "10K+" },
      { label: "Page Load", value: "0.4s" },
      { label: "Registrations", value: "4.5K+" }
    ]
  },
  {
    title: "TrueSight AI",
    category: "AI / Cybercrime Forensics",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    url: "https://github.com/Mithunp123/",
    year: "2025",
    tech: ["Python", "PyTorch", "Flask", "Deep Learning"],
    metrics: [
      { label: "Model Accuracy", value: "98.4%" },
      { label: "Video Detections", value: "25K+" },
      { label: "Processing Speed", value: "45 FPS" }
    ]
  },
  {
    title: "Time2Order",
    category: "SaaS / Food Tech",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    url: "https://time2orders.com",
    year: "2024",
    tech: ["Python", "Flask", "SQL", "Cashfree"],
    metrics: [
      { label: "Orders Processed", value: "12K+" },
      { label: "Merchants Active", value: "15+" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    title: "Propic",
    category: "Full Stack / E-Commerce",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    url: "https://propic.in",
    year: "2024",
    tech: ["Python", "Flask", "SQLite", "Tailwind"],
    metrics: [
      { label: "Products Listed", value: "800+" },
      { label: "Checkout Time", value: "3 Mins" },
      { label: "Security sync", value: "100%" }
    ]
  }
];

const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * 460,
        y: Math.random() * 320,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
      });
    }

    const handleResize = () => {
      canvas.width = 460;
      canvas.height = 320;
    };
    handleResize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = canvas.width;
        if (p1.x > canvas.width) p1.x = 0;
        if (p1.y < 0) p1.y = canvas.height;
        if (p1.y > canvas.height) p1.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = 'rgba(139, 92, 246, 0.35)';
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-80 z-10" style={{ width: '100%', height: '100%' }} />;
};



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

const welcomeContainerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const welcomeChildVariants: any = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const welcomeBadgeVariants: any = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  

  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [12, -12]), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useTransform(mouseX, [-600, 600], [-12, 12]), { damping: 25, stiffness: 150 });
  const translateX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const translateY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xVal = e.clientX - rect.left - rect.width / 2;
    const yVal = e.clientY - rect.top - rect.height / 2;
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

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
      // Clear success/error message after 5 seconds
      setTimeout(() => setSubmitResult(''), 5000);
    }
  };

  return (
    <div className="space-y-32">
      {/* Dynamic ambient light rays behind the layout elements */}
      <div className="absolute top-0 left-0 right-0 h-[650px] pointer-events-none overflow-hidden z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
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

          {/* Software Engineer Identity Content - Rendered 1st on mobile, 2nd on desktop */}
          <div className="flex-1 w-full flex flex-col justify-between min-h-0 order-1 lg:order-2">
            <div>
              <div className="mb-8 space-y-4 -ml-6">
                {/* Mobile-only Welcome Intro with Staggered Mask Reveal Animation */}
                <motion.div 
                  variants={welcomeContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="block mb-6 px-6"
                >
                  {/* Badge Row (Slide-in) */}
                  <div className="overflow-hidden mb-2">
                    <motion.div 
                      variants={welcomeBadgeVariants}
                      className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#3b82f6]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
                      Hey,
                    </motion.div>
                  </div>

                  {/* Main Name Row (Staggered Word Mask-Reveal) */}
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] flex flex-wrap items-center gap-x-2.5 overflow-hidden py-1 leading-normal">
                    <span className="inline-block overflow-hidden py-0.5">
                      <motion.span variants={welcomeChildVariants} className="inline-block">
                        I'm
                      </motion.span>
                    </span>
                    <span className="inline-block overflow-hidden py-0.5">
                      <motion.span variants={welcomeChildVariants} className="inline-block font-black">
                        <GradientText
                          colors={["#3b82f6", "#06b6d4", "#3b82f6", "#06b6d4", "#3b82f6"]}
                          animationSpeed={4}
                          showBorder={false}
                          className="!m-0 !max-w-none !justify-start !rounded-none !bg-transparent !p-0 !cursor-default select-none font-black"
                        >
                          Mithun
                        </GradientText>
                      </motion.span>
                    </span>
                  </h1>
                </motion.div>
                <div className="w-fit border border-transparent hover:border-[var(--border-medium)] py-2 px-6 transition-all duration-300 cursor-default select-none rounded-none">
                  <h2 className="text-6xl md:text-8xl xl:text-9xl font-black uppercase leading-[0.9] tracking-tighter">
                    <GradientText
                      colors={["#3b82f6", "#06b6d4", "#3b82f6", "#06b6d4", "#3b82f6"]}
                      animationSpeed={4}
                      showBorder={false}
                      className="!m-0 !max-w-none !justify-start !rounded-none !bg-transparent !p-0 !cursor-default select-none"
                    >
                      Software
                    </GradientText>
                  </h2>
                </div>
                <div className="w-fit border border-transparent hover:border-[var(--border-medium)] py-2 px-6 transition-all duration-300 cursor-default select-none rounded-none">
                  <h2 className="text-6xl md:text-8xl xl:text-9xl font-black uppercase leading-[0.9] tracking-tighter">
                    <GradientText
                      colors={["#3b82f6", "#06b6d4", "#3b82f6", "#06b6d4", "#3b82f6"]}
                      animationSpeed={4}
                      showBorder={false}
                      className="!m-0 !max-w-none !justify-start !rounded-none !bg-transparent !p-0 !cursor-default select-none"
                    >
                      Engineer
                    </GradientText>
                  </h2>
                </div>
              </div>
              
              <div className="mb-12 space-y-5">
                <p className="text-[var(--text-secondary)] text-base xl:text-lg leading-relaxed font-body-md">
                  I build at the intersection of <span className="text-[var(--text-primary)] font-semibold">AI, Data Science, and Full Stack Engineering</span> — creating scalable web platforms, intelligent automation systems, and high-performance data solutions that solve real operational challenges.
                </p>
                <p className="text-[var(--text-secondary)] text-base xl:text-lg leading-relaxed font-body-md">
                  From AI-powered forensics presented to cybercrime units to full-stack SaaS ecosystems serving real merchants — I ship <span className="text-[var(--text-primary)] font-semibold">production-ready products</span> with clean engineering and modern architecture.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col items-center justify-center w-full gap-8 border-t border-[var(--border-subtle)] pt-10 pb-4">
              {/* Stats Block */}
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 sm:gap-x-12 shrink-0 text-center">
                <div className="flex flex-col items-center">
                  <div className="text-5xl xl:text-6xl font-black text-[var(--text-primary)] mb-1">3+</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#3b82f6] font-bold">Years Coding</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl xl:text-6xl font-black text-[var(--text-primary)] mb-1">12+</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#3b82f6] font-bold">Real Projects</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl xl:text-6xl font-black text-[var(--text-primary)] mb-1">4+</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#3b82f6] font-bold">Clients Served</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl xl:text-6xl font-black text-[var(--text-primary)] mb-1">10K+</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#3b82f6] font-bold leading-tight">
                    Users Reached <br />
                    <span className="text-[var(--text-muted)] font-mono text-[8px] normal-case tracking-normal">via event platform</span>
                  </div>
                </div>
              </div>

              {/* Mobile Social Links (visible only on mobile since sidebar is hidden) */}
              <div className="flex lg:hidden items-center justify-center gap-4">
                {/* GitHub */}
                <a 
                  href="https://github.com/Mithunp123/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-[var(--social-icon-border)] bg-[var(--social-icon-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center transition-all duration-300 hover:bg-[var(--border-medium)]"
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
                  className="w-12 h-12 rounded-xl border border-[var(--social-icon-border)] bg-[var(--social-icon-bg)] text-[var(--text-secondary)] hover:text-[#0077b5] flex items-center justify-center transition-all duration-300 hover:bg-[var(--border-medium)]"
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
                  className="w-12 h-12 rounded-xl border border-[var(--social-icon-border)] bg-[var(--social-icon-bg)] text-[var(--text-secondary)] hover:text-[#25d366] flex items-center justify-center transition-all duration-300 hover:bg-[var(--border-medium)]"
                  title="WhatsApp"
                >
                  <LottieLoader 
                    url="/lottie/Whatsapp.json" 
                    style={{ width: '28px', height: '28px' }} 
                    fallbackIcon="chat" 
                    fallbackColor="text-[#25d366]" 
                  />
                </a>
                {/* Download Resume (mobile) */}
                <a 
                  href="/resume.pdf" 
                  download
                  className="w-12 h-12 rounded-xl border border-[var(--social-icon-border)] bg-[var(--social-icon-bg)] text-[var(--text-secondary)] hover:text-[#3b82f6] flex items-center justify-center transition-all duration-300 hover:bg-[var(--border-medium)]"
                  title="Download Resume"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/tools" className="block group">
            <div className="bg-[#3b82f6] p-8 xl:p-10 rounded-[2rem] h-64 xl:h-72 flex flex-col justify-between overflow-hidden relative shadow-2xl shadow-[#3b82f6]/10 cursor-pointer">
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
                <div className="w-11 h-11 border border-white/40 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#3b82f6] transition-all duration-300">
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
              <div className="bg-[#3b82f6]/10 w-12 h-12 rounded-2xl flex items-center justify-center border border-[#3b82f6]/20">
                <span className="material-symbols-outlined text-[#3b82f6] text-2xl font-bold">terminal</span>
              </div>
              <div className="flex justify-between items-end relative z-10">
                <h3 className="text-2xl xl:text-3xl font-extrabold leading-none uppercase text-white">
                  Full Stack<br />Architecture
                </h3>
                <div className="w-11 h-11 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#3b82f6] group-hover:text-white transition-all group-hover:border-[#3b82f6] duration-300">
                  <span className="material-symbols-outlined text-xl">arrow_outward</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Honors H. Badge — Fixed vertical pill on right edge, clickable to /honors */}
      <Link to="/honors" className="fixed right-0 top-1/2 -translate-y-1/2 z-[20] hidden lg:flex flex-col items-center group">
        {/* Right border accent line */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-52 bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent rounded-full"></div>
        
        {/* The badge pill itself — touching the right edge */}
        <div className="bg-white text-black w-[52px] rounded-l-2xl flex flex-col items-center justify-between py-6 shadow-2xl border border-neutral-100 border-r-0 select-none font-sans mr-0 cursor-pointer group-hover:shadow-[#3b82f6]/20 group-hover:shadow-xl transition-all duration-300" style={{ height: '160px' }}>
          <span className="text-3xl font-extrabold tracking-tighter leading-none font-serif text-[#3b82f6]">H.</span>
          <span 
            style={{ writingMode: 'vertical-rl' }} 
            className="rotate-180 text-[10px] font-black uppercase tracking-[0.25em] text-neutral-800"
          >
            Honors
          </span>
        </div>
      </Link>

      {/* Selected Work Section */}
      <section id="projects" className="relative pt-6">
        {/* Title / Header capsule */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16 border-b border-white/[0.05] pb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
              Selected
            </h2>
            <div className="text-[#3b82f6] flex items-center justify-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 animate-[spin_12s_linear_infinite] text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-outline leading-none">
              Work
            </h2>
          </div>
          <Link 
            to="/projects" 
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] hover:text-white flex items-center gap-2 transition-colors group"
          >
            All Projects 
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        {/* Selected Work List Grid */}
        <div 
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setIsHovering(true)}
          onPointerLeave={() => setIsHovering(false)}
          className="space-y-0 relative z-20"
        >
          {selectedWorks.map((work, idx) => (
            <a 
              key={idx}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveIndex(idx)}
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 border-b border-white/[0.04] hover:bg-white/[0.01] px-4 sm:px-6 transition-all duration-500 relative"
            >
              {/* Left Column: Title & Category */}
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-secondary)] group-hover:text-white transition-colors duration-300 leading-tight">
                  {work.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] mt-1.5 block font-mono">
                  {work.category}
                </span>
              </div>

              {/* Right Column: Year */}
              <div className="flex items-center mt-4 lg:mt-0 text-right">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--text-muted)] font-bold block mb-0.5">Timeline</span>
                  <span className="text-sm font-mono text-white/40 group-hover:text-[#3b82f6] transition-colors duration-300">
                    {work.year}
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* Center Floating Card (Desktop only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-[50]">
            <motion.div
              style={{
                x: translateX,
                y: translateY,
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: 'preserve-3d',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: '-230px', // half of card width (460/2)
                marginTop: '-160px' // half of card height (320/2)
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovering ? 1 : 0, 
                scale: isHovering ? 1 : 0.8 
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-[460px] h-[320px] rounded-[2rem] border-2 border-[#3b82f6]/50 bg-[#08080a]/95 backdrop-blur-2xl shadow-[0_0_55px_rgba(59,130,246,0.25)] overflow-hidden flex flex-col justify-between p-6"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 border border-[#3b82f6]/20 rounded-[2rem] pointer-events-none z-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-[#06b6d4]/10 opacity-30 pointer-events-none" />

              {/* Neural Canvas particles */}
              <NeuralCanvas />

              {/* Backdrop Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={selectedWorks[activeIndex].image}
                  alt={selectedWorks[activeIndex].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.7] saturate-[0.85]"
                />
              </AnimatePresence>

              {/* Dark Gradient Overlay for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50 z-[5] pointer-events-none" />

              {/* Top Area: Tech Stack Badges */}
              <div className="relative z-20 flex flex-wrap gap-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08 }
                      }
                    }}
                    className="flex flex-wrap gap-1.5"
                  >
                    {selectedWorks[activeIndex].tech.map((t, tIdx) => (
                      <motion.span
                        key={tIdx}
                        variants={{
                          hidden: { opacity: 0, y: -10 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="text-[9px] font-mono tracking-wider font-bold uppercase bg-black/60 border border-white/10 px-2.5 py-1 rounded-full text-white/80"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center Area: Animated Magnetic View Button */}
              <div className="relative z-20 flex items-center justify-center flex-1">
                <motion.div 
                  animate={{ 
                    scale: isHovering ? 1.05 : 0.95,
                    boxShadow: isHovering ? "0 0 25px rgba(59,130,246,0.4)" : "0 0 0px rgba(0,0,0,0)"
                  }}
                  className="w-16 h-16 rounded-full bg-[#3b82f6] text-white flex flex-col items-center justify-center font-bold text-[10px] uppercase tracking-widest shadow-lg cursor-pointer"
                >
                  <span>View</span>
                  <span className="material-symbols-outlined text-sm leading-none mt-0.5">arrow_outward</span>
                </motion.div>
              </div>

              {/* Bottom Area: Metrics Grid */}
              <div className="relative z-20 border-t border-white/10 pt-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-3 gap-2"
                  >
                    {selectedWorks[activeIndex].metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-[8px] uppercase tracking-wider text-white/60 mb-0.5">{metric.label}</div>
                        <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">{metric.value}</div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout (lg:hidden) */}
        <div className="lg:hidden space-y-4 pt-6">
          {selectedWorks.map((work, idx) => (
            <a 
              key={idx} 
              href={work.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block glass-card p-5 rounded-[1.8rem] border border-white/[0.04] bg-[#0c0c0e]/80 shadow-md"
            >
              {/* Header: Title and year */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{work.title}</h3>
                  <span className="text-[9px] uppercase tracking-wider text-[var(--text-muted)] font-mono">{work.category}</span>
                </div>
                <span className="text-xs font-mono text-[#3b82f6] font-bold">{work.year}</span>
              </div>

              {/* Image preview (small size) */}
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 border border-white/5 relative">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Tech badges inline on image */}
                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  {work.tech.slice(0, 3).map((t, tIdx) => (
                    <span key={tIdx} className="text-[7.5px] font-mono tracking-wider uppercase bg-black/60 border border-white/10 px-2 py-0.5 rounded text-white/90">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                {work.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <div className="text-[7.5px] uppercase tracking-wider text-[var(--text-muted)] mb-0.5">{metric.label}</div>
                    <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">{metric.value}</div>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Core Technologies & Tools Preview */}
      <section id="tools">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">My</h2>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">Stack</h2>
          </div>
          <Link 
            to="/tools" 
            className="text-sm font-bold uppercase tracking-widest text-[#3b82f6] hover:text-white flex items-center gap-1.5 transition-colors group mb-1"
          >
            All Tech 
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <SkillsSection previewOnly={true} />
      </section>

      {/* My Journey — Uniform card height, professional tile design */}
      <section id="journey" className="relative py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-4">
            My Journey
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl mx-auto font-body-md leading-relaxed">
            A temporal mapping of engineering milestones, product launches, and the pursuit of artificial intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical central line (cyan/blue gradient) */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3b82f6] via-cyan-400 to-transparent"></div>

          <div className="space-y-12 relative z-10">
            {journeyEntries.map((entry, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={entry.year}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:items-center justify-between gap-8 lg:gap-0 relative`}
                >
                  {/* Timeline Center Dot */}
                  <div className="absolute left-[25px] lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-auto w-4 h-4 rounded-full border-4 border-[var(--journey-dot-border)] bg-[var(--text-primary)] ring-4 ring-[var(--journey-dot-ring)]"></div>
                  
                  {/* Side Label (Desktop only) */}
                  <div className={`hidden lg:block lg:w-[45%] ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#3b82f6] uppercase font-mono">{entry.sideLabel}</span>
                  </div>
                  
                  {/* Card */}
                  <div className={`w-full lg:w-[45%] ${isEven ? 'pl-16 lg:pl-12' : 'pl-16 lg:pr-12'}`}>
                    <div className="journey-card p-7 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative overflow-hidden transition-all duration-300 hover:border-[var(--accent-glow)] hover:shadow-2xl hover:shadow-[#3b82f6]/5 hover:-translate-y-1 group">
                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-3xl font-black text-[var(--text-primary)] opacity-10 font-mono">{entry.year}</span>
                          <span className="text-[9px] sm:text-[11.5px] font-sans font-medium normal-case tracking-normal text-[var(--text-primary)] border border-[#3b82f6] bg-[#3b82f6]/5 px-3 py-1 rounded-full shrink-0">{entry.badge}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 leading-snug">{entry.title}</h3>
                        <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed font-body-md line-clamp-3">
                          {entry.description}
                        </p>
                      </div>
                      
                      <div className="lg:hidden mt-4">
                        <span className="text-[9px] font-bold tracking-wider text-[#3b82f6] uppercase font-mono">{entry.sideLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2.5 text-xs text-[#3b82f6] font-bold uppercase tracking-[0.25em] mb-3">
              <span className="material-symbols-outlined text-sm shrink-0 select-none animate-pulse">work</span>
              <span>My Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">Work</h2>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter text-outline mt-1">History</h2>
          </div>
          <Link 
            to="/experience" 
            className="text-sm font-bold uppercase tracking-widest text-[#3b82f6] hover:text-white flex items-center gap-1.5 transition-colors group mb-1"
          >
            Full History 
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="space-y-12">
          {/* Gradix Technologies */}
          <div className="group py-6 border-b border-white/[0.04] transition-all duration-300">
            <div className="text-xs uppercase tracking-[0.15em] text-[#8a8a8a] font-bold mb-1">
              Gradix Technologies
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[var(--text-primary)] group-hover:text-[#3b82f6] transition-colors leading-none m-0">
                Web Developer <span className="text-[var(--text-muted)] font-semibold lowercase text-base sm:text-lg">(Intern)</span>
              </h3>
              <span className="text-xs font-mono text-[#5a5a5a] shrink-0 select-none">
                Mar 2026 – Present
              </span>
            </div>
          </div>

          {/* Dakshaa T26 */}
          <div className="group py-6 border-b border-white/[0.04] transition-all duration-300">
            <div className="text-xs uppercase tracking-[0.15em] text-[#8a8a8a] font-bold mb-1">
              Dakshaa T26 Symposium
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[var(--text-primary)] group-hover:text-[#3b82f6] transition-colors leading-none m-0">
                Backend Developer <span className="text-[var(--text-muted)] font-semibold lowercase text-base sm:text-lg">(Product Development)</span>
              </h3>
              <span className="text-xs font-mono text-[#5a5a5a] shrink-0 select-none">
                2025 – 2026
              </span>
            </div>
          </div>

          {/* Google */}
          <div className="group py-6 border-b border-[var(--border-subtle)] transition-all duration-300">
            <div className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] font-bold mb-1">
              Google
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors leading-none m-0">
                AI &amp; Machine Learning Intern <span className="text-[var(--text-muted)] font-semibold lowercase text-base sm:text-lg">(Internship)</span>
              </h3>
              <span className="text-xs font-mono text-[var(--text-dim)] shrink-0 select-none">
                Apr – Jun 2025
              </span>
            </div>
          </div>
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
            className="text-sm font-bold uppercase tracking-widest text-[#3b82f6] hover:text-white flex items-center gap-1.5 transition-colors group mb-1"
          >
            All Insights 
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="space-y-6">
          <Link to="/blog" className="block group">
            <article className="py-6 border-b border-white/5 hover:border-[#3b82f6] transition-colors cursor-pointer flex justify-between items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors leading-tight mb-3">
                  Deepfake Detection Research &amp; Presentation
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-4 font-body-md">
                  Presented advanced deepfake detection systems and forensic analytics to the Namakkal Police Cybercrime unit to prevent media manipulation.
                </p>
                <div className="flex items-center space-x-4 text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold">
                  <span>Presented in 2024</span>
                  <span className="w-1 h-1 bg-[#3b82f6] rounded-full"></span>
                  <span>Cybercrime Forensics</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[var(--text-dim)] group-hover:text-[#3b82f6] transition-all transform group-hover:rotate-45 text-xl shrink-0 mt-1">
                north_east
              </span>
            </article>
          </Link>

          <Link to="/blog" className="block group">
            <article className="py-6 border-b border-white/5 hover:border-[#3b82f6] transition-colors cursor-pointer flex justify-between items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors leading-tight mb-3">
                  Power BI Analytics Dashboard Design
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-4 font-body-md">
                  Interactive business intelligence dashboards bridging raw data with actionable insights for decision-making.
                </p>
                <div className="flex items-center space-x-4 text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold">
                  <span>Published 2025</span>
                  <span className="w-1 h-1 bg-[#3b82f6] rounded-full"></span>
                  <span>Data Visualization</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[var(--text-dim)] group-hover:text-[#3b82f6] transition-all transform group-hover:rotate-45 text-xl shrink-0 mt-1">
                north_east
              </span>
            </article>
          </Link>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <GitHubActivity />

      {/* Hobbies Section */}
      <section id="hobbies">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start group py-8 border-b border-[var(--border-subtle)] transition-all duration-300">
          {/* Left Column */}
          <div className="lg:col-span-3">
            <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-[2.2rem] uppercase tracking-tighter text-[var(--text-subtle)] group-hover:text-[var(--text-primary)] transition-colors select-none">
              Hobbies
            </h3>
          </div>
          {/* Right Column */}
          <div className="lg:col-span-9 flex flex-wrap gap-x-10 gap-y-6 items-center">
            {[
              { label: 'Listen Music', icon: '🎵' },
              { label: 'Story games', icon: '🎮' },
              { label: 'Gta 5 rp', icon: '🚗' },
              { label: 'Freefire Panel', icon: '🛡️' },
              { label: 'Fivem development', icon: '💻' },
              { label: 'Watching Webseries and movies', icon: '🎬' },
              { label: 'Travel', icon: '✈️' },
              { label: 'Explore New things for the life', icon: '💡' }
            ].map((hobby, hIdx) => (
              <div
                key={hIdx}
                className="flex items-center gap-3 cursor-pointer group/hobby transition-all hover:scale-105 duration-200"
              >
                <span className="text-2xl select-none" role="img" aria-label={hobby.label}>
                  {hobby.icon}
                </span>
                <span className="text-[var(--text-tertiary)] group-hover/hobby:text-[var(--text-primary)] font-bold text-base transition-colors duration-200">
                  {hobby.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Form — Let's Work Together (BELOW Blog) */}
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
          <a className="hover:text-[var(--text-primary)] transition-colors" href="https://linkedin.com/in/mithun-p2006/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
