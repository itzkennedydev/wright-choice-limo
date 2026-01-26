'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BookingWidget from '../booking/BookingWidget';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-suv.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-300 leading-tight mb-6">
              Serving Chicago
              <span className="block font-semibold text-white">The Wright Way.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Professional chauffeurs serving Chicago for over 14 years. Airport pickups, corporate travel, and special occasions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/reservation"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Book Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 transition-all"
              >
                Explore More
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Booking Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <BookingWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
