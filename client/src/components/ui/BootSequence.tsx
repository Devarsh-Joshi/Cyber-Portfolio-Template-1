import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),  // BIOS Check
      setTimeout(() => setStep(2), 1500), // Loading Modules
      setTimeout(() => setStep(3), 2500), // Establishing Connection
      setTimeout(() => setStep(4), 3500), // Access Granted
      setTimeout(() => onComplete(), 4500) // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-black text-green-500 font-mono text-sm p-4 md:p-8 overflow-hidden cursor-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-2xl mx-auto space-y-2">
        {step >= 0 && (
          <div>
            <p>BIO-S v.2.4.1 (c) 2026 CyberSec Systems Inc.</p>
            <p>CPU: QUANTUM-CORE i9 @ 50.2 GHz</p>
            <p>RAM: 128TB [OK]</p>
          </div>
        )}
        
        {step >= 1 && (
          <div className="mt-4">
            <p>&gt; MOUNTING FILESYSTEM...</p>
            <p>&gt; CHECKING INTEGRITY... <span className="text-primary">[ PASS ]</span></p>
            <p>&gt; LOADING KERNEL MODULES...</p>
            <div className="w-64 h-2 bg-gray-900 border border-green-900 mt-2 relative overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1, ease: "linear" }}
                 className="h-full bg-primary"
               />
            </div>
          </div>
        )}

        {step >= 2 && (
          <div className="mt-4 space-y-1">
             <p className="opacity-80">Loaded: net_driver.ko</p>
             <p className="opacity-80">Loaded: gfx_render.ko</p>
             <p className="opacity-80">Loaded: sec_protocol.v2</p>
             <p className="text-yellow-500">WARNING: UNSECURED CONNECTION DETECTED.</p>
             <p>&gt; INITIATING VPN TUNNEL...</p>
          </div>
        )}

        {step >= 3 && (
          <div className="mt-4">
             <TypeAnimation
               sequence={[
                 "ESTABLISHING SECURE HANDSHAKE...",
                 500,
                 "HANDSHAKE COMPLETE.",
                 "DECRYPTING INTERFACE...",
                 500
               ]}
               wrapper="div"
               cursor={false}
               speed={80}
             />
          </div>
        )}

         {step >= 4 && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-12 border border-primary p-4 text-center"
          >
             <h1 className="text-2xl md:text-4xl font-bold tracking-widest text-primary animate-pulse">
               ACCESS GRANTED
             </h1>
          </motion.div>
        )}
      </div>

      <div className="fixed bottom-4 right-4 text-xs opacity-50">
        SYSTEM_ID: {Math.random().toString(16).slice(2, 10).toUpperCase()}
      </div>
    </motion.div>
  );
}