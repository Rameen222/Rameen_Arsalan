import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-[var(--color-paper)] text-[var(--color-ink)] overflow-hidden"
    >
      {/* GIS grid background */}
      <div className="absolute inset-0 bg-graticule opacity-40" />

      {/* scanning line */}
      <motion.div
        initial={{ y: "-20%" }}
        animate={{ y: "120%" }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[var(--color-blue)]/15 to-transparent"
      />

      {/* corner coordinate labels */}
      <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-ink-soft)]">
        33.6844° N / 73.0479° E
      </div>

      <div className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-ink-soft)]">
        GIS PORTFOLIO
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-ink-soft)]">
        Loading spatial layers
      </div>

      <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-ink-soft)]">
        WebGIS / Remote Sensing / Digital Twin
      </div>

      {/* main typography */}
      <div className="relative h-full flex flex-col justify-center px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs tracking-[0.4em] uppercase text-[var(--color-blue)] mb-4"
        >
          Welcome to the portfolio of
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-[18vw] sm:text-[14vw] leading-[0.82] font-bold tracking-[-0.08em]"
          >
            Rameen
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-[18vw] sm:text-[14vw] leading-[0.82] font-bold tracking-[-0.08em] text-[var(--color-orange)]"
          >
            Arsalan
          </motion.h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.35, ease: "easeInOut" }}
          className="mt-8 h-[2px] w-full max-w-xl origin-left bg-[var(--color-ink)]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-6 max-w-xl text-sm sm:text-base text-[var(--color-ink-soft)] leading-relaxed"
        >
          Mapping terrain, climate, cities, and data into decision-ready spatial systems.
        </motion.p>
      </div>

      {/* small orbit/globe hint */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute right-10 bottom-20 w-24 h-24 rounded-full border border-[var(--color-blue)]/40 hidden sm:block"
      >
        <div className="absolute inset-4 rounded-full border border-[var(--color-blue)]/30" />
        <div className="absolute left-1/2 top-0 h-full border-l border-[var(--color-blue)]/25" />
        <div className="absolute top-1/2 left-0 w-full border-t border-[var(--color-blue)]/25" />
      </motion.div>
    </motion.div>
  );
}