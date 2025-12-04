import React, { useState, useRef } from 'react';
import { Bot, Globe, Smartphone, Mic, Infinity, Code2, ArrowUpRight, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  service: any;
  index: number;
  handleBooking: (e: React.MouseEvent) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, handleBooking }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  let glowColor = 'rgba(255, 255, 255, 0.4)';
  if (service.isOffer) {
    glowColor = 'rgba(45, 212, 191, 0.6)';
  } else if (service.title === "Custom Webapps" || service.title === "Mobile Apps" || service.title === "AI Voice Agent") {
    glowColor = 'rgba(59, 130, 246, 0.6)';
  } else if (service.title === "Unlimited Support") {
    glowColor = 'rgba(168, 85, 247, 0.6)';
  }

  let iconStyle = 'bg-white/5 text-slate-300 border border-white/5';
  if (service.title === "Unlimited Support") {
     iconStyle = 'bg-white/5 text-slate-300 group-hover:text-purple-500 group-hover:bg-purple-500/10 group-hover:border-purple-500/20';
  } else if (service.isOffer) {
     iconStyle = 'bg-accent-400/10 text-accent-400 border-accent-400/20';
  } else {
     iconStyle = 'bg-white/5 text-slate-300 group-hover:text-royal-500 group-hover:bg-royal-500/10 group-hover:border-royal-500/20';
  }

  let buttonHoverStyle = '';
  if (service.title === "Unlimited Support") {
    buttonHoverStyle = 'hover:border-purple-500 hover:text-white hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]';
  } else if (service.isOffer) {
    buttonHoverStyle = 'hover:border-accent-400 hover:text-white hover:bg-accent-400/10 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]';
  } else {
    buttonHoverStyle = 'hover:border-royal-500 hover:text-white hover:bg-royal-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]';
  }

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative p-[1px] rounded-2xl bg-transparent transition-all duration-300 hover:scale-[1.02] flex flex-col h-full on-scroll-zoom delay-${Math.min(index * 100, 500)} overflow-hidden`}
    >
      <div className="absolute inset-0 bg-surface rounded-2xl">
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 40%)`
        }}
      ></div>

      <div className="relative h-full bg-void/90 rounded-2xl p-6 overflow-hidden flex flex-col border border-white/5 group-hover:border-transparent transition-colors z-10">
        
        <div 
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            maskImage: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
          }}
        ></div>

        <div className="relative z-10 flex flex-col h-full">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors shadow-inner ${iconStyle}`}>
              {service.icon}
            </div>
            
            <div className="flex justify-between items-start">
               <h4 className="text-xl font-bold text-white mb-2 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                {service.title}
              </h4>
              {service.isOffer && (
                <span className="px-2 py-1 rounded bg-accent-400/10 border border-accent-400/20 text-[10px] font-bold uppercase tracking-wider text-accent-400 flex items-center gap-1 shadow-[0_0_10px_rgba(45,212,191,0.2)]">
                  <Sparkles className="w-3 h-3" /> Offer
                </span>
              )}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-light">
              {service.description}
            </p>

            <div className="pt-6 border-t border-white/5 mt-auto">
              <div className="flex items-end justify-between mb-4">
                <div className="flex flex-col">
                    {service.oldPrice && (
                      <span className="text-sm text-slate-400 line-through decoration-slate-600 decoration-2 font-mono mb-1 opacity-80 font-medium">{service.oldPrice}</span>
                    )}
                    <span className={`text-2xl font-bold tracking-tight ${service.price === 'FREE' ? 'text-accent-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.3)]' : 'text-white'}`}>
                      {service.price}
                    </span>
                    {service.subtext && (
                      <span className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">{service.subtext}</span>
                    )}
                </div>
              </div>
              
              <button 
                onClick={handleBooking}
                className={`w-full py-3 text-sm font-bold rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider
                    bg-void/50 backdrop-blur-sm border-white/10 text-white
                    ${buttonHoverStyle}
                    `}
              >
                {service.action}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:koushan@lumiagen.com?subject=Project%20Inquiry";
  };

  const services = [
    {
      title: "Automated Booking Flow",
      description: "Seamlessly capture leads and schedule appointments without lifting a finger.",
      price: "$700",
      oldPrice: "$1500",
      isOffer: true,
      icon: <Bot className="w-6 h-6" />,
      action: "Get Started"
    },
    {
      title: "Modern Website",
      description: "High-conversion, aesthetic landing page. Responsive and lightning fast.",
      price: "FREE",
      oldPrice: "$500",
      subtext: "With Booking Flow purchase",
      isOffer: true,
      icon: <Globe className="w-6 h-6" />,
      action: "Claim Offer"
    },
    {
      title: "Custom Webapps",
      description: "Tailor-made SaaS platforms, internal tools, or client portals built on modern stacks.",
      price: "Book for Quote",
      icon: <Code2 className="w-6 h-6" />,
      action: "Book Call"
    },
    {
      title: "Mobile Apps",
      description: "Native-feel iOS and Android applications. PWA or React Native.",
      price: "Book for Quote",
      icon: <Smartphone className="w-6 h-6" />,
      action: "Book Call"
    },
    {
      title: "AI Voice Agent",
      description: "Human-like voice assistants to handle inbound/outbound calls 24/7.",
      price: "Book for Quote",
      icon: <Mic className="w-6 h-6" />,
      action: "Book Call"
    },
    {
      title: "Unlimited Support",
      description: "Ongoing maintenance, updates, and tweaks to keep your systems running perfectly.",
      price: "$250/mo",
      icon: <Infinity className="w-6 h-6" />,
      action: "Subscribe"
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-void pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 on-scroll">
          <div className="max-w-2xl">
            <h2 className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
               <span className="w-8 h-[1px] bg-accent-400"></span> Our Services
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineering for Scale.</h3>
            <p className="text-slate-400 text-lg">
              Transparent pricing. Enterprise-grade quality. No hidden fees.
            </p>
          </div>
          <a href="mailto:koushan@lumiagen.com" className="group text-white border-b border-white/20 pb-1 hover:border-accent-400 transition-all flex items-center gap-2 text-sm font-medium tracking-wide">
            Get a custom proposal <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
              handleBooking={handleBooking}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;