import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCE = [
  {
    role: "GIS Analyst",
    org: "Sheharsaaz",
    project: "Urban Regeneration Project — Nowshera & Rawalpindi",
    date: "Sept. 2025 – Feb. 2026",
    points: [
      "Digitised and classified land features across 7 Union Councils — roads, agricultural land, commercial and residential buildings, public facilities, and open spaces.",
      "Produced thematic maps for urban regeneration planning and supporting municipal decision-making.",
    ],
  },
  {
    role: "Geospatial Intern",
    org: "Pakistan Meteorological Department",
    project: "Climate Risk Assessment & GLOF Monitoring",
    date: "June 2025 – Aug. 2025",
    points: [
      "Assisted in updating 700+ glacial inventory delineations of Chitral and analyzed changes in glacier extent.",
      "Performed watershed delineation alongside glacier digitisation to map drainage basins and model downstream GLOF flood pathways.",
    ],
  },
  {
    role: "Research Intern",
    org: "Geo Visual Analytical Research Lab, NUST",
    project: "ML/AI Literature ETL & Canopy Prediction",
    date: "June 2024 – Aug. 2024",
    points: [
      "Built end-to-end Python ETL pipeline to extract and structure 1000+ ML/AI publications, reducing manual effort by 50%.",
      "Developed datasets supporting canopy type prediction via Artificial Neural Network.",
    ],
  },
];

export default function Timeline() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative overflow-x-auto py-2">
      <div className="flex gap-6 min-w-full">
        {EXPERIENCE.map((item, i) => (
          <div
            key={item.role}
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            className="group min-w-[320px] sm:min-w-[360px] rounded-[2rem] border border-[var(--color-ink-soft)]/10 bg-[var(--color-paper)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4
                  className={`font-display text-2xl font-semibold transition-colors duration-300 ${
                    active === i ? "text-[var(--color-orange)]" : "text-[var(--color-ink)]"
                  }`}
                >
                  {item.role}
                </h4>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)] uppercase tracking-[0.24em]">
                  {item.org}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-mono transition-colors duration-300 ${
                  active === i
                    ? "border-[var(--color-orange)] text-[var(--color-orange)] bg-[var(--color-orange)]/10"
                    : "border-[var(--color-ink)]/20 text-[var(--color-ink-soft)]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.26em] text-[var(--color-blue)]">
              Hover for details
            </p>

            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -6 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 rounded-[1.5rem] border border-[var(--color-ink-soft)]/10 bg-[var(--color-ink)]/[0.04] p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <p className="font-display text-base font-semibold text-[var(--color-ink)]">
                        {item.project}
                      </p>
                      <span className="font-mono text-xs text-[var(--color-blue)] whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((p) => (
                        <li
                          key={p}
                          className="text-sm text-[var(--color-ink-soft)] leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-orange)]"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}