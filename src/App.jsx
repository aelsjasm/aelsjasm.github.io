import Reveal from './components/Reveal.jsx'
import Pipe from './components/Pipe.jsx'

const EXPERIENCE = [
  {
    role: 'Prayer Committee Member',
    org: 'Easter Service 2025',
    date: 'Mar – May 2025',
    bullets: ['Distributed fasting, air, and committee prayers', 'Conducted prayer walks'],
  },
  {
    role: 'Executive Secretary',
    org: 'Christmas Service 2024',
    date: 'Dec 2024',
    bullets: ['Prepared proposals, accountability reports, and official letters', 'Distributed meeting materials'],
  },
  {
    role: 'Event Committee Member',
    org: 'Christian Student Camp XXXVIII 2024',
    date: 'Oct – Dec 2024',
    bullets: ['Scheduled sessions and assisted in event flow'],
  },
  {
    role: 'Treasurer',
    org: 'Mentoring 2024',
    date: 'Oct – Dec 2024',
    bullets: ['Created budget breakdowns and approved funding for each division', 'Managed and tracked income and expenses'],
  },
  {
    role: 'Executive Secretary',
    org: 'New Student Welcome Service 2024',
    date: 'Jul – Sep 2024',
    bullets: ['Prepared proposals, accountability reports, and official letters', 'Distributed meeting materials'],
  },
  {
    role: 'Event Committee Member',
    org: 'Open Air Fellowship Service 2024',
    date: 'May – Jun 2024',
    bullets: ['Liaised with speakers and assisted in event flow management'],
  },
  {
    role: 'Consumption & Health Committee Member',
    org: 'Easter Service 2024',
    date: 'Mar – Apr 2024',
    bullets: ['Assisted in talent and interest development', 'Supported external and internal services'],
  },
  {
    role: 'Commission 2 Member',
    org: 'UKM KK Talita Kum',
    date: 'Feb 2024 – Present',
    bullets: ['Assisted in talent and interest development', 'Supported external and internal services'],
  },
  {
    role: 'Payment Clerk',
    org: 'PT Pos Indonesia',
    date: 'Nov – Dec 2022',
    bullets: ['Prepared and calculated finances before distribution', 'Conducted data verification and reported financial calculations to head office'],
  },
]

const PROJECTS = [
  {
    year: '2024',
    title: 'Aloe Vera Facial Cleanser Formulation',
    desc: 'Formulated solid and liquid facial cleansers using aloe vera as the primary active ingredient, as part of a project-based learning program.',
  },
  {
    year: '2023',
    title: 'Local Microorganism Cultivation',
    desc: 'Cultivated local microorganisms (MOL) from natural sources for a project-based learning program on applied bioprocessing.',
  },
]

const HARD_SKILLS = ['Laboratory Equipment Handling', 'Safety & Sanitation Procedures', 'Quality Control', 'Aspen HYSYS', 'MATLAB', 'Visio', 'Canva', 'Microsoft Office']
const SOFT_SKILLS = ['Time Management', 'Adaptability', 'Teamwork', 'Communication']

