import { motion } from "framer-motion";
import RevealHeading from "./RevealHeading";
import Container from "./Container";
import Timeline from "./Timeline";
const STATS = [
  { value: "700+", label: "glacial inventory features updated" },
  { value: "7", label: "urban union councils mapped" },
  { value: "3D", label: "digital twin + WebGIS experience" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 border-t hairline">
      <Container className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <RevealHeading eyebrow="01 / About" className="text-4xl sm:text-5xl">
            Spatial thinking, engineered.
          </RevealHeading>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-md"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-orange)]">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-[var(--color-ink-soft)] leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-lg leading-relaxed text-[var(--color-ink-soft)]"
        >
          <p>
            I work at the intersection of{" "}
            <span className="text-[var(--color-ink)] font-medium">
              GIS, remote sensing, WebGIS, and digital twins
            </span>
            — turning satellite imagery, terrain data, field datasets, and 3D
            environments into systems that support planning and risk decisions.
          </p>

          <p>
            My experience includes glacier inventory updates, GLOF monitoring,
            watershed mapping, urban regeneration datasets, thematic mapping,
            WebGIS development, and 3D digital twin workflows.
          </p>

          

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Urban Analysis",
              "Climate Risk",
              "Remote Sensing",
              "WebGIS",
              "Digital Twins",
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-[var(--color-blue)]/30 text-[var(--color-blue)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>

      <Container className="mt-24">
        <RevealHeading eyebrow="Experience" className="text-3xl sm:text-4xl mb-10">
          Where I've worked.
        </RevealHeading>
        <Timeline />
      </Container>
    </section>
  );
}