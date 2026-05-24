import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin, Mail, Calendar, Code2, Briefcase, Star, Download } from "lucide-react";

const skills = [
  { name: "JavaScript", level: 92 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 82 },
  { name: "TypeScript", level: 78 },
  { name: "HTML & CSS", level: 95 },
  { name: "Git & GitHub", level: 88 },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.8 }}
          className="text-primary font-semibold"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay, ease: [0.34, 1.56, 0.64, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary relative overflow-hidden"
        >
          {/* Shimmer sweep */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={inView ? { x: "200%" } : {}}
            transition={{ duration: 0.8, delay: delay + 1.0, ease: "easeOut" }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.15 } },
  };

  return (
    <section id="about" ref={ref} className="py-20 sm:py-24 relative" aria-labelledby="about-heading">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left: Story */}
          <motion.div variants={leftVariants}>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              <Code2 className="w-3.5 h-3.5" />
              About Me
            </motion.div>

            <motion.h2 variants={itemVariants} id="about-heading" className="text-3xl sm:text-4xl font-bold mb-6">
              Passionate developer,{" "}
              <span className="gradient-text">creative thinker</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-4">
              I&apos;m Rabia Gull, a dedicated MERN Stack Developer based in Pakistan with 2 years of
              hands-on experience building modern, scalable web applications. My journey in software
              development started with curiosity and has grown into a genuine passion for crafting
              exceptional digital experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-8">
              I specialize in the full MERN stack MongoDB, Express.js, React, and Node.js and
              thrive in environments where clean code, performance, and beautiful design intersect.
              I believe great software is not just functional; it&apos;s elegant.
            </motion.p>

            {/* Info grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: MapPin, label: "Location", value: "Faisalabad, Pakistan" },
                { icon: Mail, label: "Email", value: "gullrabia369@gmail.com" },
                { icon: Calendar, label: "Experience", value: "2+ Years" },
                { icon: Briefcase, label: "Status", value: "Available"},
              ].map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border hover:border-primary/30 transition-colors"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium">{value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: Code2, value: "20+", label: "Projects" },
                { icon: Star, value: "15+", label: "Clients" },
                { icon: Briefcase, value: "2+", label: "Years" },
              ].map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Resume button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 font-medium transition-all text-sm"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Skill bars */}
          <motion.div variants={rightVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Star className="w-3.5 h-3.5" />
              Technical Skills
            </div>

            <h3 className="text-2xl font-bold mb-8">
              My expertise & proficiency
            </h3>

            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
              ))}
            </div>

            {/* Proficiency note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 p-4 rounded-xl border border-border bg-card/50 text-sm text-muted-foreground"
            >
              <span className="text-foreground font-medium">Always learning.</span>{" "}
              Currently exploring Next.js 14, tRPC, and advanced TypeScript patterns
              to keep pushing the craft forward.
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
