"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/lib/data";

function PolaroidCard({
  item,
  onOpen,
  delay,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
  delay: number;
}) {
  return (
    <motion.div
      className="cursor-pointer group relative"
      style={{ rotate: item.rotate }}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      whileHover={{
        scale: 1.06,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.2 },
      }}
      onClick={() => onOpen(item)}
    >
      {/* Polaroid frame */}
      <div
        className="relative p-3 pb-10 rounded-sm shadow-2xl"
        style={{
          background: "rgba(255,248,245,0.06)",
          border: "1px solid rgba(255,248,245,0.12)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Image area */}
        <div
          className="w-full aspect-square rounded-sm relative overflow-hidden"
          style={{ minHeight: 160 }}
        >
          {item.imagePath ? (
            <Image
              src={item.imagePath}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
            >
              <span className="text-5xl">{item.emoji}</span>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn
              size={22}
              className="opacity-0 group-hover:opacity-80 transition-opacity duration-200 drop-shadow-lg"
              style={{ color: "rgba(255,248,245,0.9)" }}
            />
          </div>
        </div>

        {/* Caption */}
        <div className="pt-3 text-center">
          <p
            className="text-xs font-semibold"
            style={{
              fontFamily: "var(--font-nunito)",
              color: "rgba(255,248,245,0.75)",
            }}
          >
            {item.title}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{
              fontFamily: "var(--font-dancing)",
              color: "rgba(255,183,197,0.7)",
              fontSize: "0.85rem",
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0e1220 100%)" }}
    >
      {/* Section header */}
      <div className="text-center mb-16 px-4">
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
            background:
              "linear-gradient(135deg, #fff8f5, #c9b8e8 40%, #ffb7c5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Our Gallery
        </motion.h2>
        <motion.p
          className="mt-4 text-sm md:text-base max-w-md mx-auto"
          style={{
            fontFamily: "var(--font-dancing)",
            color: "rgba(255,248,245,0.4)",
            fontSize: "1.05rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Setiap foto menyimpan satu cerita yang tak terlupakan 🌸
        </motion.p>
      </div>

      {/* Polaroid grid */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {galleryItems.map((item, i) => (
          <PolaroidCard
            key={item.id}
            item={item}
            onOpen={setSelected}
            delay={i * 0.08}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-6"
            style={{
              background: "rgba(5,7,14,0.92)",
              backdropFilter: "blur(24px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-sm p-4 pb-12 rounded-sm shadow-2xl"
              style={{
                background: "rgba(19,25,43,0.95)",
                border: "1px solid rgba(255,248,245,0.15)",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 z-10 p-1 rounded-full"
                style={{ background: "rgba(0,0,0,0.4)" }}
                onClick={() => setSelected(null)}
              >
                <X size={18} style={{ color: "rgba(255,248,245,0.7)" }} />
              </button>

              {/* Large image */}
              <div className="w-full aspect-square rounded-sm relative overflow-hidden">
                {selected.imagePath ? (
                  <Image
                    src={selected.imagePath}
                    alt={selected.title}
                    fill
                    className="object-cover"
                    sizes="384px"
                    priority
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${selected.gradient} flex items-center justify-center text-7xl`}
                  >
                    {selected.emoji}
                  </div>
                )}
                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 60%, rgba(5,7,14,0.4) 100%)",
                  }}
                />
              </div>

              <div className="pt-4 text-center">
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#fff8f5" }}
                >
                  {selected.title}
                </h3>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-dancing)",
                    color: "rgba(255,183,197,0.8)",
                    fontSize: "1.1rem",
                  }}
                >
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
