import Image from 'next/image';
import Link from 'next/link';
import type { CaseStudyListItemType } from '../CaseStudies';
import { ArrowRight, Check } from 'lucide-react';

type CaseStudyListItemProps = {
  project: CaseStudyListItemType;
};

export function CaseStudyListItem({
  project,
}: CaseStudyListItemProps) {
  return (
    <div
      className="
        group
        relative
        rounded-[8px]
        overflow-hidden
        bg-slate-900
        aspect-[4/5]
        w-full
        shadow-lg
        px-[30px]
      "
    >
      <div className="absolute inset-0">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 360px"
          className="
            object-cover
            object-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />
      </div>

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/40
          to-transparent
          z-10
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          p-8
          transition-all
          duration-500
          group-hover:opacity-0
          group-hover:translate-y-4
        "
      >
        <h3 className="text-[20px] font-medium text-white tracking-tight font-['Inter'] mb-2">
          {project.title}
        </h3>

        <p className="text-[16px] text-[#98989a] font-normal font-['Inter']">
          {project.category}
        </p>
      </div>

      <div
        className="
          absolute
          inset-0
          z-30
          flex
          flex-col
          justify-end
          p-[30px]
          bg-black/55
          backdrop-blur-[2px]
          opacity-0
          translate-y-6
          transition-all
          duration-500
          ease-out
          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        <div className="max-w-[90%]">
          <h3 className="text-[20px] font-medium text-white mb-[8px] font-['Inter']">
            {project.title}
          </h3>

          <p className="text-[16px] font-normal text-white mb-5 font-['Inter'] tracking-[-0.5px]">
            {project.description}
          </p>

          <div className="flex flex-col gap-2 mb-9">
            {project.features.map(
              (feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <Check className="text-[#8CC341] h-[18px] w-[18px]" />

                  <span className="text-white text-[15px] font-medium">
                    {feature}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* CTA */}
          <Link
            href={project.cta.href}
            className="
              inline-flex
              items-center
              gap-2
              w-[218px]
              h-[45px]
              rounded-[6px]
              border
              border-white/70
              text-white
              text-[14px]
              font-medium
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              flex items-center justify-center
            "
          >
            {project.cta.label}
            <ArrowRight className='h-[16px] w-[16px]' strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}