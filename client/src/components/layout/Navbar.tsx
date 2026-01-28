import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Shield, Activity, Target, Menu, X } from "lucide-react";
import { GlitchText } from "@/components/ui/GlitchText";
import { useToast } from "@/hooks/use-toast";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      toast({
        title: "ACCESS_DENIED",
        description: "External protocol locked. Clearance required.",
        className: "border-destructive text-destructive font-mono bg-background/90",
      });
    }
  };

  const navLinks = [
    { name: "01 // HOME", href: "/" },
    { name: "02 // ARCHIVES", href: "#projects" },
    { name: "03 // SYSTEMS", href: "#skills" },
    { name: "04 // INTEL", href: "#about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-primary/50 py-2 shadow-[0_5px_30px_rgba(0,255,255,0.1)]"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center border border-primary/50 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-all">
              <Shield className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 border border-primary opacity-30 scale-125 group-hover:scale-110 group-hover:opacity-60 transition-all rounded-sm" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
                CYBER<span className="text-primary">HUD</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-mono text-[10px] text-primary/70 leading-none tracking-widest">
                  SYS_ONLINE_V.3.1
                </span>
              </div>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "font-mono text-xs tracking-widest px-4 py-2 hover:bg-primary/10 transition-all relative group cursor-pointer border border-transparent hover:border-primary/30",
                location === link.href ? "text-primary border-primary/50 bg-primary/5" : "text-muted-foreground"
              )}
            >
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <GlitchText text={link.name} />
            </a>
          ))}
          <div className="h-6 w-px bg-primary/20 mx-4" />
          <button
            onClick={() => {
              toast({
                title: "COMM_LINK_ESTABLISHED",
                description: "Encryption key verified. Ready for transmission.",
                className: "border-primary text-primary font-mono bg-background/90",
              });
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-6 py-2 border border-primary/50 text-primary font-mono text-xs hover:bg-primary hover:text-background transition-all uppercase tracking-widest cursor-pointer shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
          >
            <Activity className="w-3 h-3" />
            Init_Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-primary p-2 border border-primary/30 bg-primary/5 active:bg-primary/20 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/30 p-0 md:hidden flex flex-col animate-in slide-in-from-top-5 shadow-2xl">
           {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-sm tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/10 p-4 border-l-2 border-transparent hover:border-primary transition-all flex items-center justify-between group"
            >
              {link.name}
              <Target className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}