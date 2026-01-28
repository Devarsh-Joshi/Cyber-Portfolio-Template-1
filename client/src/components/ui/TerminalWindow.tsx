import { cn } from "@/lib/utils";
import { X, Minus, Square, Terminal } from "lucide-react";

interface TerminalWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function TerminalWindow({ title = "bash", children, className, ...props }: TerminalWindowProps) {
  return (
    <div 
      className={cn(
        "rounded-sm border bg-card/90 backdrop-blur shadow-xl overflow-hidden font-mono",
        className
      )} 
      {...props}
    >
      <div className="flex items-center justify-between px-3 py-1.5 bg-background/50 border-b border-inherit">
        <div className="flex items-center gap-2 text-inherit opacity-70">
          <Terminal className="w-3 h-3" />
          <div className="text-[10px] select-none uppercase tracking-widest font-bold">
            {title}
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-50">
          <div className="w-2 h-2 border border-current" />
          <div className="w-2 h-2 border border-current bg-current" />
          <X className="w-3 h-3" />
        </div>
      </div>
      <div className="p-0">
        {children}
      </div>
    </div>
  );
}