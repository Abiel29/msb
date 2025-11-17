import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { firmInfo, services } from '@/lib/dummy-data';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src={'/msb.png'} 
                alt={"logo MSB"}
                width={20}
                height={20}
                className=""
              />
              <div className="font-bold text-lg">
                {firmInfo.name}
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {firmInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  href="/tentang" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link 
                  href="/layanan" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link 
                  href="/tim" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Managing & Partners
                </Link>
              </li>
              <li>
                <Link 
                  href="/kontak" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Layanan Kami</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/layanan/${service.slug}`}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  {firmInfo.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-slate-300 text-sm">
                  {firmInfo.phone}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-slate-300 text-sm">
                  {firmInfo.email}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  {firmInfo.operation_hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} {firmInfo.name}. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
