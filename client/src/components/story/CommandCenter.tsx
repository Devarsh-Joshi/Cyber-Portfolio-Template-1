import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Cpu, 
  Globe, 
  FileText, 
  Target, 
  Terminal as TerminalIcon,
  Wifi,
  Database,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DecryptText } from "@/components/ui/DecryptText";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";

// Navigation Tabs
const tabs = [
  { id: 'dashboard', label: 'THREAT_MONITOR', icon: Globe },
  { id: 'projects', label: 'MISSION_LOGS', icon: Database },
  { id: 'skills', label: 'ARSENAL', icon: Cpu },
  { id: 'about', label: 'OPERATIVE', icon: FileText },
];

export function CommandCenter() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      {/* Top HUD Bar */}
      <header className="h-16 border-b border-primary/30 bg-background/90 backdrop-blur z-50 flex items-center justify-between px-6 shadow-[0_5px_20px_rgba(0,255,255,0.05)]">
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <div>
             <h1 className="font-display font-bold text-xl tracking-widest text-primary">COMMAND_CENTER</h1>
             <div className="text-[10px] font-mono text-muted-foreground flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               SYSTEM_SECURE
             </div>
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs hidden md:flex">
           <div className="text-right">
             <span className="block text-primary/50">LOCATION</span>
             <span>NODE_US_EAST</span>
           </div>
           <div className="text-right">
             <span className="block text-primary/50">UPTIME</span>
             <span>04:22:19:88</span>
           </div>
           <div className="text-right">
             <span className="block text-primary/50">THREAT_LEVEL</span>
             <span className="text-green-500">LOW</span>
           </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar Navigation */}
        <aside className="w-16 md:w-64 border-r border-primary/20 bg-background/50 flex flex-col z-40 flex-shrink-0">
           <nav className="flex-1 py-4 md:py-8 space-y-2">
             {tabs.map((tab) => {
               const Icon = tab.icon;
               const isActive = activeTab === tab.id;
               return (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={cn(
                     "w-full flex items-center justify-center md:justify-start gap-4 px-2 md:px-6 py-4 transition-all duration-300 relative group",
                     isActive 
                       ? "text-primary bg-primary/10 border-r-2 border-primary" 
                       : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                   )}
                 >
                   <Icon className={cn("w-6 h-6 flex-shrink-0", isActive && "animate-pulse")} />
                   <span className="font-mono text-sm tracking-wider hidden md:block">
                     <DecryptText text={tab.label} animateOnHover />
                   </span>
                   
                   {/* Hover Bracket Effect */}
                   <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary transition-all group-hover:h-8 opacity-0 group-hover:opacity-100 hidden md:block" />
                 </button>
               );
             })}
           </nav>
           
           <div className="p-4 border-t border-primary/20 hidden md:block">
             <TerminalWindow title="SYS_LOG" className="h-32 text-[10px] opacity-70 border-none bg-transparent shadow-none">
               <div className="space-y-1 text-primary/60">
                 <p>&gt; Connection established.</p>
                 <p>&gt; User authenticated.</p>
                 <p>&gt; Decrypting operational data...</p>
                 <p>&gt; Ready for input.</p>
                 <p className="animate-pulse">_</p>
               </div>
             </TerminalWindow>
           </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 relative overflow-y-auto overflow-x-hidden bg-black/20 w-full">
           {/* Grid Background */}
           <div 
             className="absolute inset-0 z-0 opacity-30 pointer-events-none"
             style={{
               backgroundImage: "url('/secure-bg.png')",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundAttachment: "fixed"
             }}
           />
           <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

           <div className="relative z-10 p-4 md:p-12 min-h-full">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                 exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                 transition={{ duration: 0.4 }}
                 className="max-w-7xl mx-auto w-full"
               >
                 {activeTab === 'dashboard' && <DashboardView />}
                 {activeTab === 'projects' && <Projects />}
                 {activeTab === 'skills' && <Skills />}
                 {activeTab === 'about' && <About />}
               </motion.div>
             </AnimatePresence>
           </div>
        </main>
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
       {/* Main Threat Map Area */}
       <div className="lg:col-span-2 space-y-6">
         <div className="h-[400px] border border-primary/30 rounded-sm bg-black/40 backdrop-blur relative overflow-hidden group">
           <div className="absolute top-0 left-0 bg-primary/20 px-4 py-1 text-xs font-mono text-primary flex items-center gap-2 border-b border-r border-primary/30 rounded-br-lg">
             <Target className="w-4 h-4" /> GLOBAL_THREAT_MAP
           </div>
           
           {/* Simulated Map Data Points */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-60">
              <div className="w-[80%] h-[80%] border border-dashed border-primary/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-[30%] left-[40%] w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <div className="absolute top-[60%] right-[30%] w-2 h-2 bg-yellow-500 rounded-full animate-ping delay-700" />
              <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           </div>

           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="font-display text-4xl font-bold text-primary/10 tracking-[1em]">SECURE</div>
           </div>
         </div>

         <div className="grid grid-cols-2 gap-6">
            <div className="p-6 border border-primary/20 bg-card/40 backdrop-blur">
              <h3 className="font-mono text-xs text-muted-foreground mb-2">SYSTEM_INTEGRITY</h3>
              <div className="text-4xl font-display font-bold text-green-500">99.9%</div>
              <div className="h-1 w-full bg-green-900 mt-2">
                <div className="h-full w-[99.9%] bg-green-500" />
              </div>
            </div>
            <div className="p-6 border border-primary/20 bg-card/40 backdrop-blur">
              <h3 className="font-mono text-xs text-muted-foreground mb-2">ACTIVE_SESSIONS</h3>
              <div className="text-4xl font-display font-bold text-primary">1</div>
              <div className="h-1 w-full bg-primary/20 mt-2">
                <div className="h-full w-[100%] bg-primary animate-pulse" />
              </div>
            </div>
         </div>
       </div>

       {/* Right Column: Alerts & Feed */}
       <div className="space-y-6">
          <div className="p-6 border border-primary/30 bg-black/40 h-full backdrop-blur">
            <h3 className="font-mono text-xs text-primary mb-4 flex items-center gap-2">
              <Wifi className="w-4 h-4" /> LIVE_INTEL_FEED
            </h3>
            <div className="space-y-4 font-mono text-xs text-muted-foreground">
               {[1, 2, 3, 4, 5].map((i) => (
                 <div key={i} className="flex gap-2 border-b border-primary/10 pb-2">
                   <span className="text-primary/50">{`0${i}:00:2${i}`}</span>
                   <span>Analyzing heuristic patterns... [OK]</span>
                 </div>
               ))}
               <div className="flex gap-2 text-green-500 animate-pulse">
                   <span>NOW</span>
                   <span>New operative connected.</span>
               </div>
            </div>
          </div>
       </div>
    </div>
  );
}
