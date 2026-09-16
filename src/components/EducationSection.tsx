import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "B.Sc. in Computer Science — Cybersecurity Track",
    org: "AlRyada University for Science and Technology",
    date: "2023 – 2027",
  },
  {
    title: "Cybersecurity Academy Program",
    org: "National Telecommunication Institute (NTI) · NTRA",
    date: "Sep 2025",
    bullets: [
      "Completed 72 hours of applied cybersecurity training covering network security, penetration testing, vulnerability assessment and incident response.",
      "Practiced reconnaissance, network scanning, traffic analysis and vulnerability identification using Nmap and Wireshark.",
      "Completed hands-on labs covering Linux, security fundamentals, attack-surface analysis and defensive security techniques.",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;education&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Hands-On, <span className="text-gradient">Not Just Theory</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured programs, real labs, and where it all started.
            </p>
          </div>

          <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.title} className="glass rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="font-semibold text-sm">{e.title}</h4>
                    <span className="text-xs font-mono text-primary shrink-0">{e.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{e.org}</p>
                  {e.bullets && (
                    <ul className="space-y-1.5 text-xs text-muted-foreground list-disc pl-4 mt-2">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Closing Tag */}
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-primary font-mono text-sm">&lt;/education&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
