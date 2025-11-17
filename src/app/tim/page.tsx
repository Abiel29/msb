import React from 'react';
import { Metadata } from 'next';
import ManagingPartnerHero from '@/components/team/managing-partner-hero';
import TeamGrid from '@/components/team/team-grid';
import MainLayout from '@/components/layout/main-layout';
import Image from 'next/image';

import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Tim Kami - ${firmInfo.name}`,
  description: 'Bertemu dengan tim ahli hukum berpengalaman di MSB & Partners. Pengacara profesional dengan spesialisasi di berbagai bidang hukum.',
  keywords: 'tim pengacara, ahli hukum, pengacara berpengalaman, spesialis hukum, jakarta',
};

export default function TeamPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image src="/img/tim_kami.jpg" alt="Tim Kami" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tim Ahli Kami</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Bertemu dengan Managing Partners dan tim profesional berpengalaman yang siap memberikan
                solusi hukum terbaik dengan keahlian di berbagai bidang spesialisasi.
              </p>
            </div>
          </div>
        </section>

        <ManagingPartnerHero />
        <TeamGrid />
      </div>
    </MainLayout>
  );
}
