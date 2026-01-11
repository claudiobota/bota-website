'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'We collect information that you provide directly to us, including name, email address, phone number, company information, and any other details you choose to share when contacting us or requesting information.',
        'We automatically collect certain information when you visit our website, including IP address, browser type, operating system, access times, and pages viewed.',
        'We may collect information from third-party sources, including publicly available databases and business intelligence platforms.',
      ],
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'To respond to your inquiries and provide information about our services and investment opportunities.',
        'To improve our website functionality and user experience through analytics and feedback.',
        'To comply with legal obligations and regulatory requirements applicable to investment firms.',
        'To send you updates, newsletters, and other communications where you have opted in to receive them.',
      ],
    },
    {
      icon: Shield,
      title: 'Information Security',
      content: [
        'We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'Our security measures include encryption, secure data storage, access controls, and regular security assessments.',
        'While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure.',
      ],
    },
    {
      icon: FileText,
      title: 'Your Rights',
      content: [
        'You have the right to access, update, or correct your personal information at any time.',
        'You may request deletion of your personal information, subject to our legal and regulatory obligations to retain certain records.',
        'You can opt out of marketing communications by following the unsubscribe instructions in our emails or contacting us directly.',
        'You may request a copy of your personal information in a structured, machine-readable format.',
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
              <Shield className="w-12 h-12 text-teal-600" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-center mb-6"
            variants={itemVariants}
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-4"
            variants={itemVariants}
          >
            Your privacy is fundamental to our commitment to transparency and trust.
          </motion.p>
          
          <motion.p
            className="text-sm text-gray-400 text-center"
            variants={itemVariants}
          >
            Last updated: {lastUpdated}
          </motion.p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-200px 0px' }}
            className="space-y-16"
          >
            {/* Introduction */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Commitment</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BOTA Holdings is committed to protecting your privacy and handling your personal information with the highest standards of security and confidentiality. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
                </p>
                <p>
                  By using our website or providing your information to us, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </motion.div>

            {/* Main Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-200px 0px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      className="p-4 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 text-white flex-shrink-0"
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
                        viewport={{ once: true, margin: '-50px 0px' }}
                        transition={{ delay: itemIndex * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Additional Information */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@bota.swiss</p>
                <p><strong>Address:</strong> Via Canova 15, 6900 Lugano, Switzerland</p>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div
              className="text-center py-8 border-t border-gray-200"
              variants={itemVariants}
            >
              <p className="text-gray-500 text-sm">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
