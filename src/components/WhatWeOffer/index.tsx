'use client';

import { Zap, Utensils, Users, Leaf } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Data for the features
const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Fast & Convenient Charging',
    description: 'Charge your EV quickly and efficiently with 16 cutting-edge chargers. No more long drives to power up—your future of driving starts here.',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Utensils className="h-8 w-8 text-orange-600" />,
    title: 'Community-Focused Amenities',
    description: 'Enjoy more than just charging. Grab a bite from local food trucks, connect with neighbors while your car recharges.',
    bgColor: 'bg-orange-50',
  },
  {
    icon: <Users className="h-8 w-8 text-cyan-600" />,
    title: 'Equity & Accessibility',
    description: 'Committed to serving West Garfield Park by reducing pollution, supporting fleet electrification, and making EV charging accessible to all.',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: 'Sustainability & Impact',
    description: 'Every charge supports a greener future by cutting emissions and encouraging electric adoption across our community.',
    bgColor: 'bg-green-50',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export function WhatWeOffer() {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <motion.section
      id="features"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            More than just charging, we&apos;re building a community hub for sustainable transportation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-5xl lg:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} className="flex gap-x-6">
              <div className={`flex h-16 w-16 flex-none items-center justify-center rounded-lg ${feature.bgColor}`}>
                {feature.icon}
              </div>
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

