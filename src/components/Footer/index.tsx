import Image from 'next/image';
// import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const navigation = {
  quickLinks: [
    { name: 'Features', href: '#features' },
    { name: 'Mission', href: '#mission' },
    { name: 'Grand Opening', href: '#grand-opening' },
    { name: 'News Coverage', href: '#news' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          {/* Logo and Description Section */}
          <div className="space-y-8 lg:w-1/3">
            <div className="flex items-center gap-x-2">
              <Image
                src="/logo.svg"
                alt="Power Up Plaza Icon"
                width={24}
                height={24}
              />
              <span className="font-bold text-gray-900">Power Up Plaza</span>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Charging ahead for a brighter, more sustainable tomorrow in West Garfield Park, Chicago.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links and Contact Wrapper */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-1/2">
            {/* Quick Links Section */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Quick Links</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.quickLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact</h3>
              <div className="mt-6 space-y-4 text-sm leading-6 text-gray-600">
                <p>West Garfield Park<br />Chicago, IL</p>
                <p>info@powerupplaza.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 flex justify-center">
          <p className="text-xs leading-5 text-gray-500">&copy; 2025 Power Up Plaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

