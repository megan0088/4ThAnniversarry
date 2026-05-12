"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile("ontouchstart" in window);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHovering(
        !!t.closest("button, a, [role='button'], input, textarea")
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          border: "1.5px solid rgba(255,183,197,0.7)",
          boxShadow: isHovering
            ? "0 0 20px rgba(255,183,197,0.6)"
            : "0 0 10px rgba(255,183,197,0.3)",
        }}
        animate={{
          x: pos.x - (isHovering ? 24 : 18),
          y: pos.y - (isHovering ? 24 : 18),
          scale: isHovering ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-sakura"
        style={{ background: "#ffb7c5" }}
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.05 }}
      />
    </>
  );
}
