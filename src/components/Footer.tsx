'use client';

import Layer1Light from '@/assets/svg/Layer1Light';
import { motion, Variants } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <motion.div
              className="h-12 w-48 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Layer1Light />
            </motion.div>
            <p className="text-gray-400 max-w-md">
              Accelerating innovation and delivering exceptional returns through strategic capital allocation and operational excellence. Partnering with visionary companies that redefine industries.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { href: '#about', text: 'The Firm' },
                { href: '#values', text: 'Who We Are' },
                { href: '#investment-areas', text: 'What We Invest' },
                { href: '#contact', text: 'Contact' },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { href: '/privacy-policy', text: 'Privacy Policy' },
                { href: '/terms-of-service', text: 'Terms of Service' },
                { href: '/disclaimer', text: 'Disclaimer' },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} BOTA Holdings. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Pioneering the Future of Investment Excellence
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
