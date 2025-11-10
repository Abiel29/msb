"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Award, 
  GraduationCap, 
  Globe, 
  Clock, 
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

const teamStats = [
  {
    icon: Users,
    value: '15+',
    label: 'Profesional Hukum',
    description: 'Tim ahli dengan berbagai spesialisasi',
    color: 'bg-red-700'
  },
  {
    icon: Clock,
    value: '75+',
    label: 'Tahun Pengalaman Gabungan',
    description: 'Pengalaman mendalam di berbagai bidang',
    color: 'bg-green-500'
  },
  {
    icon: Award,
    value: '25+',
    label: 'Penghargaan & Sertifikasi',
    description: 'Pengakuan atas keunggulan profesional',
    color: 'bg-yellow-500'
  },
  {
    icon: GraduationCap,
    value: '8',
    label: 'Lulusan Universitas Top',
    description: 'Pendidikan dari institusi terkemuka',
    color: 'bg-purple-500'
  },
  {
    icon: Globe,
    value: '3',
    label: 'Sertifikasi Internasional',
    description: 'Standar global dalam praktik hukum',
    color: 'bg-indigo-500'
  },
  {
    icon: BookOpen,
    value: '50+',
    label: 'Publikasi & Artikel',
    description: 'Kontribusi dalam literatur hukum',
    color: 'bg-orange-500'
  }
];

export default function TeamStats() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
