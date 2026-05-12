"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const petals = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  dur: 4 + Math.random() * 5,
  delay: Math.random() * 6,
  size: 10 + Math.random() * 12,
}));

export default function LoadingScreen({ onComplete }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), 3800);
    const t2 = setTimeout(onComplete, 4900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse at 60% 30%, #1e1240 0%, #0a0e1a 60%, #0d1630 100%)",
          }}
        >
          {/* Animated gradient aurora bg */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(120deg, #6b3fa0 0%, #2d1b69 30%, #13192b 60%, #ff6b9d22 100%)",
              backgroundSize: "400% 400%",
              animation: "aurora 8s ease infinite",
            }}
          />

          {/* Stars shimmer */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: 1 + Math.random() * 2,
                  height: 1 + Math.random() * 2,
                }}
                animate={{ opacity: [0.1, 0.9, 0.1] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  delay: Math.random() * 3,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* Sakura petals */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {petals.map((p) => (
              <div
                key={p.id}
                className="absolute top-[-20px]"
                style={{
                  left: `${p.left}%`,
                  animation: `sakura-fall ${p.dur}s linear ${p.delay}s infinite`,
                }}
              >
                <svg width={p.size} height={p.size} viewBox="0 0 24 24">
                  <path
                    d="M12 2C13.5 4 17 5 17 9C17 13 13.5 15.5 12 20C10.5 15.5 7 13 7 9C7 5 10.5 4 12 2Z"
                    fill="rgba(255,183,197,0.7)"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Moon glow */}
          <motion.div
            className="absolute top-12 right-16 md:top-20 md:right-24 w-20 h-20 md:w-28 md:h-28 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #fff8e0 0%, #ffe8a0 40%, transparent 80%)",
              animation: "moon-glow 3s ease-in-out infinite",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
            {/* Small caption */}
            <motion.p
              className="text-sm md:text-base tracking-[0.4em] uppercase"
              style={{
                color: "rgba(255,183,197,0.7)",
                fontFamily: "var(--font-nunito)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Happy 4th Anniversary
            </motion.p>

            {/* Main title */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                background:
                  "linear-gradient(135deg, #ffb7c5 0%, #e4d9f5 50%, #ffd4b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 0 30px rgba(255,183,197,0.5))",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
            >
              Ega ❤️ Kiki
            </motion.h1>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div
                className="h-px w-16 md:w-24"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255,183,197,0.6))",
                }}
              />
              <motion.span
                className="text-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🌸
              </motion.span>
              <div
                className="h-px w-16 md:w-24"
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(255,183,197,0.6))",
                }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg"
              style={{
                color: "rgba(255,248,245,0.55)",
                fontFamily: "var(--font-nunito)",
                fontWeight: 300,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              4 years of love, memories, and forever together
            </motion.p>

            {/* Loading dots */}
            <motion.div
              className="flex gap-2 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "rgba(255,183,197,0.7)" }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 1.2,
                    delay: 2.5 + i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
