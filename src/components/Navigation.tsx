'use client';

import { Button } from '@/components/ui/button';
import Layer1 from '@/assets/svg/Layer1';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const scrollToTop = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="h-10 w-40 flex items-center">
            <Layer1 />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm hover:text-gray-600 transition-colors"
            >
              THE FIRM
            </button>
            <button
              onClick={() => scrollToSection('values')}
              className="text-sm hover:text-gray-600 transition-colors"
            >
              WHO WE ARE
            </button>
            <button
              onClick={() => scrollToSection('investment-areas')}
              className="text-sm hover:text-gray-600 transition-colors"
            >
              WHAT WE INVEST
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
