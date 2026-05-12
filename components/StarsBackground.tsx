"use client";
import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface Firefly {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const StarsBackground = memo(function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 45 : 90;
    const fireflyCount = isMobile ? 5 : 12;

    setStars(
      Array.from({ length: starCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
      }))
    );
    setFireflies(
      Array.from({ length: fireflyCount }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 30 + Math.random() * 60,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 8,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.15, 1, 0.15], scale: [0.8, 1.3, 0.8] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {fireflies.map((ff) => (
        <motion.div
          key={ff.id}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${ff.x}%`,
            top: `${ff.y}%`,
            background:
              "radial-gradient(circle, #aaffaa 0%, #66ff66 50%, transparent 100%)",
            boxShadow: "0 0 6px 2px rgba(150,255,150,0.5)",
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -20, -40, -15, 0],
            opacity: [0.2, 0.8, 0.3, 0.9, 0.2],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            duration: ff.duration,
            delay: ff.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export default StarsBackground;
