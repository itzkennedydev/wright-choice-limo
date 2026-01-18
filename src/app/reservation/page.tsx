'use client';

import { motion } from 'framer-motion';
import BookingWidget from '@/components/booking/BookingWidget';

export default function ReservationPage() {
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
              className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 mb-6"
            >
              Book Your Ride
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Book your luxury transportation with Wright Choice Limousine.
              Professional, reliable service for all your travel needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl p-4 mb-8"
            style={{ backgroundColor: '#f5f5f7' }}
          >
            <p className="text-gray-800 font-medium">
              A surcharge of $25 for sedan rides and $40 for SUV rides between
              the hours of 11:00pm and 5:00am will automatically be added to the
              total fare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <BookingWidget fullWidth />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
