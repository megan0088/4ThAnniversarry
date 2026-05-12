"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { reasons } from "@/lib/data";

export default function ReasonsSection() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  let heartId = 0;

  const handleFlip = (id: number, e: React.MouseEvent) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newHearts = Array.from({ length: 4 }, () => ({
      id: heartId++,
      x: rect.left + Math.random() * rect.width,
      y: rect.top + Math.random() * rect.height,
    }));
    setHearts((prev) => [...prev.slice(-20), ...newHearts]);
    setTimeout(
      () =>
        setHearts((prev) =>
          prev.filter((h) => !newHearts.some((n) => n.id === h.id))
        ),
      2500
    );
  };

  return (
    <section
      id="reasons"
      className="relative py-24 md:py-36 px-4 md:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0e1a 0%, #110a22 50%, #0a0e1a 100%)",
      }}
    >
      {/* Bloom bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(255,183,197,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Floating click hearts */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <AnimatePresence>
          {hearts.map((h) => (
            <motion.div
              key={h.id}
              className="absolute text-lg"
              style={{ left: h.x, top: h.y }}
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -80, scale: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{
              fontFamily: "var(--font-nunito)",
              color: "rgba(255,183,197,0.6)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tap a card to reveal
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-playfair)",
              background: "linear-gradient(135deg, #fff8f5, #ffb7c5 40%, #ffd4b8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Why I Love You
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((r, i) => {
            const isFlipped = flipped.has(r.id);
            return (
              <motion.div
                key={r.id}
                className="relative cursor-pointer"
                style={{ perspective: 1000, height: 175 }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                onClick={(e) => handleFlip(r.id, e)}
              >
                {/* Card inner */}
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2 glass-light"
                    style={{
                      backfaceVisibility: "hidden",
                      border: "1px solid rgba(255,183,197,0.15)",
                    }}
                  >
                    <span className="text-3xl">{r.emoji}</span>
                    <div className="flex items-center gap-1">
                      <Heart
                        size={10}
                        fill="rgba(255,183,197,0.5)"
                        style={{ color: "rgba(255,183,197,0.5)" }}
                      />
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-nunito)",
                          color: "rgba(255,248,245,0.35)",
                        }}
                      >
                        Tap to reveal
                      </span>
                      <Heart
                        size={10}
                        fill="rgba(255,183,197,0.5)"
                        style={{ color: "rgba(255,183,197,0.5)" }}
                      />
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className={`absolute inset-0 rounded-2xl flex items-center justify-center p-4 bg-gradient-to-br ${r.gradient}`}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      border: "1px solid rgba(255,183,197,0.2)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <p
                      className="text-center text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-dancing)",
                        color: "rgba(255,248,245,0.92)",
                        fontSize: "1rem",
                      }}
                    >
                      {r.text}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
