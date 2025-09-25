'use client';

import type { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface OfferCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const cardVariants: Variants = {
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

const OfferCard = ({ icon, title, description }: OfferCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative flex items-start gap-x-6"
    >
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-brand-green">
        {icon}
      </div>
      <div className="flex-auto">
        <h3 className="text-lg font-semibold leading-7 text-gray-900">{title}</h3>
        <p className="mt-2 text-base leading-7 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default OfferCard;

