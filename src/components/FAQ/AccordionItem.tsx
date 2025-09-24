// src/components/FAQ/AccordionItem.tsx

import { Minus, Plus } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="pt-6">
      <dt>
        <button
          onClick={onClick}
          className="flex w-full items-start justify-between text-left text-white"
        >
          <span className="text-base font-semibold leading-7">{question}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <Minus className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Plus className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12">
          <p className="text-base leading-7 text-gray-300">{answer}</p>
        </dd>
      )}
    </div>
  );
};

export default AccordionItem;