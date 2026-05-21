import { ArrowRight } from 'lucide-react';
import { homeContent } from '@/constants/home';
import { SolutionItem } from './components/SolutionItem';

export type SolutionContent = typeof homeContent.aiSolutions.solutions[number];

export function AiSolutions() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-tr from-[#f4fbf7] via-white to-[#f0faf5] py-[100px] px-[135px] flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* Soft background ambient glows */}
      <div className="absolute top-0 left-14 w-96 h-96 bg-[#8CC33F40] rounded-full filter blur-[120px] opacity-60 pointer-events-none" />

      <div className="w-full text-center relative z-10">
        
        {/* Top Tag */}
        <span className="inline-block bg-[#8CC33F] text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-full mb-4 shadow-sm shadow-[#8CC33F]/20 font-kumbh">{homeContent.aiSolutions.capsuleText}</span>

        {/* Main Heading */}
        <h2 className="text-[32px] font-semibold text-[#0f172a] tracking-tight max-w-2xl mx-auto mb-4 relative z-2">
          <div className="bg-[#6A9AB610] h-[30px] w-[190px] rounded-2xl absolute top-3.5 left-15 z-[-1] font-kumbh"/>{homeContent.aiSolutions.title}</h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed mb-16 font-['Inter']">{homeContent.aiSolutions.subtitle}</p>

        {/* 3x2 Grid for Desktop, Responsive Stack for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-14">
          {homeContent.aiSolutions.solutions.map((item, index) =>(<SolutionItem key={index} item={item} index={index} />))}
        </div>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#8CC33F] bg-white text-[#529946] font-medium text-sm rounded-lg hover:bg-[#8CC33F] hover:text-white transition-all duration-300 shadow-sm group cursor-pointer font-['Inter'] font-medium">
          Explore AI Solutions
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

      </div>
    </section>
  );
}