import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Freelance",
    location: "Remote — Pakistan",
    period: "2023 – Present",
    type: "Current",
    description:
      "Designing and delivering full-stack web applications for clients across various industries. Architecting scalable REST APIs with Node.js and Express, building responsive React frontends, and managing MongoDB databases.",
    achievements: [
      "Delivered 12+ client projects on time and within budget",
      "Built an e-commerce platform handling 1,000+ daily transactions",
      "Reduced API response times by 40% through query optimization",
      "Implemented real-time features using Socket.io for live dashboards",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Tech Solutions Agency",
    location: "Pakistan",
    period: "2022 – 2023",
    type: "Past",
    description:
      "Collaborated with a cross-functional team to develop and maintain web applications. Focused on frontend development using React.js while learning backend integration with Node.js and Express.",
    achievements: [
      "Contributed to 8 production web applications",
      "Improved UI performance by 35% through component optimization",
      "Integrated third-party APIs including payment gateways and maps",
      "Participated in Agile sprints and code review processes",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Digital Startup",
    location: "Pakistan",
    period: "2021 – 2022",
    type: "Past",
    description:
      "Started my professional journey building static websites and learning the fundamentals of JavaScript and React. Quickly progressed to dynamic web applications with database integration.",
    achievements: [
      "Built 5+ landing pages with HTML, CSS, and JavaScript",
      "Learned React.js and built first full-stack application",
      "Received 'Top Performer' recognition from senior developers",
    ],
  },
];

function ExperienceCard({ exp, index, inView }: { exp: typeof experiences[0]; index: number; inView: boolean }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="relative flex items-start"
    >
      {/* Mobile & tablet: left-aligned timeline */}
      {/* Desktop: alternating sides */}

      {/* Timeline dot — mobile: left-4, desktop: center */}
      <div
        className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary bg-background z-10 flex items-center justify-center mt-6 shrink-0"
        aria-hidden="true"
      >
        {exp.type === "Current" && (
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
        )}
      </div>

      {/* On desktop — alternate card position */}
      {/* Even: card on the right half */}
      {/* Odd: card on the left half */}

      {/* Mobile layout: always full-width, offset left for the line+dot */}
      <div className={`
        w-full pl-12 lg:pl-0
        lg:w-1/2
        ${isEven ? "lg:ml-auto lg:pl-12" : "lg:mr-auto lg:pr-12"}
      `}>
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(124,58,237,0.12)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group p-5 sm:p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-base sm:text-lg font-bold">{exp.title}</h3>
                {exp.type === "Current" && (
                  <span className="px-2 py-0.5 rounded-full bg-green-500/15 text-green-500 text-xs font-semibold border border-green-500/20">
                    Current
                  </span>
                )}
              </div>
              <div className="font-semibold text-primary text-sm">{exp.company}</div>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {exp.location}
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {exp.description}
          </p>

          <ul className="space-y-2">
            {exp.achievements.map((achievement, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + j * 0.08 + 0.4 }}
                className="flex items-start gap-2.5 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-24 relative" aria-labelledby="experience-heading">
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Work History
          </div>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building web applications and growing as a full-stack developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — mobile: left-4, desktop: center */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent transform -translate-x-1/2 origin-top"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
