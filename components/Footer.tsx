"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative py-10 px-4 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0e1a 0%, #050814 100%)",
        borderTop: "1px solid rgba(255,183,197,0.06)",
      }}
    >
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart
            size={18}
            fill="rgba(255,183,197,0.6)"
            style={{ color: "rgba(255,183,197,0.6)" }}
          />
        </motion.div>

        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-dancing)",
            color: "rgba(255,248,245,0.35)",
            fontSize: "1rem",
          }}
        >
          Made with love · Ega ❤️ Kiki · 2026
        </p>

        <p
          className="text-xs"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,248,245,0.2)",
          }}
        >
          Every day with you is my favorite day.
        </p>
      </motion.div>
    </footer>
  );
}
