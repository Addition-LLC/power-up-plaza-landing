import Image from 'next/image';
import { Calendar, MapPin, Clock } from 'lucide-react';

const eventDetails = [
  {
    icon: <Calendar className="h-8 w-8 text-green-400" />,
    label: 'Date',
    value: 'September 26th',
  },
  {
    icon: <MapPin className="h-8 w-8 text-green-400" />,
    label: 'Location',
    value: 'West Garfield Park, Chicago',
  },
  {
    icon: <Clock className="h-8 w-8 text-green-400" />,
    label: 'Time',
    value: 'All Day Event',
  },
];

export function GrandOpening() {
  return (
    <section id="grand-opening" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-x-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-600">
            <Calendar className="h-4 w-4" />
            Special Event
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Grand Opening Celebration
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us for an exciting all-day event with food trucks, music, and giveaways!
          </p>
        </div>

        {/* Info Cards */}
        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 sm:max-w-3xl sm:grid-cols-3">
          {eventDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-col items-center justify-center gap-y-4 rounded-xl border border-gray-200 p-8 text-center shadow-sm"
            >
              {detail.icon}
              <div>
                <dt className="text-sm text-gray-500">{detail.label}</dt>
                <dd className="mt-1 font-semibold text-gray-900">{detail.value}</dd>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <Image
            src="/images/grandopening.png"
            alt="People celebrating at the grand opening event."
            width={911}
            height={300}
            className="w-full rounded-lg object-cover shadow-md"
          />
          <p className="mt-8 text-base leading-7 text-gray-600">
            Don&apos;t miss this exciting event—be among the first to experience our facilities and join the movement towards a greener, more connected community.
          </p>
          {/* <div className="mt-10">
            <button className="rounded-md bg-green-400 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
              RSVP for Grand Opening
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
