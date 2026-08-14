import { createContext, useContext, useEffect, useState } from 'react'

const LANGUAGE_STORAGE_KEY = 'alicia-lang'
const DEFAULT_LANG = 'en'

const EN = {
  code: 'EN',
  oppositeCode: 'ID',
  langAttr: 'en',
  siteTitle: 'Alicia Septiani Putri Melati — Chemical Engineering',

  nav: {
    about: '01 Reactor',
    education: '02 Tank',
    experience: '03 Train',
    projects: '04 Separator',
    skills: '05 Valves',
    contact: '06 Outlet',
    langLabel: 'Switch language',
  },

  hero: {
    kicker: 'IN — 00 · FEED INLET',
    location: 'MALANG, EAST JAVA',
    role:
      "Third-year Chemical Engineering diploma student at Politeknik Negeri Malang, working across " +
      "process operations, quality management, and occupational health & safety — with a track record " +
      "of coordinating people, budgets, and reports.",
    ctaExperience: 'View the process train ↓',
    ctaEmail: 'Email me',
    ctaLinkedin: 'LinkedIn',
    metaPhone: '081335353781',
    metaEmail: 'aliciaseptiani00@gmail.com',
    metaGpa: 'GPA 3.48 / 4.00',
    photoAlt: "Profile placeholder — replace with Alicia's photo",
  },

  about: {
    tag: 'R-01 · REACTOR — SUMMARY',
    title: 'What goes in, comes out refined.',
    body:
      "Strong foundation in process operations, quality management, and occupational health and safety, " +
      "with skills in data handling, documentation, and cross-functional collaboration. Experienced in " +
      "project coordination, budget management, and report preparation through organizational and " +
      "volunteer roles. Highly adaptable and detail-oriented, eager to bring analytical and organizational " +
      "strength to operational efficiency and digital transformation initiatives across industries.",
    statGpaValue: '3.48/4.00',
    statGpaLabel: 'Current GPA',
    statRolesValue: '9',
    statRolesLabel: 'Org & Volunteer Roles',
    statDiplomaValue: '3rd Yr',
    statDiplomaLabel: 'Diploma in Progress',
  },

  education: {
    tag: 'T-02 · RETENTION TANK — EDUCATION',
    title: 'Where the fundamentals are held.',
    school: 'State Polytechnic of Malang',
    date: 'Aug 2023 — Present',
    degree: 'Diploma in Chemical Engineering',
    gpa: '3.48 / 4.00 GPA',
    courses: [
      'Chemical Engineering Operations 3',
      'Professional Ethics',
      'Quality Management Systems',
      'Occupational Health & Safety',
    ],
  },

  experience: {
    tag: 'P-03 · PROCESS TRAIN — EXPERIENCE',
    title: 'A sequence of roles, run in order.',
    lede:
      "Volunteer and organizational experience across finance, event operations, and executive " +
      "secretarial work — mostly within campus ministry programs.",
    items: [
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
        bullets: [
          'Prepared proposals, accountability reports, and official letters',
          'Distributed meeting materials',
        ],
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
        bullets: [
          'Created budget breakdowns and approved funding for each division',
          'Managed and tracked income and expenses',
        ],
      },
      {
        role: 'Executive Secretary',
        org: 'New Student Welcome Service 2024',
        date: 'Jul – Sep 2024',
        bullets: [
          'Prepared proposals, accountability reports, and official letters',
          'Distributed meeting materials',
        ],
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
        bullets: [
          'Assisted in talent and interest development',
          'Supported external and internal services',
        ],
      },
      {
        role: 'Commission 2 Member',
        org: 'UKM KK Talita Kum',
        date: 'Feb 2024 – Present',
        bullets: [
          'Assisted in talent and interest development',
          'Supported external and internal services',
        ],
      },
      {
        role: 'Payment Clerk',
        org: 'PT Pos Indonesia',
        date: 'Nov – Dec 2022',
        bullets: [
          'Prepared and calculated finances before distribution',
          'Conducted data verification and reported financial calculations to head office',
        ],
      },
    ],
  },

  projects: {
    tag: 'S-04 · SEPARATOR — PROJECTS',
    title: 'Isolated, applied outputs.',
    items: [
      {
        year: '2024',
        title: 'Aloe Vera Facial Cleanser Formulation',
        desc:
          'Formulated solid and liquid facial cleansers using aloe vera as the primary active ingredient, ' +
          'as part of a project-based learning program.',
      },
      {
        year: '2023',
        title: 'Local Microorganism Cultivation',
        desc:
          'Cultivated local microorganisms (MOL) from natural sources for a project-based learning program ' +
          'on applied bioprocessing.',
      },
    ],
  },

  skills: {
    tag: 'V-05 · VALVE ARRAY — SKILLS',
    title: 'Controls on hand.',
    hardGroup: 'Hard Skills',
    softGroup: 'Soft Skills',
    hardSkills: [
      'Laboratory Equipment Handling',
      'Safety & Sanitation Procedures',
      'Quality Control',
      'Aspen HYSYS',
      'MATLAB',
      'Visio',
      'Canva',
      'Microsoft Office',
    ],
    softSkills: ['Time Management', 'Adaptability', 'Teamwork', 'Communication'],
  },

  contact: {
    tag: 'OUT — 06 · OUTLET',
    title: "Let's work together.",
    body:
      'Open to internship and entry-level opportunities in process operations, quality, HSE, or digital ' +
      'transformation. Reach out any time.',
  },

  footer: 'ALICIA SEPTIANI PUTRI MELATI · MALANG, INDONESIA · BUILT WITH REACT',
}

