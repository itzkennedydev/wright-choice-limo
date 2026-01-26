'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    number: '01',
    title: 'Quality',
    description: 'The highest standards in every aspect of our service, from our well-maintained fleet to our professional chauffeurs.',
  },
  {
    number: '02',
    title: 'Integrity',
    description: 'Honesty and transparency at the core of everything we do. Trust us to deliver on our promises, every time.',
  },
  {
    number: '03',
    title: 'Excellence',
    description: 'Continuously striving to exceed expectations and provide an exceptional experience for every client.',
  },
];

const highlights = [
  'Always On Time',
  'Professional Chauffeurs',
  'Premium Fleet',
  'Licensed & Insured',
  'Personalized Service',
  '14+ Years Experience',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 mb-8"
            >
              Going above & beyond
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
            >
              For over 14 years, we&apos;ve been Chicago&apos;s trusted choice for
              luxury transportation. Every journey is an experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section - Editorial Layout */}
      <section className="py-24" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-neutral-900 leading-tight mb-8">
                A spirit of wisdom for Chicago
              </h2>
              <div className="w-16 h-px bg-neutral-900 mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide car service to families, corporate executives and
                vacationers, while operating with a spirit of wisdom for Chicago,
                its airports and surrounding suburbs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe every journey should be comfortable, stress-free, and
                memorable. That&apos;s why we invest in our fleet, train our chauffeurs
                to the highest standards, and treat every client like family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 lg:col-start-7"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/chicago-skyline.jpg"
                  alt="Chicago Skyline"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Large Typography */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="text-6xl sm:text-8xl md:text-9xl font-light text-neutral-900 leading-none mb-4">
                14<span className="text-gray-300">+</span>
              </div>
              <div className="text-lg text-gray-500 tracking-wide">Years of Excellence</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <div className="text-6xl sm:text-8xl md:text-9xl font-light text-neutral-900 leading-none mb-4">
                5k<span className="text-gray-300">+</span>
              </div>
              <div className="text-lg text-gray-500 tracking-wide">Satisfied Clients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Refined Cards */}
      <section className="py-24" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mb-16"
          >
            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-neutral-900">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white rounded-2xl p-8 transition-colors duration-500"
                style={{ '--hover-bg': '#0a0e1a' } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0a0e1a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                <span className="text-6xl font-light text-gray-200 group-hover:text-gray-700 transition-colors duration-500 block mb-6">
                  {value.number}
                </span>
                <h3 className="text-2xl font-medium text-neutral-900 group-hover:text-white transition-colors duration-500 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Elegant List */}
      <section className="py-24" style={{ backgroundColor: '#0a0e1a' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
                Why Wright Choice
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
                The difference is in the details
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Every aspect of our service is designed with your comfort and
                satisfaction in mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-0"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="py-5 border-b border-gray-800"
                >
                  <span className="text-xl text-white font-normal">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-normal text-neutral-900 mb-6 leading-tight">
              Ready to experience
              <span className="block text-gray-400">the Wright Choice?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Book your luxury transportation today and discover why thousands
              of clients trust us with their journeys.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/reservation"
                className="inline-flex items-center gap-2 bg-[#0a0e1a] hover:bg-[#0d121f] text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Book Your Ride
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0a0e1a] hover:bg-[#0d121f] text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
