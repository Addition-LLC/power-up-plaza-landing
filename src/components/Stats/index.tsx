'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Zap, Clock, Plus } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- AnimatedNumber Component ---
function AnimatedNumber({ to, inView, prefix = '', suffix = '' }: { to: number; inView: boolean; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 1.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, to]);

  return (
    <div className="flex items-center justify-center">
      {prefix && <span>{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}


// --- Main Stats Data and Component ---
const stats = [
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    value: '16',
    description: 'Ultra-modern chargers available for EVs right now.',
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    value: '6min',
    description: 'Average drive for nearby residents to access charging.',
  },
  {
    icon: <Plus className="h-8 w-8 text-white" />,
    value: '+4',
    description: 'Community partners dedicated to equity, sustainability, and accessibility.',
  },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

export function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

  return (
    <motion.section 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative overflow-hidden py-16 sm:py-20"
    >
        {/* Background Image & Overlay */}
        <Image
            src="/images/hero-bg-green.jpg" // Using the same green background
            alt=""
            fill
            className="object-cover"
            style={{ zIndex: -2 }}
            aria-hidden="true"
        />
        <div
            className="absolute inset-0 bg-[#0A1D1A]/90" // THE FIX: Using a dark green overlay
            style={{ zIndex: -1 }}
            aria-hidden="true"
        />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => {
            const value = parseInt(stat.value.replace(/\D/g, ''), 10);
            const prefix = stat.value.startsWith('+') ? '+' : '';
            const suffix = stat.value.endsWith('min') ? 'min' : '';

            return (
              <motion.div 
                  key={stat.description} 
                  variants={itemVariants}
                  className="mx-auto flex max-w-xs flex-col items-center gap-y-4"
              >
                {stat.icon}
                <dd className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  <AnimatedNumber to={value} inView={inView} prefix={prefix} suffix={suffix} />
                </dd>
                <dt className="text-base leading-7 text-gray-400">{stat.description}</dt>
              </motion.div>
            )
          })}
        </dl>
      </div>
    </motion.section>
  );
}

