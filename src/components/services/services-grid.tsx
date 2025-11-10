"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Scale, 
  Home, 
  Heart, 
  Lightbulb, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { services } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const serviceIcons = {
  'hukum-korporasi': Building2,
  'litigasi-arbitrase': Scale,
  'hukum-properti': Home,
  'hukum-keluarga': Heart,
  'hak-kekayaan-intelektual': Lightbulb,
  'hukum-ketenagakerjaan': Users,
};

const serviceFeatures = {
  'hukum-korporasi': [
    'Pendirian Perusahaan',
    'Merger & Akuisisi',
    'Corporate Governance',
    'Compliance Review'
  ],
  'litigasi-arbitrase': [
    'Litigasi Perdata',
    'Arbitrase Komersial',
    'Mediasi Sengketa',
    'Eksekusi Putusan'
  ],
  'hukum-properti': [
    'Due Diligence Properti',
    'Kontrak Jual Beli',
    'Sertifikasi Tanah',
    'Sengketa Properti'
  ],
  'hukum-keluarga': [
    'Perceraian',
    'Hak Asuh Anak',
    'Pembagian Harta',
    'Perencanaan Waris'
  ],
  'hak-kekayaan-intelektual': [
    'Pendaftaran Merek',
    'Perlindungan Paten',
    'Hak Cipta',
    'Lisensi IP'
  ],
  'hukum-ketenagakerjaan': [
    'Kontrak Kerja',
    'PHK & Pesangon',
    'Sengketa Industrial',
    'Compliance Ketenagakerjaan'
  ]
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Keahlian Hukum Komprehensif
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tim ahli kami siap membantu Anda dengan berbagai kebutuhan hukum. 
            Setiap layanan dirancang untuk memberikan solusi yang efektif dan efisien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Building2;
            const features = serviceFeatures[service.slug as keyof typeof serviceFeatures] || [];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      {/* Image Section */}
                      <div className="relative h-64 md:h-auto md:col-span-2 overflow-hidden">
                        <Image
                          src={service.image_url || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop'}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                        
                        {/* Icon on Image */}
                        <div className="absolute top-4 left-4">
                          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                            <IconComponent className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        
                        {/* Badge on Image */}
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="text-xs bg-white/90 backdrop-blur-sm">
                            Populer
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:col-span-3 p-6 lg:p-8 flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-300 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-sm">
                            {service.short_description}
                          </p>
                        </div>

                        {/* Service Features */}
                        <div className="mb-6 flex-1">
                          <h4 className="font-semibold text-slate-900 mb-3 text-sm">Cakupan Layanan:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            asChild 
                            className="flex-1 bg-red-700 hover:bg-red-800"
                          >
                            <Link href={`/layanan/${service.slug}`} className="flex items-center justify-center space-x-2">
                              <span>Pelajari Detail</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button 
                            asChild 
                            variant="outline"
                            className="flex-1 hover:bg-red-50 hover:border-red-300"
                          >
                            <Link href="/kontak">
                              Konsultasi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
