import React, { useState, useEffect, useRef } from 'react';
import { generateBusinessAudit } from '../services/geminiService';
import { AuditStatus, AuditResult } from '../types';
import { Loader2, CheckCircle2, AlertCircle, BarChart3, Terminal, X, ScanFace, Database, Cpu } from 'lucide-react';

const AuditTool: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [bottleneck, setBottleneck] = useState('');
  const [status, setStatus] = useState<AuditStatus>(AuditStatus.IDLE);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  const simulateLogs = () => {
    setLogs([]);
    const messages = [
      "Initializing core systems...",
      "Connecting to neural grid...",
      "Analyzing industry patterns...",
      "Identifying operational bottlenecks...",
      "Synthesizing automation architecture...",
      "Optimizing solution for scalability...",
      "Generating strategic blueprint..."
    ];
    
    let delay = 0;
    messages.forEach((msg, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, `> ${msg}`]);
      }, delay);
      delay += 800 + Math.random() * 500;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !bottleneck) return;

    setStatus(AuditStatus.LOADING);
    setErrorMsg(null);
    setResult(null);
    simulateLogs();

    try {
      const auditResult = await generateBusinessAudit(industry, bottleneck);
      setResult(auditResult);
      setStatus(AuditStatus.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setStatus(AuditStatus.ERROR);
      setErrorMsg("Failed to generate audit. Please try again later.");
    }
  };

  const closeResult = () => {
    setStatus(AuditStatus.IDLE);
    setResult(null);
    setLogs([]);
  };

  useEffect(() => {
    // Only scroll the log container, not the entire page
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section id="audit-tool" className="py-20 relative overflow-hidden bg-void">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
      
      {/* Data Rain / Shooting Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-accent-400/20 to-transparent opacity-0 animate-shoot"></div>
          <div className="absolute top-0 left-[35%] w-[1px] h-full bg-gradient-to-b from-transparent via-royal-500/20 to-transparent opacity-0 animate-shoot [animation-delay:1.5s]"></div>
          <div className="absolute top-0 left-[65%] w-[1px] h-full bg-gradient-to-b from-transparent via-accent-400/20 to-transparent opacity-0 animate-shoot [animation-delay:2.5s]"></div>
          <div className="absolute top-0 left-[85%] w-[1px] h-full bg-gradient-to-b from-transparent via-royal-500/20 to-transparent opacity-0 animate-shoot [animation-delay:0.5s]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-500/10 border border-royal-500/20 rounded-full mb-4">
             <div className="w-1.5 h-1.5 bg-royal-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] uppercase tracking-widest text-royal-400 font-bold">Mission Control</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Free AI Opportunity Audit</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Input your parameters. Our system will construct a bespoke automation architecture for your business instantly.
          </p>
        </div>

        {/* Holographic Form Container */}
        <div className="relative group on-scroll delay-200">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-400 to-royal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative glass-panel rounded-2xl p-1 shadow-2xl overflow-hidden">
            
            <div className="bg-void/80 rounded-xl p-8 md:p-10 border border-white/5 relative">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-400/30 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-400/30 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-400/30 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-400/30 rounded-br-xl"></div>

              {status === AuditStatus.LOADING ? (
                /* Terminal View */
                <div className="h-[300px] font-mono text-sm p-4 bg-black/50 rounded-lg border border-accent-400/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-400/50 shadow-[0_0_10px_#2DD4BF] animate-scan"></div>
                    <div 
                      className="flex-1 overflow-y-auto space-y-2 custom-scrollbar p-2"
                      ref={logsContainerRef}
                    >
                        {logs.map((log, i) => (
                            <div key={i} className="text-accent-400/80 animate-in fade-in slide-in-from-left-2 duration-300">
                                {log}
                            </div>
                        ))}
                    </div>
                    <div className="pt-2 border-t border-accent-400/10 flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        Processing Request...
                    </div>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label htmlFor="industry" className="flex items-center gap-2 text-xs font-bold text-accent-400 uppercase tracking-wider">
                        <Database className="w-4 h-4" /> Target Industry
                        </label>
                        <input
                        type="text"
                        id="industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        placeholder="e.g. Real Estate, Logistics, Dental Clinic"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400/50 transition-all font-mono text-sm hover:bg-white/[0.07]"
                        required
                        />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="bottleneck" className="flex items-center gap-2 text-xs font-bold text-accent-400 uppercase tracking-wider">
                        <Cpu className="w-4 h-4" /> Operational Bottleneck
                        </label>
                        <input
                        type="text"
                        id="bottleneck"
                        value={bottleneck}
                        onChange={(e) => setBottleneck(e.target.value)}
                        placeholder="e.g. Manual data entry, Missed leads"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400/50 transition-all font-mono text-sm hover:bg-white/[0.07]"
                        required
                        />
                    </div>
                    </div>
                    
                    <button
                    type="submit"
                    className="w-full py-5 bg-white text-void font-bold text-base rounded-lg hover:bg-accent-400 hover:text-void transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] relative overflow-hidden group/btn"
                    >
                    <span className="relative z-10 flex items-center gap-2">
                         <Terminal className="w-5 h-5" /> Initiate Analysis
                    </span>
                    <div className="absolute inset-0 bg-accent-400 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </form>
              )}

              {status === AuditStatus.ERROR && (
                 <div className="mt-6 p-4 bg-red-900/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 text-sm animate-in fade-in">
                   <AlertCircle className="w-5 h-5 shrink-0" />
                   <p>{errorMsg}</p>
                 </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Blueprint Result Modal */}
      {result && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={closeResult}></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#050505] border border-accent-400/30 rounded-xl shadow-[0_0_100px_rgba(45,212,191,0.1)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-500 group/modal">
            
            {/* Scanning Line Animation */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(45,212,191,0.2)_50%)] bg-[size:100%_4px]"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-accent-400 shadow-[0_0_20px_#2DD4BF] animate-scan opacity-50"></div>
            </div>

            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-white/10 bg-white/5 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-accent-400/10 border border-accent-400/30 rounded flex items-center justify-center">
                    <ScanFace className="w-6 h-6 text-accent-400" />
                 </div>
                 <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight">{result.title}</h3>
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">Blueprint Generated Successfully</p>
                    </div>
                 </div>
              </div>
              <button 
                onClick={closeResult}
                className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Main Analysis */}
                 <div className="md:col-span-2 space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-accent-400 uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-accent-400/20 pb-2">
                        <Terminal className="w-3 h-3" /> System Architecture
                        </h4>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light">{result.summary}</p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-accent-400" /> Key Protocols
                        </h4>
                        <ul className="space-y-3">
                        {result.keyBenefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                            <span className="text-accent-400 font-mono text-xs mt-1">0{idx + 1}</span>
                            <span className="text-slate-300 text-sm">{benefit}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                 </div>

                 {/* Metrics Sidebar */}
                 <div className="md:col-span-1 space-y-4">
                    <div className="p-5 bg-gradient-to-br from-royal-500/10 to-transparent border border-royal-500/20 rounded-lg">
                        <p className="text-[10px] text-royal-400 font-bold uppercase tracking-wider mb-2">Estimated Impact</p>
                        <div className="text-3xl font-bold text-white mb-1">{result.estimatedImpact}</div>
                        <p className="text-xs text-slate-500">Efficiency Gain</p>
                    </div>
                    
                    <div className="p-5 bg-void border border-white/10 rounded-lg">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Complexity</p>
                        <div className="flex gap-1">
                            <div className="h-1.5 w-full bg-accent-400 rounded-full"></div>
                            <div className="h-1.5 w-full bg-accent-400 rounded-full"></div>
                            <div className="h-1.5 w-full bg-accent-400/30 rounded-full"></div>
                        </div>
                        <p className="text-xs text-white mt-2">Moderate</p>
                    </div>

                     <div className="p-5 bg-void border border-white/10 rounded-lg">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Deployment Time</p>
                        <p className="text-lg font-bold text-white">2-4 Weeks</p>
                    </div>
                 </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-white/5 relative z-10 flex flex-col md:flex-row gap-4 items-center justify-between">
              <p className="text-xs text-slate-500 font-mono hidden md:block">CONFIDENTIAL // LUMIAGEN GENERATED REPORT</p>
              <a 
                href={`mailto:koushan@lumiagen.com?subject=Implement%20Strategy:%20${encodeURIComponent(result.title)}&body=I'd%20like%20to%20discuss%20implementing%20the%20${encodeURIComponent(result.title)}%20strategy.`}
                className="w-full md:w-auto px-8 py-3 bg-accent-400 text-void font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] uppercase tracking-wide text-xs flex items-center justify-center gap-2"
              >
                <Cpu className="w-4 h-4" /> Execute Strategy
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default AuditTool;