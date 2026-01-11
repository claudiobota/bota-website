'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion, Variants } from 'framer-motion';
import { Scale, FileCheck, AlertTriangle, Gavel, Users, BookOpen } from 'lucide-react';

export default function TermsOfService() {
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
      icon: FileCheck,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using the BOTA Holdings website, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'We reserve the right to modify these terms at any time without prior notice.',
      ],
    },
    {
      icon: BookOpen,
      title: 'Use License',
      content: [
        'Permission is granted to temporarily download one copy of the materials on BOTA Holdings website for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website.',
        'This license shall automatically terminate if you violate any of these restrictions and may be terminated by BOTA Holdings at any time.',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Disclaimer',
      content: [
        'The materials on BOTA Holdings website are provided on an "as is" basis. BOTA Holdings makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'Further, BOTA Holdings does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
      ],
    },
    {
      icon: Scale,
      title: 'Limitations',
      content: [
        'In no event shall BOTA Holdings or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BOTA Holdings website, even if BOTA Holdings or a BOTA Holdings authorized representative has been notified orally or in writing of the possibility of such damage.',
        'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
      ],
    },
    {
      icon: Gavel,
      title: 'Governing Law',
      content: [
        'These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which BOTA Holdings operates.',
        'Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.',
      ],
    },
    {
      icon: Users,
      title: 'User Conduct',
      content: [
        'You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else\'s use and enjoyment of the website.',
        'Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.',
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
              <Scale className="w-12 h-12 text-teal-600" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-center mb-6"
            variants={itemVariants}
          >
            Terms of Service
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-4"
            variants={itemVariants}
          >
            Clear guidelines for using our website and services.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Agreement to Terms</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of the BOTA Holdings website and services. Please read these Terms carefully before using our website.
                </p>
                <p>
                  By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the website or use our services.
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
                        <div className="w-2 h-2 rounded-full bg-teal-600 flex-shrink-0 mt-2.5" />
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@bota.swiss</p>
                <p><strong>Address:</strong> Via Canova 15, 6900 Lugano, Switzerland</p>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div
              className="text-center py-8 border-t border-gray-200"
              variants={itemVariants}
            >
              <p className="text-gray-500 text-sm">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
