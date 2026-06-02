import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieLoaderProps {
  url: string;
  style?: React.CSSProperties;
  fallbackIcon?: string; // Material Symbols icon name
  fallbackColor?: string; // Text/Icon color class, e.g., 'text-[#f46c38]'
}

const LottieLoader: React.FC<LottieLoaderProps> = ({ 
  url, 
  style = { width: '100%', height: '100%' }, 
  fallbackIcon = 'circle',
  fallbackColor = 'text-[#f46c38]'
}) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (isMounted) {
          setAnimationData(data);
        }
      })
      .catch(err => {
        console.error('Failed to load Lottie animation:', err);
        if (isMounted) {
          setError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (error) {
    // Elegant fallback icon if network/CORS fails
    return (
      <div 
        style={style} 
        className="flex items-center justify-center bg-white/5 rounded-full"
      >
        <span className={`material-symbols-outlined text-2xl ${fallbackColor} animate-pulse`}>
          {fallbackIcon}
        </span>
      </div>
    );
  }

  if (!animationData) {
    // Beautiful pulsing skeleton loader
    return (
      <div 
        style={style} 
        className="flex items-center justify-center bg-white/5 rounded-full animate-pulse border border-white/5"
      >
        <span className={`material-symbols-outlined text-xl ${fallbackColor} opacity-40`}>
          {fallbackIcon}
        </span>
      </div>
    );
  }

  // Resolve React 19 / Vite CJS default export wrapper
  const LottieComponent = (Lottie as any).default || Lottie;

  return (
    <LottieComponent 
      animationData={animationData} 
      loop={true} 
      autoplay={true} 
      style={style} 
    />
  );
};

export default LottieLoader;
