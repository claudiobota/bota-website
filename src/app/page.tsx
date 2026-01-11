import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Values } from '@/components/Values';
import { InvestmentAreas } from '@/components/InvestmentAreas';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="size-full bg-white">
      <Navigation />
      <Hero />
      <About />
      <Values />
      <InvestmentAreas />
      <Contact />
      <Footer />
    </div>
  );
}
