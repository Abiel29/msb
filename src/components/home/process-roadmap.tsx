"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaComments, 
  FaSearch, 
  FaBalanceScale, 
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaFileAlt
} from 'react-icons/fa';

const processSteps = [
  {
    number: 1,
    title: 'Konsultasi Awal',
    description: 'Diskusi mendalam untuk memahami kebutuhan hukum dan situasi Anda',
    icon: FaComments,
    color: 'bg-red-600',
    details: [
      'Analisis kebutuhan klien',
      'Evaluasi kasus awal',
      'Konsultasi gratis 30 menit'
    ]
  },
  {
    number: 2,
    title: 'Analisis & Riset',
    description: 'Tim ahli melakukan riset mendalam dan analisis hukum komprehensif',
    icon: FaSearch,
    color: 'bg-amber-500',
    details: [
      'Riset hukum mendalam',
      'Analisis risiko & peluang',
      'Penyusunan strategi'
    ]
  },
  {
    number: 3,
    title: 'Penyusunan Strategi',
    description: 'Merancang strategi hukum yang tepat dan efektif untuk kasus Anda',
    icon: FaFileAlt,
    color: 'bg-red-600',
    details: [
      'Rencana tindakan detail',
      'Timeline & milestone',
      'Estimasi biaya transparan'
    ]
  },
  {
    number: 4,
    title: 'Eksekusi & Implementasi',
    description: 'Pelaksanaan strategi dengan monitoring ketat dan komunikasi rutin',
    icon: FaBalanceScale,
    color: 'bg-amber-500',
    details: [
      'Implementasi solusi',
      'Monitoring progress',
      'Update berkala ke klien'
    ]
  },
  {
    number: 5,
    title: 'Penyelesaian & Follow-up',
    description: 'Evaluasi hasil dan dukungan berkelanjutan untuk kepuasan klien',
    icon: FaCheckCircle,
    color: 'bg-red-600',
    details: [
      'Evaluasi hasil akhir',
      'Dokumentasi lengkap',
      'Dukungan pasca-layanan'
    ]
  }
];

export default function ProcessRoadmap() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <FaClock className="h-4 w-4 text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
            Road Map Proses di MSB
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Proses kerja yang terstruktur dan transparan untuk memastikan hasil terbaik bagi klien
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number} className="relative">
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <CardContent className="p-5 md:p-6 text-center min-h-[280px] md:min-h-[320px]">
                        {/* Step Number Circle */}
                        <div className={`w-16 h-16 md:w-20 md:h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg relative z-10 transition-transform duration-300 hover:scale-110`}>
                          <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-white" />
                        </div>

                        {/* Step Number Badge */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{step.number}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                          {step.description}
                        </p>

                        {/* Details List */}
                        <div className="space-y-2 pt-4 border-t border-slate-100">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-left">
                              <FaArrowRight className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-600">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-lg">
            <FaUsers className="h-5 w-5 text-red-600" />
            <span className="text-sm font-semibold text-slate-900">
              Proses Transparan & Terukur untuk Kepuasan Klien
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
