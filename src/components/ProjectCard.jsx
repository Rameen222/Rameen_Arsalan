import { motion } from "framer-motion";

const PALETTE = ["var(--color-orange)", "var(--color-red)", "var(--color-blue)"];

export default function ProjectCard({ project, index, onOpen }) {
  const accent = PALETTE[index % PALETTE.length];

  return (
    <motion.button
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative text-left rounded-2xl border hairline bg-[var(--color-paper-deep)]/40 p-6 overflow-hidden flex flex-col justify-between min-h-[280px]"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 0%, ${accent} 0, transparent 55%)`,
        }}
      />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-graticule" />

      <div className="relative">
        <div className="flex items-center justify-between font-mono text-[11px] text-[var(--color-ink-soft)] mb-6">
          <span>{project.coords}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold leading-tight text-balance">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed">
          {project.summary}
        </p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-1.5">
        {project.categories.map((cat) => (
          <span
            key={cat}
            className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border"
            style={{ color: accent, borderColor: accent }}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex items-center gap-2 text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
        View case study
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.button>
  );
}