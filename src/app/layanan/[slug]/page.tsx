import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/services/service-detail';
import { services } from '@/lib/dummy-data';
import { firmInfo } from '@/lib/dummy-data';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan - MSB & Partners',
    };
  }

  return {
    title: `${service.title} | ${firmInfo.name}`,
    description: service.short_description,
    keywords: `${service.title.toLowerCase()}, layanan hukum, pengacara, konsultasi hukum, jakarta`,
    alternates: {
      canonical: `/layanan/${service.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${service.title} | ${firmInfo.name}`,
      description: service.short_description,
      type: 'website',
      url: `https://msblawfirm.id/layanan/${service.slug}`,
      images: [{ url: '/msb.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${firmInfo.name}`,
      description: service.short_description,
      images: ['/msb.png'],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
