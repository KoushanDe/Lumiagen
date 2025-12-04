import React, { useState } from 'react';
import { Play, Youtube } from 'lucide-react';

const Demo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const youtubeVideoId = "PpFYoLgATrc";
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

  return (
    <section className="py-20 bg-void relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto relative z-10 text-center">
        <div className="mb-8 on-scroll">
          <h2 className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4">See It In Action</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Automation at <span className="text-gradient">Light Speed</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Watch how we transform complex manual workflows into one-click AI operations.
          </p>
        </div>

        {/* Video Container - Compact max-w-3xl */}
        <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface pb-[56.25%] h-0 group on-scroll delay-200">
          {!isPlaying ? (
            <div 
              className="absolute top-0 left-0 w-full h-full z-20 cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-surface via-void to-surface opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent-500/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-500/30">
                <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center shadow-lg shadow-accent-500/20">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              
              <div className="absolute bottom-8 left-0 w-full text-center">
                <p className="text-white font-medium tracking-wide text-sm uppercase opacity-80">Click to Watch Demo</p>
              </div>
            </div>
          ) : (
            <iframe 
                className="absolute top-0 left-0 w-full h-full z-20"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&origin=${window.location.origin}&rel=0&modestbranding=1`}
                title="Lumiagen Automation Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ border: 0 }}
            ></iframe>
          )}
        </div>

        <div className="mt-8 flex justify-center on-scroll delay-300">
          <a 
            href={youtubeUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 hover:text-white hover:bg-red-600 transition-all text-sm font-medium group"
          >
            <Youtube className="w-4 h-4 group-hover:text-white" />
            Watch on YouTube
          </a>
        </div>

      </div>
    </section>
  );
};

export default Demo;