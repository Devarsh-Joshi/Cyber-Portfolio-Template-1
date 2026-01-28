import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lock, Database, Globe, Cpu, ChevronRight } from "lucide-react";
import { DecryptText } from "@/components/ui/DecryptText";
import { useToast } from "@/hooks/use-toast";

const projects = [
  {
    title: "PROJECT_AEGIS",
    description: "Enterprise-grade intrusion detection system using machine learning anomalies detection.",
    tags: ["Python", "TensorFlow", "Network Security"],
    status: "CLASSIFIED",
    clearance: "TOP SECRET",
    icon: <Lock className="w-8 h-8 text-destructive" />,
    link: "#"
  },
  {
    title: "VULN_SCANNER_V4",
    description: "Automated vulnerability scanner designed for microservices architecture.",
    tags: ["Go", "Docker", "REST API"],
    status: "OPEN SOURCE",
    clearance: "PUBLIC",
    icon: <Globe className="w-8 h-8 text-primary" />,
    link: "#"
  },
  {
    title: "SECURE_VAULT",
    description: "Zero-knowledge encryption file storage solution for sensitive data transfer.",
    tags: ["Rust", "WASM", "Cryptography"],
    status: "DEPLOYED",
    clearance: "RESTRICTED",
    icon: <Database className="w-8 h-8 text-secondary" />,
    link: "#"
  },
  {
    title: "NEURAL_DEFENSE",
    description: "AI-driven firewall that adapts to new attack vectors in real-time.",
    tags: ["PyTorch", "C++", "Neural Networks"],
    status: "PROTOTYPE",
    clearance: "INTERNAL",
    icon: <Cpu className="w-8 h-8 text-destructive" />,
    link: "#"
  }
];

export function Projects() {
  const { toast } = useToast();

  const handleAction = (action: string, project: string) => {
    toast({
      title: `INITIATING ${action}...`,
      description: `Accessing secure files for ${project}`,
      className: "border-primary text-primary font-mono bg-background/90",
    });
  };

  return (
    <section id="projects" className="py-8 relative">
       
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-primary/30 pb-4"
        >
          <div>
            <div className="text-[10px] font-mono text-primary/50 tracking-[0.3em] mb-1">SECURE_ARCHIVES</div>
            <h2 className="font-display text-4xl font-bold mb-2">
              <span className="text-primary text-xl block mb-2 font-mono tracking-widest">02 // DATABASE</span>
              <DecryptText text="CASE_FILES" />
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground max-w-lg text-right">
             <span className="text-destructive animate-pulse">●</span> RESTRICTED ACCESS AREA
             <br />
             AUTHORIZED PERSONNEL ONLY
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div className="group h-full hud-panel p-0 overflow-hidden hover:border-primary/80 transition-colors duration-500">
                
                <div className="p-1">
                   <div className="bg-primary/5 p-4 md:p-8 flex flex-col h-full relative">
                      
                      {/* Header Section */}
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4 md:mb-6 gap-2 sm:gap-0">
                         <div className="border border-primary/30 bg-background/50 p-2 rounded-sm group-hover:bg-primary/20 transition-colors">
                           {project.icon}
                         </div>
                         <div className="flex flex-col items-start sm:items-end gap-1 w-full sm:w-auto">
                           <span className="text-[10px] font-mono text-primary/60 border border-primary/20 px-2 py-0.5 bg-background/50 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                             ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}
                           </span>
                           <span className={`text-[10px] font-bold font-mono px-2 py-0.5 border ${
                             project.clearance === 'TOP SECRET' ? 'text-destructive border-destructive bg-destructive/10' : 
                             project.clearance === 'PUBLIC' ? 'text-primary border-primary bg-primary/10' :
                             'text-secondary border-secondary bg-secondary/10'
                           }`}>
                             {project.clearance}
                           </span>
                         </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-display text-xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors flex items-center gap-2 flex-wrap">
                        <DecryptText text={project.title} animateOnHover={true} />
                        <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary hidden sm:block" />
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 font-mono text-xs md:text-sm leading-relaxed border-l-2 border-primary/20 pl-4 group-hover:border-primary/60 transition-colors">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono text-primary/80 bg-background/50 px-2 py-1 border border-primary/20 group-hover:border-primary/40">
                            //{tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Bar */}
                      <div className="grid grid-cols-2 gap-px bg-primary/20 border border-primary/20">
                        <button 
                          onClick={() => handleAction("SOURCE_CODE", project.title)}
                          className="bg-background/80 hover:bg-primary hover:text-background p-3 font-mono text-[10px] md:text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn"
                        >
                          <Github className="w-4 h-4" /> 
                          <span>Source</span>
                        </button>
                        <button 
                          onClick={() => handleAction("LIVE_DEMO", project.title)}
                          className="bg-background/80 hover:bg-primary hover:text-background p-3 font-mono text-[10px] md:text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Deploy</span>
                        </button>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}