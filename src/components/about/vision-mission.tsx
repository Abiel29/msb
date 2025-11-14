"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { FaBullseye, FaCompass, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const visionPoints = [
  'Menjadi firma hukum terdepan di Indonesia',
  'Dipercaya oleh klien domestik dan internasional',
  'Memberikan kontribusi positif bagi masyarakat'
];

const missionPoints = [
  'Memberikan solusi hukum yang inovatif',
  'Melindungi hak dan kepentingan klien',
  'Membangun hubungan jangka panjang'
];

export default function VisionMission() {
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
          {/* Logo MSB */}
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <Image
                src="/msb.png"
                alt="MSB Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Visi & Misi
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Komitmen kami untuk memberikan layanan hukum terbaik dan menjadi mitra terpercaya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <FaBullseye className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Visi</h3>
                </div>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6 text-left">
                  Menjadi firma hukum terdepan yang dipercaya dalam memberikan solusi hukum inovatif dan komprehensif.
                </p>

                <div className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <FaCheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <FaCompass className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Misi</h3>
                </div>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6 text-left">
                  Memberikan layanan hukum berkualitas dengan pendekatan personal dan profesional untuk melindungi hak dan kepentingan klien.
                </p>

                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <FaCheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
