'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion, Variants } from 'framer-motion';
import { AlertCircle, TrendingDown, Info, FileWarning, Shield, BarChart3 } from 'lucide-react';

export default function Disclaimer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const sections = [
    {
      icon: AlertCircle,
      title: 'Investment Risk Disclaimer',
      content: [
        'All investments carry risk, including the potential loss of principal. Past performance does not guarantee future results.',
        'The value of investments and the income derived from them can go down as well as up, and investors may not get back the amount originally invested.',
        'Investment decisions should be made based on individual financial circumstances, investment objectives, and risk tolerance.',
      ],
      highlight: true,
    },
    {
      icon: BarChart3,
      title: 'No Investment Advice',
      content: [
        'The information on this website is for informational purposes only and does not constitute investment, financial, legal, or tax advice.',
        'Nothing on this website should be construed as an offer, recommendation, or solicitation to buy or sell any security or to engage in any investment activity.',
        'You should consult with a qualified financial advisor before making any investment decisions.',
      ],
    },
    {
      icon: FileWarning,
      title: 'Forward-Looking Statements',
      content: [
        'This website may contain forward-looking statements that involve risks and uncertainties. Actual results may differ materially from those projected in such statements.',
        'We undertake no obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise.',
        'Forward-looking statements speak only as of the date on which they are made.',
      ],
    },
    {
      icon: TrendingDown,
      title: 'Market Conditions',
      content: [
        'Market conditions can change rapidly and may have a significant impact on investment performance.',
        'We do not guarantee that any investment strategy will be successful or that any investment objectives will be achieved.',
        'Investors should be aware that market volatility can affect the value of investments at any time.',
      ],
    },
    {
      icon: Info,
      title: 'Regulatory Disclosure',
      content: [
        'BOTA Holdings is regulated and operates in accordance with applicable securities laws and regulations.',
        'This website and its content are not directed to any person in any jurisdiction where the publication or availability of this website is prohibited.',
        'Persons in respect of whom such prohibitions apply must not access this website.',
      ],
    },
    {
      icon: Shield,
      title: 'Website Information',
      content: [
        'While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or its content.',
        'Any reliance you place on such information is strictly at your own risk.',
        'We reserve the right to modify the content of this website at any time without notice.',
      ],
    },
  ];

  const lastUpdated = 'January 2026';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,40,40,0.3),transparent_50%)]" />
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto px-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-center justify-center mb-6" variants={itemVariants}>
            <div className="p-4 rounded-full bg-teal-600/20 backdrop-blur-sm">
              <AlertCircle className="w-12 h-12 text-teal-600" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-center mb-6"
            variants={itemVariants}
          >
            Disclaimer
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-4"
            variants={itemVariants}
          >
            Important information regarding investments and website content.
          </motion.p>
          
          <motion.p
            className="text-sm text-gray-400 text-center"
            variants={itemVariants}
          >
            Last updated: {lastUpdated}
          </motion.p>
        </motion.div>
      </section>

      {/* Warning Banner */}
      <motion.section
        className="py-8 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-amber-200">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Important Notice</h3>
              <p className="text-amber-800 leading-relaxed">
                Please read this disclaimer carefully before using our website or making any investment decisions. This disclaimer contains important information about the risks associated with investments and the limitations of information provided on this website.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Introduction */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">General Disclaimer</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The information contained on this website is provided for general informational purposes only. BOTA Holdings makes no representations or warranties, express or implied, regarding the accuracy, completeness, or suitability of any information on this website for any particular purpose.
                </p>
                <p>
                  This disclaimer applies to all content, materials, and information available on or through this website. By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                </p>
              </div>
            </motion.div>

            {/* Main Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border transition-shadow duration-300 ${
                  section.highlight 
                    ? 'border-amber-300 bg-gradient-to-br from-amber-50/50 to-white group hover:shadow-xl' 
                    : 'border-gray-100 group hover:shadow-xl'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-200px 0px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      className={`p-4 rounded-xl text-white flex-shrink-0 ${
                        section.highlight
                          ? 'bg-gradient-to-br from-amber-500 to-amber-600'
                          : 'bg-gradient-to-br from-teal-600 to-teal-700'
                      }`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <section.icon className="w-6 h-6" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900 pt-2">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex gap-4 text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2.5 ${
                          section.highlight ? 'bg-amber-500' : 'bg-teal-600'
                        }`} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Questions?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this disclaimer or need clarification on any of the information provided, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@bota.swiss</p>
                <p><strong>Address:</strong> Via Canova 15, 6900 Lugano, Switzerland</p>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div
              className="text-center py-8 border-t border-gray-200"
              variants={itemVariants}
            >
              <p className="text-gray-500 text-sm">
                We reserve the right to update this disclaimer at any time. We encourage you to review this disclaimer periodically to stay informed about how we communicate important information.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
