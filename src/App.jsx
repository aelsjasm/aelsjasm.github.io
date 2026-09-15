import { useEffect, useRef } from 'react'
import Reveal from './components/Reveal.jsx'
import { useLanguage } from './i18n.jsx'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  )
}

function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0
      el.style.transform = `scaleX(${ratio})`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />
}

export default function App() {
  const { lang, content, setLanguage } = useLanguage()
  const toggleLang = () => setLanguage(lang === 'en' ? 'id' : 'en')

  return (
    <>
      <ScrollProgress />
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#home">{content.nav.brand}</a>
          <ul className="nav-links">
            <li><a className="nav-link active" href="#home">{content.nav.home}</a></li>
            <li><a className="nav-link" href="#about">{content.nav.about}</a></li>
            <li><a className="nav-link" href="#skills">{content.nav.skills}</a></li>
            <li><a className="nav-link" href="#projects">{content.nav.projects}</a></li>
            <li><a className="nav-link" href="#contact">{content.nav.contact}</a></li>
          </ul>
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={content.nav.langLabel}
            title={content.nav.langLabel}
          >
            {content.oppositeCode}
          </button>
        </div>
      </nav>

      <main className="wrap">
        {/* ============ HOME / HERO ============ */}
        <header className="hero" id="home">
          <div className="social-rail anim-load anim-pop d1">
            <a href="https://www.linkedin.com/in/alicia-septiani-13b100371" target="_blank" rel="noreferrer" aria-label={content.hero.linkedinLabel}>
              <LinkedInIcon />
            </a>
            <a href="mailto:aliciaseptiani00@gmail.com" aria-label={content.hero.emailLabel}>
              <MailIcon />
            </a>
            <a href="tel:081335353781" aria-label={content.hero.phoneLabel}>
              <PhoneIcon />
            </a>
          </div>

          <div>
            <h1 className="hero-name anim-load">{content.hero.name}</h1>
            <div className="hero-role anim-load d1">{content.hero.role}</div>
            <p className="hero-desc anim-load d2">{content.hero.desc}</p>
            <div className="hero-cta anim-load d3">
              <a className="btn btn-primary" href="mailto:aliciaseptiani00@gmail.com">
                {content.hero.cta} <SendIcon />
              </a>
            </div>
            <ul className="hero-meta">
              <li><span className="badge">{content.hero.metaGpa}</span></li>
              <li><span className="badge">{content.hero.metaLocation}</span></li>
              <li><span className="badge">{content.hero.metaSchool}</span></li>
              <li><span className="badge">{content.hero.metaNetwork}</span></li>
            </ul>
          </div>

          <div className="hero-photo-frame anim-load anim-fade d2">
            <img src="./profile.jpg" alt={content.hero.photoAlt} />
          </div>
        </header>

        {/* ============ ABOUT ============ */}
        <Reveal as="section" className="section" id="about">
          <div className="section-head">
            <div className="section-kicker anim-load">{content.about.kicker}</div>
            <h2 className="section-title">{content.about.title}</h2>
          </div>
          <div className="about-grid">
            <div>
              <p className="about-copy">{content.about.body}</p>
              <div className="stat-grid">
                <Reveal className="stat-card" delay={0} variant="scale">
                  <div className="stat-value">{content.about.statGpaValue}</div>
                  <div className="stat-label">{content.about.statGpaLabel}</div>
                </Reveal>
                <Reveal className="stat-card" delay={80} variant="scale">
                  <div className="stat-value">{content.about.statRolesValue}</div>
                  <div className="stat-label">{content.about.statRolesLabel}</div>
                </Reveal>
                <Reveal className="stat-card" delay={160} variant="scale">
                  <div className="stat-value">{content.about.statYearValue}</div>
                  <div className="stat-label">{content.about.statYearLabel}</div>
                </Reveal>
              </div>
            </div>
            <Reveal className="card" delay={120} variant="right">
              <div className="skill-group-title">{content.about.focusTitle}</div>
              <ul className="focus-list" style={{ margin: 0 }}>
                {content.about.focus.map((f, i) => (
                  <Reveal as="li" key={f.label} delay={i * 80} variant="right"><span>{f.label}</span>{f.desc}</Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
        </Reveal>

        {/* ============ EDUCATION + EXPERIENCE ============ */}
        <Reveal as="section" className="section" id="education">
          <div className="section-head align-left">
            <div className="section-kicker">{content.about.educationTitle}</div>
            <h2 className="section-title">{content.about.school}</h2>
          </div>
          <div className="edu-card">
            <div className="edu-top">
              <div className="edu-school">{content.about.school}</div>
              <div className="edu-date">{content.about.date}</div>
            </div>
            <div className="edu-degree">{content.about.degree} · {content.about.gpa}</div>
            <div className="course-row">
              {content.about.courses.map((c) => <span className="badge" key={c}>{c}</span>)}
            </div>
          </div>

          <div className="section-head align-left">
            <div className="section-kicker">{content.about.experienceTitle}</div>
            <h2 className="section-title">{content.about.experienceTitle}</h2>
            <p className="section-lede">{content.about.experienceLede}</p>
          </div>
          <div className="timeline" style={{ marginTop: 16 }}>
            {content.about.items.map((item, i) => (
              <Reveal className="timeline-item" key={item.role + item.org} delay={Math.min(i * 60, 300)} variant="left">
                <div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-org">{item.org}</div>
                </div>
                <div className="timeline-date">{item.date}</div>
                <ul className="timeline-bullets">
                  {item.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ============ SKILLS ============ */}
        <Reveal as="section" className="section" id="skills">
          <div className="section-head">
            <div className="section-kicker">{content.skills.kicker}</div>
            <h2 className="section-title">{content.skills.title}</h2>
            <p className="section-lede">{content.skills.lede}</p>
          </div>
          <div className="skills-grid">
            {content.skills.groups.map((g, i) => (
              <Reveal className="card" key={g.title} delay={i * 100} variant="scale">
                <div className="skill-group-title">{g.title}</div>
                <div className="chip-row">
                  {g.items.map((s) => <span className="badge" key={s}>{s}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ============ PROJECTS ============ */}
        <Reveal as="section" className="section" id="projects">
          <div className="section-head">
            <div className="section-kicker">{content.projects.kicker}</div>
            <h2 className="section-title">{content.projects.title}</h2>
            <p className="section-lede">{content.projects.lede}</p>
          </div>
          <div className="projects-grid">
            {content.projects.items.map((p, i) => (
              <Reveal className="card" key={p.title} delay={(i % 2) * 100} variant={i % 2 === 0 ? 'left' : 'right'}>
                <div className="project-meta">
                  <span className="badge">{p.year}</span>
                  <span className="badge">{p.tag}</span>
                </div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ============ CONTACT ============ */}
        <Reveal as="section" className="section" id="contact" variant="scale">
          <div className="contact-box">
            <div className="section-kicker">{content.contact.kicker}</div>
            <h2 className="section-title">{content.contact.title}</h2>
            <p>{content.contact.body}</p>
            <div className="contact-links">
              <a className="btn btn-primary" href="mailto:aliciaseptiani00@gmail.com">
                {content.contact.emailCta}
              </a>
              <a className="btn btn-ghost" href="tel:081335353781">{content.contact.phoneCta}</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/alicia-septiani-13b100371" target="_blank" rel="noreferrer">
                {content.contact.linkedinCta} ↗
              </a>
            </div>
          </div>
        </Reveal>
      </main>

      <footer>{content.footer}</footer>
    </>
  )
}
