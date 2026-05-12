"use client";
import { motion, type Variants } from "framer-motion";
import { timelineEvents } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0e1a 0%, #10172a 50%, #0a0e1a 100%)",
      }}
    >
      {/* Section label */}
      <div className="text-center mb-16 md:mb-24 px-4">
        <motion.p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{
            fontFamily: "var(--font-nunito)",
            color: "rgba(255,183,197,0.6)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold"
          style={{
            fontFamily: "var(--font-playfair)",
            background:
              "linear-gradient(135deg, #fff8f5, #ffb7c5 40%, #c9b8e8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Love Story
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 relative">
        {/* Vertical line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,183,197,0.3) 15%, rgba(255,183,197,0.3) 85%, transparent)",
          }}
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {timelineEvents.map((event, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={event.id}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                {/* Card */}
                <div
                  className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}
                >
                  <motion.div
                    className="rounded-2xl p-6 glass-light relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Gradient tint overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-25 rounded-2xl pointer-events-none`}
                    />

                    {/* Photo */}
                    <div className="w-full h-44 rounded-xl mb-4 relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${event.gradient} flex items-center justify-center text-4xl opacity-70`}
                      >
                        {event.emoji}
                      </div>
                    </div>

                    <span
                      className="text-xs tracking-widest uppercase mb-1 block"
                      style={{
                        fontFamily: "var(--font-nunito)",
                        color: "rgba(255,183,197,0.6)",
                      }}
                    >
                      {event.date}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-1"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        color: "#fff8f5",
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-sm italic mb-3"
                      style={{
                        fontFamily: "var(--font-dancing)",
                        color: "rgba(255,183,197,0.8)",
                        fontSize: "1rem",
                      }}
                    >
                      {event.subtitle}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-nunito)",
                        color: "rgba(255,248,245,0.6)",
                      }}
                    >
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full items-center justify-center text-lg z-10"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,183,197,0.25), rgba(19,25,43,0.9))",
                    border: "1.5px solid rgba(255,183,197,0.4)",
                    boxShadow:
                      "0 0 16px rgba(255,183,197,0.3), 0 0 32px rgba(255,183,197,0.1)",
                  }}
                  whileInView={{ scale: [0.5, 1.15, 1] }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {event.emoji}
                </motion.div>

                {/* Empty side (desktop) */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
