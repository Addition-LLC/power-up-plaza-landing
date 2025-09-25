'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants for the container to stagger children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: 'easeOut',
    },
  },
};

// Animation variants for individual items (fade and slide in)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // THE FIX: Changed the array to a recognized string keyword.
      ease: "easeInOut",
    },
  },
};

export function LocalFood() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2,    // Triggers when 20% of the component is visible
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-16 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column: Text and Cafe Image */}
          <div className="lg:pt-4">
            <motion.div variants={itemVariants} className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Enjoy the Taste of Local Food While Charging
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                More than a charging station, our plaza is a vibrant hub with local food, comfy space, and community
                vibes while your car recharges.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-10">
              <Image
                src="/images/localfood1.png"
                alt="People eating at an outdoor cafe."
                width={500}
                height={350}
                className="w-full max-w-full rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10"
              />
            </motion.div>
          </div>

          {/* Right Column: Charger Image */}
          <motion.div variants={itemVariants}>
            <Image
              src="/images/localfood.png"
              alt="Close-up of an EV charging station."
              width={450}
              height={600}
              className="w-full max-w-full rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

