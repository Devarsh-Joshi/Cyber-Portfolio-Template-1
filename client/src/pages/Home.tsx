import { useState, useEffect } from "react";
import { BreachScreen } from "@/components/story/BreachScreen";
import { CommandCenter } from "@/components/story/CommandCenter";
import { playSound } from "@/lib/sounds";

export default function Home() {
  const [isCompromised, setIsCompromised] = useState(true);

  // Initialize with audio context hint or silent play if needed
  useEffect(() => {
    // In a real browser environment, audio needs user interaction first.
    // The BreachScreen override click provides that interaction.
  }, []);

  const handleRestore = () => {
    setIsCompromised(false);
  };

  return (
    <>
      {isCompromised ? (
        <BreachScreen onOverride={handleRestore} />
      ) : (
        <CommandCenter />
      )}
      
      {/* Global overlay effects always present */}
      <div className="fixed inset-0 pointer-events-none z-[99999] opacity-10 mix-blend-overlay scanline" />
    </>
  );
}