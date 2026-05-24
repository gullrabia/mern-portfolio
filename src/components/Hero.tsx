import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";

import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const typedPhrases = [
  "Building scalable web apps",
  "2 years of full-stack experience",
  "React • Node • MongoDB • Express",
  "Clean code. Modern UI.",
  "Turning ideas into reality",
];

/* =========================================
   TYPEWRITER
========================================= */

function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = typedPhrases[phraseIndex];

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 60);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % typedPhrases.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, deleting, phraseIndex]);

  return (
    <span className="text-secondary font-mono">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* =========================================
   PREMIUM PARTICLE BACKGROUND
========================================= */

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      opacity: number;
    }[] = [];

    /* MORE PARTICLES */

    for (let i = 0; i < 140; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        /* FASTER MOTION */
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,

        r: Math.random() * 2.5 + 0.8,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    let animationFrame: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        /* BOUNCE EFFECT */

        if (p.x <= 0 || p.x >= canvas.width) {
          p.vx *= -1;
        }

        if (p.y <= 0 || p.y >= canvas.height) {
          p.vy *= -1;
        }

        /* PARTICLE GLOW */

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.r * 4
        );

        gradient.addColorStop(0, `rgba(124,58,237,${p.opacity})`);
        gradient.addColorStop(1, `rgba(124,58,237,0)`);

        ctx.fillStyle = gradient;

        ctx.fill();
      });

      /* CONNECTION LINES */

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();

            ctx.strokeStyle = `rgba(
              124,
              58,
              237,
              ${0.18 * (1 - dist / 160)}
            )`;

            ctx.lineWidth = 0.7;

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* =========================================
   PROFILE PHOTO
========================================= */

function ProfilePhoto() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    mouseX.set(((e.clientX - cx) / rect.width) * 8);

    mouseY.set(-((e.clientY - cy) / rect.height) * 8);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-primary/20 blur-3xl animate-pulse" />

      <div
        className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-secondary/15 blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* 3D CARD */}

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* PREMIUM FRAME */}

        <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(124,58,237,0.35)]">

          <img
            src="/rabia-gull.png"
            alt="Rabia Gull"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* TOP BADGE */}

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl border border-border bg-card/90 backdrop-blur-sm shadow-lg flex items-center gap-2 whitespace-nowrap z-20"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />

          <div className="text-sm font-semibold">
            MERN Specialist
          </div>
        </motion.div>

        {/* PROJECT BADGE */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="absolute -bottom-5 right-0 px-4 py-2 rounded-xl border border-border bg-card/90 backdrop-blur-sm shadow-lg flex items-center gap-3 z-20"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <div>
            <div className="text-[10px] text-muted-foreground">
              Projects Completed
            </div>

            <div className="text-base font-bold gradient-text">
              20+
            </div>
          </div>
        </motion.div>

        {/* AVAILABLE BADGE */}

        <motion.div
          animate={{ x: [0, -8, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute top-1/2 -left-6 -translate-y-1/2 px-3 py-1.5 rounded-xl border border-green-500/30 bg-green-500/10 shadow-lg flex items-center gap-2 z-20"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <div className="text-xs font-semibold text-green-400 whitespace-nowrap">
            Available
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* =========================================
   HERO SECTION
========================================= */

export default function Hero() {
  const scrollToAbout = () =>
    document
      .querySelector("#about")
      ?.scrollIntoView({ behavior: "smooth" });

  const scrollToProjects = () =>
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <ParticleBackground />

      {/* AURORA BLOBS */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />

        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              Available for opportunities
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4"
            >
              Hi, I&apos;m{" "}

              <span className="gradient-text block">
                Rabia Gull
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-foreground mb-2"
            >
              MERN Stack Developer
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-8 h-7"
            >
              <TypewriterText />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              A passionate full-stack developer with 2 years
              of experience building scalable web applications.
              I craft clean, efficient code and beautiful
              user experiences that make a real difference.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
              >
                <ExternalLink className="w-4 h-4" />

                View My Work
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 font-semibold transition-all hover:bg-accent"
              >
                <Mail className="w-4 h-4" />

                Contact Me
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-secondary/50 text-secondary hover:bg-secondary/10 font-semibold transition-all"
              >
                <Download className="w-4 h-4" />

                Resume
              </motion.a>
            </motion.div>

            {/* SOCIAL LINKS */}

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <span className="text-sm text-muted-foreground">
                Find me on
              </span>

              {[
                {
                  icon: Github,
                  href: "https://github.com",
                  label: "GitHub",
                },

                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },

                {
                  icon: Mail,
                  href: "mailto:rabia.gull@example.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <button
              onClick={scrollToAbout}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}