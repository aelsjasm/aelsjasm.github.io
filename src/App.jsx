import Reveal from './components/Reveal.jsx'
import Pipe from './components/Pipe.jsx'
import { useLanguage } from './i18n.jsx'

function Bubbles() {
  const bubbles = [
    { left: '22%', delay: '0s', size: 6 },
    { left: '48%', delay: '1.1s', size: 4 },
    { left: '68%', delay: '2s', size: 7 },
    { left: '35%', delay: '2.7s', size: 5 },
  ]
  return bubbles.map((b, i) => (
    <span
      key={i}
      className="bubble"
      style={{ left: b.left, animationDelay: b.delay, width: b.size, height: b.size }}
    />
  ))
}

export default function App() {
  const { lang, content, setLanguage } = useLanguage()
  const toggleLang = () => setLanguage(lang === 'en' ? 'id' : 'en')

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-mark">⚗ <strong>ASPM</strong> / process-line</div>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#about">{content.nav.about}</a></li>
              <li><a href="#education">{content.nav.education}</a></li>
              <li><a href="#experience">{content.nav.experience}</a></li>
              <li><a href="#projects">{content.nav.projects}</a></li>
              <li><a href="#skills">{content.nav.skills}</a></li>
              <li><a href="#contact">{content.nav.contact}</a></li>
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
        </div>
      </nav>

      <main className="wrap">
        {/* ================= HERO / FEED ================= */}
        <header className="hero" id="feed">
          <div>
            <div className="hero-kicker">{content.hero.kicker} <span>●</span> {content.hero.location}</div>
            <h1>Alicia Septiani<br />Putri <em>Melati</em></h1>
            <p className="hero-role">{content.hero.role}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#experience">{content.hero.ctaExperience}</a>
              <a className="btn btn-ghost" href="mailto:aliciaseptiani00@gmail.com">{content.hero.ctaEmail}</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/alicia-septiani-13b100371" target="_blank" rel="noreferrer">{content.hero.ctaLinkedin}</a>
            </div>
            <ul className="hero-meta">
              <li>{content.hero.metaPhone}</li>
              <li>{content.hero.metaEmail}</li>
              <li>{content.hero.metaGpa}</li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="false">
            <div className="vessel-glow" />
            <div className="vessel">
              <svg className="vessel-frame" viewBox="0 0 300 340" fill="none">
                <path
                  d="M110 20 H190 V70 L250 250 Q260 300 210 315 H90 Q40 300 50 250 L110 70 Z"
                  stroke="var(--line-strong)"
                  strokeWidth="2"
                />
                <line x1="105" y1="20" x2="195" y2="20" stroke="var(--line-strong)" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <div className="photo-mask">
                <img src="./profile.jpg" alt={content.hero.photoAlt} />
                {/* <div className="liquid"><Bubbles /></div> */}
              </div>
            </div>
          </div>
        </header>

        <Pipe />

        {/* ================= ABOUT / REACTOR ================= */}
        <Reveal as="section" id="about">
          <div className="tag">{content.about.tag}</div>
          <div className="about-grid">
            <div className="about-copy">
              <h2 className="section-title">
                {content.about.title}</h2>
              <p>
                {content.about.body}
              </p>
            </div>
            <div className="stat-rail">
              <div className="stat">
                <div className="stat-value">{content.about.statGpaValue}</div>
                <div className="stat-label">{content.about.statGpaLabel}</div>
              </div>
              <div className="stat">
                <div className="stat-value">{content.about.statRolesValue}</div>
                <div className="stat-label">{content.about.statRolesLabel}</div>
              </div>
              <div className="stat">
                <div className="stat-value">{content.about.statDiplomaValue}</div>
                <div className="stat-label">{content.about.statDiplomaLabel}</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Pipe />

        {/* ================= EDUCATION / RETENTION TANK ================= */}
        <Reveal as="section" id="education">
          <div className="tag">{content.education.tag}</div>
          <h2 className="section-title">{content.education.title}</h2>
          <div className="tank-card">
            <div className="tank-top">
              <div className="tank-school">{content.education.school}</div>
              <div className="tank-date">{content.education.date}</div>
            </div>
            <div className="tank-degree">{content.education.degree}</div>
            <div className="gpa-gauge">
              <div className="gauge-track"><div className="gauge-fill" /></div>
              <div className="gauge-num">{content.education.gpa}</div>
            </div>
            <div className="course-tags">
              {content.education.courses.map((c) => <span className="course-tag" key={c}>{c}</span>)}
            </div>
          </div>
        </Reveal>

        <Pipe />

        {/* ================= EXPERIENCE / PROCESS TRAIN ================= */}
        <Reveal as="section" id="experience">
          <div className="tag">{content.experience.tag}</div>
          <h2 className="section-title">{content.experience.title}</h2>
          <p className="section-lede">
            {content.experience.lede}
          </p>
          <div className="train">
            {content.experience.items.map((item) => (
              <div className="train-item" key={item.role + item.org}>
                <span className="train-node" />
                <div className="train-card">
                  <div className="train-head">
                    <div>
                      <div className="train-role">{item.role}</div>
                      <div className="train-org">{item.org}</div>
                    </div>
                    <div className="train-date">{item.date}</div>
                  </div>
                  <ul className="train-list">
                    {item.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Pipe />

        {/* ================= PROJECTS / SEPARATOR ================= */}
        <Reveal as="section" id="projects">
          <div className="tag">{content.projects.tag}</div>
          <h2 className="section-title">{content.projects.title}</h2>
          <div className="sep-grid">
            {content.projects.items.map((p, i) => (
              <div className="sep-card" key={p.title}>
                <span className="sep-year">{p.year}</span>
                <div className="sep-index">STREAM-{String(i + 1).padStart(2, '0')}</div>
                <div className="sep-title">{p.title}</div>
                <div className="sep-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Pipe />

        {/* ================= SKILLS / VALVE ARRAY ================= */}
        <Reveal as="section" id="skills">
          <div className="tag">{content.skills.tag}</div>
          <h2 className="section-title">{content.skills.title}</h2>
          <div className="valve-groups">
            <div>
              <div className="valve-group-title">{content.skills.hardGroup}</div>
              <div className="valve-chips">
                {content.skills.hardSkills.map((s) => (
                  <span className="chip" key={s}><span className="valve-ring" />{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="valve-group-title">{content.skills.softGroup}</div>
              <div className="valve-chips">
                {content.skills.softSkills.map((s) => (
                  <span className="chip" key={s}><span className="valve-ring" />{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Pipe />

        {/* ================= CONTACT / OUTLET ================= */}
        <Reveal as="section" className="outlet" id="contact">
          <div className="tag">{content.contact.tag}</div>
          <h2>{content.contact.title}</h2>
          <p>
            {content.contact.body}
          </p>
          <div className="outlet-links">
            <a className="btn btn-primary" href="mailto:aliciaseptiani00@gmail.com">aliciaseptiani00@gmail.com</a>
            <a className="btn btn-ghost" href="tel:081335353781">081335353781</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/alicia-septiani-13b100371" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </Reveal>
      </main>

      <footer>
        {content.footer}
      </footer>
    </>
  )
}
