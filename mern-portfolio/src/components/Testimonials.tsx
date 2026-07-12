import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MessageSquareQuote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO, TechBridge Solutions",
    location: "Dubai, UAE",
    rating: 5,
    text: "Rabia delivered our e-commerce platform ahead of schedule and exceeded every expectation. Her code quality is exceptional — clean, well-documented, and highly maintainable. The performance optimizations she implemented reduced our load time by 60%. Absolutely outstanding work.",
    initials: "AH",
    color: "bg-violet-500",
  },
  {
    name: "Sara Khan",
    role: "Product Manager, DigitalFlow Agency",
    location: "Lahore, Pakistan",
    rating: 5,
    text: "Working with Rabia was a pleasure from start to finish. She has a rare combination of technical depth and strong communication skills. She proactively suggested improvements we hadn't thought of, and the final product was exactly what our clients needed. Will definitely hire again.",
    initials: "SK",
    color: "bg-cyan-500",
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, StartupNest",
    location: "San Francisco, USA",
    rating: 5,
    text: "I've worked with many developers, but Rabia stands out for her attention to detail and commitment to quality. She built our entire SaaS MVP in just 6 weeks — a task I thought would take 3 months. Her MERN stack expertise is top-notch. Highly recommend her to anyone.",
    initials: "MR",
    color: "bg-green-500",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="py-24 bg-muted/20 relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Testimonials
          </div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            What clients <span className="gradient-text">say about me</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feedback from clients I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-8 md:p-10 rounded-2xl border border-border bg-card relative"
              data-testid={`testimonial-${current}`}
            >
              {/* Large quote mark */}
              <div className="absolute top-6 right-8 text-8xl font-serif text-primary/10 select-none" aria-hidden="true">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg leading-relaxed mb-8 text-foreground/90">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonials[current].color} flex items-center justify-center text-white font-bold shrink-0`}>
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="font-semibold">{testimonials[current].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
                  <div className="text-xs text-muted-foreground">{testimonials[current].location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-testid={`button-testimonial-dot-${i}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
                data-testid="button-testimonial-prev"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
                data-testid="button-testimonial-next"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
