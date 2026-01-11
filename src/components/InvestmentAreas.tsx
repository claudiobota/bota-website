'use client';

import { motion, Variants } from 'framer-motion';

export function InvestmentAreas() {
  const areas = [
    {
      title: 'Healthcare Innovation',
      category: 'HEALTH-TECH',
      description: 'We target next-generation healthcare technologies that fundamentally transform patient care delivery and outcomes. Our portfolio includes precision medicine platforms, AI-driven diagnostics, digital therapeutics, and novel care models that address systemic inefficiencies while improving accessibility and quality at scale.',
      image: 'https://images.unsplash.com/photo-1706777280252-5de52771cf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3Njc5Nzc4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'from-[#E3F2FD] to-[#BBDEFB]',
    },
    {
      title: 'Sustainable Technology',
      category: 'CLEAN-TECH',
      description: 'Our climate technology strategy targets breakthrough solutions that accelerate the transition to a net-zero economy. We invest in advanced renewable energy systems, carbon capture innovations, circular economy platforms, and next-generation materials that deliver both environmental impact and compelling unit economics.',
      image: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3OTQ2Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'from-[#FCE4EC] to-[#F8BBD0]',
    },
    {
      title: 'Education & Learning',
      category: 'ED-TECH',
      description: 'We invest in AI-powered learning platforms and adaptive education technologies that personalize learning experiences and scale expertise globally. Our focus spans enterprise skill development, next-generation credentialing systems, and immersive learning environments that bridge the gap between education and workforce demands.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Nzk4MjkwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'from-[#E0F2F1] to-[#B2DFDB]',
    },
  ];

  const headerVariants: Variants = {
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

  const imageVariants = (fromLeft: boolean): Variants => ({
    hidden: { opacity: 0, x: fromLeft ? -100 : 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  });

  const contentVariants = (fromRight: boolean): Variants => ({
    hidden: { opacity: 0, x: fromRight ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  });

  return (
    <section id="investment-areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-block">
            <div className="text-xs tracking-widest text-gray-500 mb-4">OUR STRATEGIES</div>
            <div className="w-12 h-0.5 bg-teal-600 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl mt-6">Strategic Investment Sectors</h2>
        </motion.div>

        <div className="space-y-24">
          {areas.map((area, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? 'md:grid-flow-dense' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Image */}
                <motion.div
                  className={isEven ? 'md:col-start-2' : ''}
                  variants={imageVariants(!isEven)}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${area.bgColor} rounded-2xl overflow-hidden shadow-lg aspect-[4/3]`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`space-y-6 ${isEven ? 'md:col-start-1 md:row-start-1' : ''}`}
                  variants={contentVariants(!isEven)}
                >
                  <div>
                    <div className="text-xs tracking-widest text-gray-500 mb-4">{area.category}</div>
                    <div className="w-12 h-0.5 bg-teal-600"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
