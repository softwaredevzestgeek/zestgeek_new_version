import { Minus, Plus } from 'lucide-react';
import { FaqItemType } from '../CommonFaq';

type FaqItemPropType = {
  faq: FaqItemType;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

export function FaqItem({
  faq,
  isOpen,
  onToggle,
}: FaqItemPropType) {
  return (
    <div
      className={`
        w-[564px]
        rounded-[14px]
        border-[1px]
        overflow-hidden
        border-[rgba(0,0,0,0.03)]
        transition-all
        duration-300
        ease-out
        bg-gradient-to-b from-[#ffffff06] to-[#ababab06]
        ${
          isOpen
            ? 'bg-[#f8fafc]/70 shadow-[0_8px_30px_rgba(0,0,0,0.03)]'
            : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
        }
      `}
    >
      <button
        onClick={() => onToggle(faq.id)}
        className="
          w-full
          px-5
          py-5
          flex
          items-center
          justify-between
          text-left
          group
          cursor-pointer
        "
      >
        <span
          className={`
            text-[16px]
            font-medium
            tracking-tight
            font-['Inter']
            transition-colors
            duration-200
            pr-4
            ${
              isOpen
                ? 'text-[#0f172a]'
                : 'text-gray-800 group-hover:text-[#0f172a]'
            }
          `}
        >
          {faq.question}
        </span>

        <div className="flex-shrink-0 text-gray-500">
          {isOpen ? (
            <Minus className="w-[18px] h-[18px] stroke-[2.5] text-[#0f172a]" />
          ) : (
            <Plus className="w-[18px] h-[18px] stroke-[2.2] transition-colors duration-200 group-hover:text-[#0f172a]" />
          )}
        </div>
      </button>

      {/* Animated Content */}
      <div
        className={`
          grid
          transition-all
          duration-300
          ease-out
          ${
            isOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className={`
              px-5
              pb-5
              transform
              transition-all
              duration-300
              ease-out
              ${
                isOpen
                  ? 'translate-y-0'
                  : '-translate-y-2'
              }
            `}
          >
            <p
              className="
                text-[15px]
                leading-relaxed
                text-[#98989A]
                font-normal
                font-['Inter']
              "
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}