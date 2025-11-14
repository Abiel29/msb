"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scale,
  ArrowRight
} from 'lucide-react';
import { FaBalanceScale } from 'react-icons/fa';
import { services } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const serviceIcons = {
  'hukum-korporasi': Scale,
  'litigasi-arbitrase': Scale,
  'hukum-properti': Scale,
  'hukum-keluarga': Scale,
  'hak-kekayaan-intelektual': Scale,
  'hukum-ketenagakerjaan': Scale,
};

//

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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <FaBalanceScale className="h-8 w-8 text-white" />
            </div>
          </motion.div>
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
            const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Scale;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 gap-0 md:flex md:flex-row">
                      {/* Image Section */}
                      <div className="relative h-56 md:h-auto md:min-h-[240px] md:w-2/5 overflow-hidden rounded-xl">
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
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* removed dark overlay to make photo cleaner */}
                        
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
                      <div className="p-6 md:p-8 flex flex-col flex-1 min-h-[200px] md:w-3/5">
                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 md:mb-4 group-hover:text-red-600 transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 flex-1 text-sm md:text-base">
                          {service.short_description}
                        </p>

                        {/* Learn More Link */}
                        <Link
                          href={`/layanan/${service.slug}`}
                          className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300 text-base"
                        >
                          <span className="text-sm">Pelajari Lebih Lanjut</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
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
