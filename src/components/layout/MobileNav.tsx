'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Image
                  src="/images/logo.png"
                  alt="Wright Choice Limousine"
                  width={150}
                  height={45}
                  className="h-10 w-auto"
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 py-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block px-6 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-neutral-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="border-t p-6 space-y-4">
                <a
                  href="tel:+16304323937"
                  className="flex items-center gap-3 text-gray-700 hover:text-neutral-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (630) 432-3937
                </a>
                <a
                  href="mailto:service@wrightchoicelimo.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-neutral-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  service@wrightchoicelimo.com
                </a>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    398 West Army Trail,<br />
                    Bloomingdale, IL 60108
                  </span>
                </div>

                <Link
                  href="/reservation"
                  onClick={onClose}
                  className="block w-full bg-[#0a0e1a] hover:bg-[#0d121f] text-white text-center px-6 py-3 rounded-lg font-semibold transition-all mt-4"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
