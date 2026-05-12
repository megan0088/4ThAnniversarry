"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Lantern {
  id: number;
  x: number;
  duration: number;
  delay: number;
  scale: number;
}

export default function FinalScene() {
  const [lanterns, setLanterns] = useState<Lantern[]>([]);

  useEffect(() => {
    setLanterns(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        duration: 10 + Math.random() * 8,
        delay: Math.random() * 10,
        scale: 0.6 + Math.random() * 0.6,
      }))
    );
  }, []);

  return (
    <section
      id="final"
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{
        minHeight: "100dvh",
        background:
          "radial-gradient(ellipse at 50% 80%, #1a0a30 0%, #0a0e1a 50%, #050814 100%)",
      }}
    >
      {/* Aurora bg */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "linear-gradient(120deg, #6b3fa022 0%, #2d1b6922 30%, transparent 60%, #ff6b9d11 100%)",
          backgroundSize: "400% 400%",
          animation: "aurora 12s ease infinite",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }, (_, i) => (
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
              duration: 2 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Floating lanterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {lanterns.map((l) => (
          <motion.div
            key={l.id}
            className="absolute bottom-0"
            style={{
              left: `${l.x}%`,
              animation: `lantern-rise ${l.duration}s ease-in-out ${l.delay}s infinite`,
            }}
          >
            <div
              style={{
                width: 20 * l.scale,
                height: 28 * l.scale,
                background: "linear-gradient(135deg, #f7d08a, #e8a46a)",
                borderRadius: "40% 40% 30% 30%",
                boxShadow: `0 0 ${15 * l.scale}px rgba(247,208,138,0.5), 0 0 ${30 * l.scale}px rgba(247,208,138,0.2)`,
                opacity: 0.7,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-2xl">
        {/* Animated heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
          style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
        >
          <Heart
            size={64}
            fill="#ffb7c5"
            style={{
              color: "#ffb7c5",
              filter:
                "drop-shadow(0 0 20px rgba(255,183,197,0.8)) drop-shadow(0 0 40px rgba(255,183,197,0.4))",
            }}
          />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            background: "linear-gradient(135deg, #fff8f5 0%, #ffb7c5 40%, #c9b8e8 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(255,183,197,0.3))",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          "Every moment with you feels like my favorite anime scene."
        </motion.blockquote>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div
            className="h-px w-20 md:w-32"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,183,197,0.5))",
            }}
          />
          <span className="text-sm" style={{ color: "rgba(255,183,197,0.7)" }}>
            ✦
          </span>
          <div
            className="h-px w-20 md:w-32"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(255,183,197,0.5))",
            }}
          />
        </motion.div>

        {/* Names */}
        <motion.p
          className="text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-dancing)",
            background: "linear-gradient(135deg, #ffb7c5, #c9b8e8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Ega ❤️ Kiki
        </motion.p>

        <motion.p
          className="text-sm md:text-base"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.4)",
            fontWeight: 300,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          4 years, thousands of moments, one heart
        </motion.p>

        {/* CTA button */}
        <motion.a
          href="#hero"
          className="mt-2 px-10 py-4 rounded-full text-sm tracking-widest uppercase btn-shimmer flex items-center gap-2"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.9)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Heart size={14} fill="rgba(255,183,197,0.8)" style={{ color: "rgba(255,183,197,0.8)" }} />
          Forever With You
          <Heart size={14} fill="rgba(255,183,197,0.8)" style={{ color: "rgba(255,183,197,0.8)" }} />
        </motion.a>
      </div>
    </section>
  );
}
