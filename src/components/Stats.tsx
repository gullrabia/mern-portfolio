import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", description: "Building production apps" },
  { value: 50, suffix: "+", label: "Projects Completed", description: "For clients worldwide" },
  { value: 20, suffix: "+", label: "Happy Clients", description: "Satisfied customers" },
  { value: 8, suffix: "+", label: "Technologies", description: "Mastered & in use" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl sm:text-5xl font-black gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" aria-label="Statistics">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 border-y border-border pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            By the numbers
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-base font-bold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
