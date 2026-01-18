import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Fleet from '@/components/sections/Fleet';
import ServiceAreas from '@/components/sections/ServiceAreas';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <ServiceAreas />
      <Testimonials />
    </>
  );
}
