"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaShieldAlt, 
  FaHandshake, 
  FaStar, 
  FaLightbulb, 
  FaBalanceScale,
  FaClock,
  FaGlobe,
  FaHandsHelping
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const values = [
  {
    icon: FaShieldAlt,
    title: 'Integritas',
    description: 'Kami berkomitmen untuk selalu jujur, transparan, dan bertanggung jawab dalam setiap tindakan dan keputusan yang kami ambil.',
    color: 'bg-red-600'
  },
  {
    icon: FaBalanceScale,
    title: 'Keadilan',
    description: 'Kami percaya bahwa setiap orang berhak mendapatkan perlakuan yang adil dan representasi hukum yang berkualitas.',
    color: 'bg-amber-500'
  },
  {
    icon: FaStar,
    title: 'Keunggulan',
    description: 'Kami terus berusaha memberikan layanan terbaik dengan standar kualitas tertinggi di industri hukum.',
    color: 'bg-red-600'
  },
  {
    icon: FaHandshake,
    title: 'Empati',
    description: 'Kami memahami bahwa setiap klien memiliki situasi unik dan membutuhkan pendekatan yang personal dan sensitif.',
    color: 'bg-amber-500'
  },
  {
    icon: FaLightbulb,
    title: 'Inovasi',
    description: 'Kami mengadopsi teknologi dan metode terbaru untuk memberikan solusi hukum yang efektif dan efisien.',
    color: 'bg-red-600'
  },
  {
    icon: FaClock,
    title: 'Responsivitas',
    description: 'Kami berkomitmen untuk memberikan respons yang cepat dan tepat waktu terhadap kebutuhan klien.',
    color: 'bg-amber-500'
  },
  {
    icon: FaGlobe,
    title: 'Profesionalisme',
    description: 'Kami menjunjung tinggi standar profesional dalam setiap aspek layanan dan interaksi dengan klien.',
    color: 'bg-red-600'
  }
];

export default function FirmValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nilai-Nilai Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nilai-nilai fundamental yang menjadi landasan dalam setiap layanan dan interaksi kami dengan klien
          </p>
        </motion.div>

        {/* First row - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {values.slice(0, 4).map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Second row - 3 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.slice(4, 7).map((value, index) => (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Nilai-Nilai dalam Tindakan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Komitmen Etika
                </h4>
                <p className="text-slate-600 text-sm">
                  Kami mematuhi kode etik profesi dan standar tertinggi dalam praktik hukum
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandsHelping className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Kepedulian Sosial
                </h4>
                <p className="text-slate-600 text-sm">
                  Kami aktif dalam program pro bono dan kegiatan sosial untuk membantu masyarakat
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-slate-700 italic leading-relaxed">
              "Setiap tantangan hukum membutuhkan ketegasan strategi, kejernihan analisis, dan komitmen tanpa kompromi. Kami hadir untuk melindungi kepentingan Anda dengan dedikasi penuh dan standar profesional tertinggi."
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold text-slate-900">MSB and Partners</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
