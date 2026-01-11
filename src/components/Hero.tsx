'use client';

import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          className="text-white space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl leading-tight"
            variants={itemVariants}
          >
            Accelerating Innovation, Delivering Excellence
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed max-w-md"
            variants={itemVariants}
          >
            We partner with transformative companies shaping the future. Through strategic capital and operational expertise, we unlock exponential growth and create lasting value.
          </motion.p>
          <motion.div
            className="flex gap-4"
            variants={itemVariants}
          >
            <Button
              onClick={scrollToContact}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8"
            >
              CONTACT US
            </Button>
            <motion.button
              onClick={scrollDown}
              className="text-white hover:text-gray-300 transition-colors"
              whileHover={{ y: 5 }}
              whileTap={{ y: 0 }}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-gradient-to-br from-[#4FC3F7] to-[#29B6F6] rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGlubm92YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODA1OTE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Innovation"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
