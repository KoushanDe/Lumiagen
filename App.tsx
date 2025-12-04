import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Demo from './components/Demo';
import AuditTool from './components/AuditTool';
import Contact from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Slightly higher threshold to ensure element is visible before animating
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements with any of the animation classes
    const elements = document.querySelectorAll('.on-scroll, .on-scroll-left, .on-scroll-right, .on-scroll-zoom, .on-scroll-line');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-void text-slate-50 font-sans selection:bg-accent-400 selection:text-void overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Demo />
        <About />
        <AuditTool />
      </main>
      <Contact />
    </div>
  );
};

export default App;