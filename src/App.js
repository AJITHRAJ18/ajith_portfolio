import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Github, Linkedin, Mail, Phone, ExternalLink,
  Code2, Shield, Brain, Server, Terminal,
  Layers, GitBranch, Cpu, Container, Workflow,
  ArrowUpRight, Menu, X, MapPin, Briefcase, GraduationCap,
  ChevronRight, Database, Zap
} from 'lucide-react';

/* ================================================================
   DATA
   ================================================================ */

const LINKS = {
  email: 'ajithrajepm2218@gmail.com',
  phone: '+916382146594',
  github: 'https://github.com/ajithraj18',
  linkedin: '#',
};

const SKILLS_DATA = [
  { label: 'Python', level: 95 },
  { label: 'Django / DRF', level: 90 },
  { label: 'FastAPI', level: 80 },
  { label: 'Celery + Redis', level: 88 },
  { label: 'Docker & K8s', level: 85 },
  { label: 'LangGraph / LLM', level: 78 },
  { label: 'TypeScript', level: 72 },
  { label: 'SQL', level: 82 },
  { label: 'CI/CD & GitOps', level: 80 },
  { label: 'Linux & Bash', level: 78 },
];

const TOOL_GROUPS = [
  { title: 'Backend', items: ['Django', 'FastAPI', 'DRF', 'Celery', 'Redis', 'Gunicorn'] },
  { title: 'AI/ML', items: ['LangGraph', 'LLM Agents', 'RAG', 'Prompt Engineering'] },
  { title: 'DevOps', items: ['Docker', 'K3s', 'KEDA', 'Jenkins', 'Nginx', 'MinIO'] },
  { title: 'Security', items: ['JFrog Xray', 'Fortify', 'Mend', 'CVE', 'SBOM', 'RBAC'] },
  { title: 'Tools', items: ['Git', 'Jira', 'Metabase', 'n8n', 'Pandas', 'NumPy'] },
];

const EXPERIENCE = [
  {
    title: 'PSA Portal — Enterprise Security Governance',
    text: 'Architected and launched an enterprise security governance platform utilized across 8 global product verticals, establishing a unified source of truth for product security.',
    tags: ['Django', 'SvelteKit', 'K3s', 'GitOps'],
  },
  {
    title: 'Full-Stack Architecture at Scale',
    text: 'Built a platform with 85+ REST APIs, 35+ database models, and 11+ containerized services deployed on a K3s Kubernetes cluster with declarative GitOps manifests.',
    tags: ['Microservices', 'REST APIs', 'Kubernetes'],
  },
  {
    title: 'Async Workflow Automation',
    text: 'Engineered 20+ asynchronous Celery pipelines with Redis and gevent worker pools, processing 270,000+ CVE records from the NVD with near-real-time synchronization.',
    tags: ['Celery', 'Redis', 'Gevent'],
  },
  {
    title: 'Enterprise Integration Layer',
    text: 'Integrated 14 disparate enterprise systems — JFrog, Fortify, Mend, Jira, Azure AD — centralizing fragmented security data and reducing cross-tool latency.',
    tags: ['JFrog', 'Fortify', 'Azure AD'],
  },
  {
    title: 'AI-Powered Incident Response',
    text: 'Developed a stateful reasoning engine using LangGraph to automate root-cause analysis for security incidents, cutting MTTR from hours to minutes.',
    tags: ['LangGraph', 'LLM Agents', 'Python'],
  },
  {
    title: 'Security Scanning Orchestration',
    text: 'Designed on-demand OSL & SAST scanning with KEDA auto-scaling for compute-heavy tasks. Implemented RBAC with Azure AD SSO integration.',
    tags: ['KEDA', 'RBAC', 'SSO'],
  },
];

const PROJECTS = [
  {
    icon: <Database size={20} />,
    title: 'AI Vulnerable Method Finder & Incident Response Engine',
    desc: 'Python tool that automates CVE analysis to pinpoint vulnerable software packages, classes, and methods using LLM-powered reasoning. Features a stateful LangGraph engine for automated root-cause analysis of security incidents.',
    tags: ['Python', 'LangGraph', 'LLM Agents', 'CVE Analysis', 'Automation'],
    link: LINKS.github,
    featured: true,
  },
  {
    icon: <Shield size={20} />,
    title: 'PSA Portal',
    desc: 'Enterprise security governance platform — 85+ APIs, 35+ models, 11+ services — spanning 8 global product verticals on K3s.',
    tags: ['Django', 'SvelteKit', 'K3s', 'Celery'],
    featured: false,
  },
];

