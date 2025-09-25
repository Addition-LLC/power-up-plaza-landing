'use client';

import Image from 'next/image';
import { Map, Zap, Gift, CreditCard } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    name: 'Nearby Stations',
    description: "Discover and navigate to the nearest charging stations with ease, ensuring you're always powered up on the go.",
    icon: Map,
  },
  {
    name: 'Power points while charging',
    description: 'Collect valuable reward points every time you charge your vehicle and redeem them for exciting perks.',
    icon: Zap,
  },
  {
    name: 'Get free deals and discounts',
    description: 'Enjoy exclusive savings, promotions, and special offers from our trusted partners while you charge.',
    icon: Gift,
  },
  {
    name: 'Buy Charge credits',
    description: 'Conveniently purchase and manage prepaid credits, making your charging experience simple and hassle-free.',
    icon: CreditCard,
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut',
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};


export function MobileApp() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mobile Application
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay tuned mobile application is coming soon
          </p>
        </motion.div>

        {/* Main 3-column grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-3">
            
            {/* Left Column Features */}
            <motion.div variants={itemVariants} className="flex flex-col gap-y-10">
              {features.slice(0, 2).map((feature) => (
                <div key={feature.name} className="flex items-start gap-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-brand-green" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Center Column Image */}
            <motion.div variants={itemVariants} className="flex justify-center order-first lg:order-none">
              <Image
                src="/images/mobile.png"
                alt="Mobile app screenshot"
                width={459}
                height={613}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Right Column Features */}
            <motion.div variants={itemVariants} className="flex flex-col gap-y-10">
              {features.slice(2, 4).map((feature) => (
                <div key={feature.name} className="flex items-start gap-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-brand-green" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
          </div>
        </div>
      </div>
    </motion.section>
  );
}

