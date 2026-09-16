import { BadgeCheck } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const certifications = [
  { title: "CCST Cybersecurity", org: "Cisco Systems", date: "May 2026" },
];

export function CertificationsSection() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;achievements&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Certifications & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured programs, real labs, and where it all started.
            </p>
          </div>

          <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((c) => (
                <div key={c.title} className="glass rounded-xl overflow-hidden">
                  <div className="p-4">
                    <img
                     src="/imgs/Cisco Cert.png"
                     alt="CCST Cybersecurity certificate"
                     className="w-full aspect-video object-cover rounded-lg"
                    />
                  </div>
                  <div className="px-5 pb-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{c.title}</h4>
                      <p className="text-xs text-muted-foreground">{c.org}</p>
                    </div>
                    <span className="text-xs font-mono text-primary shrink-0">{c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Tag */}
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-primary font-mono text-sm">&lt;/achievements&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
