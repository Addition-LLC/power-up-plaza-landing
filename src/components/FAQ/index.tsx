'use client';

import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { MapPin, Calendar, ChevronUp, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactInfo = [
  {
    name: 'Location',
    value: 'West Garfield Park, Chicago',
    icon: MapPin,
  },
  {
    name: 'Date & Time',
    value: 'September 26, All Day Event',
    icon: Calendar,
  },
];

const faqItems = [
  {
    question: 'How do I use the chargers at Power Up Plaza?',
    answer:
      'Simply pull into a charging spot, plug in your vehicle, and follow the on-screen instructions. Our 16 ultra-modern chargers make the process fast and easy.',
  },
  {
    question: 'Do I need an account to charge my vehicle?',
    answer:
      'No account is necessary! You can pay directly at the station with any major credit or debit card. However, creating an account in our mobile app offers benefits like payment history and real-time charger availability.',
  },
  {
    question: 'What makes Power Up Plaza different from other charging stations?',
    answer:
      "We're more than just chargers; we're a community hub. We partner with local food vendors and provide a comfortable space to relax, turning your charging time into a productive and enjoyable break.",
  },
  {
    question: 'How is Power Up Plaza supporting sustainability?',
    answer:
      'Every charge contributes to a greener future by reducing pollution and supporting fleet electrification. We are committed to making EV charging accessible and encouraging electric adoption across our community.',
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

export function FAQ() {
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
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background Image & Overlay */}
      <Image
        src="/images/hero-bg-green.jpg"
        alt=""
        fill
        className="object-cover"
        style={{ zIndex: -2 }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#0A1D1A]/90"
        style={{ zIndex: -1 }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column: Contact Info */}
          <motion.div variants={itemVariants} className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">We are always here for you - always.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                At Power Up Plaza, our mission goes beyond power. We&apos;re building connections, encouraging EV adoption, and supporting our local community.
              </p>
              <dl className="mt-10 space-y-8 text-base leading-7 text-gray-300">
                {contactInfo.map((item) => (
                  <div key={item.name} className="flex gap-x-3">
                    <dt className="flex-none">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-7 w-6 text-white" aria-hidden="true" />
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <motion.div variants={itemVariants} className="w-full rounded-2xl bg-white p-4">
            {faqItems.map((item, index) => (
              <Disclosure key={item.question} as="div">
                {({ open }) => (
                  <div className={`border-b border-gray-200 ${index === faqItems.length - 1 ? 'border-b-0' : ''}`}>
                    <Disclosure.Button className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-gray-900">
                      <span>{item.question}</span>
                      {open ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="pb-5 pr-12 text-sm text-gray-600">
                        {item.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

