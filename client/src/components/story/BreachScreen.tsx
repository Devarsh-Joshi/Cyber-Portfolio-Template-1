import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Lock, ShieldAlert } from "lucide-react";
import { GlitchText } from "@/components/ui/GlitchText";
import { playSound, stopSound } from "@/lib/sounds";
import { Button } from "@/components/ui/button";

interface BreachScreenProps {
  onOverride: () => void;
}

export function BreachScreen({ onOverride }: BreachScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isRestoring, setIsRestoring] = useState(false);

  useEffect(() => {
    playSound("alert");
    return () => stopSound("alert");
  }, []);

  const handleOverride = () => {
    setIsRestoring(true);
    stopSound("alert");
    playSound("click");
    
    // Simulate restoration progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          playSound("access_granted");
          setTimeout(onOverride, 500);
          return 100;
        }
        playSound("typing");
        return prev + 2;
      });
    }, 30);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Video/Image simulation */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-red-950/20"
        style={{
          backgroundImage: "url('/breach-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Red Overlay/Scanlines */}
      <div className="absolute inset-0 z-10 bg-red-500/10 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 z-10 scanline opacity-50 pointer-events-none" />

      <div className="relative z-20 max-w-2xl w-full p-4 md:p-8 border-2 border-red-500/50 bg-black/80 backdrop-blur-md shadow-[0_0_50px_rgba(255,0,0,0.3)] text-center mx-4">
        
        {!isRestoring ? (
          <div className="space-y-6 md:space-y-8">
             <div className="flex justify-center mb-4 md:mb-6">
               <ShieldAlert className="w-16 h-16 md:w-24 md:h-24 text-red-500 animate-pulse" />
             </div>

             <h1 className="font-display text-3xl md:text-7xl font-bold text-red-500 tracking-tighter animate-glitch break-words">
               SYSTEM COMPROMISED
             </h1>

             <div className="font-mono text-red-400 text-sm md:text-xl space-y-2">
               <p>&gt; UNAUTHORIZED ACCESS DETECTED</p>
               <p>&gt; FIREWALL STATUS: <span className="text-red-600 font-bold">CRITICAL FAILURE</span></p>
               <p>&gt; INTEGRITY: 12%</p>
             </div>

             <div className="pt-4 md:pt-8">
               <Button 
                 onClick={handleOverride}
                 className="bg-red-600 hover:bg-red-500 text-white font-display text-base md:text-xl px-6 py-4 md:px-12 md:py-6 rounded-none border border-red-400 shadow-[0_0_20px_rgba(255,0,0,0.5)] animate-pulse hover:animate-none transition-all group w-full md:w-auto whitespace-normal h-auto"
               >
                 <Lock className="w-5 h-5 md:w-6 md:h-6 mr-3 group-hover:unlock flex-shrink-0" />
                 <span className="text-center">INITIALIZE_COUNTERMEASURES</span>
               </Button>
             </div>
             
             <div className="text-[10px] md:text-xs font-mono text-red-500/50 mt-6 md:mt-8 break-all">
               ERROR_CODE: 0xDEAD_BEEF // SYSTEM_LOCKDOWN_INITIATED
             </div>
          </div>
        ) : (
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-display text-2xl md:text-4xl text-blue-400 animate-pulse">
              RESTORING SYSTEM INTEGRITY...
            </h2>
            
            <div className="relative h-4 bg-red-900/30 border border-red-500/30 w-full overflow-hidden">
               <motion.div 
                 className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_15px_rgba(0,100,255,0.8)]"
                 style={{ width: `${progress}%` }}
               />
            </div>

            <div className="font-mono text-left text-sm text-blue-300 space-y-1 h-32 overflow-hidden relative">
               <p className={progress > 10 ? "text-green-500" : "opacity-50"}>&gt; ISOLATING THREAT...</p>
               <p className={progress > 30 ? "text-green-500" : "opacity-50"}>&gt; PATCHING KERNEL...</p>
               <p className={progress > 50 ? "text-green-500" : "opacity-50"}>&gt; DEPLOYING ICE-BREAKERS...</p>
               <p className={progress > 70 ? "text-green-500" : "opacity-50"}>&gt; RE-ENCRYPTING DATA STREAMS...</p>
               <p className={progress > 90 ? "text-green-500" : "opacity-50"}>&gt; ESTABLISHING SECURE CONNECTION...</p>
               <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}