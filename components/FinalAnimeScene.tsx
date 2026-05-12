"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Star { id: number; x: number; y: number; size: number; dur: number; }
interface Petal { id: number; x: number; dur: number; delay: number; size: number; }

const STARS: Star[] = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: (i * 17.3) % 100,
  y: (i * 11.7) % 60,
  size: 0.8 + (i % 3) * 0.6,
  dur: 2.5 + (i % 5) * 0.8,
}));

const PETALS: Petal[] = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: (i * 7.3) % 100,
  dur: 7 + (i % 4) * 2,
  delay: (i * 1.1) % 8,
  size: 8 + (i % 3) * 4,
}));

const BUILDINGS = [
  { x: 0,   w: 60,  h: 200, ws: [[6,20],[6,50],[6,80],[6,110],[6,140],[32,20],[32,50],[32,80],[32,110]] },
  { x: 65,  w: 45,  h: 280, ws: [[6,20],[6,55],[6,90],[6,125],[6,160],[6,195],[24,20],[24,55],[24,90],[24,125]] },
  { x: 115, w: 35,  h: 160, ws: [[5,15],[5,40],[5,65],[5,90],[20,15],[20,40],[20,65]] },
  { x: 155, w: 55,  h: 240, ws: [[6,18],[6,48],[6,78],[6,108],[6,138],[30,18],[30,48],[30,78],[30,108]] },
  { x: 215, w: 40,  h: 190, ws: [[5,15],[5,45],[5,75],[5,105],[5,135],[22,15],[22,45],[22,75]] },
  { x: 260, w: 70,  h: 320, ws: [[7,20],[7,55],[7,90],[7,125],[7,160],[7,195],[38,20],[38,55],[38,90],[38,125],[38,160]] },
  { x: 335, w: 45,  h: 210, ws: [[6,18],[6,50],[6,82],[6,114],[6,146],[24,18],[24,50],[24,82]] },
  { x: 385, w: 35,  h: 170, ws: [[5,15],[5,42],[5,69],[5,96],[5,123],[18,15],[18,42],[18,69]] },
  { x: 425, w: 60,  h: 260, ws: [[7,20],[7,54],[7,88],[7,122],[7,156],[32,20],[32,54],[32,88],[32,122]] },
  { x: 490, w: 50,  h: 140, ws: [[6,15],[6,42],[6,69],[6,96],[26,15],[26,42],[26,69]] },
  { x: 545, w: 80,  h: 300, ws: [[8,20],[8,56],[8,92],[8,128],[8,164],[8,200],[44,20],[44,56],[44,92],[44,128]] },
  { x: 630, w: 40,  h: 180, ws: [[5,15],[5,44],[5,73],[5,102],[5,131],[22,15],[22,44],[22,73]] },
  { x: 675, w: 55,  h: 220, ws: [[6,18],[6,52],[6,86],[6,120],[6,154],[29,18],[29,52],[29,86]] },
  { x: 735, w: 45,  h: 195, ws: [[6,20],[6,52],[6,84],[6,116],[6,148],[24,20],[24,52],[24,84]] },
  { x: 785, w: 65,  h: 270, ws: [[7,20],[7,54],[7,88],[7,122],[7,156],[36,20],[36,54],[36,88],[36,122]] },
  { x: 855, w: 40,  h: 160, ws: [[5,15],[5,42],[5,69],[5,96],[22,15],[22,42]] },
  { x: 900, w: 55,  h: 230, ws: [[6,18],[6,52],[6,86],[6,120],[6,154],[30,18],[30,52],[30,86]] },
  { x: 960, w: 45,  h: 185, ws: [[5,15],[5,45],[5,75],[5,105],[5,135],[24,15],[24,45],[24,75]] },
];

// Train car data
const CAR_COUNT = 7;
const CAR_W = 110;
const CAR_H = 52;
const CAR_GAP = 6;

