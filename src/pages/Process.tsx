"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import Button from '@/components/ui/Button';

const Process = () => {
  const { process } = content;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-100 dark:bg-gray-800 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Process
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Excellence in every step, from raw material to finished product
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20">
        {process.steps.map((step, index) => (
          <section
            key={step.title}
            className={`py-16 ${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="flex-none w-12 h-12 rounded-full bg-sky-500/10 text-sky-500 flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.longDescription}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get started with your project
          </p>
          <Button href="/contact" variant="white">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Process; 