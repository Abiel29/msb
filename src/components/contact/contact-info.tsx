"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: FaPhone,
    title: 'Telepon',
    value: firmInfo.phone,
    description: 'Tersedia 24/7 untuk konsultasi darurat',
    action: `tel:${firmInfo.phone}`,
    color: 'bg-red-700',
    type: 'contact'
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: firmInfo.whatsapp_number,
    description: 'Respons cepat dalam 5 menit',
    action: `https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bertanya%20mengenai%20layanan%20hukum%20di%20MSB%20and%20Partners`,
    color: 'bg-green-500',
    type: 'contact'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    value: firmInfo.email,
    description: 'Respons dalam 2 jam kerja',
    action: `mailto:${firmInfo.email}`,
    color: 'bg-purple-500',
    type: 'contact'
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Informasi Kontak
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Berbagai cara untuk menghubungi kami. Tim customer service kami siap membantu 
              Anda dengan respons yang cepat dan profesional.
            </p>
          </div>

          {/* Contact Methods - 2 Column Grid */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-[45%] h-auto"
              >
                <Card className="py-0 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full bg-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-50" />
                  <CardContent className="p-8 relative">
                      <a
                        href={method.action}
                        target={method.action?.startsWith('http') ? '_blank' : undefined}
                        rel={method.action?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block group-hover:scale-[1.02] transition-transform duration-300"
                      >
                        <div className="flex items-start space-x-5">
                          <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <method.icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                              {method.title}
                            </h3>
                            <p className="text-slate-800 font-semibold text-lg mb-1">{method.value}</p>
                            <p className="text-slate-500 text-sm leading-relaxed">{method.description}</p>
                          </div>
                        </div>
                      </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
}
