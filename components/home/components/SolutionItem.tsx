import React from 'react';
import { SolutionContent } from '../AISolutions';
import ArrowUpRightIcon from '@/public/assets/svgs/arrow_up_right.svg';

type SolutionItemProps = {
    item:SolutionContent;
    index:number
}

export function SolutionItem({ item, index }: SolutionItemProps) {
    const IconComponent = item.icon;
    return (
        <div 
                key={index} 
                className="group relative bg-white/70 backdrop-blur-md border border-gray-100/80 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(121,203,108,0.08)] transition-all duration-300 ease-in-out flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {index === 0 && <div className="absolute top-[-30px] left-[-30px] w-60 h-60 bg-[#8CC33F20] blur-[60px] rounded-full filter opacity-60 pointer-events-none" />}
                <div>
                  <div className="w-fit h-fit rounded-xl flex items-center justify-center mb-[18px] text-[#8CC33F] transition-colors duration-300">
                    <IconComponent className="w-[40px] h-[40px] stroke-[1.5]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-[#0f172a] mb-3 leading-snug pr-8 font-['Inter']">
                    {item.title}
                  </h3>
                  <div className="w-12 h-11 rounded-full border flex items-center justify-center text-gray-400 border-[#8CC33F60] transition-colors duration-300">
                  <ArrowUpRightIcon />
                </div>
                  </div>
                  <p className="text-[16px] text-gray-500 leading-relaxed font-['Inter']">
                    {item.description}
                  </p>
                </div>
              </div>
    )
}