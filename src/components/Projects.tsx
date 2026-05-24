import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FolderKanban, Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce MERN Platform",
    description:
      "A full-featured e-commerce application with product management, shopping cart, secure payments via Stripe, user authentication, order tracking, and an admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    category: "Full-Stack",
    gradient: "from-violet-500/20 to-purple-500/10",
    accent: "#7c3aed",
  },
  {
    title: "Task Management System",
    description:
      "A Kanban-style project management tool with drag-and-drop boards, real-time updates via Socket.io, team collaboration, deadline tracking, and notifications.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    category: "Full-Stack",
    gradient: "from-cyan-500/20 to-teal-500/10",
    accent: "#06b6d4",
  },
  {
    title: "JWT Authentication System",
    description:
      "A secure full-stack authentication system built with the MERN stack, featuring user registration, login, JWT-based authentication, protected routes, and session handling. The system ensures secure access control and persistent user sessions across the application.",

    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Axios"],

    github: "https://github.com",
    demo: "https://jwt-authentication-rouge.vercel.app/login",

    featured: true,

    category: "Authentication System",

    gradient: "from-blue-500/20 to-indigo-500/10",

    accent: "#3b82f6",
  },
  {
    title: "Blog Publishing Platform",
    description:
      "A modern blogging platform with a rich markdown editor, category tagging, search functionality, comment system, user profiles, and SEO optimization.",
    tech: ["React", "Node.js", "MongoDB", "Express", "React-Quill"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    category: "Full-Stack",
    gradient: "from-amber-500/20 to-orange-500/10",
    accent: "#f59e0b",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A messaging app featuring private chats, group rooms, file sharing, message reactions, online status indicators, and end-to-end encrypted conversations.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    github: "https://chat-frontend-bice.vercel.app/",
    demo: "https://chat-frontend-bice.vercel.app/login",
    featured: true,
    category: "Full-Stack",
    gradient: "from-green-500/20 to-emerald-500/10",
    accent: "#10b981",
  },
  {
    title: "AI Resume Builder",
    description:
      "A smart AI-powered resume builder that helps users create professional resumes with customizable templates, real-time editing, AI-generated content suggestions, PDF export, authentication, and responsive modern UI.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "JWT",
      "Tailwind CSS"
    ],

    github: "https://github.com/gullrabia/Resume-Builder-frontend",
    demo: "https://resume-builder-frontend-eta-navy.vercel.app/app?state=login",

    featured: true,

    category: "AI / Full-Stack",

    gradient: "from-violet-500/20 to-cyan-500/10",

    accent: "#8b5cf6",
  }
];

const categories = ["All", "Full-Stack", "Dashboard"];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="py-24 relative" aria-labelledby="projects-heading">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <FolderKanban className="w-3.5 h-3.5" />
            Portfolio
          </div>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of real-world projects I&apos;ve built — from e-commerce platforms
            to real-time apps, each solving genuine problems.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              data-testid={`button-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${project.gradient}`}
              data-testid={`card-project-${i}`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-semibold">
                  <Star className="w-2.5 h-2.5" />
                  Featured
                </div>
              )}

              {/* Gradient header bar */}
              <div
                className="w-full h-1 rounded-full mb-5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
              />

              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                {project.category}
              </span>

              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-border hover:border-primary/40 text-sm font-medium transition-all hover:bg-primary/10"
                  whileHover={{ scale: 1.02 }}
                  aria-label={`View ${project.title} on GitHub`}
                  data-testid={`link-github-${i}`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90"
                  whileHover={{ scale: 1.02 }}
                  aria-label={`View ${project.title} live demo`}
                  data-testid={`link-demo-${i}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
