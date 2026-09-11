import { createContext, useContext, useEffect, useState } from 'react'

const LANGUAGE_STORAGE_KEY = 'alicia-lang'
const DEFAULT_LANG = 'id'

const EN = {
  code: 'EN',
  oppositeCode: 'ID',
  langAttr: 'en',
  siteTitle: 'Alicia Septiani Putri Melati — Chemical Engineering Student',

  nav: {
    brand: 'Alicia',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    langLabel: 'Switch language',
  },

  hero: {
    name: 'Alicia Septiani Putri Melati',
    role: 'Chemical Engineering Student',
    desc: 'A chemical engineering student with a strong interest in waste treatment and renewable energy — experienced in lab work, process simulation, and campus organizations.',
    cta: 'Say Hello',
    metaGpa: 'GPA 3.48 / 4.00',
    metaLocation: 'Malang, East Java',
    metaSchool: 'Politeknik Negeri Malang',
    photoAlt: 'Portrait of Alicia Septiani Putri Melati',
    linkedinLabel: 'LinkedIn profile',
    emailLabel: 'Send email',
    phoneLabel: 'Call',
  },

  about: {
    kicker: 'About Me',
    title: 'Chemical engineering student focused on sustainability.',
    body: 'Third-year Chemical Engineering student at Politeknik Negeri Malang (GPA 3.48/4.00) with a strong interest in waste treatment and renewable energy. Experienced in a project producing Aloe vera-based soap, and actively involved in campus organizations. Proficient in MATLAB, Aspen HYSYS, and Microsoft Office for data analysis and process simulation. Skilled in laboratory work with an analytical approach, and equipped with strong communication and team management abilities.',
    statGpaValue: '3.48/4.00',
    statGpaLabel: 'Current GPA',
    statRolesValue: '10+',
    statRolesLabel: 'Org & Work Roles',
    statYearValue: '3rd Yr',
    statYearLabel: 'Diploma in Progress',
    focusTitle: 'Focus areas',
    focus: [
      { label: 'Waste treatment', desc: 'Applied interest from coursework and lab projects.' },
      { label: 'Renewable energy', desc: 'Motivation for research and future industry roles.' },
      { label: 'Applied research', desc: 'Aloe vera soap formulation and local microorganism cultivation.' },
    ],
    educationTitle: 'Education',
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
    experienceTitle: 'Experience',
    experienceLede: 'Quality control, finance, event operations, and executive secretarial work.',
    items: [
      {
        role: 'Quality Control',
        org: 'PT SMART Tbk',
        date: '2024 — 2025',
        bullets: [
          'Performed quality checks supporting production standards',
          'Documented findings and collaborated with operations',
        ],
      },
      {
        role: 'Payment Clerk',
        org: 'PT Pos Indonesia',
        date: 'Nov – Dec 2022',
        bullets: [
          'Prepared and calculated finances before distribution',
          'Conducted data verification and reported calculations to head office',
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
        role: 'Executive Secretary',
        org: 'Christmas Service 2024',
        date: 'Dec 2024',
        bullets: [
          'Prepared proposals, accountability reports, and official letters',
          'Distributed meeting materials',
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
        role: 'Treasurer',
        org: 'Mentoring 2024',
        date: 'Oct – Dec 2024',
        bullets: [
          'Created budget breakdowns and approved funding for each division',
          'Managed and tracked income and expenses',
        ],
      },
      {
        role: 'Event Committee Member',
        org: 'Christian Student Camp XXXVIII 2024',
        date: 'Oct – Dec 2024',
        bullets: ['Scheduled sessions and assisted in event flow'],
      },
      {
        role: 'Prayer Committee Member',
        org: 'Easter Service 2025',
        date: 'Mar – May 2025',
        bullets: ['Distributed fasting and committee prayers', 'Conducted prayer walks'],
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
        bullets: ['Supported event logistics and member services'],
      },
    ],
  },

  skills: {
    kicker: 'Skills',
    title: 'What I work with.',
    lede: 'Laboratory practice, process simulation tools, and collaboration skills.',
    groups: [
      {
        title: 'Laboratory & Quality',
        items: ['Laboratory Equipment Handling', 'Safety & Sanitation Procedures', 'Quality Control'],
      },
      {
        title: 'Software & Analysis',
        items: ['Aspen HYSYS', 'MATLAB', 'Microsoft Office', 'Visio', 'Canva', 'Data Analysis', 'Process Simulation'],
      },
      {
        title: 'Working Style',
        items: ['Communication', 'Team Management', 'Time Management', 'Adaptability', 'Teamwork'],
      },
    ],
  },

  projects: {
    kicker: 'Projects',
    title: 'Applied lab outputs.',
    lede: 'Project-based learning in formulation and bioprocessing.',
    items: [
      {
        year: '2024',
        tag: 'Formulation',
        title: 'Aloe Vera Facial Cleanser Formulation',
        desc: 'Formulated solid and liquid facial cleansers using aloe vera as the primary active ingredient, as part of a project-based learning program.',
      },
      {
        year: '2023',
        tag: 'Bioprocess',
        title: 'Local Microorganism Cultivation',
        desc: 'Cultivated local microorganisms (MOL) from natural sources for a project-based learning program on applied bioprocessing.',
      },
    ],
  },

  contact: {
    kicker: 'Contact',
    title: "Let's work together.",
    body: 'Open to internship and entry-level opportunities in process operations, quality, HSE, waste treatment, or renewable energy. Reach out any time.',
    emailCta: 'aliciaseptiani00@gmail.com',
    phoneCta: '081335353781',
    linkedinCta: 'LinkedIn',
  },

  footer: 'ALICIA SEPTIANI PUTRI MELATI · MALANG, INDONESIA',
}

const ID = {
  code: 'ID',
  oppositeCode: 'EN',
  langAttr: 'id',
  siteTitle: 'Alicia Septiani Putri Melati — Mahasiswa Teknik Kimia',

  nav: {
    brand: 'Alicia',
    home: 'Beranda',
    about: 'Tentang',
    skills: 'Keahlian',
    projects: 'Proyek',
    contact: 'Kontak',
    langLabel: 'Ganti bahasa',
  },

  hero: {
    name: 'Alicia Septiani Putri Melati',
    role: 'Mahasiswa Teknik Kimia',
    desc: 'Mahasiswa teknik kimia dengan minat kuat pada pengolahan limbah dan energi terbarukan — berpengalaman dalam pekerjaan laboratorium, simulasi proses, dan organisasi kampus.',
    cta: 'Sapa Saya',
    metaGpa: 'IPK 3.48 / 4.00',
    metaLocation: 'Malang, Jawa Timur',
    metaSchool: 'Politeknik Negeri Malang',
    photoAlt: 'Foto Alicia Septiani Putri Melati',
    linkedinLabel: 'Profil LinkedIn',
    emailLabel: 'Kirim email',
    phoneLabel: 'Telepon',
  },

  about: {
    kicker: 'Tentang Saya',
    title: 'Mahasiswa teknik kimia yang fokus pada keberlanjutan.',
    body: 'Mahasiswa tahun ketiga Teknik Kimia di Politeknik Negeri Malang (IPK 3,48/4,00) dengan minat kuat pada pengolahan limbah dan energi terbarukan. Berpengalaman dalam proyek produksi sabun berbahan lidah buaya, dan aktif dalam organisasi kampus. Mahir menggunakan MATLAB, Aspen HYSYS, dan Microsoft Office untuk analisis data dan simulasi proses. Terampil dalam pekerjaan laboratorium dengan pendekatan analitis, serta memiliki kemampuan komunikasi dan manajemen tim yang kuat.',
    statGpaValue: '3,48/4,00',
    statGpaLabel: 'IPK Saat Ini',
    statRolesValue: '10+',
    statRolesLabel: 'Peran Organisasi & Kerja',
    statYearValue: 'Thn ke-3',
    statYearLabel: 'Diploma Berlangsung',
    focusTitle: 'Fokus bidang',
    focus: [
      { label: 'Pengolahan limbah', desc: 'Minat terapan dari kuliah dan proyek laboratorium.' },
      { label: 'Energi terbarukan', desc: 'Motivasi untuk riset dan karier industri ke depan.' },
      { label: 'Riset terapan', desc: 'Formulasi sabun lidah buaya dan kultivasi mikroorganisme lokal.' },
    ],
    educationTitle: 'Pendidikan',
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
    experienceTitle: 'Pengalaman',
    experienceLede: 'Pengendalian mutu, keuangan, operasional acara, dan kerja sekretaris eksekutif.',
    items: [
      {
        role: 'Pengendali Mutu',
        org: 'PT SMART Tbk',
        date: '2024 — 2025',
        bullets: [
          'Melakukan pemeriksaan mutu untuk mendukung standar produksi',
          'Mendokumentasikan temuan dan berkolaborasi dengan operasional',
        ],
      },
      {
        role: 'Petugas Pembayaran',
        org: 'PT Pos Indonesia',
        date: 'Nov – Des 2022',
        bullets: [
          'Menyiapkan dan menghitung keuangan sebelum pendistribusian',
          'Melakukan verifikasi data dan melaporkan perhitungan ke kantor pusat',
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
        role: 'Sekretaris Eksekutif',
        org: 'Kebaktian Natal 2024',
        date: 'Des 2024',
        bullets: [
          'Menyiapkan proposal, laporan pertanggungjawaban, dan surat resmi',
          'Mendistribusikan materi rapat',
        ],
      },
      {
        role: 'Sekretaris Eksekutif',
        org: 'Penyambutan Mahasiswa Baru 2024',
        date: 'Jul – Sep 2024',
        bullets: [
          'Menyiapkan proposal, laporan pertanggungjawaban, dan surat resmi',
          'Mendistribusikan materi rapat',
        ],
      },
      {
        role: 'Bendahara',
        org: 'Pendampingan 2024',
        date: 'Okt – Des 2024',
        bullets: [
          'Membuat rincian anggaran dan menyetujui pendanaan tiap divisi',
          'Mengelola dan mencatat pemasukan serta pengeluaran',
        ],
      },
      {
        role: 'Anggota Panitia Acara',
        org: 'Kemah Pemuda Kristen XXXVIII 2024',
        date: 'Okt – Des 2024',
        bullets: ['Menyusun jadwal sesi dan membantu kelancaran acara'],
      },
      {
        role: 'Anggota Panitia Doa',
        org: 'Kebaktian Paskah 2025',
        date: 'Mar – Mei 2025',
        bullets: ['Membagikan doa puasa dan doa panitia', 'Melaksanakan doa keliling'],
      },
      {
        role: 'Anggota Panitia Acara',
        org: 'Persekutuan Terbuka 2024',
        date: 'Mei – Jun 2024',
        bullets: ['Berkoordinasi dengan pembicara dan membantu kelancaran acara'],
      },
      {
        role: 'Anggota Konsumsi & Kesehatan',
        org: 'Kebaktian Paskah 2024',
        date: 'Mar – Apr 2024',
        bullets: ['Mendukung logistik acara dan layanan anggota'],
      },
    ],
  },

  skills: {
    kicker: 'Keahlian',
    title: 'Yang saya gunakan.',
    lede: 'Praktik laboratorium, perangkat simulasi proses, dan keterampilan kolaborasi.',
    groups: [
      {
        title: 'Laboratorium & Mutu',
        items: ['Penanganan Peralatan Laboratorium', 'Prosedur Keselamatan & Sanitasi', 'Pengendalian Mutu'],
      },
      {
        title: 'Perangkat & Analisis',
        items: ['Aspen HYSYS', 'MATLAB', 'Microsoft Office', 'Visio', 'Canva', 'Analisis Data', 'Simulasi Proses'],
      },
      {
        title: 'Cara Kerja',
        items: ['Komunikasi', 'Manajemen Tim', 'Manajemen Waktu', 'Adaptabilitas', 'Kerja Sama Tim'],
      },
    ],
  },

  projects: {
    kicker: 'Proyek',
    title: 'Hasil laboratorium terapan.',
    lede: 'Pembelajaran berbasis proyek dalam formulasi dan bioproses.',
    items: [
      {
        year: '2024',
        tag: 'Formulasi',
        title: 'Formulasi Pembersih Wajah Lidah Buaya',
        desc: 'Merumuskan pembersih wajah padat dan cair menggunakan lidah buaya sebagai bahan aktif utama, sebagai bagian dari program pembelajaran berbasis proyek.',
      },
      {
        year: '2023',
        tag: 'Bioproses',
        title: 'Kultur Mikroorganisme Lokal',
        desc: 'Mengultur mikroorganisme lokal (MOL) dari sumber alami untuk program pembelajaran berbasis proyek tentang bioproses terapan.',
      },
    ],
  },

  contact: {
    kicker: 'Kontak',
    title: 'Mari bekerja sama.',
    body: 'Terbuka untuk peluang magang dan posisi level pemula di bidang operasi proses, mutu, K3, pengolahan limbah, atau energi terbarukan. Hubungi saya kapan saja.',
    emailCta: 'aliciaseptiani00@gmail.com',
    phoneCta: '081335353781',
    linkedinCta: 'LinkedIn',
  },

  footer: 'ALICIA SEPTIANI PUTRI MELATI · MALANG, INDONESIA',
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
