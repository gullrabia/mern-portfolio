import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rabia Gull | MERN Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Rabia Gull is a MERN Stack Developer with 2 years of experience building scalable web applications with React, Node.js, MongoDB, and Express. Explore projects, skills, and get in touch."
        />
        <meta name="keywords" content="MERN Stack Developer, React Developer, Node.js Developer, MongoDB, Express, Full Stack Developer, Pakistan, Web Development, Rabia Gull" />
        <meta name="author" content="Rabia Gull" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rabiagull.dev/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rabiagull.dev/" />
        <meta property="og:title" content="Rabia Gull | MERN Stack Developer Portfolio" />
        <meta property="og:description" content="MERN Stack Developer with 2 years of experience. React, Node.js, MongoDB & Express specialist building scalable web applications." />
        <meta property="og:image" content="https://rabiagull.dev/og-image.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Rabia Gull Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rabia Gull | MERN Stack Developer Portfolio" />
        <meta name="twitter:description" content="MERN Stack Developer with 2 years of experience. Specializing in React, Node.js, MongoDB & Express." />
        <meta name="twitter:image" content="https://rabiagull.dev/og-image.png" />

        {/* Structured data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rabia Gull",
            url: "https://rabiagull.dev",
            jobTitle: "MERN Stack Developer",
            description: "Full-stack web developer specializing in MERN stack with 2 years of professional experience.",
            knowsAbout: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript", "Web Development"],
            address: { "@type": "PostalAddress", addressCountry: "PK" },
            sameAs: ["https://github.com", "https://linkedin.com"],
          })}
        </script>
      </Helmet>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
