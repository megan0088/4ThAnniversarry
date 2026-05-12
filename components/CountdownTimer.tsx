"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

function CountCard({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        className="glass rounded-2xl w-[4.5rem] h-[4.5rem] md:w-28 md:h-28 flex items-center justify-center relative overflow-hidden"
        style={{
          border: "1px solid rgba(255,183,197,0.2)",
          boxShadow:
            "0 0 25px rgba(255,183,197,0.1), inset 0 0 20px rgba(255,183,197,0.05)",
          animation: "glow-pulse 2.5s ease-in-out infinite",
        }}
        whileTap={{ scale: 0.97 }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,183,197,0.4), transparent)",
          }}
        />
        <span
          className="relative text-2xl md:text-4xl font-bold"
          style={{
            fontFamily: "var(--font-playfair)",
            background: "linear-gradient(135deg, #fff8f5, #ffb7c5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </motion.div>
      <span
        className="text-[0.65rem] md:text-xs tracking-widest uppercase"
        style={{
          fontFamily: "var(--font-nunito)",
          color: "rgba(255,248,245,0.45)",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function Colon() {
  return (
    <motion.div
      className="text-2xl md:text-3xl font-bold self-start mt-4 md:mb-8 md:self-center"
      style={{ color: "rgba(255,183,197,0.5)" }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      :
    </motion.div>
  );
}

export default function CountdownTimer() {
  const nextAnniversary = useMemo(
    () => new Date("2027-05-12T00:00:00"),
    []
  );
  const { days, hours, minutes, seconds } = useCountdown(nextAnniversary);

  return (
    <section
      id="countdown"
      className="relative py-20 md:py-36 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0e1a 0%, #0c1020 50%, #0a0e1a 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(45,27,105,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{
              fontFamily: "var(--font-nunito)",
              color: "rgba(247,208,138,0.6)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Counting Down
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-playfair)",
              background:
                "linear-gradient(135deg, #fff8f5, #f7d08a 40%, #ffb7c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            5th Anniversary
          </motion.h2>
          <motion.p
            className="mt-3 text-sm md:text-base"
            style={{
              fontFamily: "var(--font-dancing)",
              color: "rgba(247,208,138,0.7)",
              fontSize: "1.1rem",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            May 12, 2027
          </motion.p>
        </div>

        {/* ── Mobile: 2×2 grid (no colons) ── */}
        <div className="grid grid-cols-2 gap-5 max-w-[240px] mx-auto md:hidden">
          <CountCard value={days} label="Days" delay={0.1} />
          <CountCard value={hours} label="Hours" delay={0.2} />
          <CountCard value={minutes} label="Minutes" delay={0.3} />
          <CountCard value={seconds} label="Seconds" delay={0.4} />
        </div>

        {/* ── Desktop: horizontal row with colons ── */}
        <div className="hidden md:flex items-center justify-center gap-4">
          <CountCard value={days} label="Days" delay={0.1} />
          <Colon />
          <CountCard value={hours} label="Hours" delay={0.2} />
          <Colon />
          <CountCard value={minutes} label="Minutes" delay={0.3} />
          <Colon />
          <CountCard value={seconds} label="Seconds" delay={0.4} />
        </div>

        <motion.p
          className="text-center mt-10 md:mt-12 text-sm md:text-base"
          style={{
            fontFamily: "var(--font-dancing)",
            color: "rgba(255,248,245,0.45)",
            fontSize: "1.05rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Every second with you is a gift ✨
        </motion.p>
      </div>
    </section>
  );
}
