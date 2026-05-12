"use client";
import { useEffect, useState, memo } from "react";

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
}

const PetalSVG = ({ size, opacity }: { size: number; opacity: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ opacity }}
    fill="none"
  >
    <path
      d="M12 2C13.5 4 17 5 17 9C17 13 13.5 15.5 12 20C10.5 15.5 7 13 7 9C7 5 10.5 4 12 2Z"
      fill="rgba(255,183,197,0.75)"
    />
    <path
      d="M12 2C10.5 4 8 6.5 9 10C10 13 12 14 12 20C13 14 15 12 16 9C17 6 13.5 4 12 2Z"
      fill="rgba(255,210,220,0.5)"
    />
  </svg>
);

const SakuraPetals = memo(function SakuraPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 12,
        size: 10 + Math.random() * 14,
        opacity: 0.5 + Math.random() * 0.5,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-[-20px]"
          style={{
            left: `${p.left}%`,
            animation: `sakura-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <PetalSVG size={p.size} opacity={p.opacity} />
        </div>
      ))}
    </div>
  );
});

export default SakuraPetals;
