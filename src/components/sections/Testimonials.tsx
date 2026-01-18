'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-8 mb-12"
        >
          <span className="text-5xl font-light text-gray-300">04</span>
          <h2 className="text-3xl md:text-4xl font-normal text-neutral-900">
            Client Testimonials
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Large quotation mark */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-neutral-300" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>

              <blockquote className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-8 font-serif max-w-4xl">
                {testimonials[currentIndex].quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-neutral-400"></div>
                <div>
                  <p className="text-neutral-900 font-semibold">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700" />
            </button>
            <span className="text-gray-500 text-sm ml-2">
              {currentIndex + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
