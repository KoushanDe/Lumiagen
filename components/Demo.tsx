import React from 'react';

const Demo: React.FC = () => {
  return (
    <section className="py-20 bg-void relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10 text-center">
        <div className="mb-12 on-scroll">
          <h2 className="text-royal-500 font-bold tracking-widest uppercase text-xs mb-4">ARCHIVED PROJECT</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Legacy <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#3B82F6,#60A5FA)]">Voice AI</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Watch legacy demonstrations of the core capabilities in our proprietary AI Voice Agent, developed specifically for a high-volume Real Estate project. Built to handle low latency and human-like interactions.
          </p>
        </div>

        {/* Video Container - Grid of two videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto on-scroll delay-200">
          <div className="flex flex-col gap-4">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface aspect-video transition-transform duration-500 hover:scale-[1.02]">
              <iframe 
                  src="https://www.loom.com/embed/5f09a4e7d5e5492395427aefb5504278?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="Voice AI Demo 1"
              ></iframe>
            </div>
            <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">Real Estate Property Inquiry</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface aspect-video transition-transform duration-500 hover:scale-[1.02]">
             <iframe 
                  src="https://www.loom.com/embed/c26cf6ff7a0e4cc8a7f880139d7b765a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="Voice AI Demo 2"
              ></iframe>
            </div>
            <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">Real Estate Listing Details</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Demo;