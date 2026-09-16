import { ShieldCheck, Search, Bug, FileSearch, Network, GraduationCap } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Penetration Testing",
    description:
      "Simulated, attacker-perspective assessments of web apps, networks, and systems to uncover exploitable weaknesses before real attackers do.",
    color: "primary",
  },
  {
    icon: Search,
    title: "Vulnerability Assessment",
    description:
      "Systematic scanning and manual review to identify, prioritize, and document security gaps across your environment.",
    color: "secondary",
  },
  {
    icon: Bug,
    title: "Web Application Security",
    description:
      "Reviewing web apps for common and business-logic vulnerabilities, with clear reproduction steps and remediation guidance.",
    color: "accent",
  },
  {
    icon: Network,
    title: "Network Security Review",
    description:
      "Traffic analysis, reconnaissance, and configuration review to spot misconfigurations and exposed services.",
    color: "primary",
  },
  {
    icon: FileSearch,
    title: "Security Reporting",
    description:
      "Turning technical findings into explainable, risk-ranked reports that both engineers and stakeholders can act on.",
    color: "secondary",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness & Training",
    description:
      "Practical walkthroughs and workshops to help teams recognize threats like phishing and unsafe configurations.",
    color: "accent",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;services&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              What I Can <span className="text-gradient">Help With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A few ways I can support your team's security posture — from testing to training.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass rounded-xl p-6 hover-glow group cursor-default opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${
                    service.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : service.color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Closing Tag */}
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <span className="text-primary font-mono text-sm">&lt;/services&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
