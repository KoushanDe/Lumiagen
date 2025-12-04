import React, { useState, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gridColor, setGridColor] = useState('rgba(45, 212, 191, 0.5)');
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePos({ x, y });

      const width = rect.width;
      const factor = Math.min(Math.max(x / width, 0), 1); 
      
      const r = Math.round(45 + factor * (59 - 45));
      const g = Math.round(212 + factor * (130 - 212));
      const b = Math.round(191 + factor * (246 - 191));
      
      setGridColor(`rgba(${r}, ${g}, ${b}, 0.5)`);
    }
  };

  const handleConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:koushan@lumiagen.com?subject=Consultation%20Request&body=Hi%20Koushan%2C%0A%0AI'd%20like%20to%20discuss%20building%20an%20automated%20system%20for%20my%20business.%0A%0APlease%20let%20me%20know%20your%20availability.";
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-void">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] opacity-30 animate-spin-slow">
                 <div className="absolute top-0 left-1/2 w-[50%] h-full bg-gradient-to-r from-transparent via-royal-500/10 to-transparent blur-[80px] transform rotate-45 origin-bottom-left"></div>
                 <div className="absolute bottom-0 right-1/2 w-[50%] h-full bg-gradient-to-r from-transparent via-accent-400/10 to-transparent blur-[80px] transform rotate-45 origin-top-right"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-royal-500/5 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div 
          className="absolute inset-0 bg-[size:64px_64px] transition-colors duration-0 ease-linear"
          style={{
            backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
          }}
        ></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-accent-400 to-transparent opacity-0 animate-shoot [animation-delay:0s] [animation-duration:4s]"></div>
            <div className="absolute top-0 left-[60%] w-[1px] h-full bg-gradient-to-b from-transparent via-royal-500 to-transparent opacity-0 animate-shoot [animation-delay:2s] [animation-duration:5s]"></div>
            <div className="absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shoot [animation-delay:1.5s] [animation-duration:3s]"></div>
            <div className="absolute top-0 left-[40%] w-[1px] h-full bg-gradient-to-b from-transparent via-accent-400/50 to-transparent opacity-0 animate-shoot [animation-delay:3.5s] [animation-duration:6s]"></div>
            <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-royal-500/30 to-transparent opacity-0 animate-shoot [animation-delay:0.5s] [animation-duration:7s]"></div>
        </div>

        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${gridColor.replace('0.5', '0.15')}, transparent 40%)`
          }}
        ></div>

        <div 
           className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
           style={{
             boxShadow: `inset 0 0 50px ${gridColor.replace('0.5', '0.08')}`
           }}
        ></div>
        
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-float opacity-50 shadow-[0_0_10px_white]"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-accent-400 rounded-full animate-float delay-700 opacity-60 shadow-[0_0_15px_#2DD4BF]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-royal-500 rounded-full animate-float delay-300 opacity-50"></div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-enter hover:border-accent-400/30 transition-all cursor-default shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse shadow-[0_0_10px_#2DD4BF]"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-300">Secure Your Early Access Spot</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] group cursor-default animate-enter [animation-delay:150ms] relative">
          <span className="relative inline-block transition-all duration-500 ease-out hover:tracking-wide">
             <span className="absolute inset-0 blur-xl bg-white/10 opacity-50 animate-pulse-slow"></span>
             <span className="text-shimmer">Automate the Boring,</span>
          </span> <br />
          <span className="inline-block pb-2 transition-all duration-500 ease-out hover:scale-[1.02]">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#2DD4BF,#FFFFFF,#3B82F6,#FFFFFF,#2DD4BF)] drop-shadow-[0_0_25px_rgba(45,212,191,0.2)] animate-shimmer bg-[length:200%_auto]">
                Scale the Extraordinary.
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-enter [animation-delay:300ms]">
          Lumiagen builds high-performance AI agents and custom web architectures. 
          Stop trading time for money—deploy systems that work while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-enter [animation-delay:450ms]">
          <a 
            href="mailto:koushan@lumiagen.com?subject=Consultation%20Request"
            onClick={handleConsultation}
            className="w-full sm:w-auto px-10 py-5 bg-white text-void rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group relative overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(45,212,191,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={scrollToServices}
            className="w-full sm:w-auto px-10 py-5 border border-white/10 text-slate-300 hover:text-white rounded-xl font-semibold backdrop-blur-md hover:bg-white/5 hover:border-accent-400/30 transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-accent-400" />
            View Pricing
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;