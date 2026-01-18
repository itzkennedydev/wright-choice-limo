'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-normal tracking-tight text-neutral-900 mb-6"
            >
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Have questions or need assistance? We&apos;re here to help you
              plan your perfect journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '(630) 432-3937',
                href: 'tel:+16304323937',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'service@wrightchoicelimo.com',
                href: 'mailto:service@wrightchoicelimo.com',
              },
              {
                icon: MapPin,
                label: 'Address',
                value: '398 West Army Trail, Bloomingdale, IL 60108',
                href: 'https://maps.google.com/?q=398+West+Army+Trail,+Bloomingdale,+IL+60108',
              },
              {
                icon: Clock,
                label: 'Hours',
                value: 'Mon-Sat: 6AM-9PM, 24/7 Service',
                href: null,
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block h-full p-6 rounded-2xl transition-all hover:bg-white hover:scale-[1.02] group"
                    style={{ backgroundColor: '#f5f5f7' }}
                  >
                    <item.icon className="w-6 h-6 text-neutral-900 mb-4" />
                    <span className="text-sm text-gray-500 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-neutral-900 font-medium break-words">
                      {item.value}
                    </span>
                  </a>
                ) : (
                  <div
                    className="h-full p-6 rounded-2xl"
                    style={{ backgroundColor: '#f5f5f7' }}
                  >
                    <item.icon className="w-6 h-6 text-neutral-900 mb-4" />
                    <span className="text-sm text-gray-500 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-neutral-900 font-medium break-words">
                      {item.value}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                Send a Message
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-neutral-900 mb-6">
                We&apos;d love to hear from you
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a question about our services, pricing, or
                anything else, our team is ready to answer all your questions.
              </p>

              <div className="hidden lg:block">
                <div className="w-16 h-px bg-neutral-900 mb-8" />
                <p className="text-gray-500">
                  Or give us a call directly at
                </p>
                <a
                  href="tel:+16304323937"
                  className="text-2xl text-neutral-900 font-medium hover:text-gray-600 transition-colors"
                >
                  (630) 432-3937
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                        placeholder="(630) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none transition-all"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-semibold transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mb-12"
          >
            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">
              Our Location
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-neutral-900">
              Find Us
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-[300px] md:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7089797371783!2d-88.09051132367567!3d41.95893087121653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fafb3a3ca6c1f%3A0x1234567890abcdef!2s398%20W%20Army%20Trail%20Rd%2C%20Bloomingdale%2C%20IL%2060108!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wright Choice Limousine Location"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-normal text-neutral-900 mb-6 leading-tight">
              Ready to book
              <span className="block font-serif text-gray-400">your ride?</span>
            </h2>
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
