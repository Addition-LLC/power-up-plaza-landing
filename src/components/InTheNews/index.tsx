'use client';

import Image from 'next/image';
import { BookOpenCheck } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation Variants
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

export function InTheNews() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-slate-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              In the News
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We&apos;re proud to share that our story has been featured by CBS News. Click below to read the full coverage and see how we&apos;re making an impact.
            </p>
            <div className="mt-8">
              <a
                href="https://www.cbsnews.com/chicago/news/power-up-plaza-west-garfield-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-md bg-green-400 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                <BookOpenCheck className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Read CBS News Coverage
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Image
              src="/images/newscbs.png"
              alt="A stack of newspapers."
              width={699}
              height={289}
              className="w-full rounded-lg object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

