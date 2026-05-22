'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

import { homeContent } from '@/constants/home';
import { Testimonial } from './components/Testimonial';

const testimonialsList = homeContent.testimonials.testimonial_data;

export type TestimonialType = typeof testimonialsList[number];

export function Testimonials() {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [cardWidth] = useState(404);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const currentScrollPosition = scrollContainerRef.current.scrollLeft;
      
      const newScrollPosition =
        direction === 'left'
          ? currentScrollPosition - cardWidth
          : currentScrollPosition + cardWidth;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full bg-[#fcfdfd] py-[100px] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Subtle layout ambient glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#f4faf6] rounded-full filter blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#edf7f2] rounded-full filter blur-[120px] opacity-50 pointer-events-none" />

      <div className="w-full text-center relative z-10 flex flex-col items-center">
        
        {/* Top Label Badge */}
        <div className="mb-4">
          <span className="inline-block bg-[#8CC33F] text-white text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm shadow-[#8CC33F]/20 font-kumbh">
            Testimonials
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0f172a] tracking-tight mb-[18px] font-kumbh relative inline-block">
          <div className="bg-[#6A9AB610] h-[30px] w-[190px] rounded-2xl absolute top-[20px] left-[95px] z-[-1]" />
          What Our Clients Say About Working With Us
        </h2>

        {/* Subtitle */}
        <p className="text-[16px] md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-['Inter'] mb-[56px]">
          We partner with startups and enterprises to build scalable digital products that deliver real business impact.
        </p>

        {/* Interactive Slider Track Container Layout */}
        <div className="relative w-full flex items-center group/slider">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-[20px] z-30 p-3 rounded-full bg-white border border-gray-100 shadow-md text-gray-600 hover:bg-gray-50 hover:text-[#8CC33F] transition-all duration-200 focus:outline-none opacity-0 group-hover/slider:opacity-100 hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Slide Left"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div
            ref={scrollContainerRef}
            className="w-full flex gap-6 overflow-x-auto pb-8 pt-2 px-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
          >
            {testimonialsList.map((item) => (<Testimonial key={item.id} testimonial={item} />))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-[20px] z-30 p-3 rounded-full bg-white border border-gray-100 shadow-md text-gray-600 hover:bg-gray-50 hover:text-[#8CC33F] transition-all duration-200 focus:outline-none opacity-0 group-hover/slider:opacity-100 hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Slide Right"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>

      </div>
    </section>
  );
}