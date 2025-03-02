"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import Button from '@/components/ui/Button';
import ImageCarousel from '@/components/ui/ImageCarousel';

const Landing = () => {
  const { landing } = content;

  console.log(landing.hero.images);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end pb-20">
        <ImageCarousel images={landing.hero.images} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {landing.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            {landing.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href="/contact" variant='primary'>
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {landing.intro.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {landing.intro.description}
              </p>
              <div className="mt-8">
                <Button href="/about" variant="outline">
                  Learn Our Story
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] w-full rounded-lg overflow-hidden"
            >
              <Image
                src={landing.intro.image}
                alt="Granite Craftsmanship"
                fill
                className="object-cover w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Products
            </h2>
            {/* <Button href="/products" variant="outline" className="group">
              View All <ScrollingArrow />
            </Button> */}
          </div>
          
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
              {content.products.categories.map((category) => (
                <motion.div
                  key={category.name}
                  className="flex-none w-[300px] relative h-[200px] rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover rotate-[-90deg] scale-150"
                      style={{ transformOrigin: 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Optional: Add custom scrollbar or navigation arrows
            <div className="absolute -bottom-2 left-0 w-full">
              <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                <motion.div
                  className="h-full bg-sky-500 rounded-full"
                  style={{
                    width: '25%',
                    transformOrigin: 'left'
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src={landing.process.image}
                alt="Our Process"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {landing.process.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {landing.process.description}
              </p>
              
              <div className="space-y-4">
                {landing.process.steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="flex-none w-8 h-8 rounded-full bg-sky-500/10 text-sky-500 flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/process" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              {content.about.mission}
            </p>
            <Button href="/about" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.about.team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sky-500 dark:text-sky-400 font-medium mb-2">
                  {member.position}
                </p>
                {/* <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <Button href="/contact" variant="white">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing; 