'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Proceed to Baggage Claim',
    description: 'After your flight arrives, make your way to the baggage claim level.',
  },
  {
    number: '02',
    title: 'Call Our Number',
    description: 'Once you have collected all your luggage, call us at 1-630-432-3937.',
  },
  {
    number: '03',
    title: 'Provide Your Information',
    description: 'Give us your last name and/or confirmation number so we can identify your reservation.',
  },
  {
    number: '04',
    title: 'Wait for Your Vehicle',
    description: 'Your driver will arrive within 12-15 minutes from our holding lot.',
  },
];

export default function AirportInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-normal tracking-tight text-neutral-900 mb-6"
              >
                Airport Pickup
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Seamless pickups at O&apos;Hare and Midway airports. Here&apos;s everything
                you need to know for a smooth experience.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-neutral-900 text-white rounded-2xl p-8"
            >
              <h2 className="text-2xl font-normal mb-2">Ready for Pickup?</h2>
              <p className="text-gray-400 mb-6">
                Call us when you&apos;ve collected your luggage
              </p>
              <a
                href="tel:+16304323937"
                className="inline-flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 rounded-lg font-semibold text-xl hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6" />
                (630) 432-3937
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pickup Process */}
      <section className="py-24" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mb-16"
          >
            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-neutral-900">
              Pickup Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <span className="text-5xl font-light text-gray-200 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O'Hare Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                Terminal Map
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-neutral-900 mb-8">
                O&apos;Hare International
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  'Pickup at designated rideshare/limo areas',
                  'Flight tracking included - we monitor delays',
                  'Meet & greet service available',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/ohare.png"
                alt="O'Hare Airport Pickup Map"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Midway Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/midway.png"
                alt="Midway Airport Pickup Map"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                Terminal Map
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-neutral-900 mb-8">
                Midway International
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  'Pickup at the lower level arrivals',
                  'Flight tracking included',
                  'Curbside pickup available',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Good to Know */}
      <section className="py-24" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Clock className="w-12 h-12 text-neutral-900 mx-auto mb-6" />
            <h2 className="text-3xl font-normal text-neutral-900 mb-4">Good to Know</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="font-medium">Shared rides</strong> have immediate pickup - your driver
              will already be waiting at the designated pickup area when you call.
              For private reservations, please allow 12-15 minutes for your
              vehicle to arrive from our holding lot.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
