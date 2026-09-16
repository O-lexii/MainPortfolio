import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    id: "Jul 2026",
    title: "HCIA-AI Training",
    org: "National Telecommunication Institute (NTI) · Huawei",
    bullets: [
      "Completed an 80-hour Huawei HCIA-AI training program covering AI concepts, technologies and applications.",
      "Gained practical exposure to machine learning, deep learning and AI applications.",
      "Developed knowledge of AI models, data processing and intelligent systems.",
    ],
  },
  {
    id: "Aug 2025",
    title: "HCIA-Cloud Computing Training",
    org: "National Telecommunication Institute (NTI) · Huawei",
    bullets: [
      "Completed a 70-hour cloud computing curriculum covering core Huawei Cloud services, deployment models and architecture fundamentals.",
      "Configured and tested cloud-based environments to reinforce infrastructure and service-management concepts.",
    ],
  },
  {
    id: "Jul 2024",
    title: "Web Technologies Training",
    org: "Information Technology Institute (ITI)",
    bullets: [
      "Completed a 60-hour introductory program covering front-end and back-end web development fundamentals.",
      "Built web-based exercises applying HTML, CSS and core scripting concepts.",
    ],
  },
];

function ExperienceEntry({ id, title, org, bullets }: { id: string; title: string; org: string; bullets: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <span className="text-xs font-mono text-primary shrink-0">{id}</span>
        <span className="flex-1 font-medium">
          {title} <span className="text-muted-foreground">— {org}</span>
        </span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;experience&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Hands-On, <span className="text-gradient">Not Just Theory</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured programs, real labs, and where it all started.
            </p>
          </div>

          <div className="opacity-0 animate-slide-in-left space-y-3" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold mb-4">Training Log</h3>
            {experiences.map((x) => (
              <ExperienceEntry key={x.title} {...x} />
            ))}
          </div>

          {/* Closing Tag */}
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-primary font-mono text-sm">&lt;/experience&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
