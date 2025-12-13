'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '@/lib/data';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full" />

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, education, and skills
          </p>

          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 mb-8"
          >
            <div className="flex flex-col items-center">
              {/* Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {personalInfo.title}
              </p>

              {/* Download Button */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume (PDF)
              </a>

              <p className="text-sm text-gray-500 mt-4">
                Click to download the latest version
              </p>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Projects', value: '15+' },
              { label: 'Technologies', value: '25+' },
              { label: 'Publications', value: '1' },
              { label: 'Experience', value: '2+ years' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
