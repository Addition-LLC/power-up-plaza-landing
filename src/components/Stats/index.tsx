import { Zap, Clock, Plus } from 'lucide-react';

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
    description: 'Community Dedicated to equity, sustainability, and accessibility.',
  },
];

export function Stats() {
  return (
    <section className="bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.description} className="mx-auto flex max-w-xs flex-col items-center gap-y-4">
              {stat.icon}
              <dd className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="text-base leading-7 text-gray-400">{stat.description}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
