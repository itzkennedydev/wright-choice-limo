'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Corporate travel',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    href: '#',
  },
  {
    id: 2,
    title: 'Airport transfers',
    image: '/images/ohare-airport.jpg',
    href: '/airport-info',
  },
  {
    id: 3,
    title: 'Special events',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
    href: '#',
  },
];

export default function Services() {
  return (
    <section className="py-24" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-8 mb-12"
        >
          <span className="text-5xl font-light text-gray-300">01</span>
          <h2 className="text-3xl md:text-4xl font-normal text-neutral-900">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title Label */}
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white text-black px-4 py-2 rounded-xl text-sm font-medium">
                  {service.title}
                </span>
              </div>

              {/* Explore More Button */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-white text-sm font-medium">
                  Explore More
                </span>
                <Link
                  href={service.href}
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 text-neutral-900" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re traveling for business, leisure, or a special occasion,
            our chauffeur-driven limousines ensure you arrive in style, comfort, and on time.
          </p>
          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 mt-8 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Explore more
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
