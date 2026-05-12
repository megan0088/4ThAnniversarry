"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScroll = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "100dvh",
        background:
          "radial-gradient(ellipse at 50% 0%, #1e1240 0%, #0d1530 35%, #0a0e1a 70%)",
      }}
    >
      {/* Parallax background layer */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "linear-gradient(135deg, #6b3fa040 0%, #2d1b6940 30%, transparent 60%, #ff6b9d15 100%)",
            backgroundSize: "300% 300%",
            animation: "aurora 10s ease infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background:
              "linear-gradient(to top, rgba(20,8,30,0.9) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Moon — smaller on mobile, pushed to avoid overlap */}
      <motion.div
        className="absolute top-20 right-6 sm:top-16 sm:right-12 md:top-24 md:right-24"
        style={{ y, animation: "moon-glow 3s ease-in-out infinite" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, #fff8e0 0%, #ffe8a0 35%, #ffd070 60%, rgba(255,200,80,0.4) 80%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ animation: "orbit 8s linear infinite" }}
        >
          <div
            className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
            style={{
              background: "radial-gradient(circle, #e4d9f5, #c9b8e8)",
              boxShadow: "0 0 8px rgba(201,184,232,0.8)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 md:px-8 gap-5 md:gap-6 pt-24 pb-24 md:py-0"
        style={{ opacity }}
      >
        {/* Pill label */}
        <motion.div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-[0.3em] uppercase"
          style={{
            background: "rgba(255,183,197,0.08)",
            border: "1px solid rgba(255,183,197,0.25)",
            color: "rgba(255,183,197,0.85)",
            fontFamily: "var(--font-nunito)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span>🌸</span>
          <span>4 Years of Love</span>
          <span>🌸</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-9xl font-black leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            background:
              "linear-gradient(135deg, #fff8f5 0%, #ffb7c5 30%, #c9b8e8 65%, #ffd4b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 40px rgba(255,183,197,0.4))",
          }}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        >
          Happy 4th
          <br />
          Anniversary
        </motion.h1>

        {/* Heartbeat divider */}
        <motion.div
          className="flex items-center gap-3 md:gap-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div
            className="h-px w-14 md:w-32"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,183,197,0.5))",
            }}
          />
          <motion.div
            style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
          >
            <Heart
              size={20}
              fill="#ffb7c5"
              style={{
                color: "#ffb7c5",
                filter: "drop-shadow(0 0 12px rgba(255,183,197,0.8))",
              }}
            />
          </motion.div>
          <div
            className="h-px w-14 md:w-32"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(255,183,197,0.5))",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="max-w-xs sm:max-w-lg text-sm md:text-xl font-light leading-relaxed"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.6)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          4 years of love, memories, and forever together.
        </motion.p>

        {/* Names */}
        <motion.p
          className="text-2xl md:text-3xl"
          style={{
            fontFamily: "var(--font-dancing)",
            color: "rgba(255,183,197,0.9)",
            textShadow: "0 0 20px rgba(255,183,197,0.5)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          Ega ❤️ Kiki
        </motion.p>

        {/* CTA Button — min 48px height for touch */}
        <motion.button
          className="mt-2 px-8 rounded-full text-sm tracking-widest uppercase btn-shimmer flex items-center justify-center"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.9)",
            minHeight: 48,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={handleScroll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Start Our Journey ✨
        </motion.button>
      </motion.div>

      {/* Scroll indicator — safe area aware */}
      <motion.button
        className="absolute flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-end pb-1"
        style={{
          bottom: "max(2rem, env(safe-area-inset-bottom, 2rem))",
        }}
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.35)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown
            size={16}
            style={{ color: "rgba(255,183,197,0.5)" }}
          />
        </motion.div>
      </motion.button>
    </section>
  );
}
