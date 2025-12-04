import React, { useState, useRef } from 'react';
import { Mail, MapPin, Linkedin, MessageCircle, Calendar, Copy, Check, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('koushan@lumiagen.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:koushan@lumiagen.com?subject=Priority%20Project%20Inquiry";
  };

  return (
    <footer 
      id="contact" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-20 pb-10 bg-void overflow-hidden group"
    >
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"
              style={{
                maskImage: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                WebkitMaskImage: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
              }}
            ></div>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                <div className="on-scroll-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                       Ready to <span className="text-gradient">Architect the Future?</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                        We don't just build software; we engineer competitive advantages. Let's discuss your automation infrastructure.
                    </p>

                    <div className="space-y-4">
                        <div className="group/card relative p-4 bg-white/5 border border-white/10 rounded-xl hover:border-accent-400/50 transition-all duration-300 hover:bg-white/[0.07] flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-accent-400/10 flex items-center justify-center text-accent-400 group-hover/card:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Direct</p>
                                    <p className="text-white font-mono text-sm">koushan@lumiagen.com</p>
                                </div>
                             </div>
                             <button 
                               onClick={handleCopy}
                               className="p-2 text-slate-500 hover:text-white transition-colors"
                             >
                                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                             </button>
                        </div>

                         <a href="https://wa.me/918910453538" target="_blank" rel="noreferrer" className="group/card relative p-4 bg-white/5 border border-white/10 rounded-xl hover:border-green-500/50 transition-all duration-300 hover:bg-white/[0.07] flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 group-hover/card:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">WhatsApp Priority</p>
                                <p className="text-white font-mono text-sm">+91 89104 53538</p>
                            </div>
                        </a>

                        <div className="group/card relative p-4 bg-white/5 border border-white/10 rounded-xl hover:border-royal-500/50 transition-all duration-300 hover:bg-white/[0.07] flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-royal-500/10 flex items-center justify-center text-royal-500 group-hover/card:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Base of Operations</p>
                                <p className="text-white font-mono text-sm">Bengaluru, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="on-scroll-right delay-200">
                    <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl group/box">
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-400/30 to-royal-500/30 opacity-0 group-hover/box:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

                        <div className="relative h-full rounded-2xl bg-void/60 backdrop-blur-2xl p-8 flex flex-col justify-center items-center text-center border border-white/10 overflow-hidden">
                             
                             <div className="absolute inset-0 bg-gradient-to-b from-royal-500/5 to-transparent pointer-events-none"></div>

                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
                             
                             <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-30 pointer-events-none"></div>

                             <div className="relative z-10 w-full flex flex-col items-center">
                                 <div className="w-16 h-16 bg-gradient-to-br from-accent-400/20 to-royal-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(45,212,191,0.15)] border border-white/10 backdrop-blur-md">
                                    <Calendar className="w-8 h-8 text-accent-400" />
                                 </div>
                                 
                                 <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Fast-Track Your Project</h3>
                                 <p className="text-slate-300 text-sm mb-8 leading-relaxed font-light">
                                    Skip the back-and-forth. Send a priority inquiry to discuss your custom solution immediately.
                                 </p>

                                 <button 
                                   onClick={handleBooking}
                                   className="w-full py-6 text-lg font-bold uppercase tracking-widest text-white bg-accent-400 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(45,212,191,0.6)] hover:bg-white hover:text-accent-400 transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center gap-3 group/btn relative z-20"
                                 >
                                    Book Priority Call
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                 </button>
                                 
                                 <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                                    Response time: &lt; 12 Hours
                                 </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative">
              {/* Left Side */}
              <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-slate-500 font-mono">SYSTEM STATUS: ONLINE</span>
              </div>
              
              {/* Middle - Centered Absolutely on Desktop */}
              <p className="text-slate-600 text-xs md:absolute md:left-1/2 md:-translate-x-1/2">
                  &copy; {new Date().getFullYear()} Lumiagen. All Systems Operational.
              </p>

              {/* Right Side */}
              <div className="flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/koushan-de-04a966192/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                  </a>
              </div>
          </div>
        </div>
    </footer>
  );
};

export default Contact;