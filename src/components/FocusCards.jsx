import { useState } from "react";

export default function FocusCards({ cards = [], onOpen }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const isActive = hoveredIndex === index;
        const isDimmed = hoveredIndex !== null && !isActive;

        return (
          <button
            key={card.title}
            type="button"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            onClick={() => onOpen(card)}
            className={`group relative h-[390px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--color-paper-deep)] text-left shadow-[0_24px_70px_rgba(0,0,0,0.16)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] ${
              isActive ? "scale-[1.02] shadow-[0_28px_80px_rgba(0,0,0,0.24)]" : "scale-100"
            } ${
              isDimmed
                ? "opacity-40 blur-[2px] scale-[0.97]"
                : "opacity-100 blur-0"
            }`}
          >
            {card.src ? (
              <img
                src={card.src}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover transition duration-700 ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[var(--color-paper-deep)] text-sm uppercase tracking-[0.24em] text-[var(--color-ink-soft)]">
                Preview Image
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,6,12,0.88)] via-[rgba(3,6,12,0.36)] to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="max-w-[55%] text-left text-[11px] font-medium uppercase tracking-[0.24em] text-white/80">
                  {card.coords}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {card.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-xl font-semibold leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75">
                    {card.subtitle}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-blue)]">
                  Click to see details
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