export default function FinalAnimeScene() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [trainDone, setTrainDone] = useState(false);
  const [flash, setFlash] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setPetals(PETALS);
  }, []);

  // When train finishes, trigger sequence
  const handleTrainComplete = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 600);
    setTimeout(() => setTrainDone(true), 300);
    setTimeout(() => setShowText(true), 1800);
    setTimeout(() => setShowNames(true), 3800);
    setTimeout(() => setFadeOut(true), 7000);
  };

  return (
    <section
      id="final"
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh", background: "#03071e" }}
    >
      {/* Night sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #03071e 0%, #070b24 25%, #0d1436 55%, #12192e 80%, #0d0f1a 100%)",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            animate={{ opacity: [0.15, 0.9, 0.15] }}
            transition={{ duration: s.dur, delay: (s.id * 0.13) % 3, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Moon */}
      <div
        className="absolute"
        style={{
          top: "8%",
          right: "12%",
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "radial-gradient(circle at 38% 38%, #fff8e0, #ffe8a0 40%, rgba(255,200,80,0.3))",
          boxShadow: "0 0 30px rgba(255,230,120,0.4), 0 0 60px rgba(255,200,80,0.15)",
        }}
      />

      {/* Aurora glow */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "45%",
          background:
            "linear-gradient(180deg, rgba(107,63,160,0.18) 0%, rgba(45,27,105,0.1) 40%, transparent 100%)",
          animation: "aurora 12s ease infinite",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Falling sakura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((p) => (
          <div
            key={p.id}
            className="absolute top-[-20px]"
            style={{
              left: `${p.x}%`,
              animation: `sakura-fall ${p.dur}s linear ${p.delay}s infinite`,
            }}
          >
            <svg width={p.size} height={p.size} viewBox="0 0 24 24">
              <path
                d="M12 2C13.5 4 17 5 17 9C17 13 13.5 15.5 12 20C10.5 15.5 7 13 7 9C7 5 10.5 4 12 2Z"
                fill="rgba(255,183,197,0.65)"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* City buildings */}
      <div
        className="absolute bottom-0 left-0"
        style={{ width: "100%", height: 340, overflow: "hidden" }}
      >
        <svg
          width="100%"
          height="340"
          viewBox="0 0 1010 340"
          preserveAspectRatio="xMinYMax meet"
          style={{ position: "absolute", bottom: 0, left: 0 }}
        >
          {BUILDINGS.map((b, bi) => (
            <g key={bi}>
              {/* Building body */}
              <rect
                x={b.x} y={340 - b.h}
                width={b.w} height={b.h}
                fill={`hsl(220, 30%, ${10 + (bi % 3) * 3}%)`}
              />
              {/* Windows */}
              {b.ws.map(([wx, wy], wi) => (
                <rect
                  key={wi}
                  x={b.x + wx} y={340 - b.h + wy}
                  width={8} height={6}
                  fill={
                    (wi + bi) % 5 === 0
                      ? "rgba(100,120,200,0.4)"
                      : (wi + bi) % 3 === 0
                      ? "rgba(255,200,80,0.85)"
                      : "rgba(255,220,120,0.7)"
                  }
                  rx={1}
                />
              ))}
            </g>
          ))}

          {/* Ground / platform */}
          <rect x={0} y={310} width={1010} height={30} fill="#0a0c18" />
          {/* Rail tracks */}
          <rect x={0} y={316} width={1010} height={3} fill="#1a1e30" rx={1} />
          <rect x={0} y={326} width={1010} height={3} fill="#1a1e30" rx={1} />
          {Array.from({ length: 26 }, (_, i) => (
            <rect key={i} x={i * 40} y={314} width={14} height={18} fill="#15192a" rx={1} />
          ))}

          {/* Platform edge glow */}
          <rect
            x={0} y={309} width={1010} height={3}
            fill="rgba(100,120,200,0.3)"
          />

          {/* Couple silhouette */}
          <g transform="translate(420, 310)">
            {/* Person 1 (Ega - slightly taller) */}
            <ellipse cx={0} cy={-62} rx={7} ry={7} fill="#080a14" />
            <rect x={-5} cy={-55} y={-55} width={10} height={38} rx={3} fill="#080a14" />
            <rect x={-8} y={-36} width={6} height={22} rx={2} fill="#080a14" />
            <rect x={3} y={-36} width={6} height={22} rx={2} fill="#080a14" />
            <rect x={-5} y={-17} width={5} height={17} rx={2} fill="#080a14" />
            <rect x={1} y={-17} width={5} height={17} rx={2} fill="#080a14" />
            {/* Person 2 (Kiki - slightly shorter, close) */}
            <ellipse cx={18} cy={-56} rx={6} ry={6} fill="#080a14" />
            <rect x={12} y={-50} width={12} height={33} rx={3} fill="#080a14" />
            <rect x={10} y={-33} width={5} height={18} rx={2} fill="#080a14" />
            <rect x={19} y={-33} width={5} height={18} rx={2} fill="#080a14" />
            <rect x={12} y={-17} width={5} height={17} rx={2} fill="#080a14" />
            <rect x={18} y={-17} width={5} height={17} rx={2} fill="#080a14" />
            {/* Holding hands hint */}
            <rect x={7} y={-28} width={5} height={4} rx={2} fill="#0d1020" />
            {/* Soft glow around couple */}
            <ellipse cx={9} cy={-30} rx={22} ry={35} fill="rgba(255,183,197,0.04)" />
          </g>
        </svg>
      </div>

      {/* Train */}
      <motion.div
        className="absolute"
        style={{
          bottom: 30,
          right: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          gap: CAR_GAP,
          zIndex: 20,
        }}
        initial={{ x: "110vw" }}
        whileInView={{ x: "-130vw" }}
        viewport={{ once: true }}
        transition={{ duration: 9, ease: "linear", delay: 0.5 }}
        onAnimationComplete={handleTrainComplete}
      >
        {Array.from({ length: CAR_COUNT }, (_, i) => (
          <div
            key={i}
            style={{
              width: CAR_W,
              height: i === 0 ? CAR_H + 10 : CAR_H,
              borderRadius: i === 0 ? "10px 4px 4px 4px" : "4px",
              background:
                i === 0
                  ? "linear-gradient(135deg, #1a2a4a 0%, #0e1830 100%)"
                  : "linear-gradient(180deg, #162238 0%, #0c1424 100%)",
              position: "relative",
              flexShrink: 0,
              boxShadow: "0 0 20px rgba(100,150,255,0.15)",
            }}
          >
            {/* Car windows */}
            {Array.from({ length: i === 0 ? 3 : 4 }, (_, wi) => (
              <div
                key={wi}
                style={{
                  position: "absolute",
                  width: i === 0 ? 14 : 16,
                  height: 10,
                  top: 12,
                  left: i === 0 ? 14 + wi * 22 : 10 + wi * 22,
                  borderRadius: 2,
                  background: "rgba(255,220,100,0.75)",
                  boxShadow: "0 0 6px rgba(255,200,80,0.5)",
                }}
              />
            ))}
            {/* Locomotive front light */}
            {i === 0 && (
              <div
                style={{
                  position: "absolute",
                  left: 4,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "rgba(255,240,160,0.95)",
                  boxShadow: "0 0 12px rgba(255,220,80,0.8), -20px 0 30px rgba(255,200,80,0.2)",
                }}
              />
            )}
            {/* Wheels */}
            {[14, CAR_W - 22].map((wx, wi) => (
              <div
                key={wi}
                style={{
                  position: "absolute",
                  bottom: -6,
                  left: wx,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#0a0c14",
                  border: "2px solid #1a2035",
                  boxShadow: "0 0 4px rgba(0,0,0,0.5)",
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>

      {/* White flash when train passes */}
      <AnimatePresence>
        {flash && (
          <motion.div
            className="fixed inset-0 pointer-events-none"
            style={{ background: "#fff", zIndex: 100 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      {/* Ending text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none px-6">
        <AnimatePresence>
          {showText && (
            <motion.blockquote
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed"
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                background: "linear-gradient(135deg, #fff8f5 0%, #ffb7c5 45%, #c9b8e8 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(255,183,197,0.35))",
                textAlign: "center",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              "And after all this time,
              <br />I still choose you."
            </motion.blockquote>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showNames && (
            <motion.div
              className="flex flex-col items-center gap-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dancing)",
                  background: "linear-gradient(135deg, #ffb7c5, #c9b8e8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "2.2rem",
                }}
              >
                Ega ❤️ Kiki
              </p>
              <p
                style={{
                  fontFamily: "var(--font-nunito)",
                  color: "rgba(255,248,245,0.45)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                Forever ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fade to black */}
      <AnimatePresence>
        {fadeOut && (
          <motion.div
            className="fixed inset-0 bg-black pointer-events-none"
            style={{ zIndex: 200 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            onAnimationComplete={() => {
              document
                .getElementById("credits")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
