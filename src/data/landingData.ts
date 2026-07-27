import { Speaker, Testimonial, Deliverable, PricingPackage, FaqItem } from '../types';
import speakerRuben from '../assets/images/speaker-ruben.png';
import speakerIsaac from '../assets/images/speaker-isaac.png';
import speakerAndy from '../assets/images/speaker-andy.png';
import heroVideo from '../assets/videos/hero.mp4';
import testimoniVideo from '../assets/videos/testimoni.mp4';
import portfolioBatch2Video from '../assets/videos/portfolio-batch2.mp4';
import heroThumb from '../assets/videos/hero-thumb.jpg';
import testimoniThumb from '../assets/videos/testimoni-thumb.jpg';
import portfolioBatch2Thumb from '../assets/videos/portfolio-batch2-thumb.jpg';

export const VIDEO_LINKS = {
  hero: {
    url: "https://www.instagram.com/reel/DaLCdigzbUH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DaLCdigzbUH/embed/",
    videoSrc: heroVideo,
    thumbnailSrc: heroThumb,
    title: "Video Overview: The Future of Work",
    description: "Saksikan highlight & use case AI yang akan dipelajari di MAXY AI HUB.",
  },
  testimoni: {
    url: "https://www.instagram.com/reel/DYEriMzzq4W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DYEriMzzq4W/embed/",
    videoSrc: testimoniVideo,
    thumbnailSrc: testimoniThumb,
    title: "Video Testimoni Peserta",
    description: "Kisah nyata & tanggapan HR Leader serta Executive peserta pelatihan MAXY.",
  },
  portfolioBatch1: {
    url: "https://www.instagram.com/reel/DYEriMzzq4W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DYEriMzzq4W/embed/",
    videoSrc: testimoniVideo,
    thumbnailSrc: testimoniThumb,
    title: "Video Portfolio - Batch 1",
    description: "Dokumentasi suasana kelas & praktik langsung peserta Batch 1 di MAXY AI HUB.",
  },
  portfolioBatch2: {
    url: "https://www.instagram.com/reel/DaAn-x8zD8O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DaAn-x8zD8O/embed/",
    videoSrc: portfolioBatch2Video,
    thumbnailSrc: portfolioBatch2Thumb,
    title: "Video Portfolio - Batch 2",
    description: "Highlights pembelajaran, networking, & diskusi peserta Batch 2.",
  },
};

export const EVENT_DETAILS = {
  title: "The Future of Work: How AI is Shaping Productivity & Workplace Happiness",
  subtitle: "Program hybrid 2 hari untuk HR Manager, Direktur, Entrepreneur, dan Owner. Pulang membawa sistem AI + Happiness siap jalan, bukan teori.",
  dateText: "28 & 29 Juli 2026",
  timeText: "08.30 – 17.00 WIB",
  location: "MAXY AI HUB, Jakarta",
  fullAddress: "Grha Pengharapan 2nd Floor, Jl. Denpasar Raya No.2, Blok F3, South Jakarta",
  adminName: "Felicia",
  adminPhone: "+62 821 4499 5255",
  rawPhone: "6282144995255",
  earlyBirdCount: 10,
  countdownTargetDate: "2026-07-28T08:30:00+07:00",
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
    day: "HARI 1 · FONDASI",
    title: "🧠 Happiness at Work",
    subtitle: "Fondasi Psikologis & Sistem Kebahagiaan Kerja",
    description: "Kenapa 79 dari 100 karyawan sudah 'resign' secara mental — dan Anda belum menyadarinya.",
    icon: "HeartHandshake",
    points: [
      "Bukti kuantitatif kenapa happiness adalah keputusan bisnis, bukan program CSR",
      "Garis pemisah antara satisfaction dan happiness — dan Fish Philosophy sebagai model kerja",
      "Empat prinsip Fish Philosophy & model ERIC: rancang kebiasaan personal yang menular ke tim",
      "Petakan posisi organisasi Anda di salah satu dari 3 tahap Happily Productive Journey",
    ]
  },
  {
    day: "HARI 2 · IMPLEMENTASI",
    title: "🤖 AI for Happily Productive",
    subtitle: "Otomatisasi & Transformasi Alur Kerja Bersama AI",
    description: "Dari beban kerja rutin yang menumpuk, jadi asisten AI personal yang bekerja untuk Anda.",
    icon: "Sparkles",
    points: [
      "Diskusi reflektif membangun mindset keterbukaan terhadap disrupsi AI di cara kerja Anda",
      "FGD menyelaraskan konsep Happily Productive 3.0 dengan fitur-fitur nyata FlowBuddy",
      "Kuasai framework RCTF (Role, Context, Task, Format) untuk sintesis & kelola dokumen kerja internal",
      "Rancang AI assistant personal (Custom Gem) untuk otomatisasi tugas rutin sesuai peran Anda",
    ]
  }
];

