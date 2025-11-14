"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  ArrowLeft,
  Phone,
  MessageCircle,
  Clock,
  Award
} from 'lucide-react';
import { FaWhatsapp, FaBalanceScale } from 'react-icons/fa';
import { Service } from '@/lib/types';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const serviceIcons = {
  'hukum-korporasi': FaBalanceScale,
  'litigasi-arbitrase': FaBalanceScale,
  'hukum-properti': FaBalanceScale,
  'hukum-keluarga': FaBalanceScale,
  'hak-kekayaan-intelektual': FaBalanceScale,
  'hukum-ketenagakerjaan': FaBalanceScale,
  'hukum-perdata': FaBalanceScale,
  'hukum-pidana': FaBalanceScale,
  'legal-review-opinion': FaBalanceScale,
};

const serviceContent = {
  'hukum-korporasi': {
    whatIs: 'Hukum Korporasi adalah bidang hukum yang mengatur pembentukan, operasional, dan pengelolaan perusahaan. Layanan ini mencakup seluruh aspek legal dalam menjalankan bisnis, mulai dari pendirian hingga likuidasi perusahaan.',
    whyImportant: [
      'Memastikan struktur perusahaan sesuai regulasi',
      'Melindungi aset dan kepentingan pemegang saham',
      'Mencegah sengketa internal dan eksternal',
      'Memfasilitasi pertumbuhan dan ekspansi bisnis'
    ],
    whoNeeds: [
      'Pengusaha yang ingin mendirikan perusahaan',
      'Perusahaan yang melakukan merger atau akuisisi',
      'Korporasi yang membutuhkan review compliance',
      'Investor yang ingin melakukan due diligence'
    ],
    commonCases: [
      'Pendirian PT dan perubahan anggaran dasar',
      'Merger dan akuisisi perusahaan',
      'Penyusunan perjanjian kerjasama bisnis',
      'Corporate restructuring dan reorganisasi'
    ]
  },
  'litigasi-arbitrase': {
    whatIs: 'Litigasi dan Arbitrase adalah proses penyelesaian sengketa hukum melalui jalur pengadilan (litigasi) atau melalui badan arbitrase (arbitrase). Kami menyediakan representasi hukum yang kuat untuk melindungi hak dan kepentingan klien.',
    whyImportant: [
      'Melindungi hak hukum dan kepentingan klien',
      'Menyelesaikan sengketa secara efektif',
      'Meminimalkan kerugian finansial',
      'Memberikan kepastian hukum'
    ],
    whoNeeds: [
      'Individu atau perusahaan yang terlibat sengketa',
      'Pihak yang dirugikan dalam kontrak bisnis',
      'Korban tindak pidana atau perdata',
      'Perusahaan yang menghadapi gugatan'
    ],
    commonCases: [
      'Sengketa kontrak bisnis dan wanprestasi',
      'Gugatan perdata dan ganti rugi',
      'Perkara pidana ekonomi',
      'Arbitrase komersial internasional'
    ]
  },
  'hukum-properti': {
    whatIs: 'Hukum Properti mengatur segala aspek legal terkait kepemilikan, pengalihan, dan pemanfaatan tanah dan bangunan. Layanan ini memastikan transaksi properti Anda aman dan sesuai hukum.',
    whyImportant: [
      'Memastikan kepemilikan properti sah dan legal',
      'Mencegah sengketa tanah di kemudian hari',
      'Melindungi investasi properti',
      'Memfasilitasi transaksi yang aman'
    ],
    whoNeeds: [
      'Pembeli atau penjual properti',
      'Developer dan investor properti',
      'Pemilik tanah yang ingin mengurus sertifikat',
      'Pihak yang terlibat sengketa properti'
    ],
    commonCases: [
      'Jual beli tanah dan bangunan',
      'Pengurusan sertifikat hak milik',
      'Sengketa batas tanah',
      'Perjanjian sewa menyewa properti'
    ]
  },
  'hukum-keluarga': {
    whatIs: 'Hukum Keluarga mengatur hubungan hukum dalam keluarga, termasuk perkawinan, perceraian, hak asuh anak, dan waris. Kami memberikan pendampingan dengan pendekatan yang sensitif dan profesional.',
    whyImportant: [
      'Melindungi hak dan kepentingan anak',
      'Memastikan pembagian harta yang adil',
      'Menyelesaikan masalah keluarga secara damai',
      'Memberikan kepastian hukum dalam keluarga'
    ],
    whoNeeds: [
      'Pasangan yang akan bercerai',
      'Orang tua yang memperebutkan hak asuh',
      'Keluarga yang mengurus pembagian waris',
      'Individu yang ingin adopsi anak'
    ],
    commonCases: [
      'Perceraian dan pembatalan pernikahan',
      'Penetapan hak asuh dan nafkah anak',
      'Pembagian harta gono-gini',
      'Sengketa waris dan hibah'
    ]
  },
  'hak-kekayaan-intelektual': {
    whatIs: 'Hak Kekayaan Intelektual (HKI) melindungi hasil karya intelektual seperti merek, paten, hak cipta, dan desain industri. Kami membantu mendaftarkan dan melindungi aset intelektual Anda.',
    whyImportant: [
      'Melindungi inovasi dan kreativitas',
      'Mencegah pembajakan dan pemalsuan',
      'Meningkatkan nilai bisnis',
      'Memberikan keunggulan kompetitif'
    ],
    whoNeeds: [
      'Pemilik brand dan merek dagang',
      'Inventor dan peneliti',
      'Kreator konten dan seniman',
      'Perusahaan teknologi dan startup'
    ],
    commonCases: [
      'Pendaftaran merek dagang',
      'Perlindungan paten teknologi',
      'Lisensi hak cipta',
      'Penegakan hak IP terhadap pelanggaran'
    ]
  },
  'hukum-ketenagakerjaan': {
    whatIs: 'Hukum Ketenagakerjaan mengatur hubungan antara pemberi kerja dan pekerja, termasuk kontrak kerja, PHK, dan sengketa industrial. Kami membantu menciptakan hubungan kerja yang harmonis dan sesuai regulasi.',
    whyImportant: [
      'Memastikan compliance dengan UU Ketenagakerjaan',
      'Mencegah sengketa industrial',
      'Melindungi hak pekerja dan pemberi kerja',
      'Menciptakan lingkungan kerja yang kondusif'
    ],
    whoNeeds: [
      'Perusahaan yang mempekerjakan karyawan',
      'HR Manager dan praktisi SDM',
      'Pekerja yang mengalami PHK tidak adil',
      'Pengusaha yang menghadapi sengketa industrial'
    ],
    commonCases: [
      'Penyusunan kontrak kerja dan PKB',
      'Penyelesaian kasus PHK',
      'Sengketa upah dan pesangon',
      'Compliance audit ketenagakerjaan'
    ]
  },
  'hukum-perdata': {
    whatIs: 'Hukum Perdata mengatur hak dan kewajiban antar individu atau badan usaha dalam hubungan privat seperti perjanjian, harta kekayaan, dan keluarga. Kami membantu penyusunan serta penegakan hak perdata dan penyelesaian sengketa baik litigasi maupun nonlitigasi.',
    whyImportant: [
      'Memberikan kepastian hukum dalam hubungan perdata',
      'Meminimalkan risiko sengketa kontrak',
      'Melindungi hak dan aset klien',
      'Menyediakan mekanisme penyelesaian sengketa yang efektif'
    ],
    whoNeeds: [
      'Pelaku usaha yang membuat atau menegosiasikan kontrak',
      'Individu/keluarga dengan isu waris, harta bersama, atau hak asuh',
      'Perusahaan yang menghadapi wanprestasi atau perbuatan melawan hukum',
      'Kreditur atau debitur dalam sengketa utang-piutang'
    ],
    commonCases: [
      'Wanprestasi dan sengketa perjanjian/kontrak',
      'Perbuatan melawan hukum dan tuntutan ganti rugi',
      'Sengketa utang-piutang dan eksekusi jaminan',
      'Waris, pembagian harta bersama, dan hak asuh anak'
    ]
  },
  'hukum-pidana': {
    whatIs: 'Hukum Pidana mengatur perbuatan yang dilarang beserta sanksinya. Kami mendampingi klien di setiap tahap proses pidana: penyelidikan, penyidikan, penuntutan, persidangan, hingga upaya hukum.',
    whyImportant: [
      'Menjamin terpenuhinya hak-hak tersangka/terdakwa/korban',
      'Menyusun strategi pembelaan yang kuat dan terukur',
      'Meminimalkan dampak hukum, reputasi, dan bisnis',
      'Mengurangi risiko kesalahan prosedur dan kriminalisasi'
    ],
    whoNeeds: [
      'Tersangka/terdakwa atau korban tindak pidana',
      'Perusahaan/pejabat yang menghadapi dugaan tindak pidana korporasi',
      'Pihak yang dipanggil atau diperiksa aparat penegak hukum',
      'Bisnis yang membutuhkan pendampingan saat penggeledahan/penyitaan'
    ],
    commonCases: [
      'Penipuan, penggelapan, dan pemalsuan dokumen',
      'Penganiayaan dan tindak pidana terhadap orang',
      'Tindak pidana ITE: pencemaran nama baik, akses ilegal, dan cyber fraud',
      'Tindak pidana ekonomi/korporasi dan pencucian uang'
    ]
  },
  'legal-review-opinion': {
    whatIs: 'Legal Review & Legal Opinion adalah layanan analisis dan penilaian hukum terhadap dokumen, kontrak, atau situasi tertentu. Kami memberikan pendapat hukum profesional untuk membantu pengambilan keputusan bisnis.',
    whyImportant: [
      'Mengidentifikasi risiko hukum sejak dini',
      'Memberikan dasar hukum yang kuat',
      'Melindungi kepentingan dalam transaksi',
      'Memastikan dokumen legally binding'
    ],
    whoNeeds: [
      'Perusahaan sebelum menandatangani kontrak',
      'Investor yang melakukan due diligence',
      'Pihak yang memerlukan second opinion',
      'Manajemen yang mengambil keputusan strategis'
    ],
    commonCases: [
      'Review kontrak bisnis dan perjanjian',
      'Legal opinion untuk transaksi M&A',
      'Analisis risiko hukum proyek',
      'Due diligence legal perusahaan'
    ]
  },
  'perizinan': {
    whatIs: 'Layanan Perizinan membantu mengurus berbagai izin usaha dan operasional yang diperlukan untuk menjalankan bisnis secara legal. Kami memastikan proses perizinan berjalan efisien dan sesuai regulasi.',
    whyImportant: [
      'Memastikan legalitas operasional bisnis',
      'Menghindari sanksi administratif',
      'Memudahkan akses ke pembiayaan',
      'Meningkatkan kredibilitas perusahaan'
    ],
    whoNeeds: [
      'Pengusaha baru yang memulai bisnis',
      'Perusahaan yang ekspansi usaha',
      'Bisnis yang memerlukan izin khusus',
      'Investor asing yang masuk Indonesia'
    ],
    commonCases: [
      'Pengurusan NIB (Nomor Induk Berusaha)',
      'Izin lokasi dan lingkungan',
      'Izin operasional khusus',
      'Perpanjangan dan perubahan izin'
    ]
  },
  'corporate-legal-compliance': {
    whatIs: 'Corporate Legal & Compliance memastikan perusahaan beroperasi sesuai dengan peraturan perundang-undangan yang berlaku. Kami menyediakan audit, review, dan advisory untuk meminimalkan risiko hukum.',
    whyImportant: [
      'Mencegah pelanggaran hukum dan sanksi',
      'Melindungi reputasi perusahaan',
      'Meningkatkan tata kelola perusahaan',
      'Memfasilitasi pertumbuhan berkelanjutan'
    ],
    whoNeeds: [
      'Perusahaan publik dan terbuka',
      'Korporasi dengan operasi kompleks',
      'Perusahaan yang akan IPO',
      'Bisnis yang beroperasi multi-sektor'
    ],
    commonCases: [
      'Compliance audit dan review',
      'Penyusunan SOP dan kebijakan internal',
      'Corporate governance advisory',
      'Regulatory compliance monitoring'
    ]
  },
  'legal-review-legal-opinion': {
    whatIs: 'Legal Review & Legal Opinion adalah layanan analisis dan penilaian hukum terhadap dokumen, kontrak, atau situasi tertentu. Kami memberikan pendapat hukum profesional untuk membantu pengambilan keputusan bisnis.',
    whyImportant: [
      'Mengidentifikasi risiko hukum sejak dini',
      'Memberikan dasar hukum yang kuat',
      'Melindungi kepentingan dalam transaksi',
      'Memastikan dokumen legally binding'
    ],
    whoNeeds: [
      'Perusahaan sebelum menandatangani kontrak',
      'Investor yang melakukan due diligence',
      'Pihak yang memerlukan second opinion',
      'Manajemen yang mengambil keputusan strategis'
    ],
    commonCases: [
      'Review kontrak bisnis dan perjanjian',
      'Legal opinion untuk transaksi M&A',
      'Analisis risiko hukum proyek',
      'Due diligence legal perusahaan'
    ]
  }
};

