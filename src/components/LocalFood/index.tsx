import Image from 'next/image';

export function LocalFood() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*
          Responsive Grid:
          - Defaults to a 1-column layout for mobile (`grid-cols-1`).
          - Switches to a 2-column layout on large screens (`lg:grid-cols-2`).
          - Adjusts vertical spacing for different screen sizes (`gap-y-12 sm:gap-y-16`).
        */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-16 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column: Text and Cafe Image */}
          <div className="lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Enjoy the Taste of Local Food While Charging
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                More than a charging station, our plaza is a vibrant hub with local food, comfy space, and community
                vibes while your car recharges.
              </p>
            </div>
            <div className="mt-10">
              <Image
                src="/images/localfood1.png"
                alt="People eating at an outdoor cafe."
                width={500}
                height={350}
                className="w-full max-w-full rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>

          {/* Right Column: Charger Image */}
          <div>
            <Image
              src="/images/localfood.png"
              alt="Close-up of an EV charging station."
              width={450}
              height={600}
              className="w-full max-w-full rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

