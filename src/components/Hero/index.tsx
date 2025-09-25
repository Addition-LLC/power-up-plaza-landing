'use client'; // Animations require this to be a client component

import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Define the animation for the container to stagger children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Define the animation for each individual item (fade in and slide up)
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

export function Hero() {
  // The new address for the map links
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=4252-4258+W+Monroe+St,+Chicago,+IL+60624";

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/BG.png"
        alt="A green-tinted image of an electric car at a charging station"
        fill
        className="object-cover"
        style={{ zIndex: -1 }}
        priority
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Main Content with Animation */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="rounded-full border border-gray-500 px-3 py-1 text-xs font-medium text-gray-300"
        >
          Your #1 Choice
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Welcome to Power Up Plaza: <br /> Your Destination for Electric Charging
        </motion.h1>

        <motion.div variants={itemVariants}>
          <a
            href={mapUrl} // Updated map link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-xl bg-green-500 px-10 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            Visit Us Now
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-4 flex items-center gap-x-2 text-sm text-gray-300 font-semibold"
        >
          <CalendarDays className="h-4 w-4" />
          <span>Grand Opening September 26th</span>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <Link
        href="#grand-opening"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border-2 border-white">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
        <span className="sr-only">Scroll down to Grand Opening</span>
      </Link>
    </section>
  );
}

