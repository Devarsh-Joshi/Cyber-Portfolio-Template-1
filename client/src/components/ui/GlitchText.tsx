import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: any;
}

export function GlitchText({ text, className, as: Component = "span" }: GlitchTextProps) {
  return (
    <Component className={cn("relative inline-block font-mono group", className)}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-70 animate-glitch hidden group-hover:block" 
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-2px, -2px)" }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-70 animate-glitch hidden group-hover:block" 
        style={{ clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)", transform: "translate(2px, 2px)", animationDelay: "0.1s" }}
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
}