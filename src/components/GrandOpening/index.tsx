'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const eventDetails = [
  {
    icon: <Calendar className="h-8 w-8 text-green-400" />,
    label: 'Date',
    value: 'September 26th',
  },
  {
    icon: <MapPin className="h-8 w-8 text-green-400" />,
    label: 'Location',
    value: 'West Garfield Park, Chicago',
  },
  {
    icon: <Clock className="h-8 w-8 text-green-400" />,
    label: 'Time',
    value: 'All Day Event',
  },
];

// Animation variants
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
      ease: 'easeOut',
    },
  },
};

export function GrandOpening() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="grand-opening" className="bg-white py-24 sm:py-32">
      <motion.div
        ref={ref}
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-x-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-600"
          >
            <Calendar className="h-4 w-4" />
            Special Event
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Grand Opening Celebration
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Join us for an exciting all-day event with food trucks, music, and giveaways!
          </motion.p>
        </div>

        {/* Info Cards */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 sm:max-w-3xl sm:grid-cols-3"
        >
          {eventDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-col items-center justify-center gap-y-4 rounded-xl border border-gray-200 p-8 text-center shadow-sm"
            >
              {detail.icon}
              <div>
                <dt className="text-sm text-gray-500">{detail.label}</dt>
                <dd className="mt-1 font-semibold text-gray-900">{detail.value}</dd>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <motion.div variants={itemVariants}>
            <Image
              src="/images/grandopening.png"
              alt="People celebrating at the grand opening event."
              width={911}
              height={300}
              className="w-full rounded-lg object-cover shadow-md"
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-8 text-base leading-7 text-gray-600"
          >
            Don&apos;t miss this exciting event—be among the first to experience our facilities and join the movement towards a greener, more connected community.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

