"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#gift", label: "Gift" },
  { href: "#gallery", label: "Gallery" },
  { href: "#letter", label: "Letter" },
  { href: "#reasons", label: "Reasons" },
  { href: "#final", label: "Ending" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,14,26,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,183,197,0.1)"
          : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLink("#hero")}
          className="flex items-center gap-2 group"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart
              size={20}
              fill="rgba(255,183,197,0.9)"
              className="text-sakura"
              style={{ color: "#ffb7c5" }}
            />
          </motion.div>
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-nunito)",
              color: "rgba(255,248,245,0.85)",
            }}
          >
            Ega ❤️ Kiki
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-sm tracking-wide transition-all duration-200 hover:text-sakura relative group"
                style={{
                  fontFamily: "var(--font-nunito)",
                  color: "rgba(255,248,245,0.65)",
                }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(to right, #ffb7c5, #c9b8e8)",
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden text-warm-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "rgba(255,248,245,0.8)" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            style={{
              background: "rgba(10,14,26,0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,183,197,0.1)",
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleLink(l.href)}
                    className="w-full text-left py-2 text-sm tracking-wide"
                    style={{
                      fontFamily: "var(--font-nunito)",
                      color: "rgba(255,248,245,0.7)",
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
