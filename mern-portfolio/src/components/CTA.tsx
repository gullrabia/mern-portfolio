import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Download, ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" aria-label="Call to action">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 border-y border-border pointer-events-none" aria-hidden="true" />

      {/* Animated orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/15 blur-[80px] animate-pulse pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary/15 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 mb-8"
          >
            <Rocket className="w-8 h-8 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight"
          >
            Ready to build something{" "}
            <span className="gradient-text">amazing</span> together?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Whether you have a startup idea, need to scale an existing product, or want
            to bring a complex feature to life — I&apos;m here to help you ship. Let&apos;s create
            something that users will love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all glow-primary w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              data-testid="button-cta-hire-me"
            >
              <Rocket className="w-5 h-5" />
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-border hover:border-primary/50 font-semibold text-lg transition-all hover:bg-accent w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              data-testid="link-download-resume-cta"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground"
          >
            {[
              "Fast delivery",
              "Clean code",
              "Responsive design",
              "Post-launch support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
