"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoseFlower from "./RoseFlower";

const ROSES = [
  { id: 0,  x: 0,    y: -210, size: 100, hue: 340, delay: 0.04 },
  { id: 1,  x: -125, y: -168, size: 82,  hue: 345, delay: 0.10 },
  { id: 2,  x: 125,  y: -168, size: 82,  hue: 335, delay: 0.10 },
  { id: 3,  x: -208, y: -100, size: 68,  hue: 350, delay: 0.16 },
  { id: 4,  x: 208,  y: -100, size: 68,  hue: 330, delay: 0.16 },
  { id: 5,  x: -68,  y: -258, size: 58,  hue: 342, delay: 0.20 },
  { id: 6,  x: 68,   y: -258, size: 58,  hue: 338, delay: 0.20 },
  { id: 7,  x: -165, y: -198, size: 52,  hue: 320, delay: 0.25 },
  { id: 8,  x: 165,  y: -198, size: 52,  hue: 355, delay: 0.25 },
  { id: 9,  x: 0,    y: -305, size: 46,  hue: 340, delay: 0.29 },
  { id: 10, x: -240, y: -130, size: 40,  hue: 315, delay: 0.33 },
  { id: 11, x: 240,  y: -130, size: 40,  hue: 360, delay: 0.33 },
];

const PETALS = [
  { id: 0,  x: -90,  y: -80,  delay: 0.12 },
  { id: 1,  x: 90,   y: -80,  delay: 0.15 },
  { id: 2,  x: -140, y: 10,   delay: 0.18 },
  { id: 3,  x: 140,  y: 10,   delay: 0.18 },
  { id: 4,  x: -60,  y: 90,   delay: 0.22 },
  { id: 5,  x: 60,   y: 90,   delay: 0.22 },
  { id: 6,  x: 5,    y: -105, delay: 0.14 },
  { id: 7,  x: -115, y: -125, delay: 0.27 },
  { id: 8,  x: 115,  y: -125, delay: 0.27 },
  { id: 9,  x: -48,  y: -175, delay: 0.31 },
  { id: 10, x: 48,   y: -175, delay: 0.31 },
  { id: 11, x: 0,    y: 105,  delay: 0.20 },
];

