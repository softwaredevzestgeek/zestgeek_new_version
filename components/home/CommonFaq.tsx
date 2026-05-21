'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Mapable data array containing all the text content for the FAQs
const faqData = [
  {
    id: 1,
    question: 'How long does it take to build a product?',
    answer: 'Most MVPs are delivered within 4–8 weeks, depending on the scope and complexity. For full-scale platforms, timelines may vary based on features, integrations, and business requirements.',
  },
  {
    id: 2,
    question: 'What services does ZestGeek offer?',
    answer: 'We offer end-to-end digital product engineering services, including Web Application Development, Mobile App Development, SaaS Architecture Development, MVP strategy design, and customized Agentic AI implementations.',
  },
  {
    id: 3,
    question: 'Where can I purchase AlignUI Design System?',
    answer: 'You can purchase the full AlignUI Design System directly via our official platform marketplace. It gives your UI/UX design team a comprehensive toolkit optimized explicitly for Figma environments.',
  },
  {
    id: 4,
    question: 'What are the recent updates and enhancements in AlignUI?',
    answer: 'Our latest version introduces deep Tailwind CSS v4 mapping support, fully native light/dark tokens variables, responsive wireframe scaffolding patterns, and over 150+ predefined semantic component libraries.',
  },
  {
    id: 5,
    question: 'How do I install AlignUI Design System in Figma?',
    answer: 'Simply download the asset source file, open your Figma Workspace, click on "Import File", and upload the file. From there, you can publish it straight to your team library context for fast global usage.',
  },
  {
    id: 6,
    question: 'Can I use AlignUI Design System for commercial projects?',
    answer: 'Yes, absolutely! Every purchased commercial license grants full developer privileges to construct, design, deploy, and scale unlimited client-facing or internal corporate software platforms.',
  },
];

export function FrequentlyAskedQuestions() {

  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#fcfdfd] py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#edf7f2] rounded-full filter blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f0faf4] rounded-full filter blur-[140px] opacity-60 pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Top Label Badge */}
        <div className="mb-4">
          <span className="inline-block bg-[#8CC33F] text-white text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm shadow-[#8CC33F]/20 font-kumbh">
            FAQs
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0f172a] text-center tracking-tight mb-[14px] font-kumbh relative inline-block">
          <div className="bg-[#6A9AB610] h-[30px] w-[190px] rounded-2xl absolute top-[20px] left-[-8px] z-[-1]" />
          Frequently Asked Questions
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-500 text-center max-w-2xl mx-auto leading-relaxed font-['Inter'] mb-16">
          Everything you need to know about our services, process, and how we help businesses build scalable digital products.
        </p>

        {/* Accordions Container Stack */}
        <div className="w-full flex flex-col gap-4 mb-12">
          {faqData.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`w-full rounded-[16px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#f8fafc]/70 border-gray-100/70 shadow-[0_4px_20px_rgba(0,0,0,0.01)]'
                    : 'bg-white border-gray-100 hover:border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.005)]'
                }`}
              >
                {/* Accordion Toggle Trigger Box */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-200 focus:outline-none group cursor-pointer"
                >
                  <span className={`text-[15px] md:text-[16px] font-bold tracking-tight font-kumbh transition-colors duration-200 ${
                    isOpen ? 'text-[#0f172a]' : 'text-gray-800 group-hover:text-[#0f172a]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Status Indicator Icon Trigger */}
                  <div className="flex-shrink-0 ml-4 text-gray-500">
                    {isOpen ? (
                      <Minus className="w-[18px] h-[18px] stroke-[2.5] text-[#0f172a]" />
                    ) : (
                      <Plus className="w-[18px] h-[18px] stroke-[2.2] group-hover:text-[#0f172a] transition-colors duration-200" />
                    )}
                  </div>
                </button>

                {/* Animated Inner Context Content Container */}
                <div
                  className={`transition-all duration-300 ease-in-out grid ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] text-gray-400 font-medium leading-relaxed font-['Inter'] px-5 pb-6 md:px-6 md:pb-6 max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer Link Label context */}
        <div className="text-[14px] text-gray-400 font-medium font-['Inter']">
          Still have questions?{' '}
          <a
            href="#contact"
            className="text-[#0f172a] font-bold font-kumbh hover:text-[#8CC33F] transition-colors duration-200 underline underline-offset-4"
          >
            Let's talk
          </a>
        </div>

      </div>
    </section>
  );
}