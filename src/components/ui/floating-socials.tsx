"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { firmInfo } from '@/lib/dummy-data';

export default function FloatingSocials() {
  const waNumber = firmInfo.whatsapp_number?.replace(/[^0-9]/g, '');

  const socials = [
    {
      label: 'WhatsApp',
      href: waNumber ? `${`https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bertanya%20mengenai%20layanan%20hukum%20di%20MSB%20and%20Partners`}` : 'https://wa.me/6281272519788',
      icon: FaWhatsapp,
      color: 'text-green-400',
      hover: 'hover:bg-green-500/20',
    },
    {
      label: 'Email',
      href: 'mailto:corporate.legal3@panusa-indo.com',
      icon: FaEnvelope,
      color: 'text-blue-400',
      hover: 'hover:bg-blue-500/20',
    },
  ];

  return (
    <div className="fixed top-1/3 right-4 z-20 flex flex-col items-center gap-3">
      {socials.map(({ label, href, icon: Icon, color, hover }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className={`
              group flex items-center justify-center w-12 h-12 rounded-2xl
              bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
              transition-all duration-300 ${hover}
            `}
          >
            <Icon className={`h-6 w-6 ${color} group-hover:scale-110 transition-transform`} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

