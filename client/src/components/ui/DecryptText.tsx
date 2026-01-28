import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface DecryptTextProps {
  text: string;
  className?: string;
  speed?: number;
  animateOnHover?: boolean;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';

export function DecryptText({ text, className, speed = 50, animateOnHover = true }: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    if (!animateOnHover) {
      scramble();
    }
  }, []);

  const handleMouseEnter = () => {
    if (animateOnHover) {
      setIsHovering(true);
      scramble();
    }
  };

  return (
    <span 
      className={cn("font-mono inline-block min-w-[1ch]", className)}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
}