const COURSES = ['Chemical Engineering Operations 3', 'Professional Ethics', 'Quality Management Systems', 'Occupational Health & Safety']

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
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-mark">⚗ <strong>ASPM</strong> / process-line</div>
          <ul className="nav-links">
            <li><a href="#about">01 Reactor</a></li>
            <li><a href="#education">02 Tank</a></li>
            <li><a href="#experience">03 Train</a></li>
            <li><a href="#projects">04 Separator</a></li>
            <li><a href="#skills">05 Valves</a></li>
            <li><a href="#contact">06 Outlet</a></li>
          </ul>
        </div>
      </nav>

      <main className="wrap">
        {/* ================= HERO / FEED ================= */}
        <header className="hero" id="feed">
          <div>
            <div className="hero-kicker">IN — 00 · FEED INLET <span>●</span> MALANG, JAWA TIMUR</div>
            <h1>Alicia Septiani<br />Putri <em>Melati</em></h1>
            <p className="hero-role">
              Third-year Chemical Engineering diploma student at Politeknik Negeri Malang, working across
              process operations, quality management, and occupational health &amp; safety — with a track
              record of coordinating people, budgets, and reports.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#experience">View the process train ↓</a>
              <a className="btn btn-ghost" href="mailto:aliciaseptiani00@gmail.com">Email me</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/alicia-septiani-13b100371" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <ul className="hero-meta">
              <li>081335353781</li>
              <li>aliciaseptiani00@gmail.com</li>
              <li>GPA 3.48 / 4.00</li>
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
                <img src="./profile-placeholder.svg" alt="Profile placeholder — replace with Alicia's photo" />
                <div className="liquid"><Bubbles /></div>
              </div>
            </div>
            <div className="photo-hint">// replace public/profile-placeholder.svg</div>
          </div>
        </header>

        <Pipe />

        {/* ================= ABOUT / REACTOR ================= */}
        <Reveal as="section" id="about">
          <div className="tag">R-01 · REACTOR — SUMMARY</div>
          <div className="about-grid">
            <div className="about-copy">
              <h2 className="section-title">What goes in, comes out refined.</h2>
              <p>
                Strong foundation in process operations, quality management, and occupational health and
                safety, with skills in data handling, documentation, and cross-functional collaboration.
                Experienced in project coordination, budget management, and report preparation through
                organizational and volunteer roles. Highly adaptable and detail-oriented, eager to bring
                analytical and organizational strength to operational efficiency and digital transformation
                initiatives across industries.
              </p>
            </div>
            <div className="stat-rail">
              <div className="stat">
                <div className="stat-value">3.48/4.00</div>
                <div className="stat-label">Current GPA</div>
              </div>
              <div className="stat">
                <div className="stat-value">9</div>
                <div className="stat-label">Org &amp; Volunteer Roles</div>
              </div>
              <div className="stat">
                <div className="stat-value">3rd Yr</div>
                <div className="stat-label">Diploma in Progress</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Pipe />

        {/* ================= EDUCATION / RETENTION TANK ================= */}
        <Reveal as="section" id="education">
          <div className="tag">T-02 · RETENTION TANK — EDUCATION</div>
          <h2 className="section-title">Where the fundamentals are held.</h2>
          <div className="tank-card">
            <div className="tank-top">
              <div className="tank-school">State Polytechnic of Malang</div>
              <div className="tank-date">Aug 2023 — Present</div>
            </div>
            <div className="tank-degree">Diploma in Chemical Engineering</div>
            <div className="gpa-gauge">
              <div className="gauge-track"><div className="gauge-fill" /></div>
              <div className="gauge-num">3.48 / 4.00 GPA</div>
            </div>
            <div className="course-tags">
              {COURSES.map((c) => <span className="course-tag" key={c}>{c}</span>)}
            </div>
          </div>
        </Reveal>

        <Pipe />

        {/* ================= EXPERIENCE / PROCESS TRAIN ================= */}
        <Reveal as="section" id="experience">
          <div className="tag">P-03 · PROCESS TRAIN — EXPERIENCE</div>
          <h2 className="section-title">A sequence of roles, run in order.</h2>
          <p className="section-lede">
            Volunteer and organizational experience across finance, event operations, and executive
            secretarial work — mostly within campus ministry programs.
          </p>
          <div className="train">
            {EXPERIENCE.map((item) => (
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
          <div className="tag">S-04 · SEPARATOR — PROJECTS</div>
          <h2 className="section-title">Isolated, applied outputs.</h2>
          <div className="sep-grid">
            {PROJECTS.map((p, i) => (
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
          <div className="tag">V-05 · VALVE ARRAY — SKILLS</div>
          <h2 className="section-title">Controls on hand.</h2>
          <div className="valve-groups">
            <div>
              <div className="valve-group-title">Hard Skills</div>
              <div className="valve-chips">
                {HARD_SKILLS.map((s) => (
                  <span className="chip" key={s}><span className="valve-ring" />{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="valve-group-title">Soft Skills</div>
              <div className="valve-chips">
                {SOFT_SKILLS.map((s) => (
                  <span className="chip" key={s}><span className="valve-ring" />{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Pipe />

        {/* ================= CONTACT / OUTLET ================= */}
        <Reveal as="section" className="outlet" id="contact">
          <div className="tag">OUT — 06 · OUTLET</div>
          <h2>Let's work together.</h2>
          <p>
            Open to internship and entry-level opportunities in process operations, quality, HSE, or
            digital transformation. Reach out any time.
          </p>
          <div className="outlet-links">
            <a className="btn btn-primary" href="mailto:aliciaseptiani00@gmail.com">aliciaseptiani00@gmail.com</a>
            <a className="btn btn-ghost" href="tel:081335353781">081335353781</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/alicia-septiani-13b100371" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </Reveal>
      </main>

      <footer>
        ALICIA SEPTIANI PUTRI MELATI · MALANG, INDONESIA · BUILT WITH REACT
      </footer>
    </>
  )
}
