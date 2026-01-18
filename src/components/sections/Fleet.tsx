'use client';

import { motion } from 'framer-motion';
import { Users, Droplets, Clock, Armchair, Sparkles, Music, Wine, UserCheck, Laptop, Plug, Wifi, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const vehicleOptions = [
  {
    name: 'Premium Sedan',
    features: [
      { icon: Users, text: 'Up to 2 passengers' },
      { icon: Droplets, text: 'Complimentary water and soft drinks' },
      { icon: Clock, text: '24/7 service' },
    ],
  },
  {
    name: 'Premium SUV',
    features: [
      { icon: Users, text: 'Up to 6 passengers' },
      { icon: Armchair, text: 'Extended legroom' },
      { icon: Clock, text: '24/7 service' },
    ],
  },
  {
    name: 'Premium Luxury',
    features: [
      { icon: Sparkles, text: 'Red carpet service' },
      { icon: Music, text: 'Premium surround sound' },
      { icon: Wine, text: 'Chilled champagne' },
    ],
  },
  {
    name: 'Premium Sprinter',
    features: [
      { icon: Users, text: 'Up to 14 passengers' },
      { icon: Sparkles, text: 'Great for larger groups and events' },
      { icon: UserCheck, text: 'Professional and experienced drivers' },
    ],
  },
  {
    name: 'Premium Business',
    features: [
      { icon: Laptop, text: 'Laptop friendly workspace' },
      { icon: Plug, text: 'Charging ports' },
      { icon: Wifi, text: 'WiFi access' },
    ],
  },
];

export default function Fleet() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-8 mb-4">
            <span className="text-5xl font-light text-gray-300">02</span>
            <h2 className="text-3xl md:text-4xl font-normal text-neutral-900">
              A High Variety Of Options
            </h2>
          </div>
          <p className="text-lg text-gray-500 ml-0 md:ml-[88px]">Best possibilities</p>
        </motion.div>

        {/* Vehicle Options Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vehicleOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:scale-[1.02]"
              style={{ backgroundColor: '#f5f5f7' }}
            >
              <h3 className="text-xl font-medium text-neutral-900 mb-6">
                {option.name}
              </h3>
              <ul className="space-y-4 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/reservation"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-gray-600 transition-colors"
              >
                More Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Book Your Ride
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
