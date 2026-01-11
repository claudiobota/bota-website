'use client';

import { Button } from '@/components/ui/button';
import Layer1 from '@/assets/svg/Layer1';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (isHomePage) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { id: 'about', label: 'THE FIRM' },
    { id: 'values', label: 'WHO WE ARE' },
    { id: 'investment-areas', label: 'WHAT WE INVEST' },
    { id: 'contact', label: 'CONTACT US', isButton: true },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="h-10 w-40 flex items-center" onClick={scrollToTop}>
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
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!isMenuOpen ? (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90, y: -12 }}
                      animate={{ opacity: 1, rotate: 0, y: 0 }}
                      exit={{ opacity: 0, rotate: 90, y: -12 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="absolute"
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col h-full pt-24 px-6"
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {item.isButton ? (
                      <Button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg font-semibold rounded-lg"
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left py-6 px-6 text-2xl font-semibold text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
