"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FaBalanceScale,
  FaArrowRight 
} from 'react-icons/fa';
import { services } from '@/lib/dummy-data';

const serviceIcons = {
  'hukum-korporasi': FaBalanceScale,
  'litigasi-arbitrase': FaBalanceScale,
  'hukum-properti': FaBalanceScale,
  'hukum-keluarga': FaBalanceScale,
  'hak-kekayaan-intelektual': FaBalanceScale,
  'hukum-ketenagakerjaan': FaBalanceScale,
};

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
            Layanan Hukum Kami
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Kami menyediakan layanan hukum komprehensif untuk memenuhi berbagai kebutuhan klien, 
            dari individu hingga perusahaan multinasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {featuredServices.map((service, index) => {
            const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || FaBalanceScale;
            
            return (
              <div key={service.id}>
                <Card className="py-0 h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer overflow-hidden">
                  <Link href={`/layanan/${service.slug}`}>
                    <CardContent className="p-0">
                      <div className="flex flex-col h-full">
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden">
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          
                          {/* Icon and Badge on Image */}
                          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                              <IconComponent className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <Badge variant="secondary" className="text-xs bg-white/90 backdrop-blur-sm">
                              Populer
                            </Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-6 flex flex-col flex-1 min-h-[200px]">
                          {/* Title */}
                          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3 group-hover:text-red-600 transition-colors duration-300">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 flex-1 text-sm">
                            {service.short_description}
                          </p>

                          {/* Learn More Link */}
                          <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300">
                            <span className="text-sm">Pelajari Lebih Lanjut</span>
                            <FaArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
