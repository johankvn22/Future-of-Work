import { Speaker, Testimonial, Deliverable, PricingPackage, FaqItem } from '../types';

export const EVENT_DETAILS = {
  title: "The Future of Work: How AI is Shaping Productivity & Workplace Happiness",
  subtitle: "Program hybrid 2 hari untuk HR Manager, Direktur, Entrepreneur, dan Owner. Pulang membawa sistem AI + Happiness siap jalan, bukan teori.",
  dateText: "9–10 Juni 2026",
  timeText: "08.30 – 17.00 WIB",
  location: "MAXY AI HUB, Jakarta",
  fullAddress: "Grha Pengharapan 2nd Floor, Jl. Denpasar Raya No.2, Blok F3, South Jakarta",
  adminName: "Felicia",
  adminPhone: "+62 821 4499 5255",
  rawPhone: "6282144995255",
  earlyBirdCount: 10,
  countdownTargetDate: "2026-06-09T08:30:00+07:00",
};

export const TRUSTED_BRANDS = [
  "ASSA",
  "SINARMAS LAND",
  "BANK BRI",
  "TRIPUTRA GROUP",
  "PLN ICON PLUS",
  "ADIRA FINANCE",
  "ANTERAJA",
  "MITO",
  "100+ ORGANISASI LAINNYA",
];

export const REALITA_PAIN_POINTS = [
  {
    icon: "Flame",
    title: "Target Terus Naik, Headcount Tidak Bertambah",
    description: "Ekspektasi bisnis terus naik, tapi Anda masih memaksa tim mengejarnya dengan cara manual. Beban bertambah tanpa alat pendukung yang tepat.",
  },
  {
    icon: "UserX",
    title: "High Performer Justru Paling Rentan Burnout",
    description: "Mereka yang paling committed dan paling produktif — paling cepat kelelahan. Dan biaya kehilangan satu high performer jauh lebih besar dari biaya mencegahnya.",
  },
  {
    icon: "Cpu",
    title: "AI Sudah Dibeli, Namun Adaptasinya Masih Trial & Error",
    description: "Banyak perusahaan sudah berlangganan tools AI — tapi makin terhambat karena tidak ada sistem penggunaan yang relevan dengan pekerjaan harian tim.",
  },
  {
    icon: "Clock",
    title: "Keputusan Bisnis Masih Lambat",
    description: "Meeting panjang, laporan terlambat, analisis menunggu — padahal kompetitor sudah menggunakan AI untuk memangkas waktu pengambilan keputusan hingga 60%.",
  }
];

export const PROGRAM_PILLARS = [
  {
    day: "Dimensi 1",
    title: "Happiness at Work",
    subtitle: "Metode Berbasis Sains dari Woohoo Academy Denmark",
    description: "Cara mengukur dan membangun workplace wellbeing yang secara langsung berkorelasi dengan produktivitas dan retensi.",
    icon: "HeartHandshake",
    points: [
      "Framework sustain performance tanpa burnout",
      "Metrik wellbeing yang terkoneksi ke business KPI",
      "Strategi retensi talent berbasis psychological safety",
    ]
  },
  {
    day: "Dimensi 2",
    title: "AI for Leaders",
    subtitle: "Implementasi AI yang Relevan untuk Eksekutif & Leaders",
    description: "Bukan sisi teknis, tapi use case bisnis nyata: keputusan lebih cepat, beban repetitif berkurang, tim fokus ke pekerjaan bernilai tinggi.",
    icon: "Sparkles",
    points: [
      "Analisis dokumen & laporan dalam hitungan menit",
      "Persiapan meeting & riset pasar dengan AI",
      "Roadmap adopsi AI 30 hari untuk tim Anda",
    ]
  }
];

