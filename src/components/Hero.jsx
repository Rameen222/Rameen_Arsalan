import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-graticule opacity-50" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-120px] top-24 w-[420px] h-[420px] rounded-full border border-[var(--color-blue)]/30"
      >
        <div className="absolute inset-10 rounded-full border border-[var(--color-blue)]/20" />
        <div className="absolute left-1/2 top-0 h-full border-l border-[var(--color-blue)]/20" />
        <div className="absolute top-1/2 left-0 w-full border-t border-[var(--color-blue)]/20" />
      </motion.div>

      <Container className="relative w-full">
        <p className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--color-blue)]">
          GIS / Remote Sensing / Digital Twin
        </p>

        <h1 className="font-display mt-6 text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-5xl">
          Building spatial systems for real-world decisions.
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[var(--color-ink-soft)]">
          I design geospatial workflows, WebGIS interfaces, climate-risk analysis,
          and digital twin systems that turn maps, sensors, satellite data, and 3D
          environments into decision-ready tools.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[var(--color-ink)] text-white font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border hairline font-medium"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 font-mono text-xs text-[var(--color-ink-soft)]">
          33.6844° N, 73.0479° E / ISLAMABAD
        </div>
      </Container>
    </section>
  );
}