import React from 'react';
import { Link } from 'react-router-dom';

interface Skill {
  name: string;
  iconUrl?: string;
  iconSvg?: React.ReactNode;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC<{ previewOnly?: boolean }> = ({ previewOnly = false }) => {
  const categories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend',
      skills: [
        {
          name: 'JavaScript',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
          name: 'TypeScript',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
          name: 'React',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'React Native',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'Next.js',
          iconSvg: (
            <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current text-[var(--text-primary)] shrink-0">
              <path d="M90 0a90 90 0 1090 90A90 90 0 0090 0zm37.5 138.8L93 84v42.8H81.8V60h11.2l33.8 53.6V60h11.2v78.8zm-26.6-42l-5.3-8.2-11.8 19 17.1-10.8z"/>
            </svg>
          )
        },
        {
          name: 'Redux',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
        },
        {
          name: 'Tailwind CSS',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
          name: 'GSAP',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#88ce02] shrink-0">
              <path d="M11.5 22C5.7 22 1 17.3 1 11.5S5.7 1 11.5 1 22 5.7 22 11.5 17.3 22 11.5 22zm0-19.8C6.3 2.2 2.2 6.3 2.2 11.5S6.3 20.8 11.5 20.8s9.3-4.1 9.3-9.3S16.7 2.2 11.5 2.2z"/>
              <path d="M12.5 5.5l-6 7.5h5v5.5l6-7.5h-5z"/>
            </svg>
          )
        },
        {
          name: 'Framer Motion',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current shrink-0">
              <path d="M12 0L24 12H12L0 24V12H12L24 0z" fill="url(#framer-grad)"/>
              <defs>
                <linearGradient id="framer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff007f" />
                  <stop offset="100%" stopColor="#7f00ff" />
                </linearGradient>
              </defs>
            </svg>
          )
        },
        {
          name: 'Sass',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
        },
        {
          name: 'Bootstrap',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
        },
        {
          name: 'HTML / CSS',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      skills: [
        {
          name: 'Node.js',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
          name: 'NestJS',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#ea2845] shrink-0">
              <path d="M12.062.01L1.22 3.17c-.48.14-.82.58-.82 1.08v9.98c0 5.48 4.24 10.3 11.23 11.23.23.03.47.03.7 0 6.99-.93 11.23-5.75 11.23-11.23V4.25c0-.5-.34-.94-.82-1.08L12.062.01zm4.18 16.59l-4.18-2.61-4.18 2.61 1.08-4.83-3.69-3.21 4.95-.41 1.84-4.59 1.84 4.59 4.95.41-3.69 3.21 1.08 4.83z"/>
            </svg>
          )
        },
        {
          name: 'Express.js',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[var(--text-primary)] shrink-0 font-bold">
              <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontFamily="sans-serif">ex</text>
            </svg>
          )
        },
        {
          name: 'Python',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
          name: 'Flask',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 text-gray-300 shrink-0" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12M9 3v6l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3" />
              <path d="M6 14h12" />
            </svg>
          )
        },
        {
          name: 'Java',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        }
      ]
    },
    {
      id: 'database',
      title: 'Database',
      skills: [
        {
          name: 'MySQL',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
          name: 'PostgreSQL',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
          name: 'MongoDB',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },

        {
          name: 'Supabase',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'
        },
        {
          name: 'Firebase',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
        }
      ]
    },
    {
      id: 'cloud_devops',
      title: 'Tools',
      skills: [
        {
          name: 'Git',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
          name: 'GitHub',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[var(--text-primary)] shrink-0">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          )
        },
 
        {
          name: 'Vercel',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-[var(--text-primary)] shrink-0">
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          )
        },
        {
          name: 'Cloudflare',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg'
        },
        {
          name: 'VPS',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 shrink-0 text-[var(--text-secondary)]">
              <rect x="2" y="3" width="20" height="6" rx="2" />
              <rect x="2" y="15" width="20" height="6" rx="2" />
              <circle cx="6" cy="6" r="1" fill="currentColor" />
              <circle cx="6" cy="18" r="1" fill="currentColor" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'ai_ml',
      title: 'AI / ML',
      skills: [
        {
          name: 'PyTorch',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
        },
        {
          name: 'OpenCV',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg'
        },
        {
          name: 'Roboflow',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 shrink-0 text-pink-400">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          name: 'Hugging Face',
          iconSvg: <span className="text-sm shrink-0 select-none">🤗</span>
        },
        {
          name: 'LangChain',
          iconSvg: <span className="text-sm shrink-0 select-none">🦜</span>
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      skills: [
        {
          name: 'WhatsApp CRM',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#25D366] shrink-0">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.16 1.455 4.85 1.458 5.435 0 9.858-4.42 9.861-9.864.002-2.637-1.023-5.116-2.884-6.978C16.612 1.908 14.13 .882 11.49.882c-5.444 0-9.868 4.42-9.873 9.863-.002 1.712.447 3.382 1.302 4.887L1.879 21.8l6.468-1.696z" />
              <path d="M16.486 13.82c-.27-.135-1.597-.788-1.846-.878-.25-.09-.43-.135-.61.135-.18.27-.697.878-.853 1.058-.157.18-.314.202-.584.067-.27-.135-1.14-.42-2.17-1.34-.8-0.714-1.34-1.598-1.5-1.868-.156-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.023-.472-.067-.135-.61-1.467-.835-2.012-.22-.53-.44-.457-.61-.466-.157-.008-.337-.01-.517-.01-.18 0-.472.068-.72.337-.247.27-.945.923-.945 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.61 4.07 1.636.7 2.91.954 3.9.64.444-.14 1.378-.562 1.573-1.102.195-.54.195-1.002.135-1.102-.06-.1-.225-.135-.495-.27z" />
            </svg>
          )
        },
        {
          name: 'Instagram Graph API',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current shrink-0">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="url(#insta-grad)"/>
              <defs>
                <linearGradient id="insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="5%" stopColor="#fdf497" />
                  <stop offset="45%" stopColor="#fd5949" />
                  <stop offset="60%" stopColor="#d6249f" />
                  <stop offset="100%" stopColor="#285AEB" />
                </linearGradient>
              </defs>
            </svg>
          )
        },
        {
          name: 'Gemini API',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-cyan-300 shrink-0">
              <path d="M12 22C12 22 13 18 16 16C19 13 22 12 22 12C22 12 19 11 16 9C13 6 12 2 12 2C12 2 11 6 9 9C6 11 2 12 2 12C2 12 6 13 9 16C11 18 12 22 12 22Z" />
            </svg>
          )
        },
        {
          name: 'GPT API',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-emerald-400 shrink-0">
              <path d="M21.3,10.3c0.1-0.5,0.1-1.1-0.1-1.6c-0.2-0.5-0.5-0.9-0.9-1.2c-0.5-0.4-1-0.6-1.6-0.6c-0.3,0-0.6,0.1-0.9,0.2 C17.3,6.3,16.5,5.9,15.7,5.8c-0.8-0.1-1.6,0-2.3,0.4c-0.3-0.5-0.8-0.9-1.3-1.1c-0.5-0.2-1.1-0.3-1.7-0.1c-0.6,0.1-1.1,0.4-1.5,0.8 C8.5,6.1,8.3,6.6,8.2,7.1c-0.8,0-1.6,0.3-2.2,0.8C5.4,8.4,5,9.2,4.9,10c-0.5,0.2-0.9,0.6-1.2,1c-0.3,0.5-0.4,1.1-0.3,1.7 c0.1,0.6,0.4,1.1,0.8,1.5c0.4,0.3,0.9,0.5,1.5,0.6c0.1,0.8,0.5,1.6,1.1,2.1c0.6,0.5,1.4,0.8,2.2,0.8c0.3,0,0.6-0.1,0.9-0.2 c0.5,0.8,1.3,1.2,2.2,1.3c0.9,0.1,1.7-0.1,2.4-0.6c0.3,0.5,0.8,0.9,1.3,1.1c0.5,0.2,1.1,0.3,1.7,0.1c0.6-0.1,1.1-0.4,1.5-0.8 c0.4-0.4,0.6-0.9,0.7-1.5c0.8,0,1.6-0.3,2.2-0.8c0.6-0.5,1-1.3,1.1-2.1c0.5-0.2,0.9-0.6,1.2-1c0.3-0.5,0.4-1.1,0.3-1.7 C22.1,11.4,21.8,10.8,21.3,10.3z M11.8,20.2c-0.4,0-0.8-0.1-1.1-0.3c0.1,0,0.1-0.1,0.2-0.1l4.4-2.5c0.2-0.1,0.3-0.3,0.3-0.6v-6.2 l1.8,1c0.1,0.1,0.2,0.2,0.2,0.4v5.1C17.6,18.7,15,20.2,11.8,20.2z M6,15.6c-0.2-0.3-0.3-0.7-0.3-1.1c0.1,0,0.1,0.1,0.2,0.1l5.4,3.1 c0.2,0.1,0.4,0.1,0.6,0l1.8-1v-2l-4.4-2.5c-0.2-0.1-0.3-0.3-0.3-0.6V8.9l-1.8,1C7,10.1,6.9,10.2,6.9,10.4V15.6z M5.5,9.2 C5.7,8.8,6.1,8.6,6.5,8.5c0,0.1,0,0.2,0,0.2v6.2c0,0.2,0.1,0.4,0.3,0.5l4.4,2.5L9.4,19c-0.1,0.1-0.2,0.1-0.4,0.1c-0.4-0.1-0.8-0.2-1.1-0.5 C7.1,17.9,6.3,16.5,6,15V9.2H5.5z M12.8,3.8c0.4,0,0.8,0.1,1.1,0.3c-0.1,0-0.1,0.1-0.2,0.1l-4.4,2.5C9.1,6.8,9,7,9,7.3v6.2l-1.8-1 c-0.1-0.1-0.2-0.2-0.2-0.4V7C7,5.3,9.6,3.8,12.8,3.8z M18.5,8.4c0.2,0.3,0.3,0.7,0.3,1.1c-0.1,0-0.1-0.1-0.2-0.1L13.2,6.3 C13,6.2,12.8,6.2,12.6,6.3l-1.8,1v2l4.4,2.5c0.2,0.1,0.3,0.3,0.3,0.6v3.7l1.8-1c0.1-0.1,0.2-0.2,0.2-0.4V8.4H18.5z M18,14.8 c-0.2,0.4-0.6,0.6-1,0.7c0-0.1,0-0.2,0-0.2V9c0-0.2-0.1-0.4-0.3-0.5l-4.4-2.5l1.8-1c0.1-0.1,0.2-0.1,0.4-0.1c0.4,0.1,0.8,0.2,1.1,0.5 c0.8,0.8,1.6,2.2,1.9,3.7V14.8H18z M15.2,12.5l-2.7-1.5l-2.7,1.5v3l2.7,1.5l2.7-1.5V12.5z" />
            </svg>
          )
        },
        {
          name: 'Power BI',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-[#F2C811] shrink-0">
              <path d="M19 0h-3c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM11.5 6h-3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM4 12H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V13c0-.55-.45-1-1-1z" />
            </svg>
          )
        },
        {
          name: 'Razorpay',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0 text-amber-500">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          )
        },
        {
          name: 'Cashfree',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0 text-amber-500">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.953 9.953 0 0012 22z" />
              <path d="M12 18V6M9 9h6M9 13h6" />
            </svg>
          )
        },
        {
          name: 'Twilio',
          iconSvg: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#F22F46] shrink-0">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.5 15.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm0-5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7 5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm0-5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
            </svg>
          )
        }
      ]
    }
  ];

  // Render all categories for both Home and Tools pages
  const visibleCategories = categories;

  return (
    <div className="space-y-10 sm:space-y-14 md:space-y-16">
      {visibleCategories.map((category) => (
        <div 
          key={category.id} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start group/row py-8 border-b border-[var(--border-subtle)] transition-all duration-300"
        >
          {/* Left side: Category Header */}
          <div className="lg:col-span-3">
            <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-[2.2rem] uppercase tracking-tighter text-[var(--text-subtle)] group-hover/row:text-[var(--text-primary)] transition-colors duration-300 select-none">
              {category.title}
            </h3>
          </div>
          
          {/* Right side: Skills List */}
          <div className="lg:col-span-9 flex flex-wrap gap-x-10 gap-y-6 items-center">
            {category.skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="flex items-center gap-3 cursor-pointer group/skill transition-all hover:scale-105 duration-200"
              >
                {skill.iconSvg ? (
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    {skill.iconSvg}
                  </div>
                ) : skill.iconUrl ? (
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className="w-6 h-6 object-contain shrink-0 filter brightness-90 group-hover/skill:brightness-100 transition-all duration-200"
                  />
                ) : null}
                <span className="text-[var(--text-secondary)] group-hover/skill:text-[var(--text-primary)] font-semibold text-base tracking-wide transition-colors duration-200 select-none">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Preview call-to-action (only on Home page) */}
      {previewOnly && (
        <div className="flex justify-end pt-4">
          <Link
            to="/tools"
            className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f46c38] hover:text-[var(--text-primary)] flex items-center gap-2 transition-colors group"
          >
            View Full Stack &amp; Integrations
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
