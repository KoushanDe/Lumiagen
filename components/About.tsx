import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Zap, Code2 } from 'lucide-react';

const About: React.FC = () => {
  const localImage = "/koushan.png";
  const fallbackImage = "https://res.cloudinary.com/dguueg6wi/image/upload/v1764860925/IMG_20251128_142903_wtxnef.jpg";

  const [imgSrc, setImgSrc] = useState(localImage);

  const handleError = () => {
    if (imgSrc === localImage) {
      setImgSrc(fallbackImage);
    }
  };

  return (
    <section id="about" className="py-32 bg-void border-y border-white/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="on-scroll-left order-2 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">Agency Leadership</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Enterprise Engineering. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-royal-500">Startup Speed.</span>
            </h3>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg mb-10">
              <p>
                Hi, I’m <span className="text-white font-semibold">Koushan</span>, Founder of Lumiagen. I am a Software Engineer with 3+ years of experience architecting <span className="text-white">highly scalable systems</span> for industry giants like <span className="text-white">Razorpay</span> and <span className="text-white">Navi</span>.
              </p>
              <p>
                I founded this agency to bridge the gap between "hacky" MVPs and enterprise-grade software. We help businesses launch AI-Powered workflows and robust platforms that are built to scale from Day 1.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="bg-surface/50 border border-white/5 p-4 rounded-xl flex items-start gap-3 group hover:border-accent-400/30 transition-colors">
                    <div className="w-8 h-8 rounded bg-accent-400/10 flex items-center justify-center shrink-0 text-accent-400">
                        <Zap className="w-4 h-4" />
                    </div>
                    <div>
                        <h5 className="text-white text-sm font-bold mb-1">Rapid Deployment</h5>
                        <p className="text-xs text-slate-500">PWAs & Mobile Apps built for speed.</p>
                    </div>
                </div>
                <div className="bg-surface/50 border border-white/5 p-4 rounded-xl flex items-start gap-3 group hover:border-royal-500/30 transition-colors">
                    <div className="w-8 h-8 rounded bg-royal-500/10 flex items-center justify-center shrink-0 text-royal-500">
                        <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                        <h5 className="text-white text-sm font-bold mb-1">Intelligent Agents</h5>
                        <p className="text-xs text-slate-500">Custom n8n workflows that think.</p>
                    </div>
                </div>
                <div className="bg-surface/50 border border-white/5 p-4 rounded-xl flex items-start gap-3 group hover:border-white/20 transition-colors sm:col-span-2">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 text-white">
                        <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                        <h5 className="text-white text-sm font-bold mb-1">Enterprise Reliability</h5>
                        <p className="text-xs text-slate-500">Bank-grade security, database design, and API architecture.</p>
                    </div>
                </div>
            </div>

            <a 
              href="mailto:koushan@lumiagen.com?subject=Call%20Request"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-void font-bold rounded-xl hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] group"
            >
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                 Book a Consultation <Zap className="w-4 h-4 text-royal-500" />
              </span>
            </a>
          </div>

          <div className="on-scroll-right delay-200 order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[280px]">
                
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-400 to-royal-500 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>
                
                <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                    
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-400 z-20"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-royal-500 z-20"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-royal-500 z-20"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-400 z-20"></div>

                    <div className="relative rounded-2xl overflow-hidden bg-surface aspect-[4/5] shadow-2xl">
                         <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(45,212,191,0.05)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
                         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent-400/10 to-transparent -translate-y-full group-hover:animate-scan z-10 pointer-events-none"></div>

                         <img 
                            src={imgSrc} 
                            onError={handleError}
                            alt="Koushan De - Founder" 
                            className="absolute inset-0 w-full h-full object-cover z-0 filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                         />
                         
                         <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-void via-void/80 to-transparent z-20">
                             <div className="flex items-center gap-3 mb-1">
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                                <span className="text-xs font-mono text-accent-400 uppercase tracking-widest">Lead Architect</span>
                             </div>
                             <h4 className="text-2xl font-bold text-white">Koushan De</h4>
                             <p className="text-sm text-slate-400">Founder, Lumiagen</p>
                         </div>
                    </div>
                </div>

                <div className="absolute -right-4 top-8 bg-surface/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl hidden sm:block animate-float">
                    <div className="flex items-center gap-3">
                        <div className="bg-royal-500/20 p-2 rounded text-royal-500">
                             <Code2 className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase font-bold">Experience</p>
                            <p className="text-white text-sm font-bold">3+ Years</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;