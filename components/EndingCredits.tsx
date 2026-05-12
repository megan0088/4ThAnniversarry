"use client";
import { motion } from "framer-motion";

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: (i * 13.7) % 100,
  y: (i * 9.3) % 100,
  size: 0.7 + (i % 3) * 0.5,
  dur: 2 + (i % 6) * 0.7,
}));

export default function EndingCredits() {
  return (
    <section
      id="credits"
      className="relative flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ minHeight: "100dvh", background: "#000" }}
    >
      {/* Slow drifting stars */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            animate={{ opacity: [0.05, 0.6, 0.05] }}
            transition={{
              duration: s.dur,
              delay: (s.id * 0.11) % 4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Credits content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <motion.p
          className="text-xs tracking-[0.5em] uppercase"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.3)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Starring
        </motion.p>

        <motion.h1
          style={{
            fontFamily: "var(--font-playfair)",
            background: "linear-gradient(135deg, #fff8f5, #ffb7c5 40%, #c9b8e8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "clamp(2.2rem, 8vw, 4rem)",
            fontWeight: "bold",
            filter: "drop-shadow(0 0 30px rgba(255,183,197,0.3))",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.4 }}
        >
          Ega ❤️ Kiki
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <div
            className="h-px w-16 md:w-28"
            style={{
              background: "linear-gradient(to right, transparent, rgba(255,183,197,0.4))",
            }}
          />
          <span style={{ color: "rgba(255,183,197,0.5)", fontSize: "0.85rem" }}>✦</span>
          <div
            className="h-px w-16 md:w-28"
            style={{
              background: "linear-gradient(to left, transparent, rgba(255,183,197,0.4))",
            }}
          />
        </motion.div>

        <motion.p
          style={{
            fontFamily: "var(--font-dancing)",
            color: "rgba(255,248,245,0.5)",
            fontSize: "1.3rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.8, duration: 1.5 }}
        >
          Thank you for 4 beautiful years.
        </motion.p>

        <motion.p
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.2)",
            fontSize: "0.8rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3.8, duration: 1.5 }}
        >
          May 2022 — Forever
        </motion.p>

        {/* CTA to restart */}
        <motion.a
          href="#hero"
          className="mt-6 px-8 py-3 rounded-full text-xs tracking-widest uppercase btn-shimmer flex items-center gap-2"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.7)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 4.8, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          🌸 Watch Again
        </motion.a>
      </motion.div>
    </section>
  );
}