export const DELIVERABLES: Deliverable[] = [
  {
    id: "survey",
    title: "Employee Happiness Survey siap deploy",
    description: "Survei terstruktur berbasis PERMA untuk mengukur kondisi mental & produktivitas tim secara akurat.",
    category: "happiness",
    iconName: "ClipboardCheck",
    sampleContent: `[EMPLOYEE HAPPINESS SURVEY - PERMA FRAMEWORK]
1. Positive Emotion: Seberapa sering Anda merasa mendapat apresiasi positif dari tim minggu ini?
2. Engagement: Seberapa leluasa Anda menggunakan keahlian utama dalam pekerjaan sehari-hari?
3. Relationships: Apakah ada rasa saling percaya dan saling mendukung di tim Anda?
4. Meaning: Seberapa jelas Anda melihat kaitan antara tugas harian Anda dengan visi besar perusahaan?
5. Accomplishment: Seberapa sering target dan progres kerja Anda dirayakan secara adil?`
  },
  {
    id: "gap-map",
    title: "Happiness Gap Map per dimensi PERMA",
    description: "Peta kesenjangan wellbeing tiap departemen untuk mendeteksi potensi burnout sebelum terlambat.",
    category: "happiness",
    iconName: "BarChart3",
    sampleContent: `[HAPPINESS GAP MAP - PERMA ANALYSIS]
- HR Dept: Gap pada Positive Emotion (Beban kerja administrasi rekrutmen tinggi) -> Solusi: Prompt Automation HR.
- Ops Dept: Gap pada Accomplishment (Beban lembur terulang) -> Solusi: AI Document Summarizer.
- Management: Gap pada Meaning -> Solusi: Executive Dashboard Clarification.`
  },
  {
    id: "playbook",
    title: "Manager Playbook 30 aksi konkret",
    description: "Panduan taktis 30 langkah praktis yang bisa langsung diterapkan oleh para manajer besok pagi.",
    category: "strategy",
    iconName: "BookOpen",
    sampleContent: `[MANAGER PLAYBOOK - ACTION ITEM #01]
"Daily 10-Minute Standup & AI Workflow Check"
Langkah:
1. Identifikasi 1 tugas paling repetitif hari ini.
2. Gunakan NotebookLM / Gemini untuk membuat ringkasan/draft pertama.
3. Alokasikan waktu sisa untuk supervisi strategis dan check-in tim.`
  },
  {
    id: "roadmap",
    title: "30-Day Implementation Roadmap",
    description: "Rencana adopsi AI 30 hari secara bertahap dan terukur untuk tim dan departemen Anda.",
    category: "ai",
    iconName: "Milestone",
    sampleContent: `[30-DAY AI ADOPTION ROADMAP]
- Minggu 1: Audit tugas repetitif & pengenalan dasar Gemini / Claude.
- Minggu 2: Pembuatan Prompt Library spesifik untuk tugas rutin harian.
- Minggu 3: Integrasi NotebookLM & Google AI Studio pada laporan rapat.
- Minggu 4: Evaluasi pemangkasan waktu kerja (target -60% waktu keputusan).`
  },
  {
    id: "campaign",
    title: "Happiness Campaign 30 hari siap launch",
    description: "Kalender kampanye internal, template email, dan materi apresiasi tim selama 30 hari.",
    category: "happiness",
    iconName: "CalendarDays",
    sampleContent: `[HAPPINESS CAMPAIGN 30 HARI]
- Day 1: Email Pengumuman CEO - "Komitmen Baru: Happily Productive Work Culture"
- Day 7: AI Speed Hack Friday - Saling Berbagi Prompt AI Efektif
- Day 14: Peer Appreciation Day - Ucapan Terima Kasih antar Rekan Kerja
- Day 30: Review Dampak & Apresiasi Kinerja Tim`
  },
  {
    id: "roi-deck",
    title: "ROI Deck 8 slide board-ready",
    description: "Presentasi 8 slide profesional siap dibawakan ke meja direksi untuk menunjukkan dampak bisnis wellbeing & AI.",
    category: "strategy",
    iconName: "Presentation",
    sampleContent: `[ROI DECK 8 SLIDE SUMMARY]
Slide 1: Tantangan Headcount & Burnout
Slide 2: Biaya Kehilangan Top Talent vs Biaya Pencegahan
Slide 3: Implementasi AI for Leaders & Efisiensi Waktu
Slide 4: Peta Metrik Wellbeing x Business KPI
Slide 5: Simulasi Penghematan Jam Kerja (-60% Waktu Keputusan)
Slide 6: Project Plan 30 Hari
Slide 7: Kebutuhan Invesstasi & Resource
Slide 8: Projected Return on Investment (ROI)`
  },
  {
    id: "prompt-hr",
    title: "Template prompt HR siap pakai",
    description: "Kumpulan prompt siap pakai untuk rekrutmen, pembuatan JD, SOP, dan analisis dokumen HR.",
    category: "ai",
    iconName: "ShieldCheck",
    sampleContent: `[TEMPLATE PROMPT HR SIAP PAKAI]
Prompt Screening CV:
"Bertindak sebagai HR Director berpengalaman. Analisis CV berikut berdasarkan kriteria kebutuhan posisi Manager. Berikan skor kesesuaian (1-100), sebutkan 3 keunggulan utama, serta 2 poin klarifikasi saat interview."`
  },
  {
    id: "policy",
    title: "Kebijakan AI Minimum untuk tim HR",
    description: "Dokumen panduan tata kelola & batasan etis penggunaan AI yang aman bagi data perusahaan.",
    category: "ai",
    iconName: "ShieldCheck",
    sampleContent: `[KEBIJAKAN AI MINIMUM UNTUK TIM HR]
1. Kerahasiaan Data: Dilarang memasukkan data sensitif seperti NIK, gaji, atau rahasia bisnis tanpa anonimisasi.
2. Verifikasi Manusia: Semua laporan atau draf yang dihasilkan AI wajib diperiksa ulang oleh tim terkait.
3. Transparansi: Penggunaan AI bersifat membantu efisiensi, bukan menggantikan tanggung jawab eksekusi.`
  },
  {
    id: "automation",
    title: "Sistem engagement data otomatis dari rapat",
    description: "Workflow ekstraksi insight dan aksi dari rapat internal secara cepat menggunakan AI.",
    category: "ai",
    iconName: "BarChart3",
    sampleContent: `[WORKFLOW ENGAGEMENT DATA OTOMATIS]
1. Upload transkrip / audio rapat ke NotebookLM / Google AI Studio.
2. Prompt: "Ekstrak 3 poin keputusan utama, daftar action item beserta penanggung jawab, dan potensi bottleneck tim."
3. Kirim rekap otomatis ke grup kerja dalam 2 menit pasca rapat.`
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: "ruben",
    name: "Ruben Saragih, CPC, MM, MBA",
    role: "Chief Happiness Officer",
    cert: "Certified by Woohoo Academy Denmark",
    bio: "Pakar happiness at work yang telah bekerja sama dengan ratusan perusahaan di Indonesia. Menghubungkan wellbeing science dengan strategi bisnis yang terukur.",
    initials: "RS"
  },
  {
    id: "isaac",
    name: "Isaac Munandar",
    role: "Co-Founder & CEO MAXY Academy",
    cert: "AI Expert",
    bio: "Membangun MAXY Academy untuk mendampingi ratusan organisasi di Indonesia dalam transformasi talenta dan implementasi AI.",
    initials: "IM"
  },
  {
    id: "andy",
    name: "Andy F. Bintoro, S.Kom., MBA",
    role: "Co-Founder & CTO MAXY Academy",
    cert: "AI Expert · Trainer 100+ Organisasi",
    bio: "CTO dan Co-Founder MAXY Academy. Memimpin implementasi AI untuk 100+ organisasi di Indonesia — dari enterprise hingga institusi pemerintah.",
    initials: "AB"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Jadi paham bahwa AI sangat berdampak pada Human Capital kita tanpa mengesampingkan productivity kita dan juga bisa increase happiness mereka di tempat kerja.",
    name: "Anita",
    role: "Human Capital Officer",
    company: "Ciputra Group, Jakarta",
    initials: "A"
  },
  {
    id: "2",
    quote: "Saya belajar strategi untuk melakukan analisis secara terstruktur dengan AI, dan ternyata AI itu mudah dan dapat dipelajari oleh semua kalangan. AI juga tentunya membantu kombinasi antara produktif dan happily untuk diterapkan perusahaan.",
    name: "Wisnu",
    role: "Executive Leader",
    company: "PT. Dharma Satya Nusantara Tbk",
    initials: "W"
  },
  {
    id: "3",
    quote: "Pelatihannya seru dan sangat membantu, kami jadi mengenal berbagai AI Tools yang ternyata bisa membantu proses kerja jadi lebih efektif.",
    name: "Ahmad Rizki S.",
    role: "Program Communication",
    company: "ADIRA Finance",
    initials: "AR"
  },
  {
    id: "4",
    quote: "Training ini membuka perspektif saya tentang pentingnya happiness & productivity dalam sebuah perusahaan dan kehidupan sehari-hari. Jadi sadar bahwa perusahaan bukan hanya target besar, tetapi juga perlu karyawan di dalamnya bisa merasa happiness agar dapat memberikan impact yang lebih baik untuk perusahaan.",
    name: "Haryadi",
    role: "Executive Leader",
    company: "TBN Indonesia, Jakarta",
    initials: "H"
  },
  {
    id: "5",
    quote: "Dari sini saya jadi paham bahwa kita bisa meningkatkan kualitas orang-orang di perusahaan kita dengan mengimplementasikan tools AI dan happiness at work yang tadi diajarkan.",
    name: "Lintang",
    role: "Human Resources",
    company: "PT. Garuda Metalindo, Tbk.",
    initials: "L"
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "online",
    name: "Paket Online (2 Days Online)",
    pricePerPax: 1800000,
    location: "Live via Zoom — interaktif, bukan rekaman pasif",
    features: [
      "Akses kelas interaktif full 2 hari",
      "Template AI workflow untuk eksekutif",
      "Draft AI Adoption Roadmap 30 hari",
      "Sesi Q&A dengan kedua pemateri",
      "E-Certificate resmi MAXY Academy",
      "Invoice & dokumen pengadaan korporat"
    ]
  },
  {
    id: "onsite",
    name: "Paket Onsite Eksklusif (2 Days Onsite)",
    badge: "RECOMMENDED",
    pricePerPax: 2500000,
    location: "MAXY AI HUB, Jakarta — pengalaman penuh",
    isRecommended: true,
    features: [
      "Semua benefit paket Online",
      "Networking dengan sesama HR Leader & Owner",
      "Akses fasilitas premium MAXY AI HUB",
      "Makan siang & coffee break 2 hari"
    ],
    bonuses: [
      "Bonus: Buku 'Happiness at Work' — senilai Rp 250.000",
      "Free 1-on-1 Mentoring Session bersama pemateri",
      "Special Price untuk 10 pendaftar pertama"
    ]
  },
  {
    id: "inhouse",
    name: "In-House Corporate Training",
    pricePerPax: 0,
    location: "Di Kantor Perusahaan Anda",
    features: [
      "Kurikulum dikustomisasi sesuai industri dan tantangan spesifik perusahaan",
      "Melatih seluruh divisi di kantor Anda",
      "Jadwal dan venue fleksibel",
      "Dokumen pengadaan & NDA khusus korporat"
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Apakah program ini cocok untuk leader non-teknis?",
    answer: "Ya — program ini didesain khusus untuk HR leader, direktur, dan eksekutif tanpa background IT. Fokusnya pada use case bisnis dan decision-making, bukan sisi teknis AI.",
    category: "Umum"
  },
  {
    id: "faq-2",
    question: "Bisakah perusahaan mengirim beberapa peserta sekaligus?",
    answer: "Bisa. Tersedia harga grup dan paket in-house jika Anda ingin melatih satu divisi penuh di kantor Anda. Invoice resmi dan dokumen pengadaan tersedia. Hubungi Felicia di 0821-4499-5255 untuk proposal khusus.",
    category: "Pendaftaran"
  },
  {
    id: "faq-3",
    question: "Tools AI apa yang perlu disiapkan sebelum kelas?",
    answer: "Cukup laptop dan akun Google. Sebagian besar praktik bisa diikuti dengan versi gratis Gemini, Claude, NotebookLM, dan Google AI Studio. Checklist persiapan lengkap dikirim sebelum hari-H.",
    category: "Persiapan"
  },
  {
    id: "faq-4",
    question: "Adakah tindak lanjut setelah pelatihan?",
    answer: "Peserta Onsite mendapatkan sesi mentoring 1-on-1. Untuk kebutuhan lebih lanjut, MAXY menyediakan AI transformation roadmap dan implementasi solusi agentic AI untuk enterprise.",
    category: "Program"
  },
  {
    id: "faq-5",
    question: "Apa perbedaan paket Online dan Onsite?",
    answer: "Materi dan kurikulum sama. Bedanya: Onsite memberikan pengalaman networking langsung dengan sesama leader, review langsung dari pemateri, akses fasilitas MAXY AI HUB, bonus buku Happiness at Work, dan sesi mentoring 1-on-1.",
    category: "Harga"
  }
];
