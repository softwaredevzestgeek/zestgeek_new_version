'use client'
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import CaseStudy1 from '@/public/assets/images/case_study1.png';
import CaseStudy2 from '@/public/assets/images/case_study2.png';
import CaseStudy3 from '@/public/assets/images/case_study3.png';
import { CaseStudyListItem } from './components/CaseStudyListItem';

export const caseStudies = [
  {
    id: 1,

    title: 'AI Chatbot Platform',

    category: 'AI Development',

    imageSrc: CaseStudy1,

    hasBorder: false,

    description:
      'Automated customer support using AI, reducing operational costs by 40% and improving response time by 3x across channels.',

    features: [
      'Real-time responses',
      'Multi-channel support',
    ],

    cta: {
      label: 'View Case Study',
      href: '/case-studies/ai-chatbot',
    },
  },

  {
    id: 2,

    title: 'SaaS Management Platform',

    category: 'SaaS Development',

    imageSrc: CaseStudy2,

    hasBorder: true,

    description:
      'Built a scalable SaaS platform handling 10K+ daily operations with real-time analytics, automation, and seamless user management.',

    features: [
      'Real-time analytics',
      'Scalable architecture',
    ],

    cta: {
      label: 'View Case Study',
      href: '/case-studies/saas-platform',
    },
  },

  {
    id: 3,

    title: 'E-commerce Platform',

    category: 'Web Development',

    imageSrc: CaseStudy3,

    hasBorder: false,

    description:
      'Improved user experience and performance, increasing conversions by 35% with a fast, scalable and mobile-first architecture.',

    features: [
      'Faster load times',
      'Optimized checkout flow',
    ],

    cta: {
      label: 'View Case Study',
      href: '/case-studies/ecommerce',
    },
  },
];

export type CaseStudyListItemType = typeof caseStudies[number];

export function CaseStudies() {
    return (
        <section className="relative py-[100px] px-[135px] w-full bg-[#fcfdfd] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tr from-[#ffffff] via-[#e2ebef10] to-[#e2ebef]">

            {/* Background ambient accents */}
            <div className="absolute top-[100px] left-[-100px] blur-[120px] w-96 h-96 bg-[#8CC33F40] rounded-full filter opacity-60 pointer-events-none" />
            <div className="absolute bottom-[-100px] right-[-100px] blur-[100px] w-96 h-96 bg-[#e2ebef] rounded-full filter opacity-60 pointer-events-none" />

            <div className="w-full text-center relative z-10 flex flex-col items-center">

                {/* Top Label Badge */}
                <div className="mb-4">
                    <span className="inline-block bg-[#8CC33F] text-white text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm shadow-[#8CC33F]/20 font-kumbh">
                        Case Studies
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0f172a] tracking-tight mb-[14px] font-kumbh relative inline-block">
                    {/* Decorative Background Accent Block from the layout structure */}
                    <div className="bg-[#6A9AB610] h-[30px] w-[212px] rounded-2xl absolute top-[16px] left-[-10px] z-[-1]" />
                    Real Results That Speak for Themselves
                </h2>

                {/* Subtitle */}
                <p className="text-[16px] md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-['Inter'] mb-16">
                    We help startups and enterprises build scalable AI products, SaaS platforms, and digital solutions that drive measurable business outcomes.
                </p>

                {/* Cards Grid Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left items-stretch mb-14">
                    {caseStudies.map((project) => (<CaseStudyListItem key={project.id} project={project} />))}
                </div>

                {/* CTA Button Component */}
                <button className="inline-flex items-center gap-2 h-[50px] w-[277px] flex items-center justify-center border border-[#8CC33F] bg-transparent text-[#74aa2f] font-medium text-sm rounded-lg hover:bg-[#8CC33F] hover:text-white transition-all duration-300 shadow-sm font-kumbh group cursor-pointer">
                    View All Case Studies
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

            </div>
        </section>
    );
}