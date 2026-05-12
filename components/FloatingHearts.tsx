"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    let counter = 0;
    const spawn = () => {
      const id = counter++;
      setHearts((prev) => [
        ...prev.slice(-12),
        {
          id,
          x: 5 + Math.random() * 90,
          size: 12 + Math.random() * 16,
          delay: Math.random() * 0.5,
        },
      ]);
    };

    const id = setInterval(spawn, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            className="absolute bottom-10"
            style={{ left: `${h.x}%` }}
            initial={{ y: 0, opacity: 0.9, scale: 1 }}
            animate={{ y: -200, opacity: 0, scale: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3.5 + h.delay, ease: "easeOut" }}
          >
            <svg
              width={h.size}
              height={h.size}
              viewBox="0 0 24 24"
              fill="rgba(255,183,197,0.8)"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
