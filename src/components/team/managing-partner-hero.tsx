"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { teamMembers } from '@/lib/dummy-data';

export default function ManagingPartnerHero() {
  const managingPartner = teamMembers.find(member => member.id === 1);

  if (!managingPartner) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="relative h-96 lg:h-auto lg:col-span-1">
                  <Image 
                    src={managingPartner.image_url || '/img/Mulyadi.jpg'} 
                    alt={managingPartner.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
                </div>

                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="mb-6">
                    <Badge className="mb-3 bg-red-600 hover:bg-red-700">
                      {managingPartner.position}
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                      {managingPartner.name}
                    </h2>
                    <p className="text-lg text-red-600 font-semibold">
                      {managingPartner.specialization}
                    </p>
                  </div>

                  <div className="prose prose-slate max-w-none mb-8">
                    <p className="text-slate-700 leading-relaxed text-justify">
                      {managingPartner.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
                    {managingPartner.email && (
                      <a
                        href={`mailto:${managingPartner.email}`}
                        className="flex items-center space-x-2 text-slate-600 hover:text-red-600 transition-colors"
                      >
                        <FaEnvelope className="h-5 w-5" />
                        <span className="text-sm">{managingPartner.email}</span>
                      </a>
                    )}
                    {managingPartner.linkedin_url && (
                      <a
                        href={managingPartner.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-600 hover:text-red-600 transition-colors"
                      >
                        <FaLinkedin className="h-5 w-5" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
