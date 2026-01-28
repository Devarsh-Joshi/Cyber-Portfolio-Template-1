import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { useToast } from "@/hooks/use-toast";
import { DecryptText } from "@/components/ui/DecryptText";
import { Fingerprint, Eye, FileText, ChevronRight } from "lucide-react";

export function About() {
  const [easterEggCount, setEasterEggCount] = useState(0);
  const [secretMode, setSecretMode] = useState(false);
  const { toast } = useToast();

  const handleHeaderClick = () => {
    setEasterEggCount(prev => prev + 1);
    if (easterEggCount + 1 === 5) {
      setSecretMode(true);
      toast({
        title: "⚠️ SECURITY BREACH DETECTED",
        description: "Admin privileges unlocked. Secret mode activated.",
        className: "bg-destructive border-destructive text-white font-mono",
        duration: 5000,
      });
    }
  };

  return (
    <section id="about" className={`py-8 relative transition-colors duration-1000 overflow-hidden ${secretMode ? 'bg-destructive/10' : 'bg-transparent'}`}>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start"
        >
          <div className="relative group max-w-sm mx-auto md:max-w-none w-full">
             {/* Profile Image Frame */}
            <div className={`aspect-[4/5] bg-muted relative overflow-hidden border-2 ${secretMode ? 'border-destructive' : 'border-primary/50'} p-1`}>
              <div className={`absolute inset-0 bg-gradient-to-t ${secretMode ? 'from-destructive/40' : 'from-primary/40'} to-transparent z-10`} />
              
              {/* Scanline */}
              <div className="absolute top-0 w-full h-1 bg-white/50 z-20 animate-[scan_3s_ease-in-out_infinite]" />
              
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Profile"
                className={`w-full h-full object-cover filter ${secretMode ? 'grayscale contrast-150 sepia' : 'grayscale contrast-125'} group-hover:grayscale-0 transition-all duration-500`}
              />
              
              {/* HUD Overlay on Image */}
              <div className="absolute top-4 right-4 z-20">
                <Fingerprint className={`w-8 h-8 ${secretMode ? 'text-destructive' : 'text-primary'} opacity-50`} />
              </div>
              
              <div className={`absolute bottom-4 left-4 z-20 bg-black/90 px-3 py-1 border ${secretMode ? 'border-destructive text-destructive' : 'border-primary text-primary'} text-xs font-mono tracking-widest`}>
                ID: IMG_8932.{secretMode ? 'ERR' : 'RAW'}
              </div>
            </div>
            
            {/* Stats below image */}
            <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[10px] text-muted-foreground">
              <div className="bg-primary/5 border border-primary/20 p-2">
                <span className="block text-primary/50">CLEARANCE</span>
                <span className="text-foreground">LEVEL_5</span>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-2">
                <span className="block text-primary/50">STATUS</span>
                <span className="text-primary animate-pulse">ONLINE</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-grow bg-primary/30" />
              <div className="text-[10px] font-mono text-primary/50 tracking-[0.3em]">CLASSIFIED_INTEL</div>
            </div>
            
            <h2 
              className="font-display text-4xl font-bold mb-8 cursor-pointer select-none group"
              onClick={handleHeaderClick}
            >
              <span className={`text-xl block mb-2 font-mono tracking-widest ${secretMode ? "text-destructive" : "text-primary"}`}>04 // DOSSIER</span>
              <div className="flex items-center gap-4">
                <DecryptText text={secretMode ? "ADMIN_PROFILE" : "MISSION_BRIEF"} />
                <ChevronRight className={`w-8 h-8 ${secretMode ? "text-destructive" : "text-primary"} opacity-50 group-hover:translate-x-2 transition-transform`} />
              </div>
            </h2>
            
            <TerminalWindow 
              title={secretMode ? "ROOT_ACCESS_GRANTED" : "BIOGRAPHY.LOG"} 
              className={`${secretMode ? 'border-destructive/50 bg-destructive/5' : 'bg-black/80 border-primary/30'} transition-colors duration-500 shadow-2xl backdrop-blur-xl`}
            >
              <div className={`space-y-6 font-mono text-sm ${secretMode ? 'text-destructive/80' : 'text-primary/80'} leading-relaxed p-4`}>
                <div className="flex gap-4">
                  <div className={`w-0.5 bg-current opacity-30`} />
                  <p>
                    <span className="opacity-50 text-xs block mb-1">// INTRO</span>
                    I am a dedicated cybersecurity professional with a passion for breaking things to make them stronger. My code is my shield, and my network is my fortress.
                  </p>
                </div>

                <div className="flex gap-4">
                   <div className={`w-0.5 bg-current opacity-30`} />
                   <p>
                    <span className="opacity-50 text-xs block mb-1">// EXPERIENCE</span>
                    With over 5 years of experience in ethical hacking and threat intelligence, I specialize in identifying vulnerabilities before malicious actors can exploit them.
                  </p>
                </div>

                <div className="flex gap-4">
                   <div className={`w-0.5 bg-current opacity-30`} />
                   <p>
                    <span className="opacity-50 text-xs block mb-1">// PHILOSOPHY</span>
                    My philosophy is simple: Security is not a product, but a process. A continuous loop of monitoring, testing, and improving.
                  </p>
                </div>
                
                {secretMode && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-4 border-t border-destructive/30 text-destructive font-bold bg-destructive/5 p-4 mt-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                       <Eye className="w-4 h-4 animate-pulse" />
                       <span>EYES_ONLY_RESTRICTED</span>
                    </div>
                    <p className="text-xs">&gt; WARNING: CLASSIFIED DATA REVEALED</p>
                    <p className="text-xs">&gt; OPERATIVE CODE: GHOST_PROTOCOL</p>
                    <p className="text-xs">&gt; CURRENT MISSION: INFILTRATION</p>
                  </motion.div>
                )}

                <div className="text-[10px] pt-4 opacity-50 border-t border-current/10 mt-4 flex justify-between">
                  <span>// {secretMode ? "SYSTEM COMPROMISED" : "END OF FILE"}</span>
                  <span>Ln 42, Col 12</span>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </motion.div>
      </div>
    </section>
  );
}