const ID = {
  code: 'ID',
  oppositeCode: 'EN',
  langAttr: 'id',
  siteTitle: 'Alicia Septiani Putri Melati — Teknik Kimia',

  nav: {
    about: '01 Reaktor',
    education: '02 Tangki',
    experience: '03 Rangkaian',
    projects: '04 Separator',
    skills: '05 Katup',
    contact: '06 Outlet',
    langLabel: 'Ganti bahasa',
  },

  hero: {
    kicker: 'IN — 00 · INLET UMPAN',
    location: 'MALANG, JAWA TIMUR',
    role:
      'Mahasiswa Diploma Tiga Teknik Kimia di Politeknik Negeri Malang, bekerja di bidang operasi proses, ' +
      'manajemen mutu, serta kesehatan dan keselamatan kerja (K3) — dengan rekam jejak mengoordinasikan ' +
      'orang, anggaran, dan laporan.',
    ctaExperience: 'Lihat rangkaian kerja ↓',
    ctaEmail: 'Kirim email',
    ctaLinkedin: 'LinkedIn',
    metaPhone: '081335353781',
    metaEmail: 'aliciaseptiani00@gmail.com',
    metaGpa: 'IPK 3.48 / 4.00',
    photoAlt: 'Placeholder foto profil — ganti dengan foto Alicia',
  },

  about: {
    tag: 'R-01 · REACTOR — RINGKASAN',
    title: 'Apa yang masuk, keluar dalam keadaan lebih baik.',
    body:
      'Fondasi kuat dalam operasi proses, manajemen mutu, serta kesehatan dan keselamatan kerja, dengan ' +
      'keterampilan dalam pengelolaan data, dokumentasi, dan kolaborasi lintas fungsi. Berpengalaman dalam ' +
      'koordinasi proyek, pengelolaan anggaran, dan penyusunan laporan melalui peran organisasi dan ' +
      'relawan. Sangat adaptif dan teliti, siap menghadirkan kekuatan analitis dan organisasional untuk ' +
      'efisiensi operasional serta inisiatif transformasi digital di berbagai industri.',
    statGpaValue: '3,48/4,00',
    statGpaLabel: 'IPK Saat Ini',
    statRolesValue: '9',
    statRolesLabel: 'Peran Organisasi & Relawan',
    statDiplomaValue: 'Thn ke-3',
    statDiplomaLabel: 'Diploma Berlangsung',
  },

  education: {
    tag: 'T-02 · RETENTION TANK — PENDIDIKAN',
    title: 'Tempat fondasi keilmuan dipertahankan.',
    school: 'Politeknik Negeri Malang',
    date: 'Agu 2023 — Sekarang',
    degree: 'Diploma Tiga Teknik Kimia',
    gpa: 'IPK 3.48 / 4.00',
    courses: [
      'Operasi Teknik Kimia 3',
      'Etika Profesi',
      'Sistem Manajemen Mutu',
      'Kesehatan & Keselamatan Kerja',
    ],
  },

  experience: {
    tag: 'P-03 · PROCESS TRAIN — PENGALAMAN',
    title: 'Serangkaian peran yang dijalankan secara berurutan.',
    lede:
      'Pengalaman relawan dan organisasi di bidang keuangan, operasional acara, serta kerja sekretaris ' +
      'eksekutif — sebagian besar dalam program pelayanan kampus.',
    items: [
      {
        role: 'Anggota Panitia Doa',
        org: 'Kebaktian Paskah 2025',
        date: 'Mar – Mei 2025',
        bullets: ['Membagikan doa puasa, doa udara, dan doa panitia', 'Melaksanakan doa keliling'],
      },
      {
        role: 'Sekretaris Eksekutif',
        org: 'Kebaktian Natal 2024',
        date: 'Des 2024',
        bullets: [
          'Menyiapkan proposal, laporan pertanggungjawaban, dan surat resmi',
          'Mendistribusikan materi rapat',
        ],
      },
      {
        role: 'Anggota Panitia Acara',
        org: 'Kemah Pemuda Kristen XXXVIII 2024',
        date: 'Okt – Des 2024',
        bullets: ['Menyusun jadwal sesi dan membantu kelancaran acara'],
      },
      {
        role: 'Bendahara',
        org: 'Pendampingan 2024',
        date: 'Okt – Des 2024',
        bullets: [
          'Membuat rincian anggaran dan menyetujui pendanaan untuk setiap divisi',
          'Mengelola dan mencatat pemasukan serta pengeluaran',
        ],
      },
      {
        role: 'Sekretaris Eksekutif',
        org: 'Kebaktian Penyambutan Mahasiswa Baru 2024',
        date: 'Jul – Sep 2024',
        bullets: [
          'Menyiapkan proposal, laporan pertanggungjawaban, dan surat resmi',
          'Mendistribusikan materi rapat',
        ],
      },
      {
        role: 'Anggota Panitia Acara',
        org: 'Kebaktian Persekutuan Terbuka 2024',
        date: 'Mei – Jun 2024',
        bullets: ['Menjembatani koordinasi dengan pembicara dan membantu kelancaran acara'],
      },
      {
        role: 'Anggota Panitia Konsumsi & Kesehatan',
        org: 'Kebaktian Paskah 2024',
        date: 'Mar – Apr 2024',
        bullets: [
          'Mendukung pengembangan bakat dan minat',
          'Mendukung pelayanan eksternal dan internal',
        ],
      },
      {
        role: 'Anggota Komisi 2',
        org: 'UKM KK Talita Kum',
        date: 'Feb 2024 — Sekarang',
        bullets: [
          'Mendukung pengembangan bakat dan minat',
          'Mendukung pelayanan eksternal dan internal',
        ],
      },
      {
        role: 'Petugas Pembayaran',
        org: 'PT Pos Indonesia',
        date: 'Nov – Des 2022',
        bullets: [
          'Menyiapkan dan menghitung keuangan sebelum pendistribusian',
          'Melakukan verifikasi data dan melaporkan perhitungan keuangan ke kantor pusat',
        ],
      },
    ],
  },

  projects: {
    tag: 'S-04 · SEPARATOR — PROYEK',
    title: 'Hasil terapan yang terisolasikan.',
    items: [
      {
        year: '2024',
        title: 'Formulasi Pembersih Wajah Lidah Buaya',
        desc:
          'Merumuskan pembersih wajah padat dan cair menggunakan lidah buaya sebagai bahan aktif utama, ' +
          'sebagai bagian dari program pembelajaran berbasis proyek.',
      },
      {
        year: '2023',
        title: 'Kultur Mikroorganisme Lokal',
        desc:
          'Mengultur mikroorganisme lokal (MOL) dari sumber alami untuk program pembelajaran berbasis ' +
          'proyek tentang bioproses terapan.',
      },
    ],
  },

  skills: {
    tag: 'V-05 · VALVE ARRAY — KETERAMPILAN',
    title: 'Keterampilan yang siap digunakan.',
    hardGroup: 'Keahlian Teknis',
    softGroup: 'Kemampuan Interpersonal',
    hardSkills: [
      'Penanganan Peralatan Laboratorium',
      'Prosedur Keselamatan & Sanitasi',
      'Pengendalian Mutu',
      'Aspen HYSYS',
      'MATLAB',
      'Visio',
      'Canva',
      'Microsoft Office',
    ],
    softSkills: ['Manajemen Waktu', 'Adaptabilitas', 'Kerja Sama Tim', 'Komunikasi'],
  },

  contact: {
    tag: 'OUT — 06 · OUTLET',
    title: 'Mari bekerja sama.',
    body:
      'Terbuka untuk peluang magang dan posisi level pemula di bidang operasi proses, mutu, K3, atau ' +
      'transformasi digital. Hubungi saya kapan saja.',
  },

  footer: 'ALICIA SEPTIANI PUTRI MELATI · MALANG, INDONESIA · DIBANGUN DENGAN REACT',
}

const translations = { en: EN, id: ID }

const LanguageContext = createContext({ lang: DEFAULT_LANG, content: translations[DEFAULT_LANG] })

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && translations[stored]) return stored
  } catch {
    /* ignore storage errors */
  }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    } catch {
      /* ignore storage errors */
    }
    const selected = translations[lang]
    document.documentElement.lang = selected.langAttr
    document.title = selected.siteTitle
  }, [lang])

  const setLanguage = (next) => {
    if (translations[next]) setLang(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, content: translations[lang], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}