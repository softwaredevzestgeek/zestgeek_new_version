'use client'
import React from 'react';
import { FileSearch, Layers, Code2, Rocket, BookSearch, CodeXml, Form } from 'lucide-react';
import ArrowStep1 from '@/public/assets/svgs/arrow_step_1.svg';
import ArrowStep2 from '@/public/assets/svgs/arrow_step-2.svg';
import ArrowStep3 from '@/public/assets/svgs/arrow_step_3.svg';
import { ProcessStep } from './components/ProcessStep';

// Separate, mapable array of objects for easy content updates
const processSteps = [
  {
    id: 1,
    icon: BookSearch,
    title: 'Discover & Define',
    description: 'Understand goals, users, and requirements',
    offsetClass: 'lg:translate-y-6', 
    follwedByArrow:ArrowStep1,
    inverted:false
  },
  {
    id: 2,
    icon: Form,
    title: 'Plan & Design',
    description: 'Define roadmap, architecture, and UX',
    offsetClass: 'lg:-translate-y-4',
    follwedByArrow:ArrowStep2,
    inverted:true
  },
  {
    id: 3,
    icon: CodeXml,
    title: 'Build & Develop',
    description: 'Develop scalable, high-performance product',
    offsetClass: 'lg:translate-y-6',
    follwedByArrow:ArrowStep3,
    inverted:false
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'Launch, optimize, and grow continuously',
    offsetClass: 'lg:-translate-y-4',
    follwedByArrow:null,
    inverted:undefined
  },
];


export type ProcessStepType = typeof processSteps[number]

export function HowWeWork() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f4faf6] via-white to-white py-[100px] px-[135px] flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#eefaf2]/40 via-transparent to-[#eefaf2]/40 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="w-full mx-auto text-center relative z-10">
        
        {/* Header Badge */}
        <span className="inline-block bg-[#8CC33F] text-white text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full mb-4 shadow-sm shadow-[#8CC33F]/20 font-kumbh">
          How We Work
        </span>

        {/* Main Title */}
        <h2 className="text-[32px] md:text-4xl font-semibold text-[#0F172A] tracking-tight max-w-4xl mx-auto mb-4 font-kumbh relative">
          <div className="bg-[#6A9AB610] h-[30px] w-103 rounded-2xl absolute top-3.5 right-12 z-[-1]"/>
          How We Turn Ideas Into Scalable Digital Products
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-24 font-['Inter']">
          A simple, structured approach to design, develop, and scale high-performing solutions.
        </p>

        {/* Process Steps Layout Wrapper */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

          {/* Dynamic mapping loop */}
          {processSteps.map((step, index) => <ProcessStep key={step.id} step={step} index={index} />)}

        </div>

      </div>
    </section>
  );
}