import React from "react";
import { Metadata } from "next";
import FirmHistory from "@/components/about/firm-history";
import FirmValues from "@/components/about/firm-values";
import VisionMission from "@/components/about/vision-mission";
import MainLayout from "@/components/layout/main-layout";
import { firmInfo } from "@/lib/dummy-data";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Tentang Kami - ${firmInfo.name}`,
  description: "MSB & Partners adalah firma hukum yang berkomitmen untuk memberikan layanan hukum yang profesional, terpercaya, dan solutif bagi klien individu maupun korporasi.",
  keywords: "tentang kami, firma hukum, tim pengacara, misi visi, jakarta, msb partners",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image src="/img/tentang_kami.jpg" alt="Tentang Kami" fill className="object-cover object-[25%_50%] md:object-[50%_10%]" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                MSB & Partners adalah firma hukum yang berkomitmen untuk memberikan layanan hukum yang profesional, terpercaya, dan solutif bagi klien individu maupun korporasi. Kami hadir untuk menjadi mitra strategis dalam setiap kebutuhan hukum, dengan pendekatan yang mengutamakan integritas, ketepatan, dan hasil yang terbaik.
              </p>
            </div>
          </div>
        </section>

        <FirmHistory />
        <VisionMission />
        <FirmValues />
      </div>
    </MainLayout>
  );
}
