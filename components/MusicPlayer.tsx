"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music } from "lucide-react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    audioRef.current = new Audio(
      encodeURI(
        "/music/beabadoobee - Glue Song (Official Music Video) - beabadoobeeVEVO.mp3"
      )
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const bars = [4, 7, 5, 8, 3, 6, 9, 4, 7, 5];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed right-4 z-40"
          style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))" }}
          initial={{ opacity: 0, scale: 0.7, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div
            className="glass rounded-2xl px-4 py-3 flex items-center gap-3 cursor-pointer"
            style={{
              boxShadow: "0 0 30px rgba(107,63,160,0.2), 0 4px 20px rgba(0,0,0,0.4)",
            }}
            whileHover={{ scale: 1.03 }}
            onClick={toggle}
          >
            {/* Music icon */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(255,183,197,0.15)" }}
            >
              <Music size={14} style={{ color: "#ffb7c5" }} />
            </div>

            {/* Track info */}
            <div className="hidden sm:block">
              <p
                className="text-xs font-semibold leading-tight"
                style={{
                  fontFamily: "var(--font-nunito)",
                  color: "rgba(255,248,245,0.85)",
                }}
              >
                Glue Song
              </p>
              <p
                className="text-xs leading-tight"
                style={{
                  fontFamily: "var(--font-nunito)",
                  color: "rgba(255,248,245,0.4)",
                }}
              >
                beabadoobee
              </p>
            </div>

            {/* Equalizer bars */}
            <div className="flex items-end gap-0.5 h-5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 rounded-full"
                  style={{ background: "#ffb7c5" }}
                  animate={
                    playing
                      ? {
                          height: [h * 1.5, h * 0.4, h * 1.8, h * 0.6, h * 1.5],
                        }
                      : { height: 2 }
                  }
                  transition={{
                    duration: 0.6 + i * 0.05,
                    delay: i * 0.04,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Play/Pause */}
            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(255,183,197,0.18)",
                border: "1px solid rgba(255,183,197,0.3)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              {playing ? (
                <Pause size={12} fill="#ffb7c5" style={{ color: "#ffb7c5" }} />
              ) : (
                <Play size={12} fill="#ffb7c5" style={{ color: "#ffb7c5" }} />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
