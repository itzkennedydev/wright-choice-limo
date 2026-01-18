'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu } from 'lucide-react';
import MobileNav from './MobileNav';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/reservation', label: 'Reservation' },
  { href: '/airport-info', label: 'Airport Info' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages, always show dark header
  const showDarkHeader = !isHomePage || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showDarkHeader
            ? 'bg-white py-2 border-b border-gray-200'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={showDarkHeader ? '/images/logo-dark.png' : '/images/logo.png'}
              alt="Wright Choice Limousine"
              width={250}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-neutral-600 ${
                  showDarkHeader ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+16304323937"
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: showDarkHeader ? '#1a1a1a' : '#fff' }}
            >
              <Phone className="w-4 h-4" />
              (630) 432-3937
            </a>
            <Link
              href="/reservation"
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                showDarkHeader
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-white'
                  : 'bg-white hover:bg-gray-100 text-neutral-900'
              }`}
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 ${showDarkHeader ? 'text-gray-800' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
