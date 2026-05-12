"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROSES = [
  { id: 0,  x: 0,    y: -185, scale: 1.5,  rotate: 0,   delay: 0.04, size: 52, e: "🌹" },
  { id: 1,  x: -105, y: -148, scale: 1.1,  rotate: -20, delay: 0.10, size: 44, e: "🌹" },
  { id: 2,  x: 105,  y: -148, scale: 1.1,  rotate: 20,  delay: 0.10, size: 44, e: "🌹" },
  { id: 3,  x: -175, y: -85,  scale: 0.88, rotate: -38, delay: 0.16, size: 38, e: "🌹" },
  { id: 4,  x: 175,  y: -85,  scale: 0.88, rotate: 38,  delay: 0.16, size: 38, e: "🌹" },
  { id: 5,  x: -58,  y: -228, scale: 0.78, rotate: -10, delay: 0.20, size: 34, e: "🌹" },
  { id: 6,  x: 58,   y: -228, scale: 0.78, rotate: 10,  delay: 0.20, size: 34, e: "🌹" },
  { id: 7,  x: -148, y: -172, scale: 0.68, rotate: -28, delay: 0.25, size: 30, e: "🌸" },
  { id: 8,  x: 148,  y: -172, scale: 0.68, rotate: 28,  delay: 0.25, size: 30, e: "🌸" },
  { id: 9,  x: 0,    y: -265, scale: 0.62, rotate: 5,   delay: 0.28, size: 28, e: "🌹" },
  { id: 10, x: -208, y: -115, scale: 0.55, rotate: -52, delay: 0.32, size: 26, e: "🌸" },
  { id: 11, x: 208,  y: -115, scale: 0.55, rotate: 52,  delay: 0.32, size: 26, e: "🌸" },
];

const SPARKLES = [
  { id: 0,  x: -85,  y: -65,  delay: 0.14 },
  { id: 1,  x: 85,   y: -65,  delay: 0.17 },
  { id: 2,  x: -125, y: 15,   delay: 0.19 },
  { id: 3,  x: 125,  y: 15,   delay: 0.19 },
  { id: 4,  x: -55,  y: 80,   delay: 0.24 },
  { id: 5,  x: 55,   y: 80,   delay: 0.24 },
  { id: 6,  x: 5,    y: -95,  delay: 0.16 },
  { id: 7,  x: -108, y: -112, delay: 0.29 },
  { id: 8,  x: 108,  y: -112, delay: 0.29 },
  { id: 9,  x: -42,  y: -162, delay: 0.33 },
  { id: 10, x: 42,   y: -162, delay: 0.33 },
];

const BOX_W = 180;
const BOX_H = 130;
const LID_W = 196;
const LID_H = 48;