const serviceDetails = {
  'hukum-korporasi': {
    features: [
      'Pendirian PT, CV, dan badan usaha lainnya',
      'Merger, akuisisi, dan restrukturisasi',
      'Corporate governance dan compliance',
      'Kontrak bisnis dan kemitraan',
      'Due diligence perusahaan',
      'Perubahan anggaran dasar'
    ],
    process: [
      'Konsultasi awal dan analisis kebutuhan',
      'Penyusunan dokumen legal',
      'Proses perizinan dan registrasi',
      'Monitoring dan follow-up'
    ],
    benefits: [
      'Struktur perusahaan yang optimal',
      'Compliance dengan regulasi',
      'Perlindungan hukum maksimal',
      'Efisiensi operasional'
    ]
  },
  'litigasi-arbitrase': {
    features: [
      'Litigasi perdata dan pidana',
      'Arbitrase komersial domestik dan internasional',
      'Mediasi dan negosiasi sengketa',
      'Eksekusi putusan pengadilan',
      'Banding dan kasasi',
      'Penegakan hak kontraktual'
    ],
    process: [
      'Evaluasi kasus dan strategi hukum',
      'Persiapan dokumen dan bukti',
      'Representasi di pengadilan/arbitrase',
      'Eksekusi dan follow-up'
    ],
    benefits: [
      'Tingkat keberhasilan tinggi',
      'Strategi litigasi yang efektif',
      'Penyelesaian sengketa optimal',
      'Perlindungan kepentingan klien'
    ]
  },
  'hukum-properti': {
    features: [
      'Due diligence properti dan tanah',
      'Kontrak jual beli dan sewa menyewa',
      'Pengurusan sertifikat dan IMB',
      'Sengketa tanah dan properti',
      'Real estate development',
      'Strata title dan apartemen'
    ],
    process: [
      'Verifikasi legal properti',
      'Penyusunan kontrak dan dokumen',
      'Proses registrasi dan sertifikasi',
      'Penyelesaian transaksi'
    ],
    benefits: [
      'Transaksi properti aman',
      'Dokumen legal lengkap',
      'Risiko hukum minimal',
      'Investasi terlindungi'
    ]
  },
  'hukum-keluarga': {
    features: [
      'Perceraian dan pembatalan pernikahan',
      'Hak asuh dan nafkah anak',
      'Pembagian harta gono-gini',
      'Adopsi dan perwalian',
      'Perencanaan waris',
      'Mediasi keluarga'
    ],
    process: [
      'Konsultasi sensitif dan rahasia',
      'Mediasi dan negosiasi',
      'Proses hukum yang diperlukan',
      'Dukungan pasca penyelesaian'
    ],
    benefits: [
      'Penyelesaian damai',
      'Perlindungan hak anak',
      'Proses yang sensitif',
      'Solusi win-win'
    ]
  },
  'hak-kekayaan-intelektual': {
    features: [
      'Pendaftaran merek dan logo',
      'Perlindungan paten dan desain',
      'Hak cipta dan karya kreatif',
      'Lisensi dan franchise',
      'Penegakan hak IP',
      'IP audit dan strategi'
    ],
    process: [
      'IP audit dan penelusuran',
      'Aplikasi dan registrasi',
      'Monitoring dan perlindungan',
      'Penegakan dan litigasi'
    ],
    benefits: [
      'Aset IP terlindungi',
      'Keunggulan kompetitif',
      'Revenue stream baru',
      'Brand protection'
    ]
  },
  'hukum-ketenagakerjaan': {
    features: [
      'Kontrak kerja dan PKB',
      'PHK dan pesangon',
      'Sengketa industrial',
      'Compliance ketenagakerjaan',
      'Outsourcing dan alih daya',
      'Hubungan industrial'
    ],
    process: [
      'Review kebijakan HR',
      'Penyusunan dokumen ketenagakerjaan',
      'Training dan sosialisasi',
      'Monitoring compliance'
    ],
    benefits: [
      'Hubungan kerja harmonis',
      'Compliance penuh',
      'Risiko sengketa minimal',
      'Produktivitas optimal'
    ]
  }
};

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || FaBalanceScale;
  const details = serviceDetails[service.slug as keyof typeof serviceDetails];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb & Back Button */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="ghost" asChild>
              <Link href="/layanan" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Layanan</span>
              </Link>
            </Button>
          </div>
          <nav className="text-sm text-slate-600">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/layanan" className="hover:text-red-600">Layanan</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Service Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center">
                <IconComponent className="h-10 w-10 text-red-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">
              Layanan Unggulan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {service.short_description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={
                  service.slug === 'perizinan' 
                    ? 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1600&auto=format&fit=crop'
                    : service.slug === 'corporate-legal-compliance'
                    ? 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1600&auto=format&fit=crop'
                    : service.slug === 'legal-review-legal-opinion'
                    ? 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1600&auto=format&fit=crop'
                    : service.image_url || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop'
                }
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tentang Layanan Ini</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {service.full_description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is Section */}
      {serviceContent[service.slug as keyof typeof serviceContent] && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Apa itu {service.title}?</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {serviceContent[service.slug as keyof typeof serviceContent].whatIs}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Why Important */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Mengapa Penting?</h3>
                      <ul className="space-y-3">
                        {serviceContent[service.slug as keyof typeof serviceContent].whyImportant.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Who Needs */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Siapa yang Membutuhkan?</h3>
                      <ul className="space-y-3">
                        {serviceContent[service.slug as keyof typeof serviceContent].whoNeeds.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Common Cases */}
      {serviceContent[service.slug as keyof typeof serviceContent] && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Kasus yang Sering Ditangani</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceContent[service.slug as keyof typeof serviceContent].commonCases.map((item, idx) => (
                    <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 font-bold text-sm">{idx + 1}</span>
                          </div>
                          <span className="text-slate-700 pt-1">{item}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Service Features (hidden) */}
      {false && details && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Cakupan Layanan
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Layanan komprehensif yang kami tawarkan untuk memenuhi kebutuhan hukum Anda
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process & Benefits */}
      {details && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Proses Kerja</h3>
                      </div>
                      <div className="space-y-4">
                        {details.process.map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-semibold text-sm">{index + 1}</span>
                            </div>
                            <span className="text-slate-700 pt-1">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Manfaat</h3>
                      </div>
                      <div className="space-y-4">
                        {details.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-red-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Butuh Bantuan untuk {service.title}?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Tim ahli kami siap membantu Anda melalui WhatsApp.
            </p>
            <div className="flex justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-red-600 hover:bg-red-50 font-semibold"
              >
                <a
                  href={`https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bertanya%20mengenai%20layanan%20${service.title}%20di%20MSB%20and%20Partners`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
