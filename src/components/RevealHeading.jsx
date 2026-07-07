import { motion } from "framer-motion";

export default function RevealHeading({ eyebrow, children, className = "" }) {
  const words = String(children).split(" ");

  return (
    <div>
      {eyebrow && (
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-blue)] mb-5">
          {eyebrow}
        </p>
      )}

      <h2 className={`font-display font-semibold leading-tight ${className}`}>
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="inline-block mr-3"
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}