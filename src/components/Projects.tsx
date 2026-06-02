import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FolderKanban, Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "Dubai Real Estate Platform",
    description:
      "Developed and optimized modern WordPress-based business and real estate platforms featuring responsive UI/UX, SEO optimization, lead generation systems, dynamic content management, and scalable web solutions for luxury interior design and UAE real estate businesses.",
    tech: ["Wordpress", "WooCommerce", "Html", "CSS", "Javascript", "Responsive Web Design"],
    github: "https://github.com",
    demo: "https://nexhome.ae",
    featured: true,
    category: "Wordpress",
    gradient: "from-violet-500/20 to-purple-500/10",
    accent: "#7c3aed",
  },
  {
    title: "Branding Store Lasvel",
    description:
      "Developed a luxury WooCommerce-based e-commerce platform for handcrafted beaded bags, featuring responsive design, secure online shopping, SEO optimization, product management, and a premium user experience that strengthens brand visibility and online sales.",
    tech: ["Wordpress", "WooCommerce", "Custom Coding ", "3D Animations", "Responsvie Web Design"],
    github: "https://github.com",
    demo: "https://lasvel.com/",
    featured: true,
    category: "Wordpress",
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

    category: "Full-Stack",

    gradient: "from-blue-500/20 to-indigo-500/10",

    accent: "#3b82f6",
  },
  {
    title: "Business & Corporate Website",
    description:
      "A modern and responsive business website developed to establish a strong online presence and showcase company services, projects, and brand identity. The website features a clean user interface, mobile-friendly design, fast loading performance, and optimized user experience. It is designed to help businesses attract potential clients, present their services professionally, and improve their digital visibility.",
    tech: ["WordPress", "Elementor Page Builder", "Custom WordPress Theme Development", "PHP", "mySql", "Responsive Web Design"],
    github: "https://github.com",
    demo: "https://hotpink-ram-926782.hostingersite.com/",
    featured: false,
    category: "Wordpress",
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
    title: "Furniture Website",
    description:
      "A modern Furniture E-Commerce Website designed to showcase a wide range of home and office furniture products in an elegant and user-friendly interface. The platform focuses on delivering a smooth shopping experience where users can easily browse furniture categories such as sofas, beds, tables, chairs, wardrobes, and home décor items.",
    tech: ["HTML", "Css", "javascript", "Php", "MySql", "Wordpress", "Elementor", "Responsive Design", "Hostinger Hosting"],
    github: "https://github.com",
    demo: "https://mediumpurple-woodpecker-431836.hostingersite.com/",
    featured: true,
    category: "Wordpress",
    gradient: "from-green-500/20 to-emerald-500/10",
    accent: "#10b981",
  },
  {
    title: "Blogging Website",
    description:
    "Developed a Car Blogging Website (pakcarinfo.com) using HTML, CSS, JavaScript, PHP, and MySQL. The platform allows publishing and managing automotive blogs including car news, reviews, and maintenance guides. The website is fully responsive, SEO-optimized, and designed to provide a smooth and engaging reading experience for car enthusiasts.",
    tech: ["HTML", "Css", "javascript", "Php", "MySql", "Wordpress", "Elementor", "Responsive Design", "Hostinger Hosting"],
    github: "https://github.com",
    demo: "https://pakcarinfo.com/",
    featured: true,
    category: "Wordpress",
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

    category: "Full-Stack",

    gradient: "from-violet-500/20 to-cyan-500/10",

    accent: "#8b5cf6",
  }
];

const categories = ["All", "Full-Stack", "Wordpress", " Custum Landing Pages" ];

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
            A selection of real-world projects I&apos;ve built from e-commerce platforms
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
