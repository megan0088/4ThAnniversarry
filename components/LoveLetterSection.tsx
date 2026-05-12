"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { loveLetterText } from "@/lib/data";

export default function LoveLetterSection() {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [started]);

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
      ref={containerRef}
      className="relative py-24 md:py-36 px-4 md:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0e1a 0%, #120d28 40%, #0a0e1a 100%)",
      }}
    >
      {/* Background bloom */}
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
            style={{
              fontFamily: "var(--font-nunito)",
              color: "rgba(255,183,197,0.6)",
            }}
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
              background:
                "linear-gradient(135deg, #fff8f5, #ffb7c5 40%, #c9b8e8)",
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

        {/* Letter card */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{
            boxShadow:
              "0 0 60px rgba(107,63,160,0.15), 0 0 120px rgba(255,183,197,0.06)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Corner decorations */}
          <div
            className="absolute top-4 left-4 text-2xl opacity-30"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            ❝
          </div>
          <div
            className="absolute bottom-4 right-4 text-2xl opacity-30"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            ❞
          </div>

          {/* Glow blur top */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,183,197,0.12), transparent)",
            }}
          />

          {/* Envelope icon */}
          <div className="flex justify-center mb-6">
            <motion.div
              className="text-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💌
            </motion.div>
          </div>

          {/* Letter text */}
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

        {/* Floating hearts around the letter */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none text-lg"
            style={{
              left: `${15 + i * 22}%`,
              bottom: "0",
            }}
            animate={{
              y: [0, -80 - i * 20],
              opacity: [0.8, 0],
              scale: [1, 0.4],
            }}
            transition={{
              duration: 3.5,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            💕
          </motion.div>
        ))}
      </div>
    </section>
  );
}
