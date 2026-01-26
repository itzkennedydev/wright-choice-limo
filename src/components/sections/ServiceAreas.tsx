'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const cities = [
  {
    name: 'Chicago',
    image: '/images/chicago-skyline.jpg',
    featured: true,
  },
  {
    name: 'Bloomingdale',
    image: '/images/bloomingdale.jpg',
    featured: false,
  },
  {
    name: 'Naperville',
    image: '/images/naperville.avif',
    featured: false,
  },
  {
    name: 'St. Charles',
    image: '/images/st-charles.jpg',
    featured: false,
  },
  {
    name: 'Northwest Indiana',
    image: '/images/northwest-indiana.webp',
    featured: false,
  },
];

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-light text-gray-300">03</span>
              <h2 className="text-3xl md:text-4xl font-normal text-neutral-900">Top Cities</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the height of luxury and convenience with Wright Choice
              Limousine service in top cities around Chicago. Contact us today to
              book your ride and discover the ultimate in luxury transportation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0a0e1a] hover:bg-[#0d121f] text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Open page
            </Link>
          </motion.div>

          {/* Right Content - Cities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-2 h-auto md:h-[400px]"
          >
            {/* Featured Chicago Image - spans 2 cols and 2 rows on md+ */}
            <div className="col-span-2 row-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:z-10 aspect-[4/3] md:aspect-auto">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${cities[0].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {cities[0].name}
                </span>
              </div>
            </div>

            {/* Other Cities */}
            {cities.slice(1).map((city) => (
              <div
                key={city.name}
                className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:z-10 aspect-square md:aspect-auto"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${city.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="bg-white/90 text-black px-2 py-0.5 rounded-full text-xs font-medium">
                    {city.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
