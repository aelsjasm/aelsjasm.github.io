import { createContext, useContext, useEffect, useState } from 'react'

const LANGUAGE_STORAGE_KEY = 'alicia-lang'
const DEFAULT_LANG = 'id'

const EN = {
  code: 'EN',
  oppositeCode: 'ID',
  langAttr: 'en',
  siteTitle: 'Alicia Septiani Putri Melati — Chemical Engineering Graduate',

  nav: {
    brand: 'aelsjasm.',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    langLabel: 'Switch language',
  },

  hero: {
    name: 'Alicia Septiani Putri Melati',
    role: 'Chemical Engineering Graduate',
    desc: 'Chemical Engineering graduate with strong interest in waste treatment and renewable energy — experienced in production of Aloe vera-based soap, lab work, process simulation, and campus organizations.',
    cta: 'Contact Me',
    metaGpa: 'GPA 3.52 / 4.00',
    metaLocation: 'Malang, East Java, Indonesia',
    metaSchool: 'Politeknik Negeri Malang',
    metaNetwork: '158 followers · 153 connections',
    photoAlt: 'Portrait of Alicia Septiani Putri Melati',
    linkedinLabel: 'LinkedIn profile',
    emailLabel: 'Send email',
    phoneLabel: 'Call',
  },

  about: {
    kicker: 'About Me',
    title: 'Chemical engineering graduate focused on sustainability.',
    body: 'Chemical Engineering graduate from Politeknik Negeri Malang (GPA 3.52/4.00) with strong interest in waste treatment and renewable energy. Experienced in a project involving the production of Aloe vera-based soap and actively involved in campus organizations. Proficient in MATLAB, Aspen HYSYS, and Microsoft Office for data analysis and process simulation. Skilled in laboratory work with an analytical approach, and equipped with strong communication and team management abilities.',
    statGpaValue: '3.52/4.00',
    statGpaLabel: 'Final GPA',
    statRolesValue: '10+',
    statRolesLabel: 'Org & Work Roles',
    statYearValue: '2026',
    statYearLabel: 'Diploma Graduate',
    focusTitle: 'Focus areas',
    focus: [
      { label: 'Waste treatment', desc: 'Applied interest from coursework and lab projects.' },
      { label: 'Renewable energy', desc: 'Motivation for research and future industry roles.' },
      { label: 'Applied research', desc: 'Aloe vera soap formulation and local microorganism cultivation.' },
    ],
    educationTitle: 'Education',
    school: 'State Polytechnic of Malang',
    date: '2023 — 2026',
    degree: 'Diploma (D-III) in Chemical Engineering',
    gpa: '3.52 / 4.00 GPA',
    courses: [
      'Chemical Engineering Operations 3',
      'Professional Ethics',
      'Quality Management Systems',
      'Occupational Health & Safety',
    ],
    experienceTitle: 'Experience',
    experienceLede: '2 years total experience — quality control, finance, event operations, and executive secretarial work.',
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
        role: 'Payment Specialist',
        org: 'PT Pos Indonesia (Persero)',
        date: 'Nov – Dec 2022',
        bullets: [
          'Prepared and calculated finances before distribution',
          'Conducted data verification and reported calculations to head office',
        ],
      },
      {
        role: 'Commission 2 Member',
        org: 'UKM KK Talita Kum',
        date: 'Feb 2024 – Jan 2026',
        bullets: [
          'Assisted in talent and interest development',
          'Supported external and internal services',
        ],
      },
      {
        role: 'Executive Secretary',
        org: 'Christmas Service 2024 · UKM KK Talita Kum',
        date: 'Dec 2024',
        bullets: [
          'Prepared proposals, accountability reports, and official letters',
          'Distributed meeting materials',
        ],
      },
      {
        role: 'Executive Secretary',
        org: 'New Student Welcome Service 2024 · UKM KK Talita Kum',
        date: 'Jul – Sep 2024',
        bullets: [
          'Prepared proposals, accountability reports, and official letters',
          'Distributed meeting materials',
        ],
      },
      {
        role: 'Executive Treasurer',
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
    lede: 'Laboratory practice, process simulation tools, and collaboration skills — as listed on LinkedIn.',
    groups: [
      {
        title: 'Laboratory & Quality',
        items: ['Laboratory Skills', 'Laboratory Work', 'Laboratory Equipment Handling', 'Safety & Sanitation Procedures', 'Quality Control', 'Quality Management'],
      },
      {
        title: 'Software & Analysis',
        items: ['Aspen HYSYS', 'MATLAB', 'Microsoft Office', 'Office Software', 'Visio', 'Canva', 'Data Analysis', 'Data Analysis Process', 'Process Simulation'],
      },
      {
        title: 'Working Style',
        items: ['Communication', 'Strong Communication', 'Team Management', 'Project Management', 'Analytical Approach', 'Time Management', 'Adaptability', 'Teamwork', 'Payment Processing'],
      },
    ],
  },

  projects: {
    kicker: 'Projects',
    title: 'Applied lab outputs.',
    lede: 'Project-based learning in formulation and bioprocessing.',
    items: [
      {
        year: '2026',
        tag: 'Bioplastic',
        title: 'Effect of Chitosan Ratio from Shrimp Shell Waste and Glycerol on the Characteristics of Bioplastic Film from Jicama Starch',
        desc: 'Developed eco-friendly bioplastic from shrimp shell waste chitosan with jicama starch and glycerol, producing a film with 21.91 MPa tensile strength, 129% elongation, and 98.11% biodegradability in 10 days as an alternative to conventional plastic.',
      },
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
  siteTitle: 'Alicia Septiani Putri Melati — Lulusan Teknik Kimia',

  nav: {
    brand: 'aelsjasm.',
    home: 'Beranda',
    about: 'Tentang',
    skills: 'Keahlian',
    projects: 'Proyek',
    contact: 'Kontak',
    langLabel: 'Ganti bahasa',
  },

  hero: {
    name: 'Alicia Septiani Putri Melati',
    role: 'Lulusan Teknik Kimia',
    desc: 'Lulusan Teknik Kimia dengan minat kuat pada pengolahan limbah dan energi terbarukan — berpengalaman dalam produksi sabun berbahan lidah buaya, pekerjaan laboratorium, simulasi proses, dan organisasi kampus.',
    cta: 'Hubungi Saya',
    metaGpa: 'IPK 3.52 / 4.00',
    metaLocation: 'Malang, Jawa Timur, Indonesia',
    metaSchool: 'Politeknik Negeri Malang',
    metaNetwork: '158 pengikut · 153 koneksi',
    photoAlt: 'Foto Alicia Septiani Putri Melati',
    linkedinLabel: 'Profil LinkedIn',
    emailLabel: 'Kirim email',
    phoneLabel: 'Telepon',
  },

  about: {
    kicker: 'Tentang Saya',
    title: 'Lulusan teknik kimia yang fokus pada keberlanjutan.',
    body: 'Lulusan Teknik Kimia di Politeknik Negeri Malang (IPK 3,52/4,00) yang aktif dalam kegiatan organisasi dan proyek laboratorium. Memiliki ketertarikan pada pengolahan limbah, energi terbarukan, dan riset terapan, dengan fokus pada eksperimen dan pengembangan solusi berbasis sains untuk keberlanjutan industri. Berpengalaman dalam proyek produksi sabun berbahan lidah buaya. Mahir menggunakan MATLAB, Aspen HYSYS, dan Microsoft Office untuk analisis data dan simulasi proses. Terampil dalam pekerjaan laboratorium dengan pendekatan analitis, serta memiliki kemampuan komunikasi dan manajemen tim yang kuat.',
    statGpaValue: '3,52/4,00',
    statGpaLabel: 'IPK Terakhir',
    statRolesValue: '10+',
    statRolesLabel: 'Peran Organisasi & Kerja',
    statYearValue: '2026',
    statYearLabel: 'Lulusan Diploma',
    focusTitle: 'Fokus bidang',
    focus: [
      { label: 'Pengolahan limbah', desc: 'Minat terapan dari kuliah dan proyek laboratorium.' },
      { label: 'Energi terbarukan', desc: 'Motivasi untuk riset dan karier industri ke depan.' },
      { label: 'Riset terapan', desc: 'Formulasi sabun lidah buaya dan kultivasi mikroorganisme lokal.' },
    ],
    educationTitle: 'Pendidikan',
    school: 'Politeknik Negeri Malang',
    date: '2023 — 2026',
    degree: 'Diploma Tiga (D-III) Teknik Kimia',
    gpa: 'IPK 3.52 / 4.00',
    courses: [
      'Operasi Teknik Kimia 3',
      'Etika Profesi',
      'Sistem Manajemen Mutu',
      'Kesehatan & Keselamatan Kerja',
    ],
    experienceTitle: 'Pengalaman',
    experienceLede: 'Total 2 tahun pengalaman — pengendalian mutu, keuangan, operasional acara, dan kerja sekretaris eksekutif.',
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
        role: 'Payment Specialist',
        org: 'PT Pos Indonesia (Persero)',
        date: 'Nov – Des 2022',
        bullets: [
          'Menyiapkan dan menghitung keuangan sebelum pendistribusian',
          'Melakukan verifikasi data dan melaporkan perhitungan ke kantor pusat',
        ],
      },
      {
        role: 'Anggota Komisi 2',
        org: 'UKM KK Talita Kum',
        date: 'Feb 2024 — Jan 2026',
        bullets: [
          'Mendukung pengembangan bakat dan minat',
          'Mendukung pelayanan eksternal dan internal',
        ],
      },
      {
        role: 'Sekretaris Pelaksana',
        org: 'Ibadah Natal 2024 · UKM KK Talita Kum',
        date: 'Des 2024',
        bullets: [
          'Menyiapkan proposal, laporan pertanggungjawaban, dan surat resmi',
          'Mendistribusikan materi rapat',
        ],
      },
      {
        role: 'Sekretaris Pelaksana',
        org: 'Penyambutan Mahasiswa Baru 2024 · UKM KK Talita Kum',
        date: 'Jul – Sep 2024',
        bullets: [
          'Menyiapkan proposal, laporan pertanggungjawaban, dan surat resmi',
          'Mendistribusikan materi rapat',
        ],
      },
      {
        role: 'Bendahara Pelaksana',
        org: 'Mentoring 2024',
        date: 'Okt – Des 2024',
        bullets: [
          'Membuat rincian anggaran dan menyetujui pendanaan tiap divisi',
          'Mengelola dan mencatat pemasukan serta pengeluaran',
        ],
      },
      {
        role: 'Anggota Sie Acara',
        org: 'Camp Mahasiswa Kristen XXXVIII 2024',
        date: 'Okt – Des 2024',
        bullets: ['Menyusun jadwal sesi dan membantu kelancaran acara'],
      },
      {
        role: 'Anggota Sie Doa',
        org: 'Ibadah Paskah 2025',
        date: 'Mar – Mei 2025',
        bullets: ['Membagikan doa puasa dan doa panitia', 'Melaksanakan doa keliling'],
      },
      {
        role: 'Anggota Sie Acara',
        org: 'Persekutuan Udara Terbuka 2024',
        date: 'Mei – Jun 2024',
        bullets: ['Berkoordinasi dengan pembicara dan membantu kelancaran acara'],
      },
      {
        role: 'Anggota Sie Konsumsi & Kesehatan',
        org: 'Ibadah Paskah 2024',
        date: 'Mar – Apr 2024',
        bullets: ['Mendukung logistik acara dan layanan anggota'],
      },
    ],
  },

  skills: {
    kicker: 'Keahlian',
    title: 'Yang saya gunakan.',
    lede: 'Praktik laboratorium, perangkat simulasi proses, dan keterampilan kolaborasi — sesuai daftar LinkedIn.',
    groups: [
      {
        title: 'Laboratorium & Mutu',
        items: ['Keterampilan Laboratorium', 'Pekerjaan Laboratorium', 'Penanganan Peralatan Laboratorium', 'Prosedur Keselamatan & Sanitasi', 'Pengendalian Mutu', 'Manajemen Mutu'],
      },
      {
        title: 'Perangkat & Analisis',
        items: ['Aspen HYSYS', 'MATLAB', 'Microsoft Office', 'Perangkat Lunak Office', 'Visio', 'Canva', 'Analisis Data', 'Proses Analisis Data', 'Simulasi Proses'],
      },
      {
        title: 'Cara Kerja',
        items: ['Komunikasi', 'Komunikasi Kuat', 'Manajemen Tim', 'Manajemen Proyek', 'Pendekatan Analitis', 'Manajemen Waktu', 'Adaptabilitas', 'Kerja Sama Tim', 'Pemrosesan Pembayaran'],
      },
    ],
  },

  projects: {
    kicker: 'Proyek',
    title: 'Hasil laboratorium terapan.',
    lede: 'Pembelajaran berbasis proyek dalam formulasi dan bioproses.',
    items: [
      {
        year: '2026',
        tag: 'Bioplastik',
        title: 'Pengaruh Rasio Kitosan Dari Limbah Kulit Udang dan Gliserol Terhadap Karakteristik Film Biopplastik Dari Pati Bengkoang',
        desc: 'Pengembangan bioplastik ramah lingkungan dari kitosan limbah kulit udang dengan pati bengkoang dan gliserol, menghasilkan film dengan kuat tarik 21,91 MPa, elongasi 129%, dan biodegradabilitas 98,11% dalam 10 hari sebagai alternatif plastik konvensional.',
      },
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
