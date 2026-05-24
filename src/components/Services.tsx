import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Globe, Server, Database, Palette, Zap, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using the MERN stack. From database design to pixel-perfect UIs, I build complete solutions that scale.",
    features: ["React.js frontend", "Node.js + Express API", "MongoDB database", "Deployment & CI/CD"],
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Server,
    title: "REST API Development",
    description:
      "Designing and building robust, secure, and well-documented REST APIs. Clean architecture, proper error handling, and performance optimization included.",
    features: ["RESTful API design", "Authentication & authorization", "Rate limiting & security", "API documentation"],
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Architecting efficient MongoDB schemas and relational database structures. Query optimization, indexing strategies, and data migration expertise.",
    features: ["MongoDB schema design", "Query optimization", "Data modeling", "Migration planning"],
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transforming designs into pixel-perfect, accessible, and animated interfaces. Responsive across all devices with smooth micro-interactions.",
    features: ["Responsive design", "Framer Motion animations", "Accessibility (WCAG)", "Cross-browser support"],
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Auditing and optimizing web apps for speed and efficiency. Code splitting, lazy loading, caching strategies, and Lighthouse score improvements.",
    features: ["Lighthouse audits", "Code splitting & lazy loading", "Caching strategies", "Bundle optimization"],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Code Review & Mentoring",
    description:
      "Providing thorough code reviews, best-practice guidance, and technical mentoring to help teams write cleaner, more maintainable code.",
    features: ["Code quality analysis", "Security best practices", "Architecture review", "Team mentoring"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-muted/20 relative" aria-labelledby="services-heading">
      <div className="absolute left-1/2 top-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -translate-x-1/2" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            What I Offer
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Services & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services tailored to bring your ideas to life
            with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group p-6 rounded-2xl border ${service.border} bg-card hover:shadow-lg transition-all duration-300`}
                data-testid={`card-service-${i}`}
              >
                <div className={`w-12 h-12 rounded-xl ${service.bg} ${service.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.bg} border ${service.border} ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
