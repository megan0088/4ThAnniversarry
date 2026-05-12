"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loveLetterText } from "@/lib/data";

export default function LoveLetterSection() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Start typewriter once envelope is opened
  useEffect(() => {
    if (!envelopeOpen) return;
    const t = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(t);
  }, [envelopeOpen]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    intervalRef.current = setInterval(() => {
      if (i >= loveLetterText.length) {
        clearInterval(intervalRef.current!);
        return;
      }
      setDisplayed(loveLetterText.slice(0, i + 1));
      i++;
    }, 22);
    return () => clearInterval(intervalRef.current!);
  }, [started]);

  return (
    <section
      id="letter"
      className="relative py-24 md:py-36 px-4 md:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0e1a 0%, #120d28 40%, #0a0e1a 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(107,63,160,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "var(--font-nunito)", color: "rgba(255,183,197,0.6)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            A Letter for You
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-playfair)",
              background: "linear-gradient(135deg, #fff8f5, #ffb7c5 40%, #c9b8e8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Love Letter
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          {!envelopeOpen ? (
            /* Envelope */
            <motion.div
              key="envelope"
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              exit={{ opacity: 0, scale: 0.8, y: -30 }}
            >
              {/* Glowing envelope */}
              <motion.button
                className="relative flex items-center justify-center"
                style={{
                  width: 200,
                  height: 140,
                  borderRadius: 12,
                  background:
                    "linear-gradient(145deg, rgba(255,183,197,0.12), rgba(201,184,232,0.1))",
                  border: "1.5px solid rgba(255,183,197,0.3)",
                  backdropFilter: "blur(12px)",
                  cursor: "pointer",
                }}
                onClick={() => setEnvelopeOpen(true)}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,183,197,0.2), 0 0 40px rgba(255,183,197,0.08)",
                    "0 0 35px rgba(255,183,197,0.45), 0 0 70px rgba(255,183,197,0.18)",
                    "0 0 20px rgba(255,183,197,0.2), 0 0 40px rgba(255,183,197,0.08)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Envelope flap (triangle top) */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    borderLeft: "100px solid transparent",
                    borderRight: "100px solid transparent",
                    borderTop: "60px solid rgba(255,183,197,0.18)",
                  }}
                />
                {/* Bottom V fold */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    borderLeft: "100px solid transparent",
                    borderRight: "100px solid transparent",
                    borderBottom: "50px solid rgba(255,183,197,0.1)",
                  }}
                />
                {/* Center seal */}
                <motion.div
                  style={{
                    position: "absolute",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255,183,197,0.6), rgba(201,184,232,0.4))",
                    border: "1px solid rgba(255,183,197,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💌
                </motion.div>
              </motion.button>

              <motion.p
                style={{
                  fontFamily: "var(--font-dancing)",
                  color: "rgba(255,183,197,0.6)",
                  fontSize: "1.15rem",
                }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Tap to open the letter ✉️
              </motion.p>
            </motion.div>
          ) : (
            /* Letter revealed */
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 60px rgba(107,63,160,0.15), 0 0 120px rgba(255,183,197,0.06)",
                }}
              >
                <div className="absolute top-4 left-4 text-2xl opacity-30" style={{ fontFamily: "var(--font-dancing)" }}>❝</div>
                <div className="absolute bottom-4 right-4 text-2xl opacity-30" style={{ fontFamily: "var(--font-dancing)" }}>❞</div>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(255,183,197,0.12), transparent)" }}
                />
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="text-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💌
                  </motion.div>
                </div>
                <div
                  className="leading-[2] whitespace-pre-wrap text-sm md:text-base"
                  style={{
                    fontFamily: "var(--font-dancing)",
                    color: "rgba(255,248,245,0.85)",
                    fontSize: "1.05rem",
                    minHeight: "20rem",
                  }}
                >
                  {displayed}
                  {started && displayed.length < loveLetterText.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      style={{ color: "#ffb7c5" }}
                    >
                      |
                    </motion.span>
                  )}
                </div>
              </motion.div>

              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute pointer-events-none text-lg"
                  style={{ left: `${15 + i * 22}%`, bottom: "0" }}
                  animate={{ y: [0, -80 - i * 20], opacity: [0.8, 0], scale: [1, 0.4] }}
                  transition={{ duration: 3.5, delay: i * 1.5, repeat: Infinity, ease: "easeOut" }}
                >
                  💕
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