export default function GiftSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="gift"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0e1a 0%, #130d28 50%, #0a0e1a 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(200,16,46,0.07) 0%, transparent 68%)",
        }}
      />

      {/* Section header */}
      <div className="text-center mb-16 px-4">
        <motion.p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{ fontFamily: "var(--font-nunito)", color: "rgba(255,183,197,0.6)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          For You
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
          A Gift For You
        </motion.h2>
      </div>

      {/* Interactive area */}
      <div className="flex flex-col items-center gap-10 px-4">
        {/* Box + roses container */}
        <div className="relative" style={{ width: 340, height: 380 }}>

          {/* Zero-width anchor at the top of the box (roses burst from here) */}
          <div
            className="absolute"
            style={{ bottom: BOX_H + 8, left: "50%" }}
          >
            <AnimatePresence>
              {opened && ROSES.map((r) => (
                <motion.div
                  key={r.id}
                  className="absolute pointer-events-none select-none"
                  style={{ fontSize: r.size, lineHeight: 1 }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
                  animate={{
                    x: r.x,
                    y: r.y,
                    opacity: 1,
                    scale: r.scale,
                    rotate: r.rotate,
                  }}
                  transition={{
                    delay: r.delay,
                    duration: 0.75,
                    type: "spring",
                    stiffness: 130,
                    damping: 14,
                  }}
                >
                  {r.e}
                </motion.div>
              ))}
            </AnimatePresence>

            <AnimatePresence>
              {opened && SPARKLES.map((s) => (
                <motion.div
                  key={s.id}
                  className="absolute pointer-events-none select-none"
                  style={{ fontSize: 16, lineHeight: 1 }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x: s.x,
                    y: s.y,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.3, 1, 0],
                  }}
                  transition={{ delay: s.delay, duration: 1.1, ease: "easeOut" }}
                >
                  ✨
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Gift box — clickable */}
          <motion.div
            className="absolute"
            style={{
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: BOX_W,
              cursor: opened ? "default" : "pointer",
            }}
            onClick={() => !opened && setOpened(true)}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileTap={!opened ? { scale: 0.95 } : {}}
          >
            {/* Lid */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: LID_W,
                zIndex: 20,
              }}
            >
              <motion.div
                style={{ transformOrigin: "center top", width: "100%" }}
                animate={
                  opened
                    ? { y: -120, scale: 0.7, opacity: 0 }
                    : { y: 0, scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Lid body */}
                <div
                  style={{
                    width: "100%",
                    height: LID_H,
                    borderRadius: "6px 6px 2px 2px",
                    background:
                      "linear-gradient(145deg, #d4142e 0%, #a8001e 55%, #800018 100%)",
                    boxShadow: "0 -4px 24px rgba(200,16,46,0.35)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Ribbon stripe on lid */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: 0,
                      right: 0,
                      height: 13,
                      background:
                        "linear-gradient(to bottom, #fef3c7, #f59e0b, #fef3c7)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.14), transparent)",
                      borderRadius: "6px 6px 2px 2px",
                    }}
                  />
                </div>

                {/* Bow */}
                <div
                  style={{
                    position: "absolute",
                    top: -26,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 80,
                    height: 32,
                  }}
                >
                  {/* Left loop */}
                  <div
                    style={{
                      position: "absolute",
                      width: 34, height: 24,
                      background: "linear-gradient(135deg, #fef3c7, #f59e0b)",
                      borderRadius: "50% 10% 10% 50%",
                      left: 2, top: 4,
                      transform: "rotate(-12deg)",
                      transformOrigin: "right center",
                      boxShadow: "inset 0 0 6px rgba(0,0,0,0.2)",
                    }}
                  />
                  {/* Right loop */}
                  <div
                    style={{
                      position: "absolute",
                      width: 34, height: 24,
                      background: "linear-gradient(135deg, #fef3c7, #f59e0b)",
                      borderRadius: "10% 50% 50% 10%",
                      right: 2, top: 4,
                      transform: "rotate(12deg)",
                      transformOrigin: "left center",
                      boxShadow: "inset 0 0 6px rgba(0,0,0,0.2)",
                    }}
                  />
                  {/* Center knot */}
                  <div
                    style={{
                      position: "absolute",
                      width: 18, height: 18,
                      background: "radial-gradient(circle, #fef9c3, #f59e0b)",
                      borderRadius: "50%",
                      left: "50%", top: "50%",
                      transform: "translate(-50%, -50%)",
                      boxShadow: "0 0 10px rgba(245,158,11,0.6)",
                      zIndex: 2,
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Box body */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: BOX_H,
                borderRadius: "0 0 8px 8px",
                background:
                  "linear-gradient(160deg, #d4142e 0%, #a8001e 45%, #780014 100%)",
                boxShadow:
                  "0 12px 40px rgba(200,16,46,0.22), 0 4px 16px rgba(0,0,0,0.45)",
                overflow: "hidden",
              }}
            >
              {/* Vertical ribbon */}
              <div
                style={{
                  position: "absolute",
                  top: 0, bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 13,
                  background:
                    "linear-gradient(to right, #fef3c7, #f59e0b, #fef3c7)",
                }}
              />
              {/* Horizontal ribbon */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 0, right: 0,
                  height: 13,
                  background:
                    "linear-gradient(to bottom, #fef3c7, #f59e0b, #fef3c7)",
                }}
              />
              {/* Shine */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.13) 0%, transparent 52%)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <div className="text-center max-w-xs">
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.p
                key="hint"
                style={{
                  fontFamily: "var(--font-dancing)",
                  color: "rgba(255,183,197,0.65)",
                  fontSize: "1.2rem",
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                exit={{ opacity: 0 }}
              >
                Tap the gift to open ✨
              </motion.p>
            ) : (
              <motion.div
                key="message"
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    background:
                      "linear-gradient(135deg, #fff8f5, #ffb7c5 50%, #c9b8e8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                  }}
                >
                  With all my love 🌹
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dancing)",
                    color: "rgba(255,183,197,0.75)",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  Every rose is a reason I love you, Kiki
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
