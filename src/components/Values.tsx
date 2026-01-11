'use client';

import { Target, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Values() {
  const values = [
    {
      icon: Target,
      title: 'Integrity',
      description: 'Uncompromising ethical standards and transparent decision-making form the cornerstone of our operations. We build enduring relationships through principled conduct and unwavering commitment to stakeholder interests.',
    },
    {
      icon: Shield,
      title: 'Accountability',
      description: 'We embrace full ownership of outcomes, holding ourselves to the highest standards of responsibility. Our rigorous governance framework ensures clear accountability across all investment and operational decisions.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Relentless pursuit of superior performance drives our investment philosophy. We combine analytical rigor, strategic insight, and operational excellence to deliver exceptional value creation and market-leading returns.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="values" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Our Values</h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center space-y-6 bg-white p-8 rounded-lg"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
