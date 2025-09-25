'use client'; 

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Mission', href: '#mission' },
  { name: 'Grand Opening', href: '#grand-opening' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        
        {/* Logo */}
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Power Up Plaza</span>
          {/* THE FIX: Increased width and height for a larger logo */}
          <Image
            src="/logo.png"
            alt="Power Up Plaza Logo"
            width={160} 
            height={24}
            priority
          />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Hamburger Menu Button (Mobile) */}
        <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel (Dialog) */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Power Up Plaza</span>
              <Image
                className="h-8 w-auto"
                src="/logo.svg"
                alt=""
                width={160}
                height={24}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

