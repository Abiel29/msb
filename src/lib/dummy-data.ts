// Data dummy untuk development
import { FirmInfo, TeamMember, Service, Testimonial, NewsItem } from './types';

export const partnerLogos = [
  { src: 'https://static.cdnlogo.com/logos/v/9/vivo-2019.svg', alt: 'Vivo' },
  { src: 'https://static.cdnlogo.com/logos/a/92/ati.svg', alt: 'ATI' },
  { src: 'https://static.cdnlogo.com/logos/s/92/schwarz-pharma.svg', alt: 'Schwarz Pharma' },
  { src: 'https://static.cdnlogo.com/logos/p/85/paladin-resources.svg', alt: 'Paladin Resources' },
  { src: 'https://static.cdnlogo.com/logos/t/46/tvr.svg', alt: 'TVR' },
  { src: 'https://static.cdnlogo.com/logos/r/85/ryanair.svg', alt: 'Ryanair' },
];

export const firmInfo: FirmInfo = {
  id: 1,
  name: 'MSB & Partners',
  tagline: 'Solusi Hukum Profesional untuk Kebutuhan Anda',
  logo_url: '/msb.png',
  mission: 'Memberikan layanan hukum berkualitas dengan pendekatan personal dan profesional untuk melindungi hak dan kepentingan klien.',
  vision: 'Menjadi firma hukum terdepan yang dipercaya dalam memberikan solusi hukum inovatif dan komprehensif.',
  whatsapp_number: '+62811-8999-7656',
  email: 'help@msbp-law.com',
  phone: '0811-8999-7656',
  address: 'Ratu Plaza, Jl. Jenderal Sudirman No.Kav. 9, Lantai 10, RT.1/RW.3, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270',
  operation_hours: 'Senin-Jumat 09.00 WIB-18.00 WIB',
  seo_title: 'MSB & Partners - Firma Hukum Terpercaya Jakarta',
  seo_description: 'MSB & Partners adalah firma hukum yang berkomitmen untuk memberikan layanan hukum yang profesional, terpercaya, dan solutif bagi klien individu maupun korporasi.',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z'
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mulyadi Sinarta Batubara, S.H., M.H.',
    position: 'Managing Partners of MSB & Partners',
    specialization: 'Sengketa Bisnis & Komersial, Litigasi Perdata & Pidana, Hubungan Industrial',
    bio: [
      'Mulyadi Sinarta Batubara adalah  Founder dari MSB & Partners.  Sebagai Managing Partner, ia  memiliki wawasan langsung  terhadap berbagai isu yang  mencakup sengketa bisnis dan  komersial, serta pemahaman yang  kuat akan pentingnya memberikan  solusi hukum yang tepat waktu,  efisien, dan pragmatis.'
      ,'Ia memiliki peran dan pengaruh  yang signifikan dalam menjalankan  berbagai prosedur hukum dan  penyelesaian sengketa atas nama  beragam klien, mulai dari korporasi  besar hingga usaha kecil dan  individu. Ia meraih Gelar Sarjana  Hukum dari Fakultas Hukum  Universitas Kristen Indonesia,  kemudian melanjutkan studi dan  memperoleh Gelar Magister Hukum  Universitas Tarumanagara. Ia  memiliki pengalaman luas dalam  menangani berbagai kasus litigasi  besar dan kompleks, termasuk  perkara Pidana, Perdata, Hubungan  Industrial.'
    ],
    image_url: '/img/Mulyadi.jpg',
    linkedin_url: '',
    email: 'help@msbp-law.com',
    order_index: 1,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'Ferry O. I. Panjaitan, S.H.',
    position: 'Senior Associate',
    specialization: 'Hukum Perdata, Kontrak',
    bio: ['Berpengalaman dalam penanganan sengketa perdata dan penyusunan kontrak bisnis. Memberikan solusi hukum yang praktis dan efektif untuk klien.'],
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/ferry-panjaitan',
    email: 'ferry@msbpartners.com',
    order_index: 4,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    name: 'Rellavianita, S.H., M.Kn.',
    position: 'Associate',
    specialization: 'Hukum Korporasi, Compliance',
    bio: ['Partner senior dengan keahlian dalam hukum korporasi dan kepatuhan regulasi. Berpengalaman dalam memberikan konsultasi strategis untuk perusahaan dalam berbagai aspek hukum bisnis.'],
    image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/rellavianita',
    email: 'rellavianita@msbpartners.com',
    order_index: 2,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  // {
  //   id: 4,
  //   name: 'Muhamad Irvan Maulana, S.H., M.H.',
  //   position: 'Associate',
  //   specialization: 'Litigasi, Arbitrase',
  //   bio: ['Spesialis litigasi dan arbitrase dengan pengalaman menangani kasus-kasus kompleks di berbagai tingkat pengadilan. Ahli dalam strategi penyelesaian sengketa yang efektif.'],
  //   image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  //   linkedin_url: 'https://linkedin.com/in/irvan-maulana',
  //   email: 'irvan@msbpartners.com',
  //   order_index: 3,
  //   is_active: true,
  //   created_at: '2024-01-01T00:00:00Z',
  //   updated_at: '2024-01-01T00:00:00Z'
  // },
  {
    id: 5,
    name: 'Salsabila Azaria Rachma, S.H.',
    position: 'Associate',
    specialization: 'Legal Research, Corporate Legal',
    bio: ['Fokus pada riset hukum dan dukungan legal untuk transaksi korporasi. Memberikan analisis hukum yang mendalam untuk pengambilan keputusan strategis.'],
    image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/salsabila-rachma',
    email: 'salsabila@msbpartners.com',
    order_index: 5,
    is_active: false,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    name: 'Femmie Cynthia, S.H.',
    position: 'Junior Associate',
    specialization: 'Hukum Keluarga, Perizinan',
    bio: ['Spesialis dalam hukum keluarga dan pengurusan perizinan. Memberikan pendampingan hukum dengan pendekatan yang profesional dan empatik.'],
    image_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/femmie-cynthia',
    email: 'femmie@msbpartners.com',
    order_index: 6,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 7,
    name: 'Talia Kallista Haditama, S.H.',
    position: 'Junior Associate',
    specialization: 'Legal Opinion, Compliance',
    bio: ['Ahli dalam penyusunan legal opinion dan compliance audit. Membantu klien memahami risiko hukum dan memastikan kepatuhan terhadap regulasi.'],
    image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/talia-haditama',
    email: 'talia@msbpartners.com',
    order_index: 7,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Hukum Perdata',
    slug: 'hukum-perdata',
    short_description: 'Penanganan sengketa perdata, kontrak, dan hukum keluarga dengan pendekatan profesional.',
    full_description: 'Layanan komprehensif dalam penanganan sengketa perdata meliputi sengketa kontrak, wanprestasi, perbuatan melawan hukum, hukum keluarga (perceraian, hak asuh, waris), serta penyelesaian sengketa melalui mediasi dan litigasi di pengadilan.',
    icon_url: '/icons/civil-law.svg',
    image_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop',
    order_index: 1,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    title: 'Hukum Pidana',
    slug: 'hukum-pidana',
    short_description: 'Pendampingan hukum pidana untuk tersangka/terdakwa dengan strategi pertahanan yang kuat.',
    full_description: 'Representasi hukum dalam kasus pidana di berbagai tingkat pengadilan, mulai dari tahap penyidikan hingga kasasi. Kami menangani kasus pidana umum, pidana khusus, dan white collar crime dengan pendekatan yang komprehensif dan strategis.',
    icon_url: '/icons/criminal-law.svg',
    image_url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600&auto=format&fit=crop',
    order_index: 2,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    title: 'Legal Review & Legal Opinion',
    slug: 'legal-review-opinion',
    short_description: 'Analisis dan pendapat hukum atas dokumen dan kasus untuk pengambilan keputusan yang tepat.',
    full_description: 'Layanan review dokumen hukum, kontrak, perjanjian, dan pemberian legal opinion yang komprehensif. Kami membantu klien memahami risiko hukum dan memberikan rekomendasi strategis untuk berbagai transaksi bisnis dan keputusan penting.',
    icon_url: '/icons/legal-review.svg',
    image_url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop',
    order_index: 3,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    title: 'Perizinan',
    slug: 'perizinan',
    short_description: 'Pengurusan izin usaha dan perizinan korporasi yang efisien dan sesuai regulasi.',
    full_description: 'Bantuan pengurusan berbagai izin usaha dan perizinan korporasi termasuk NIB, izin lokasi, izin lingkungan, izin operasional, dan perizinan khusus lainnya. Kami memastikan proses perizinan berjalan lancar sesuai dengan regulasi yang berlaku.',
    icon_url: '/icons/licensing.svg',
    image_url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop',
    order_index: 4,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    title: 'Corporate Legal & Compliance',
    slug: 'corporate-legal-compliance',
    short_description: 'Konsultasi hukum perusahaan dan kepatuhan regulasi untuk operasional bisnis yang aman.',
    full_description: 'Layanan hukum korporasi meliputi pendirian perusahaan, corporate governance, penyusunan kontrak bisnis, merger & akuisisi, compliance audit, dan advisory terkait kepatuhan regulasi. Kami membantu perusahaan mengelola risiko hukum dan memastikan operasional sesuai dengan peraturan yang berlaku.',
    icon_url: '/icons/corporate.svg',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
    order_index: 5,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    client_name: 'Andi Kurniawan',
    client_title: 'CEO, PT Teknologi Maju',
    testimonial_text: 'Hukum Prima & Associates telah membantu perusahaan kami dalam proses merger yang kompleks. Highly recommended!',
    rating: 5,
    image_url: '/images/testimonials/andi-kurniawan.jpg',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    client_name: 'Siti Nurhaliza',
    client_title: 'Direktur, CV Berkah Jaya',
    testimonial_text: 'Pelayanan yang sangat memuaskan dalam penanganan sengketa kontrak. Tim yang responsif dan solusi yang tepat sasaran.',
    rating: 5,
    image_url: '/images/testimonials/siti-nurhaliza.jpg',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    client_name: 'Robert Tanoto',
    client_title: 'Owner, Tanoto Property Group',
    testimonial_text: 'Sudah 5 tahun menggunakan jasa Hukum Prima untuk semua transaksi properti kami. Tidak pernah mengecewakan!',
    rating: 5,
    image_url: '/images/testimonials/robert-tanoto.jpg',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    client_name: 'Dr. Lisa Wijaya',
    client_title: 'Praktisi Medis',
    testimonial_text: 'Terima kasih atas bantuan dalam kasus hukum keluarga saya. Penanganan yang sangat profesional dan empati.',
    rating: 5,
    image_url: '/images/testimonials/lisa-wijaya.jpg',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    client_name: 'Bambang Sutrisno',
    client_title: 'Direktur, PT Industri Kreatif',
    testimonial_text: 'Bantuan dalam pendaftaran merek dan paten sangat membantu bisnis kami. Tim yang kompeten dan berpengalaman.',
    rating: 4,
    image_url: '/images/testimonials/bambang-sutrisno.jpg',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

// Berita firma (dummy)
export const firmNews: NewsItem[] = [
  {
    id: 1,
    title: 'Hukum Prima Menangkan Kasus Arbitrase Komersial Internasional',
    slug: 'menangkan-kasus-arbitrase-internasional',
    image_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
    published_at: '2025-06-12T00:00:00Z',
    summary: 'Tim litigasi kami berhasil memenangkan kasus arbitrase bernilai tinggi, memperkuat rekam jejak firma dalam penyelesaian sengketa.',
    content: 'Dalam kasus arbitrase komersial internasional yang kompleks, tim litigasi kami berhasil mengamankan putusan yang menguntungkan klien. Keberhasilan ini menunjukkan keahlian kami dalam strategi dan representasi di forum internasional.',
    is_featured: true,
    is_active: true,
    created_at: '2025-06-12T00:00:00Z',
    updated_at: '2025-06-12T00:00:00Z'
  },
  {
    id: 2,
    title: 'Publikasi: Panduan Hukum Akuisisi Perusahaan 2025',
    slug: 'panduan-hukum-akuisisi-2025',
    image_url: 'https://images.unsplash.com/photo-1551281044-8f6858f4e7ab?q=80&w=1200&auto=format&fit=crop',
    published_at: '2025-05-20T00:00:00Z',
    summary: 'Kami menerbitkan panduan komprehensif terkait proses akuisisi perusahaan di Indonesia, lengkap dengan update regulasi terbaru.',
    content: 'Panduan ini membahas langkah-langkah akuisisi, due diligence, aspek hukum penting, dan praktik terbaik terbaru untuk pelaku bisnis di Indonesia.',
    is_featured: true,
    is_active: true,
    created_at: '2025-05-20T00:00:00Z',
    updated_at: '2025-05-20T00:00:00Z'
  },
  {
    id: 3,
    title: 'Seminar: Perlindungan Kekayaan Intelektual untuk Startup',
    slug: 'seminar-perlindungan-ip-untuk-startup',
    image_url: 'https://images.unsplash.com/photo-1559136653-3f22f3f42a22?q=80&w=1200&auto=format&fit=crop',
    published_at: '2025-04-10T00:00:00Z',
    summary: 'Acara edukatif untuk founder startup tentang strategi perlindungan IP yang efektif dan hemat biaya.',
    content: 'Seminar membahas pendaftaran merek, paten, dan hak cipta, serta strategi praktis untuk melindungi aset IP startup.',
    is_featured: false,
    is_active: true,
    created_at: '2025-04-10T00:00:00Z',
    updated_at: '2025-04-10T00:00:00Z'
  },
  {
    id: 4,
    title: 'Ekspansi Layanan: Divisi Hukum Ketenagakerjaan',
    slug: 'ekspansi-divisi-hukum-ketenagakerjaan',
    image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    published_at: '2025-03-01T00:00:00Z',
    summary: 'Kami meluncurkan divisi baru untuk menangani isu ketenagakerjaan, termasuk PHK, PKB, dan compliance.',
    content: 'Divisi baru kami siap membantu perusahaan dan karyawan dalam isu ketenagakerjaan, dengan tim yang berpengalaman dan solusi praktis.',
    is_featured: false,
    is_active: true,
    created_at: '2025-03-01T00:00:00Z',
    updated_at: '2025-03-01T00:00:00Z'
  }
];
