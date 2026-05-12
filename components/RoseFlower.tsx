"use client";
import { motion } from "framer-motion";

interface RoseFlowerProps {
  size?: number;
  hue?: number;
  delay?: number;
  style?: React.CSSProperties;
}

const RINGS = [
  { count: 8, w: 13, h: 33, sat: 68, l1: 55, l2: 82, off: 0 },
  { count: 8, w: 11, h: 27, sat: 74, l1: 48, l2: 72, off: 22.5 },
  { count: 6, w: 9,  h: 21, sat: 80, l1: 42, l2: 64, off: 30 },
  { count: 5, w: 7,  h: 15, sat: 86, l1: 36, l2: 56, off: 36 },
];

export default function RoseFlower({ size = 100, hue = 340, delay = 0, style }: RoseFlowerProps) {
  const s = size / 100;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {/* Soft bloom glow */}
      <motion.div
        style={{
          position: "absolute",
          width: size * 1.1,
          height: size * 1.1,
          borderRadius: "50%",
          background: `radial-gradient(circle, hsla(${hue},80%,72%,0.45) 0%, transparent 70%)`,
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.35, duration: 0.8 }}
      />

      {/* Petal anchor at center */}
      <div style={{ position: "relative", width: 0, height: 0 }}>
        {RINGS.map((ring, ri) =>
          Array.from({ length: ring.count }, (_, i) => {
            const angle = (i / ring.count) * 360 + ring.off;
            const d = delay + ri * 0.09 + i * 0.028;
            const hShift = ri * 7 + i * 1.5;
            const pw = ring.w * s;
            const ph = ring.h * s;
            const br = `${pw * 0.46}px ${pw * 0.46}px ${pw * 0.22}px ${pw * 0.22}px`;
            return (
              <motion.div
                key={`${ri}-${i}`}
                style={{
                  position: "absolute",
                  width: pw,
                  height: ph,
                  borderRadius: br,
                  background: `linear-gradient(to top,
                    hsl(${hue + hShift},${ring.sat}%,${ring.l1}%),
                    hsl(${hue + hShift - 4},${ring.sat - 6}%,${ring.l2}%))`,
                  bottom: 0,
                  left: -pw / 2,
                  transformOrigin: "50% 100%",
                  rotate: angle,
                  zIndex: 5 - ri,
                  boxShadow: `0 0 ${2 * s}px hsla(${hue},60%,70%,0.3)`,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.88 + ri * 0.03 }}
                transition={{ delay: d, duration: 0.48, ease: [0.34, 1.15, 0.64, 1] }}
              />
            );
          })
        )}

        {/* Center disc */}
        <motion.div
          style={{
            position: "absolute",
            width: 15 * s,
            height: 15 * s,
            borderRadius: "50%",
            background: `radial-gradient(circle, hsl(${hue + 22},55%,90%), hsl(${hue + 10},78%,52%))`,
            left: -(15 * s) / 2,
            top: -(15 * s) / 2,
            zIndex: 10,
            boxShadow: `0 0 ${10 * s}px hsla(${hue + 20},85%,80%,0.8)`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.35, type: "spring", stiffness: 320 }}
        />

        {/* Stamen dots */}
        {[0, 72, 144, 216, 288].map((deg, i) => {
          const r = 3.5 * s;
          const sx = Math.cos((deg * Math.PI) / 180) * r;
          const sy = Math.sin((deg * Math.PI) / 180) * r;
          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: 2.5 * s,
                height: 2.5 * s,
                borderRadius: "50%",
                background: `hsl(${hue + 30},60%,92%)`,
                left: sx - (2.5 * s) / 2,
                top: sy - (2.5 * s) / 2,
                zIndex: 11,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.56 + i * 0.02, duration: 0.2 }}
            />
          );
        })}
      </div>
    </div>
  );
}
