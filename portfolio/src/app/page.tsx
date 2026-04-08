"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Filter,
  GraduationCap,
  MoonStar,
  Radar,
  Sparkles,
  SunMedium,
  Zap,
  Shield,
  Code2,
  Database,
} from "lucide-react";
import { portfolioContent, projectFilters } from "@/content/portfolio";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const skillIcons: Record<string, React.ReactNode> = {
  "Automation Architecture": <Zap size={20} />,
  "Backend and Tooling": <Code2 size={20} />,
  "Data, AI, and Insight": <Database size={20} />,
  "Security and Embedded Thinking": <Shield size={20} />,
};

const skillColors: Record<string, string> = {
  "Automation Architecture": "var(--accent-green)",
  "Backend and Tooling": "var(--accent-warm)",
  "Data, AI, and Insight": "var(--accent)",
  "Security and Embedded Thinking": "var(--accent-rose)",
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [theme, setTheme] = useState<"night" | "dawn">("dawn");
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [heroTapCount, setHeroTapCount] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [xpAnimated, setXpAnimated] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (heroInView) {
      const timer = setTimeout(() => setXpAnimated(true), 300);
      return () => clearTimeout(timer);
    }
  }, [heroInView]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "story", "projects", "skills", "experience", "contact"];
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? portfolioContent.projects
      : portfolioContent.projects.filter((p) => p.tags.includes(activeFilter));

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHeroTap = () => {
    const next = heroTapCount + 1;
    setHeroTapCount(next);
    if (next >= 4) setSecretUnlocked(true);
  };

  return (
    <main className="portfolio-shell">
      {/* Ambient Background */}
      <div className="bg-grid" />
      <div className="glow-orb glow-orb--purple" />
      <div className="glow-orb glow-orb--orange" />
      <div className="glow-orb glow-orb--green" />

      {/* ── TOPBAR ── */}
      <header className="topbar">
        <button className="brand-mark" onClick={() => jumpTo("hero")} type="button">
          <span className="brand-mark__eyebrow">Pynfinity</span>
          <span className="brand-mark__name">T V Santosh</span>
        </button>

        <nav className="topbar__nav" aria-label="Primary">
          {portfolioContent.navigation.map((item) => (
            <button
              key={item.id}
              className={`nav-chip ${activeSection === item.id ? "is-active" : ""}`}
              onClick={() => jumpTo(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setTheme((c) => (c === "night" ? "dawn" : "night"))}
          type="button"
          aria-label="Toggle theme"
        >
          {theme === "night" ? <SunMedium size={16} /> : <MoonStar size={16} />}
          <span>{theme === "night" ? "Dawn" : "Night"}</span>
        </button>
      </header>

      {/* ── CONTENT ── */}
      <div className="content-layer">

        {/* ══════════ HERO ══════════ */}
        <section id="hero" className="hero" ref={heroRef}>
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="section-kicker">Portfolio Experience</span>

            <button onClick={handleHeroTap} type="button" style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}>
              <h1 className="hero-name">{portfolioContent.identity.firstLine}</h1>
            </button>

            {secretUnlocked && (
              <motion.div className="neu-card easter-egg" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                <span className="section-kicker">🏆 Hidden Secret Unlocked</span>
                <p>{portfolioContent.identity.easterEgg}</p>
              </motion.div>
            )}

            <p className="hero-tagline">{portfolioContent.identity.summary}</p>

            {/* XP Bar — Game Style */}
            <div className="xp-bar">
              <span className="xp-bar__label">Career XP</span>
              <div className="xp-bar__track">
                <div className="xp-bar__fill" style={{ width: xpAnimated ? '85%' : '0%' }} />
              </div>
              <span className="xp-bar__value">LVL 10+</span>
            </div>

            <div className="hero-actions">
              <button className="btn-neu btn-neu--primary" onClick={() => jumpTo("projects")} type="button">
                <Sparkles size={16} />
                Explore Projects
              </button>
              <a className="btn-neu" href={portfolioContent.identity.resumeHref} target="_blank" rel="noreferrer">
                Open Resume
              </a>
            </div>

            <div className="stat-row">
              {portfolioContent.metrics.map((m, i) => (
                <motion.div key={m.label} className="stat-card" custom={i} initial="hidden" animate="visible" variants={fadeInUp}>
                  <span className="stat-card__label">{m.label}</span>
                  <strong className="stat-card__value">{m.value}</strong>
                  <p className="stat-card__detail">{m.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial="hidden" animate="visible" variants={scaleIn}>
            <div className="portrait-frame">
              <div className="portrait-badge">
                <span className="portrait-badge__dot" />
                Available to hire
              </div>
              <Image
                src="/images/portrait-formal.jpg"
                alt="santoshtvk"
                fill
                priority
                sizes="(max-width: 900px) 80vw, 38vw"
                className="portrait-image"
              />
            </div>
            <div className="neu-card neu-card--pressed hero-quote">
              <p>&ldquo;{portfolioContent.identity.quote}&rdquo;</p>
            </div>
          </motion.div>
        </section>

        {/* ══════════ STORY ══════════ */}
        <section id="story" className="section">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}>
            <span className="section-kicker">About Me</span>
            <h2>The engineer behind the systems</h2>
            <p>Enterprise-grade automation, developer-tool craftsmanship, teaching instinct, and curiosity for AI, security, and embedded systems.</p>
          </motion.div>

          <div className="story-grid">
            <motion.article className="neu-card story-card story-card--wide" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}>
              <div className="story-icon"><Radar size={22} /></div>
              <h3>Signal Core</h3>
              <p>{portfolioContent.about.narrative}</p>
              <ul className="pillar-tags">
                {portfolioContent.about.pillars.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </motion.article>

            {portfolioContent.about.fragments.map((f, i) => (
              <motion.article key={f.title} className="neu-card story-card" custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}>
                <div className="story-icon">{f.title === "Builder DNA" ? <BadgeCheck size={20} /> : <BrainCircuit size={20} />}</div>
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ══════════ PROJECTS ══════════ */}
        <section id="projects" className="section">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}>
            <span className="section-kicker">Projects</span>
            <h2>Proof points in production</h2>
            <p>Each project is a real story of problem-solving, product thinking, and delivery under real-world constraints.</p>
          </motion.div>

          <div className="filter-bar">
            <span className="filter-bar__label"><Filter size={14} /> Filter</span>
            {projectFilters.map((f) => (
              <button
                key={f.id}
                className={`filter-pill ${activeFilter === f.id ? "is-active" : ""}`}
                onClick={() => setActiveFilter(f.id)}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((proj, i) => (
              <motion.article key={proj.title} className="neu-card project-card" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-8%" }} variants={fadeInUp}>
                <span className="project-card__eyebrow">{proj.eyebrow}</span>
                <h3>{proj.title}</h3>
                <p>{proj.summary}</p>
                <ul className="project-card__highlights">
                  {proj.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <ul className="project-card__tags">
                  {proj.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                {proj.href && (
                  <a className="project-card__link" href={proj.href} target="_blank" rel="noreferrer">
                    Visit project <ArrowUpRight size={14} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* ══════════ SKILLS ══════════ */}
        <section id="skills" className="section">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}>
            <span className="section-kicker">Abilities</span>
            <h2>Capability zones built for real systems</h2>
            <p>Organized around product thinking, execution, reliability, and continuous learning velocity.</p>
          </motion.div>

          <div className="skill-grid">
            {portfolioContent.skills.map((skill, i) => (
              <motion.article key={skill.title} className="neu-card skill-card" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-8%" }} variants={fadeInUp}>
                <div className="skill-card__header">
                  <div className="skill-icon" style={{ color: skillColors[skill.title] || 'var(--accent)' }}>
                    {skillIcons[skill.title] || <Code2 size={20} />}
                  </div>
                  <h3>{skill.title}</h3>
                </div>
                <p>{skill.summary}</p>
                <ul className="skill-card__items">
                  {skill.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ══════════ EXPERIENCE ══════════ */}
        <section id="experience" className="section">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}>
            <span className="section-kicker">Timeline</span>
            <h2>From embedded systems to enterprise automation</h2>
            <p>Aerospace simulation, multimedia validation, clinical platforms, financial systems, and founder-led products.</p>
          </motion.div>

          <div className="timeline">
            {portfolioContent.experience.map((exp, i) => (
              <motion.article key={`${exp.company}-${exp.period}`} className="neu-card timeline-card" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-8%" }} variants={fadeInUp}>
                <div className="timeline-card__meta">
                  <span>{exp.period}</span>
                  <strong>{exp.company}</strong>
                </div>
                <div>
                  <h3>{exp.role}</h3>
                  <p>{exp.summary}</p>
                  <ul className="timeline-card__highlights">
                    {exp.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ══════════ CONTACT ══════════ */}
        <section id="contact" className="section">
          <motion.div className="neu-card contact-shell" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}>
            <div>
              <span className="section-kicker">Contact</span>
              <h2>Let&apos;s build something remarkable together</h2>
              <p>{portfolioContent.contact.copy}</p>

              <div className="contact-actions">
                <a className="btn-neu btn-neu--primary" href={portfolioContent.contact.emailHref}>Email me</a>
                <a className="btn-neu" href={portfolioContent.contact.linkedinHref} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn-neu" href={portfolioContent.contact.githubHref} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>

            <div className="contact-panel">
              <div className="neu-card neu-card--pressed terminal-card">
                <div className="terminal-card__header"><BriefcaseBusiness size={14} /> Opportunity Fit</div>
                <ul className="terminal-card__list">
                  {portfolioContent.contact.opportunityFit.map((o) => <li key={o}>{o}</li>)}
                </ul>
              </div>
              <div className="neu-card neu-card--pressed terminal-card">
                <div className="terminal-card__header"><GraduationCap size={14} /> Current Expansion</div>
                <ul className="terminal-card__list">
                  {portfolioContent.learningFocus.map((l) => <li key={l}>{l}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>

        </section>
      </div>

      <footer className="site-footer">
        © {new Date().getFullYear()} T Venkata Santosh Kumar (santoshtvk). Hyderabad, India.
      </footer>
    </main>
  );
}
