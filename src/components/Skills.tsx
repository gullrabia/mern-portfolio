import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers } from "lucide-react";
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiTailwindcss, SiGit, SiGithub, SiRedux, SiNextdotjs,
  SiPostman, SiFigma, SiVercel,
} from "react-icons/si";

const techStack = [
  { name: "React.js", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "Express.js", icon: SiExpress, color: "#888888", category: "Backend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Language" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Language" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#888888", category: "Frontend" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "#888888", category: "Tools" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Tools" },
  { name: "Vercel", icon: SiVercel, color: "#888888", category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Language", "Tools"];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 bg-muted/20 relative" aria-labelledby="skills-heading">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Layers className="w-3.5 h-3.5" />
            Tech Stack
          </div>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of tools and technologies I use daily to build
            modern, performant web applications.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.08 }}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-default"
                data-testid={`card-skill-${tech.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold leading-tight">{tech.name}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{tech.category}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Category filters visual indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {categories.slice(1).map((cat) => {
            const count = cat === "All" ? techStack.length : techStack.filter((t) => t.category === cat).length;
            return (
              <div key={cat} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm">
                <span className="font-medium">{cat}</span>
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">{count}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
