import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src="/images/BG.png" // Your background image in /public/images
        alt="A futuristic electric car at a charging station"
        fill
        className="object-cover"
        style={{ zIndex: -1 }}
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <p className="rounded-full border border-gray-500 px-3 py-1 text-xs font-medium text-gray-300">
          Your #1 Choice
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Welcome to Power Up Plaza: <br /> Your Destination for Electric Charging
        </h1>

        <a
          href="https://www.google.com/maps/search/?api=1&query=West+Garfield+Park,Chicago"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 rounded-md bg-green-400 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
        >
          Visit Us Now
        </a>

        <div className="mt-4 flex items-center gap-x-2 text-sm text-gray-300 font-semibold">
          <CalendarDays className="h-4 w-4" />
          <span>Grand Opening September 26th</span>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <Link
        href="#features"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border-2 border-white">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
        <span className="sr-only">Scroll down</span>
      </Link>
    </section>
  );
}

