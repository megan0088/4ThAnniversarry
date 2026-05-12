"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";

const ROTATIONS = [-3, 1, -1, 2, -2, 3, 0, -1, 2, -3, 1, -2];

function formatCaption(filename: string): string {
  const name = filename.replace(/\.(webp|jpg|jpeg|png)$/i, "");
  // Split PascalCase and insert spaces before capitals
  return name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([a-zA-Z])(\d)/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
}

interface GalleryCard {
  index: number;
  src: string;
  caption: string;
  rotate: number;
}

function PolaroidCard({
  card,
  onOpen,
}: {
  card: GalleryCard;
  onOpen: (index: number) => void;
}) {
  return (
    <motion.div
      className="cursor-pointer group"
      style={{ rotate: card.rotate }}
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: (card.index % 6) * 0.05, duration: 0.5 }}
      whileHover={{
        scale: 1.06,
        rotate: 0,
        zIndex: 20,
        transition: { duration: 0.18 },
      }}
      onClick={() => onOpen(card.index)}
    >
      <div
        className="p-2.5 pb-8 shadow-xl"
        style={{
          background: "rgba(255,248,245,0.06)",
          border: "1px solid rgba(255,248,245,0.1)",
          backdropFilter: "blur(8px)",
          borderRadius: "2px",
        }}
      >
        {/* Photo */}
        <div className="w-full aspect-square relative overflow-hidden rounded-[1px]">
          <Image
            src={card.src}
            alt={card.caption}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
            loading={card.index < 6 ? "eager" : "lazy"}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn
              size={18}
              className="opacity-0 group-hover:opacity-70 transition-opacity duration-200"
              style={{ color: "#fff8f5" }}
            />
          </div>
        </div>

        {/* Caption */}
        <p
          className="mt-2 text-center text-[0.65rem] leading-tight truncate px-0.5"
          style={{
            fontFamily: "var(--font-dancing)",
            color: "rgba(255,183,197,0.65)",
            fontSize: "0.78rem",
          }}
        >
          {card.caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const cards: GalleryCard[] = useMemo(
    () =>
      galleryImages.map((filename, i) => ({
        index: i,
        src: `/images/egakiki/${encodeURIComponent(filename)}`,
        caption: formatCaption(filename),
        rotate: ROTATIONS[i % ROTATIONS.length],
      })),
    []
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + cards.length) % cards.length
    );
  const next = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % cards.length
    );

  const current = lightboxIndex !== null ? cards[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0e1220 100%)" }}
    >
      {/* Section header */}
      <div className="text-center mb-12 px-4">
        <motion.p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(201,184,232,0.6)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Memories
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold"
          style={{
            fontFamily: "var(--font-playfair)",
            background: "linear-gradient(135deg, #fff8f5, #c9b8e8 40%, #ffb7c5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Gallery
        </motion.h2>
        <motion.p
          className="mt-3 text-sm"
          style={{
            fontFamily: "var(--font-dancing)",
            color: "rgba(255,248,245,0.35)",
            fontSize: "1rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {cards.length} momen yang tak terlupakan 🌸
        </motion.p>
      </div>

      {/* Photo grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {cards.map((card) => (
          <PolaroidCard key={card.index} card={card} onOpen={openLightbox} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            style={{
              background: "rgba(3,5,12,0.95)",
              backdropFilter: "blur(24px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Prev button */}
            <button
              className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,248,245,0.08)",
                border: "1px solid rgba(255,248,245,0.15)",
              }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={20} style={{ color: "rgba(255,248,245,0.8)" }} />
            </button>

            {/* Next button */}
            <button
              className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,248,245,0.08)",
                border: "1px solid rgba(255,248,245,0.15)",
              }}
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={20} style={{ color: "rgba(255,248,245,0.8)" }} />
            </button>

            {/* Photo card */}
            <motion.div
              key={current.index}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"
              style={{ rotate: current.rotate * 0.4 }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Polaroid frame */}
              <div
                className="p-3 pb-12 shadow-2xl"
                style={{
                  background: "rgba(255,248,245,0.06)",
                  border: "1px solid rgba(255,248,245,0.15)",
                  borderRadius: "2px",
                }}
              >
                {/* Close button */}
                <button
                  className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                  onClick={closeLightbox}
                >
                  <X size={14} style={{ color: "rgba(255,248,245,0.8)" }} />
                </button>

                <div className="w-full aspect-square relative overflow-hidden rounded-[1px]">
                  <Image
                    src={current.src}
                    alt={current.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 85vw, 448px"
                    priority
                  />
                  {/* Vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 65%, rgba(3,5,12,0.3) 100%)",
                    }}
                  />
                </div>

                <div className="pt-3 text-center">
                  <p
                    style={{
                      fontFamily: "var(--font-dancing)",
                      color: "rgba(255,183,197,0.85)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {current.caption}
                  </p>
                  <p
                    className="mt-1 text-xs"
                    style={{
                      fontFamily: "var(--font-nunito)",
                      color: "rgba(255,248,245,0.3)",
                    }}
                  >
                    {current.index + 1} / {cards.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