const STATS = [
  { num: '2+', label: 'Years Experience' },
  { num: '85+', label: 'APIs Built' },
  { num: '270K+', label: 'CVEs Processed' },
  { num: '14', label: 'Integrations' },
];

/* ================================================================
   HOOKS
   ================================================================ */

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, show];
}

function useTypewriter(words, typingSpeed = 100, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pause]);

  return text;
}

/* ================================================================
   COMPONENTS
   ================================================================ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          Ajithraj<span>.</span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={close}>{l}</a>
          ))}
          <a
            href={`${process.env.PUBLIC_URL}/ajithraj-development.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__resume"
            onClick={close}
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>

        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  const [ref, show] = useReveal(0.05);
  const typed = useTypewriter(
    ['Backend Engineer', 'Security Architect', 'GenAI Builder'],
    90,
    2200
  );

  return (
    <section id="top" className="hero" ref={ref}>
      <div className={`container hero__wrap ${show ? 'reveal' : ''}`}>
        {/* Left copy */}
        <div className="hero__text">
          <p className="hero__label">Python Backend Engineer</p>
          <h1 className="hero__heading">
            Hi, I'm <span className="hero__name">Ajithraj M</span>
          </h1>
          <h2 className="hero__typed">
            {typed}<span className="cursor">|</span>
          </h2>
          <p className="hero__sub">
            I build enterprise-grade security automation platforms at scale — 
            architecting microservices, orchestrating pipelines, and integrating 
            Generative AI into production workflows.
          </p>

          <div className="hero__cta">
            <a href="#experience" className="btn btn--fill">
              View Work <ChevronRight size={16} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>

          <div className="hero__social">
            <a href={`mailto:${LINKS.email}`} aria-label="Email"><Mail size={18} /></a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={`tel:${LINKS.phone}`} aria-label="Phone"><Phone size={18} /></a>
          </div>
        </div>

        {/* Right — profile + stats */}
        <div className="hero__right">
          <div className="hero__img-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.JPG`}
              alt="Ajithraj M"
              className="hero__img"
            />
          </div>
          <div className="hero__stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */

