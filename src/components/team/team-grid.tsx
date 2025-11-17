"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/dummy-data';
import { FaBalanceScale, FaAward } from 'react-icons/fa';

export default function TeamGrid() {
  // Get team members excluding CEO (id 1) and inactive members
  const otherMembers = teamMembers.filter(member => member.id !== 1 && member.is_active);

  // Use only balance scale icon for all cards

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-red-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            Our Team
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tim profesional kami siap memberikan solusi hukum terbaik dengan dedikasi dan keahlian tinggi
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First row - 3 cards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {otherMembers.map((member, index) => {
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full h-auto md:w-[45%] lg:w-[30%]"
                >
                  <Card className="py-0 border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden h-full">
                    <CardContent className="p-6 relative">
                      {/* Decorative Background - Gold */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-transparent rounded-bl-full group-hover:from-amber-400/40 transition-all" />
                      
                      {/* Content - Centered */}
                      <div className="relative flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300">
                          <FaBalanceScale className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base leading-tight group-hover:text-red-600 transition-colors duration-200">
                          {member.name}
                        </h3>
                        <p>{member.position}</p>
                      </div>

                      {/* Hover Effect Line */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md">
              <FaAward className="h-5 w-5 text-red-600" />
              <span className="text-sm font-semibold text-slate-700">
                Profesional Bersertifikat & Berpengalaman
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}