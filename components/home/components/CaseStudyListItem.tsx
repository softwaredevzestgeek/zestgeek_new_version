import Image from "next/image";
import type { CaseStudyListItemType } from "../CaseStudies";

type CaseStudyListItemProps = {
    project: CaseStudyListItemType
}

export function CaseStudyListItem({ project }: CaseStudyListItemProps) {
    return (
        <div
              className={`group relative rounded-[20px] overflow-hidden bg-slate-900 aspect-[4/5] w-full shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] flex flex-col justify-end p-8`}
            >
              {/* Case Study Image Wrapper */}
              <div className="absolute inset-0 z-0 bg-gradient-to-bl from-[transparent] to-black/05">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} Screenshot Mockup`}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 360px"
                  className="object-cover object-center mix-blend-overlay opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Dynamic bottom shadow vignette gradient layer to match the crisp readability aspect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none z-10" />

              {/* Content text metadata box built strictly over the visual layers */}
              <div className="relative z-20 transition-transform duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-[20px] font-semibold text-white tracking-tight font-['Inter'] mb-1">
                  {project.title}
                </h3>
                <p className="text-[16px] text-[#98989A] font-medium font-['Inter']">
                  {project.category}
                </p>
              </div>
            </div>
    );
}