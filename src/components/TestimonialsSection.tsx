import { Quote, User } from "lucide-react";

const testimonials = [
  {
    quote:
      "Add a testimonial here — a quote from a professor, mentor, or teammate about working with you.",
    name: "Name Placeholder",
    role: "Role / Organization",
  },
  {
    quote:
      "Add a testimonial here — a quote from a professor, mentor, or teammate about working with you.",
    name: "Name Placeholder",
    role: "Role / Organization",
  },
  {
    quote:
      "Add a testimonial here — a quote from a professor, mentor, or teammate about working with you.",
    name: "Name Placeholder",
    role: "Role / Organization",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;testimonials&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              What Others <span className="text-gradient">Are Saying</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A few words from people I've worked or studied with.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover-glow opacity-0 animate-scale-in flex flex-col"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Quote className="h-6 w-6 text-primary mb-4 opacity-70" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/50">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Tag */}
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-primary font-mono text-sm">&lt;/testimonials&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