function About() {
  const [ref, show] = useReveal();
  return (
    <section id="about" className="section" ref={ref}>
      <div className={`container ${show ? 'reveal' : ''}`}>
        <SectionHeader icon={<Terminal size={20} />} title="About" />

        <div className="about__grid">
          <div className="about__col">
            <p>
              I'm a <strong>results-driven Python Backend Engineer</strong> with 2+ years of
              experience at <strong>Temenos</strong>, building enterprise-grade security automation
              platforms. I specialize in architecting microservices using Django &amp; SvelteKit,
              and orchestrating security pipelines with Celery and Kubernetes.
            </p>
            <p>
              I combine deep Python expertise with emerging <strong>Generative AI
              frameworks</strong> — LangGraph, LLM agents, RAG pipelines — to automate
              complex analysis workflows that cut mean-time-to-resolution from hours to minutes.
            </p>
          </div>

          <div className="about__col about__details">
            <div className="about__detail">
              <GraduationCap size={16} />
              <div>
                <strong>B.E. in Electrical &amp; Electronics</strong>
                <span>Bannari Amman Institute of Technology — 8.56 CGPA</span>
              </div>
            </div>
            <div className="about__detail">
              <Briefcase size={16} />
              <div>
                <strong>Associate Product Engineer</strong>
                <span>Temenos · Chennai · May 2023 — Present</span>
              </div>
            </div>
            <div className="about__detail">
              <MapPin size={16} />
              <div>
                <strong>Chennai, India</strong>
                <span>Open to remote opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */

function Skills() {
  const [ref, show] = useReveal();
  return (
    <section id="skills" className="section section--alt" ref={ref}>
      <div className={`container ${show ? 'reveal' : ''}`}>
        <SectionHeader icon={<Cpu size={20} />} title="Skills & Tools" />

        <div className="skills__layout">
          {/* Left: bars */}
          <div className="skills__bars">
            {SKILLS_DATA.map((s, i) => (
              <div key={s.label} className="bar" style={{ '--delay': `${i * 60}ms` }}>
                <div className="bar__top">
                  <span className="bar__name">{s.label}</span>
                  <span className="bar__pct">{s.level}%</span>
                </div>
                <div className="bar__track">
                  <div
                    className="bar__fill"
                    style={{ width: show ? `${s.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: grouped tags */}
          <div className="skills__groups">
            {TOOL_GROUPS.map((g) => (
              <div key={g.title} className="tool-group">
                <h4 className="tool-group__title">{g.title}</h4>
                <div className="tool-group__tags">
                  {g.items.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */

function Experience() {
  const [ref, show] = useReveal();
  return (
    <section id="experience" className="section" ref={ref}>
      <div className={`container ${show ? 'reveal' : ''}`}>
        <SectionHeader icon={<Layers size={20} />} title="Experience" />

        <div className="exp__header">
          <Briefcase size={18} />
          <div>
            <h3>Associate Product Engineer</h3>
            <p>Temenos · Chennai &nbsp;|&nbsp; May 2023 — Present</p>
          </div>
        </div>

        <div className="exp__list">
          {EXPERIENCE.map((item, i) => (
            <ExpCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpCard({ item, index }) {
  const [ref, show] = useReveal(0.08);
  return (
    <article
      ref={ref}
      className={`exp-card ${show ? 'reveal' : ''}`}
      style={{ '--delay': `${index * 70}ms` }}
    >
      <span className="exp-card__num">{String(index + 1).padStart(2, '0')}</span>
      <div className="exp-card__body">
        <h4>{item.title}</h4>
        <p>{item.text}</p>
        <div className="exp-card__tags">
          {item.tags.map((t) => <span key={t} className="chip chip--sm">{t}</span>)}
        </div>
      </div>
    </article>
  );
}

/* ---------- PROJECTS ---------- */

function Projects() {
  const [ref, show] = useReveal();
  return (
    <section id="projects" className="section section--alt" ref={ref}>
      <div className={`container ${show ? 'reveal' : ''}`}>
        <SectionHeader icon={<GitBranch size={20} />} title="Projects" />

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <article key={i} className={`proj ${p.featured ? 'proj--featured' : ''}`}>
              <div className="proj__top">
                <span className="proj__icon">{p.icon}</span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj__link">
                    <Github size={16} />
                  </a>
                )}
              </div>
              <h3 className="proj__title">{p.title}</h3>
              <p className="proj__desc">{p.desc}</p>
              <div className="proj__tags">
                {p.tags.map((t) => <span key={t} className="chip chip--sm">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */

function Contact() {
  const [ref, show] = useReveal();
  return (
    <section id="contact" className="section" ref={ref}>
      <div className={`container contact ${show ? 'reveal' : ''}`}>
        <SectionHeader icon={<Mail size={20} />} title="Get in Touch" />

        <p className="contact__text">
          Interested in working together or have an opportunity? Feel free to reach out.
        </p>

        <div className="contact__grid">
          <a href={`mailto:${LINKS.email}`} className="contact__card">
            <Mail size={22} />
            <div>
              <strong>Email</strong>
              <span>{LINKS.email}</span>
            </div>
          </a>
          <a href={`tel:${LINKS.phone}`} className="contact__card">
            <Phone size={22} />
            <div>
              <strong>Phone</strong>
              <span>+91 638 214 6594</span>
            </div>
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="contact__card">
            <Github size={22} />
            <div>
              <strong>GitHub</strong>
              <span>github.com/ajithraj18</span>
            </div>
          </a>
        </div>

        <a href={`mailto:${LINKS.email}`} className="btn btn--fill btn--lg contact__btn">
          Say Hello <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* ---------- SHARED ---------- */

function SectionHeader({ icon, title }) {
  return (
    <div className="sh">
      <span className="sh__icon">{icon}</span>
      <h2 className="sh__title">{title}</h2>
      <div className="sh__line" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Ajithraj M</span>
        <div className="footer__links">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer"><Github size={16} /></a>
          <a href={`mailto:${LINKS.email}`}><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   APP
   ================================================================ */

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
