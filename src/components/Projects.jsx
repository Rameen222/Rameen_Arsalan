import { useEffect, useState } from "react";
import { SiUnity, SiAutodeskrevit, SiArduino, SiQgis, SiArcgis, SiGoogleearthengine, SiCesium, SiPython, SiMysql, SiPostgresql, SiJavascript, SiNodedotjs, SiCplusplus } from "react-icons/si";
import RevealHeading from "./RevealHeading";
import FocusCards from "./FocusCards";
import { projects } from "../data/projects";
import Container from "./Container";
import LogoLoop from "./LogoLoop";

const filters = [
  { label: "All Work", value: "All" },
  { label: "Digital Twins & 3D GIS", value: "Digital Twins & 3D GIS" },
  { label: "Remote Sensing & Earth Observation", value: "Remote Sensing & Earth Observation" },
  { label: "Climate, Hydrology & Disaster Risk", value: "Climate, Hydrology & Disaster Risk" },
  { label: "Urban Analytics & Planning", value: "Urban Analytics & Planning" },
  { label: "WebGIS & Spatial Databases", value: "WebGIS & Spatial Databases" },
  { label: "Geospatial AI/ML", value: "Geospatial AI/ML" },
];

const softwareLogos = [
  {
    node: <SiUnity className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "Unity",
    href: "https://unity.com"
  },
  {
    node: <SiAutodeskrevit className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "Autodesk Revit",
    href: "https://www.autodesk.com/products/revit/overview"
  },
  {
    node: <SiArduino className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "Arduino",
    href: "https://www.arduino.cc"
  },
  {
    node: <SiQgis className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "QGIS",
    href: "https://qgis.org"
  },
  {
    node: <SiArcgis className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "ArcGIS",
    href: "https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview"
  },
  {
    node: <SiGoogleearthengine className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "Google Earth Engine",
    href: "https://earthengine.google.com"
  },
  {
    node: (
      <span className="inline-flex h-15 w-20 items-center justify-center rounded-full border border-[var(--color-ink)] text-[var(--color-ink)] text-[12px] font-semibold uppercase tracking-[0.18em]">
        Agisoft
      </span>
    ),
    title: "Agisoft",
    href: "https://www.agisoft.com"
  },
  {
    node: <SiCesium className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "Cesium",
    href: "https://cesium.com"
  },
  {
    node: <SiPython className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "Python",
    href: "https://www.python.org"
  },
  {
    node: <SiMysql className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "SQL",
    href: "https://www.mysql.com"
  },
  {
    node: <SiCplusplus className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "C++",
    href: "https://isocpp.org"
  },
  {
    node: <SiJavascript className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/docs/Web/JavaScript"
  },
  {
    node: <SiNodedotjs className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "Node.js",
    href: "https://nodejs.org"
  },
  {
    node: <SiPostgresql className="h-15 w-20 text-[var(--color-ink)]" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org"
  }
];

function DetailBlock({ label, value }) {
  return (
    <div className="rounded-[1.2rem] border border-[var(--color-ink-soft)]/10 bg-[var(--color-paper-deep)]/70 p-4">
      <h4 className="font-display text-lg font-semibold text-[var(--color-ink)]">{label}</h4>
      <p className="mt-2 text-sm leading-7 text-[var(--color-ink-soft)]">{value}</p>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  const lastThreeImageProjects = [
    "Spatio-Temporal LULC Change Detection & Future Prediction",
    "MODIS LST Processing Pipeline",
    "Disaster Response GIS System",
  ];

  const isLastThreeSelected =
    selectedProject && lastThreeImageProjects.includes(selectedProject.title);

  const imageClasses = `mt-6 w-full rounded-[1.25rem] bg-[var(--color-paper-deep)] object-contain ${
    isLastThreeSelected ? "max-h-[36rem] sm:max-h-[42rem]" : ""
  }`;

  return (
    <section id="projects" className="relative py-28 sm:py-36 border-t hairline">
      <Container>
        <RevealHeading eyebrow="02 / Projects" className="text-4xl sm:text-5xl">
          Spatial Systems.
        </RevealHeading>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wide transition ${
                activeFilter === filter.value
                  ? "border-transparent bg-[var(--color-ink)] text-white"
                  : "border-[var(--color-ink-soft)] text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <FocusCards cards={filteredProjects} onOpen={setSelectedProject} />
      </Container>

      <div className="mt-16 w-full overflow-hidden">
        <LogoLoop
          logos={softwareLogos}
          speed={120}
          direction="left"
          logoHeight={84}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="rgba(255,255,255,1)"
          ariaLabel="Software and tools"
          className="w-full"
        />
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm sm:px-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/20 bg-[var(--color-paper)] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.35)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--color-blue)]">
                  Project Detail
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)] sm:text-base">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-[var(--color-ink-soft)]/20 p-2 text-xl leading-none text-[var(--color-ink-soft)] transition hover:bg-[var(--color-paper-deep)] hover:text-[var(--color-ink)]"
                aria-label="Close project details"
              >
                ×
              </button>
            </div>

            {selectedProject.video ? (
              <video
                controls
                preload="metadata"
                poster={selectedProject.poster}
                className="mt-6 w-full rounded-[1.25rem] bg-black object-contain sm:aspect-video"
                src={selectedProject.video}
              >
                Your browser does not support the video tag.
              </video>
            ) : selectedProject.gallery ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {selectedProject.gallery.map((imageSrc, index) => (
                  <img
                    key={`${imageSrc}-${index}`}
                    src={imageSrc}
                    alt={`${selectedProject.title} gallery ${index + 1}`}
                    loading="lazy"
                    className="w-full rounded-[1.25rem] bg-[var(--color-paper-deep)] object-contain"
                  />
                ))}
              </div>
            ) : selectedProject.modalSrc ? (
              <img
                src={selectedProject.modalSrc}
                alt={`${selectedProject.title} detail`}
                loading="lazy"
                className={imageClasses}
              />
            ) : selectedProject.src ? (
              <img
                src={selectedProject.src}
                alt={selectedProject.title}
                loading="lazy"
                className={imageClasses}
              />
            ) : null}

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[var(--color-blue)]/20 bg-[var(--color-paper-deep)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-ink-soft)]"
                >
                  {category}
                </span>
              ))}
            </div>

            <p className="mt-6 text-base leading-8 text-[var(--color-ink-soft)]">
              {selectedProject.summary}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="space-y-5">
                <DetailBlock label="Aim" value={selectedProject.aim} />
                <DetailBlock label="Methodology" value={selectedProject.methodology} />
                <DetailBlock label="Personal Contribution" value={selectedProject.contribution} />
              </div>
              <div className="space-y-5">
                <DetailBlock label="Output" value={selectedProject.output} />
                <DetailBlock label="Learning" value={selectedProject.learning} />
                <DetailBlock label="Tools" value={selectedProject.tools.join(", ")} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}