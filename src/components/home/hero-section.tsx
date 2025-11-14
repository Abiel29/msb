"use client";

import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { firmInfo, testimonials } from '@/lib/dummy-data';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TypingAnimation from '@/components/ui/typing-animation';
import GridPattern from '@/components/ui/grid-pattern';
import Particles from '@/components/ui/particles';

export default function HeroSection() {
  const featuredTestimonials = testimonials.filter((t) => t.is_featured);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  
  // Animated text rotation
  const rotatingWords = [ 'Perusahaan', 'Korporasi', 'Startup', 'Institusi'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-white/30'}`}
      />
    ));

  // Mount effect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Text rotation effect
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [rotatingWords.length, isMounted]);

  React.useEffect(() => {
    if (!api || featuredTestimonials.length <= 1) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api, featuredTestimonials.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src="/img/MSB.jpeg"
          alt="MSB Law Office Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative space-y-6 lg:pr-8"
          >
            <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-amber-500 to-amber-600" />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              <TypingAnimation 
                text="Mitra Hukum Profesional untuk"
                duration={1500}
                className="inline text-amber-600"
              />{' '}
              {isMounted ? (
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-600 font-bold"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              ) : (
                <span className="text-red-600 font-bold">
                  {rotatingWords[0]}
                </span>
              )}{' '}
              <span className="text-white">Anda</span>
            </h1>

            <div className="flex items-center space-x-4 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-amber-500" />
            </div>
          </motion.div>

          {/* Right Side - Image removed as requested */}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <GridPattern className="absolute inset-0 opacity-5" />
      <Particles count={20} className="opacity-10" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
