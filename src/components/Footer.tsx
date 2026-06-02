import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  
  { icon: Mail, href: "mailto:gullrabia369@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl gradient-text">Rabia Gull</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xs">
              Full Stack Developer passionate about building scalable web applications
              and beautiful user experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  data-testid={`link-footer-social-${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-5">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-2" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Tech stack note */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-5">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "Framer Motion", "Node.js", "Express"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground bg-muted/40"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">Available for hire</span>
              </div>
              <p className="text-xs text-muted-foreground">Open to new opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            &copy; {new Date().getFullYear()} Rabia Gull. Made with
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" aria-label="love" />
            in Pakistan.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Scroll to top"
            data-testid="button-scroll-to-top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
