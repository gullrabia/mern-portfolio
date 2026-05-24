import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

const education = [
  {
    degree: " Master of Science in Computer Science",
    institution: "Govt Collage University Faisalabad",
    location: "Pakistan",
    period: "2019 – 2021",
    grade: "3.30 / 4.0 GPA",
    description:
      "Comprehensive study of computer science fundamentals including data structures, algorithms, software engineering, database systems, and web development. Completed final year project on a full-stack e-learning platform.",
    highlights: [
      "Final Year Project: Full-stack e-learning platform with 200+ users",
      "Dean's Honor List 3 consecutive semesters",
      "Led university's web development club",
      "Courses: DSA, DBMS, Software Engineering, Web Dev, Networks",
    ],
  },
  {
    degree: "Full-Stack MERN Development",
    institution: "Udemy & Coursera",
    location: "Online",
    period: "2022 – 2024",
    grade: "Certified",
    description:
      "Intensive online courses covering the complete MERN stack with modern best practices. Completed over 200 hours of hands-on learning and built multiple real-world projects.",
    highlights: [
      "The Complete MERN Stack Bootcamp 95% completion score",
      "React The Complete Guide (Academind)",
      "Node.js, Express, MongoDB & More (Jonas Schmedtmann)",
      "Built 10+ portfolio projects during coursework",
    ],
  },
  {
    degree: "Bacholar of Science in Computer Science",
    institution: "Government College University Faisalabad",
    location: "Pakistan",
    period: "2017 – 2019",
    grade: "87%",
    description:
      "Foundation studies in mathematics, physics, and computer science. Developed first interest in programming and web development through course projects.",
    highlights: [
      "Top 5% of graduating class",
      "Built first website using HTML and CSS",
      "Participated in science fair with a programming project",
    ],
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 bg-muted/20 relative" aria-labelledby="education-heading">
      <div className="absolute left-0 top-1/3 w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 id="education-heading" className="text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic foundation and continuous learning journey in computer science
            and web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              data-testid={`card-education-${i}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                {i === 0 ? (
                  <GraduationCap className="w-6 h-6 text-primary" />
                ) : i === 1 ? (
                  <BookOpen className="w-6 h-6 text-primary" />
                ) : (
                  <Award className="w-6 h-6 text-primary" />
                )}
              </div>

              {/* Header */}
              <h3 className="text-base font-bold mb-1 leading-tight">{edu.degree}</h3>
              <div className="font-semibold text-primary text-sm mb-1">{edu.institution}</div>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </div>
                <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/20 font-medium">
                  {edu.grade}
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {edu.description}
              </p>

              <ul className="space-y-1.5">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
