import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Lock, Search, Shield, Server, Terminal, Cpu, Database, Network } from "lucide-react";
import { DecryptText } from "@/components/ui/DecryptText";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "OFFENSIVE_OPS",
    icon: <Lock className="w-5 h-5 text-destructive" />,
    level: 92,
    items: ["Penetration Testing", "Metasploit Framework", "Burp Suite Pro", "SQL Injection", "Social Engineering"]
  },
  {
    category: "NETWORK_DEFENSE",
    icon: <Shield className="w-5 h-5 text-primary" />,
    level: 88,
    items: ["Firewall Hardening", "IDS/IPS Config", "Wireshark Analysis", "Zero Trust Architecture", "VPN Tunneling"]
  },
  {
    category: "DIGITAL_FORENSICS",
    icon: <Search className="w-5 h-5 text-secondary" />,
    level: 85,
    items: ["Memory Analysis", "Malware Reverse Eng", "Chain of Custody", "Data Recovery", "Log Auditing"]
  },
  {
    category: "CLOUD_SECURITY",
    icon: <Server className="w-5 h-5 text-primary" />,
    level: 90,
    items: ["AWS IAM Policies", "Docker Containment", "Kubernetes Sec", "Terraform Audits", "CI/CD Pipeline Sec"]
  },
  {
    category: "CRYPTOGRAPHY",
    icon: <Terminal className="w-5 h-5 text-secondary" />,
    level: 78,
    items: ["PKI Infrastructure", "SSL/TLS Config", "Hash Functions", "Encryption Standards", "Blockchain Analysis"]
  },
  {
    category: "SCRIPTING",
    icon: <Cpu className="w-5 h-5 text-destructive" />,
    level: 95,
    items: ["Python Automation", "Bash Scripting", "PowerShell", "Go Tools", "Rust Exploit Dev"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-8 relative overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-end justify-between border-b border-primary/30 pb-4 relative"
        >
           {/* Section Header with HUD decoration */}
          <div className="relative">
            <div className="absolute -top-6 left-0 text-[10px] font-mono text-primary/50 tracking-[0.3em]">SYSTEM_DIAGNOSTICS</div>
            <h2 className="font-display text-4xl font-bold leading-none">
              <span className="text-primary text-xl block mb-2 font-mono tracking-widest">03 // CAPABILITIES</span>
              <DecryptText text="ACTIVE_MODULES" />
            </h2>
          </div>
          
          <div className="hidden md:flex flex-col items-end gap-2 font-mono text-xs text-primary/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>SYSTEM_INTEGRITY: 100%</span>
            </div>
            <div className="w-32 h-1 bg-primary/20">
              <div className="w-full h-full bg-primary animate-pulse origin-left scale-x-100" />
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div className="hud-panel p-4 md:p-6 h-full flex flex-col gap-4 group hover:bg-primary/5 transition-all duration-300">
                
                <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 border border-primary/30 group-hover:border-primary/80 transition-colors">
                      {skill.icon}
                    </div>
                    <div className="min-w-0">
                       <div className="text-[10px] font-mono text-primary/50 truncate">MOD_{index + 1}0{index}</div>
                       <h3 className="font-display font-bold text-base md:text-lg tracking-wider text-foreground truncate">
                        {skill.category}
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-xl md:text-2xl font-bold text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                    {skill.level}%
                  </span>
                </div>

                <div className="py-2">
                  <div className="flex justify-between text-[10px] font-mono text-primary/70 mb-1">
                    <span>LOADING...</span>
                    <span>COMPLETE</span>
                  </div>
                  <div className="h-1 w-full bg-muted overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.2 + (index * 0.1) }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {skill.items.map((item) => (
                    <span 
                      key={item} 
                      className="text-[10px] uppercase font-mono px-2 py-1 bg-primary/5 text-primary border border-primary/20 hover:bg-primary hover:text-background transition-all cursor-crosshair"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}