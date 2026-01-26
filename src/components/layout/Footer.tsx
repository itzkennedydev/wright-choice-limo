import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

const topCities = [
  { name: 'Chicago', href: '#' },
  { name: 'Bloomingdale', href: '#' },
  { name: 'Naperville', href: '#' },
  { name: 'St. Charles', href: '#' },
  { name: 'Northwest Indiana', href: '#' },
];

const exploreLinks = [
  { name: 'Corporate Travel', href: '#' },
  { name: 'Airport Transfers', href: '/airport-info' },
  { name: 'Special Events', href: '#' },
  { name: 'Chauffeur Service', href: '#' },
  { name: 'Book a Ride', href: '/reservation' },
];

const intercityRides = [
  { name: "O'Hare Airport", href: '/airport-info' },
  { name: 'Midway Airport', href: '/airport-info' },
  { name: 'Chicago Downtown', href: '#' },
  { name: 'Suburbs', href: '#' },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#0a0e1a' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Wright Choice Limousine"
              width={200}
              height={60}
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <div className="space-y-3 text-gray-400">
              <a
                href="https://maps.google.com/?q=398+West+Army+Trail,+Bloomingdale,+IL+60108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>398 West Army Trail,<br />Bloomingdale, IL 60108</span>
              </a>
              <a
                href="mailto:service@wrightchoicelimo.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                service@wrightchoicelimo.com
              </a>
              <a
                href="tel:+16304323937"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                (630) 432-3937
              </a>
            </div>

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Top Cities</h3>
            <ul className="space-y-2">
              {topCities.map((city) => (
                <li key={city.name}>
                  <Link
                    href={city.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Intercity Rides</h3>
            <ul className="space-y-2">
              {intercityRides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500 flex flex-col md:flex-row items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Wright Choice Limousine. All Rights Reserved.</p>
            <span className="hidden md:inline">·</span>
            <p>
              Powered by{' '}
              <a
                href="https://www.sovereigncreative.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Sovereign Creative Agency
              </a>
            </p>
          </div>
          <a
            href="https://www.facebook.com/wrightchoicelimo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
