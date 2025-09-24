import Image from 'next/image';

const logos = [
  { name: 'Tesla', src: '/logos/tesla.svg' },
  { name: 'Mercedes', src: '/logos/mercedes.svg' },
  { name: 'BMW', src: '/logos/bmw.svg' },
  { name: 'Volkswagen', src: '/logos/volkswagen.svg' },
  { name: 'Nissan', src: '/logos/nissan.svg' },
];

const SupportedModels = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo.src}
              alt={logo.name}
              width={158}
              height={48}
            />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
            <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
                <span className="hidden md:inline">
                Supported More Than 20 Car Models.
                </span>
                <a href="#" className="font-semibold text-brand-green">
                    <span className="absolute inset-0" aria-hidden="true" /> See all models{' '}
                    <span aria-hidden="true">&rarr;</span>
                </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default SupportedModels;
