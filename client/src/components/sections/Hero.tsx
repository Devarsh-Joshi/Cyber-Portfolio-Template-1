import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Crosshair } from "lucide-react";
import { DecryptText } from "@/components/ui/DecryptText";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "DOWNLOADING ASSET...",
      description: "resume_encrypted_v2.pdf",
      className: "border-primary text-primary font-mono bg-background/90",
    });
  };

  const handleProtocol = () => {
    toast({
      title: "PROTOCOL INITIATED",
      description: "Executing sequence...",
      className: "border-secondary text-secondary font-mono bg-background/90",
    });
    const element = document.querySelector("#projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      
      {/* Decorative HUD Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border-l border-t border-primary/20 rounded-tl-3xl pointer-events-none opacity-50 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-64 h-64 border-r border-b border-primary/20 rounded-br-3xl pointer-events-none opacity-50 hidden lg:block" />
      
      {/* Grid Overlay - subtle texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4 text-primary font-mono text-xs tracking-widest border border-primary/30 bg-primary/5 w-fit px-3 py-1 rounded-sm">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
            <DecryptText text="SYSTEM STATUS: OPERATIONAL" />
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none relative">
            <span className="absolute -left-8 top-0 text-sm font-mono text-muted-foreground -rotate-90 origin-top-right opacity-50 hidden md:block">
              SECURE_HEADER_TAG
            </span>
            <DecryptText text="SECURE" className="block text-foreground" speed={80} /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600 animate-pulse block">
               THE FUTURE
            </span>
          </h1>

          <div className="font-mono text-lg md:text-xl text-primary/80 mb-8 h-[60px] flex items-center gap-3 pl-4 border-l-2 border-primary/50">
            <TypeAnimation
              sequence={[
                "Initializing defense protocols...",
                500,
                "Threat assessment: CRITICAL",
                500,
                "Identity: Elite Cyber Specialist.",
                1000,
                "Mission: Protect digital infrastructure.",
                1000,
                "Penetration Testing | Forensics | Defense",
                5000,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap gap-0">
            <Button 
              size="lg" 
              onClick={handleProtocol}
              className="bg-primary/10 text-primary hover:bg-primary hover:text-background font-mono tracking-widest rounded-none border border-primary h-14 px-8 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Crosshair className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                INITIATE_PROTOCOL
              </span>
              <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 z-0" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleDownload}
              className="text-muted-foreground border-primary/30 hover:bg-primary/5 hover:text-primary hover:border-primary font-mono tracking-widest rounded-none h-14 px-8 backdrop-blur-sm transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD_CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Circular HUD Elements behind terminal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-dashed border-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
          
          <TerminalWindow title="ADMIN_CONSOLE" className="relative w-full max-w-lg mx-auto bg-black/80 border-primary/50 shadow-[0_0_50px_-12px_rgba(0,255,255,0.2)] backdrop-blur-xl">
            <div className="space-y-2 font-mono text-sm p-2">
              <div className="flex gap-2 text-primary/80 border-b border-primary/20 pb-2 mb-4">
                <span className="text-destructive">root@mainframe</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-secondary">~</span>
                <span className="text-foreground">$ neofetch --scifi</span>
              </div>
              
              <div className="flex gap-6">
                <div className="text-primary hidden sm:block opacity-80 pt-1">
                  <pre className="text-[10px] leading-[1.1]">
{`
   /\\
  /  \\    [SECURE]
 /_  _\\   [VERIFIED]
   ||
   ||     CYBER_SEC
   ||     UNIT_01
  _||_
`}
                  </pre>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-primary font-bold">IDENTITY:</span>
                    <DecryptText text="Cyber Security Analyst" speed={30} />
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-primary font-bold">OS_KERNEL:</span>
                    <span>Kali Linux Rolling</span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-primary font-bold">SHELL:</span>
                    <span>ZSH 5.9 (custom)</span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-primary font-bold">STATUS:</span>
                    <span className="text-destructive animate-pulse">ACTIVE_HUNTING</span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-primary font-bold">LOCATION:</span>
                    <span>Node_742.Encrypted</span>
                  </div>
                  
                  <div className="flex gap-1 mt-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary/20 border border-primary/50" style={{ opacity: 1 - (i * 0.15) }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4 animate-pulse text-primary">
                <span>_</span>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}