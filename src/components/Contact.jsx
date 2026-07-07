import Container from "./Container";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t hairline">
      <Container>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-blue)] mb-5">
          04 / Contact
        </p>

        <h2 className="font-display text-5xl sm:text-6xl font-semibold max-w-3xl leading-tight">
          Let’s build something spatial, useful, and clear.
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:arsalanrameen06@gmail.com"
            className="px-6 py-3 rounded-full bg-[var(--color-ink)] text-white font-medium"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="px-6 py-3 rounded-full border hairline font-medium"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="px-6 py-3 rounded-full border hairline font-medium"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}