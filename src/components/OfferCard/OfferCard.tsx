import type { ReactNode } from 'react';

interface OfferCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const OfferCard = ({ icon, title, description }: OfferCardProps) => {
  return (
    <div className="relative flex items-start gap-x-6">
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-brand-green">
        {icon}
      </div>
      <div className="flex-auto">
        <h3 className="text-lg font-semibold leading-7 text-gray-900">{title}</h3>
        <p className="mt-2 text-base leading-7 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default OfferCard;