const BOX_W = 180;
const BOX_H = 130;
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

      {/* Full screen golden flash on open */}
      <AnimatePresence>
        {opened && (
          <motion.div
            className="fixed inset-0 pointer-events-none"
            style={{ background: "rgba(255,210,120,0.55)", zIndex: 150 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, times: [0, 0.08, 1] }}
          />
        )}
      </AnimatePresence>

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

      <div className="flex flex-col items-center gap-10 px-4">
        {/* Main container — tall enough for all roses */}
        <div className="relative" style={{ width: 340, height: 520 }}>

          {/* Light burst from box on open */}
          <AnimatePresence>
            {opened && (
              <motion.div
                style={{
                  position: "absolute",
                  bottom: BOX_H / 2,
                  left: "50%",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,220,100,0.95), rgba(255,160,80,0.6), transparent)",
                  filter: "blur(12px)",
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                  zIndex: 5,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0.3], scale: [0, 10, 18] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          {/* Rose + sparkle anchor at top of box */}
          <div
            style={{
              position: "absolute",
              bottom: BOX_H + 8,
              left: "50%",
              pointerEvents: "none",
            }}
          >
            {/* Beautiful roses */}
            <AnimatePresence>
              {opened &&
                ROSES.map((r) => (
                  <motion.div
                    key={r.id}
                    style={{
                      position: "absolute",
                      left: r.x - r.size / 2,
                      top: r.y - r.size / 2,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: r.delay,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                    }}
                  >
                    <RoseFlower size={r.size} hue={r.hue} delay={r.delay} />
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* Sakura petal sparkles */}
            <AnimatePresence>
              {opened &&
                PETALS.map((p) => (
                  <motion.div
                    key={p.id}
                    style={{
                      position: "absolute",
                      fontSize: 18,
                      lineHeight: 1,
                    }}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
                    animate={{
                      x: p.x,
                      y: p.y,
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1.4, 1, 0],
                      rotate: p.x > 0 ? 45 : -45,
                    }}
                    transition={{
                      delay: p.delay,
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                  >
                    🌸
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Gift box */}
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
            whileTap={!opened ? { scale: 0.94 } : {}}
          >
            {/* Glow pulse on box before opening */}
            {!opened && (
              <motion.div
                style={{
                  position: "absolute",
                  inset: -12,
                  borderRadius: 12,
                  background:
                    "radial-gradient(ellipse, rgba(255,180,80,0.2), transparent 70%)",
                  pointerEvents: "none",
                }}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Lid wrapper for positioning */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: BOX_W + 16,
                zIndex: 20,
              }}
            >
              <motion.div
                style={{ transformOrigin: "center top", width: "100%" }}
                animate={
                  opened
                    ? { y: -130, scale: 0.65, opacity: 0 }
                    : { y: 0, scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Lid body */}
                <div
                  style={{
                    width: "100%",
                    height: LID_H,
                    borderRadius: "6px 6px 2px 2px",
                    background:
                      "linear-gradient(145deg, #d4142e 0%, #a8001e 55%, #800018 100%)",
                    boxShadow: "0 -4px 24px rgba(200,16,46,0.4)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: 0,
                      right: 0,
                      height: 13,
                      background: "linear-gradient(to bottom, #fef3c7, #f59e0b, #fef3c7)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)",
                      borderRadius: "6px 6px 2px 2px",
                    }}
                  />
                </div>

                {/* Bow */}
                <div
                  style={{
                    position: "absolute",
                    top: -28,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 88,
                    height: 36,
                  }}
                >
                  {/* Left loop */}
                  <div
                    style={{
                      position: "absolute",
                      width: 36, height: 26,
                      background: "linear-gradient(135deg, #fef9c3, #f59e0b)",
                      borderRadius: "50% 10% 10% 50%",
                      left: 4, top: 5,
                      transform: "rotate(-12deg)",
                      transformOrigin: "right center",
                      boxShadow: "inset 0 0 6px rgba(0,0,0,0.18)",
                    }}
                  />
                  {/* Right loop */}
                  <div
                    style={{
                      position: "absolute",
                      width: 36, height: 26,
                      background: "linear-gradient(135deg, #fef9c3, #f59e0b)",
                      borderRadius: "10% 50% 50% 10%",
                      right: 4, top: 5,
                      transform: "rotate(12deg)",
                      transformOrigin: "left center",
                      boxShadow: "inset 0 0 6px rgba(0,0,0,0.18)",
                    }}
                  />
                  {/* Knot */}
                  <div
                    style={{
                      position: "absolute",
                      width: 20, height: 20,
                      background: "radial-gradient(circle, #fef9c3, #f59e0b)",
                      borderRadius: "50%",
                      left: "50%", top: "50%",
                      transform: "translate(-50%, -50%)",
                      boxShadow: "0 0 12px rgba(245,158,11,0.7)",
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
              <div
                style={{
                  position: "absolute",
                  top: 0, bottom: 0,
                  left: "50%", transform: "translateX(-50%)",
                  width: 13,
                  background: "linear-gradient(to right, #fef3c7, #f59e0b, #fef3c7)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%", transform: "translateY(-50%)",
                  left: 0, right: 0,
                  height: 13,
                  background: "linear-gradient(to bottom, #fef3c7, #f59e0b, #fef3c7)",
                }}
              />
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
        <div className="text-center max-w-sm">
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
                transition={{ delay: 1.0, duration: 0.9 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    background:
                      "linear-gradient(135deg, #fff8f5, #ffb7c5 50%, #c9b8e8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: "1.55rem",
                    fontWeight: "bold",
                    lineHeight: 1.4,
                  }}
                >
                  Thank you for being my happiness
                  <br />for 4 beautiful years 🌹
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dancing)",
                    color: "rgba(255,183,197,0.75)",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  Every rose bloomed because of you, Kiki
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