export const DELIVERABLES: Deliverable[] = [
  {
    id: "gap-analysis",
    title: "GAP Analysis Cara Kerja",
    description: "Jarak nyata organisasi Anda menuju future of work — bukan asumsi",
    category: "strategy",
    iconName: "BarChart3",
    sampleContent: `[GAP ANALYSIS CARA KERJA]
1. Audit proses kerja manual vs potensi otomatisasi AI.
2. Analisis kesenjangan wellbeing dan risiko burnout per divisi.
3. Roadmap transisi nyata menuju budaya kerja Future of Work yang efisien.`
  },
  {
    id: "matriks-sinergi",
    title: "Matriks Sinergi Talenta",
    description: "Peta jelas: mana tugas milik manusia, mana milik AI automation",
    category: "ai",
    iconName: "Cpu",
    sampleContent: `[MATRIKS SINERGI TALENTA]
- Kuadran Manusia: Kepemimpinan empatik, kreativitas strategis, negosiasi & keputusan klinis.
- Kuadran AI: Sintesis dokumen, drafting awal, pengolahan data rutin & riset pasar.
- Hasil: Pembagian kerja harmonis tanpa kekhawatiran tim tergantikan oleh AI.`
  },
  {
    id: "flowbuddy-sim",
    title: "Simulasi FlowBuddy Teruji",
    description: "Satu kasus kerja nyata Anda, dijalankan lewat meeting/decision partner",
    category: "ai",
    iconName: "Sparkles",
    sampleContent: `[SIMULASI FLOWBUDDY TERUJI]
- Simulasi penyelesaian bottleneck SDM dan produktivitas tim bersama FlowBuddy.
- Pemanfaatan AI sebagai decision partner interaktif dalam rapat strategi pengambil keputusan.
- Ekstraksi kesimpulan dan rencana taktis yang bisa langsung dieksekusi.`
  },
  {
    id: "happiness-practice",
    title: "Personal Happiness Practice",
    description: "Jurnal refleksi harian (gratitude/mood tracking) yang bisa terus jalan",
    category: "happiness",
    iconName: "HeartHandshake",
    sampleContent: `[PERSONAL HAPPINESS PRACTICE]
- Panduan Jurnal Refleksi Harian & Mood Tracking mingguan untuk Leaders & Tim.
- Integrasi 4 prinsip Fish Philosophy (Choose Your Attitude, Play, Make Their Day, Be There).
- Strategi pembentukan kebiasaan personal positif yang menular ke seluruh lingkungan kerja.`
  },
  {
    id: "prompt-rctf",
    title: "Prompt RCTF Terstruktur",
    description: "Koleksi prompt terstruktur siap pakai untuk analisis, sintesis & komunikasi tim",
    category: "ai",
    iconName: "FileText",
    sampleContent: `[PROMPT RCTF TERSTRUKTUR SIAP PAKAI]
- Framework: R (Role) + C (Context) + T (Task) + F (Format).
- Contoh Prompt Evaluasi Tim: "Bertindak sebagai Strategic HR Consultant (Role). Dalam situasi evaluasi efisiensi bulanan (Context), sintesis laporan kinerja 5 divisi ini (Task) ke dalam format tabel matriks prioritas perbaikan (Format)."`
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: "ruben",
    name: "Ruben Saragih, CPC, MM, MBA",
    role: "Chief Happiness Officer",
    cert: "Certified by Woohoo Academy Denmark",
    bio: "Pakar happiness at work yang telah bekerja sama dengan ratusan perusahaan di Indonesia. Menghubungkan wellbeing science dengan strategi bisnis yang terukur.",
    initials: "RS",
    imageUrl: speakerRuben
  },
  {
    id: "isaac",
    name: "Isaac Munandar",
    role: "Co-Founder & CEO MAXY Academy",
    cert: "AI Expert",
    bio: "Membangun MAXY Academy untuk mendampingi ratusan organisasi di Indonesia dalam transformasi talenta dan implementasi AI.",
    initials: "IM",
    imageUrl: speakerIsaac
  },
  {
    id: "andy",
    name: "Andy F. Bintoro, S.Kom., MBA",
    role: "Co-Founder & CTO MAXY Academy",
    cert: "AI Expert · Trainer 100+ Organisasi",
    bio: "CTO dan Co-Founder MAXY Academy. Memimpin implementasi AI untuk 100+ organisasi di Indonesia — dari enterprise hingga institusi pemerintah.",
    initials: "AB",
    imageUrl: speakerAndy
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
