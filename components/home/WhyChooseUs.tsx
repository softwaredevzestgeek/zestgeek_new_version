'use client'
import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import WhyZestgeekImg from "@/public/assets/images/why_zestgeek_img.png";

const valuePropositions = [
  {
    id: 1,
    title: 'Product-First Approach',
    description: 'We focus on solving real business problems, not just delivering code.',
  },
  {
    id: 2,
    title: 'AI + Engineering Expertise',
    description: 'Strong capabilities across AI, SaaS, and modern product development.',
  },
  {
    id: 3,
    title: 'Scalable Teams',
    description: 'Quickly scale your team with engineers aligned to your goals.',
  },
  {
    id: 4,
    title: 'Faster Time to Market',
    description: 'Launch faster with efficient processes and proven delivery methods.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#fcfdfd] py-[100px] px-[135px] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#edf7f2] rounded-full filter blur-[130px] opacity-40 pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[70px] items-center">
          
          <div className="lg:col-span-6 w-full relative rounded-[8px] overflow-hidden shadow-xl shadow-gray-100 bg-slate-50 h-[545px] w-[600px]">
            <Image
              src={WhyZestgeekImg}
              alt="ZestGeek engineering team collaborating on scalable digital product dashboards"
              fill
              priority
              className="object-cover object-center h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="lg:col-span-6 flex flex-col text-left order-1 lg:order-2 h-[542px] w-[500px]">

            <div className="mb-[14px]">
              <span className="inline-block bg-[#8CC33F] text-white text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm shadow-[#8CC33F]/20 font-kumbh">
                Why ZestGeek
              </span>
            </div>

            <h2 className="text-[32px]  font-semibold text-[#0f172a] tracking-tight mb-[10px] font-kumbh relative inline-block">
              <div className="bg-[#6A9AB610] h-[30px] w-[190px] rounded-2xl absolute bottom-[4px] left-[80px] hidden md:block z-[-1]" />
              Building Scalable Products That Drive Real Growth
            </h2>
            <p className="text-[16px] text-[#475569] leading-relaxed font-['Inter'] mb-[16px]">
              We combine AI expertise, product thinking, and scalable engineering to help businesses build and grow faster.
            </p>

            <div className="flex flex-col gap-[14px] mb-[20px]">
              {valuePropositions.map((item) => (
                <div key={item.id} className="flex items-start gap-3 group">
                  <div className="mt-0.5 flex-shrink-0 text-[#8CC33F]">
                    <CheckCircle2 className="w-[23px] h-[23px] stroke-[1.5]" />
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-[18px] font-medium text-[#0f172a] tracking-tight font-['Inter'] mb-[0px]">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-gray-400 font-normal font-['Inter'] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button className="inline-flex items-center gap-2 h-[50px] w-[246px] flex items-center justify-center border border-[#8CC33F] bg-white text-[#74aa2f] font-medium text-sm rounded-lg hover:bg-[#8CC33F] hover:text-white transition-all duration-300 shadow-sm font-kumbh group">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}