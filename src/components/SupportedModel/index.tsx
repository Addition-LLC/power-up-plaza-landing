'use client'; // This component is now interactive, so it must be a client component.

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Data for the logos
const logos = [
  { name: 'Tesla', src: '/logos/tesla.svg' },
  { name: 'Mercedes', src: '/logos/mercedes.svg' },
  { name: 'BMW', src: '/logos/bmw.svg' },
  { name: 'Volkswagen', src: '/logos/volkswagen.svg' },
  { name: 'Nissan', src: '/logos/nissan.svg' },
];

// Animation for the container to stagger children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation for each individual logo
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function SupportedModels() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation only runs once
    threshold: 0.1,    // Triggers when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {logos.map((logo) => (
            <motion.div key={logo.name} variants={itemVariants} className="col-span-2 flex justify-center lg:col-span-1">
              <Image
                className="max-h-12 w-full object-contain"
                src={logo.src}
                alt={logo.name}
                width={158}
                height={48}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-16 flex justify-center">
            <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
                <span className="hidden md:inline">
                Supported More Than 20 Car Models.
                </span>
                <a href="#" className="font-semibold text-brand-green">
                    <span className="absolute inset-0" aria-hidden="true" /> See all models{' '}
                    <span aria-hidden="true">&rarr;</span>
                </a>
            </p>
        </div>
      </div>
    </div>
  );
};
