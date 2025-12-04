import React, { useState, useRef } from 'react';
import { Search, PenTool, Database, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [timelineMouseY, setTimelineMouseY] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }

    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      setTimelineMouseY(y);
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Discovery & Audit',
      text: 'We dive deep into your operations to identify bottlenecks and high-value automation opportunities.',
      icon: <Search className="w-5 h-5" />
    },
    {
      num: '02',
      title: 'Strategy Design',
      text: 'Our architects design a custom AI solution tailored to your specific infrastructure and goals.',
      icon: <PenTool className="w-5 h-5" />
    },
    {
      num: '03',
      title: 'Development & Integration',
      text: 'We build and integrate the agents, ensuring they communicate perfectly with your existing stack.',
      icon: <Database className="w-5 h-5" />
    },
    {
      num: '04',
      title: 'Training & Handoff',
      text: 'We deploy the solution, train your team, and monitor performance. We don’t leave until you see the value.',
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  return (
    <section 
      id="process" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-20 bg-slate-950 relative overflow-hidden group/section"
    >
      <div className="absolute inset-0 bg-void">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.25)_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            maskImage: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
          }}
        ></div>
        
        <div 
          className="absolute inset-0 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.08), transparent 40%)`
          }}
        ></div>
        
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-void to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-void to-transparent z-10"></div>
      </div>
      
      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10">
        <div className="mb-16 text-center on-scroll-zoom">
          <h2 className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-3">The Workflow</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h3>
          <p className="text-slate-400 text-lg">A clear, transparent path to digital transformation.</p>
        </div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 group-hover/section:bg-white/10 transition-colors duration-500 overflow-hidden rounded-full">
             
             <div 
               className="absolute w-full h-32 bg-gradient-to-b from-transparent via-accent-400 to-transparent blur-[4px] transition-transform duration-[50ms] ease-out opacity-0 group-hover/section:opacity-100"
               style={{ 
                 transform: `translateY(${timelineMouseY - 64}px)`,
                 willChange: 'transform' 
               }}
             ></div>

             <div className="absolute w-full h-32 bg-accent-400/50 blur-[8px] transition-transform duration-[50ms] ease-out opacity-0 group-hover/section:opacity-100"
                style={{ 
                 transform: `translateY(${timelineMouseY - 64}px)`,
                 willChange: 'transform' 
               }}
             ></div>
          </div>

          <div className="flex flex-col space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const delayClass = idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : idx === 2 ? 'delay-300' : 'delay-400';
              
              return (
                <div key={idx} className="relative group/item">
                  
                  <div className="flex items-center justify-between md:justify-center relative z-10">
                    
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-void border border-white/10 z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover/item:border-accent-400/50 group-hover/item:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-slate-400 group-hover/item:text-accent-400 group-hover/item:bg-accent-400/10 transition-colors border border-white/5">
                        {step.icon}
                      </div>
                    </div>

                    <div className={`w-full flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>
                      
                      <div className="hidden md:block w-1/2"></div>
                      
                      <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                        <div 
                          className={`
                            relative p-6 rounded-xl border border-white/5 bg-void/80 backdrop-blur-sm
                            hover:bg-white/5 hover:border-accent-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.08)]
                            ${isEven ? 'on-scroll-left' : 'on-scroll-right'} ${delayClass}
                          `}
                        >
                           <div className={`text-4xl font-bold text-white/5 absolute -top-3 ${isEven ? 'right-4' : 'left-4'} group-hover/item:text-accent-400/20 transition-colors`}>{step.num}</div>
                           <h3 className="text-lg font-bold text-white mb-2 relative z-10 group-hover/item:text-accent-400 transition-colors">{step.title}</h3>
                           <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                             {step.text}
                           </p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;