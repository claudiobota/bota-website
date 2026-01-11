'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="inline-block" variants={itemVariants}>
            <div className="text-xs tracking-widest text-gray-500 mb-4">THE FIRM</div>
            <motion.div
              className="w-12 h-0.5 bg-teal-600 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl"
            variants={itemVariants}
          >
            Pioneering the Future of Strategic Investment
          </motion.h2>

          <motion.div
            className="prose prose-lg max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-6"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              BOTA Holdings is a premier multi-strategy investment firm that identifies and accelerates breakthrough innovations with transformative potential. We combine deep industry expertise with proprietary analytical frameworks to discover and scale companies that redefine markets.
            </motion.p>
            <motion.p variants={itemVariants}>
              Our differentiated approach integrates rigorous financial discipline with strategic operational support, enabling portfolio companies to achieve exponential growth while creating sustainable competitive advantages. We partner exclusively with exceptional founders building category-defining solutions in high-impact sectors.
            </motion.p>
            <motion.p variants={itemVariants}>
              Leveraging advanced data analytics and an extensive global network, we navigate complex market dynamics to unlock value at every stage of the investment lifecycle. Our focus remains on breakthrough technologies and business models that address critical challenges while delivering superior risk-adjusted returns.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
