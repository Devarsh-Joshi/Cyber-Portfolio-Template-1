import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON'
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor (Dot) */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ 
          transform: `translate(${position.x - 1}px, ${position.y - 1}px)` 
        }}
      />
      
      {/* Outer Ring / Crosshair */}
      <div 
        className={cn(
          "fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[100] transition-all duration-100 ease-out flex items-center justify-center",
          isPointer ? "scale-150 bg-primary/10 border-primary" : "scale-100"
        )}
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)` 
        }}
      >
        <div className={cn(
          "w-[1px] h-full bg-primary/30 transition-all duration-300",
          isPointer ? "h-full" : "h-0"
        )} />
        <div className={cn(
          "h-[1px] w-full bg-primary/30 absolute transition-all duration-300",
          isPointer ? "w-full" : "w-0"
        )} />
      </div>

      {/* Trailing Text (Optional, keep subtle) */}
       <div 
        className="fixed top-0 left-0 pointer-events-none z-[99] text-[8px] font-mono text-primary/50 ml-4 mt-4 hidden md:block"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)` 
        }}
      >
        X:{Math.round(position.x)}_Y:{Math.round(position.y)}
      </div>
    </>
  );
}