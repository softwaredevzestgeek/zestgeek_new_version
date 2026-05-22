'use client'
import { useState } from 'react';
import { FaqItem } from './components/FaqItem';
import { homeContent } from '@/constants/home';
import Link from 'next/link';

const faqData = homeContent.commonFaqs.faqData;

export type FaqItemType = typeof faqData[number];

export function FrequentlyAskedQuestions() {

    const [openFaqId, setOpenFaqId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
        <section className="relative w-full bg-[#fcfdfd] py-[100px] px-[395px] flex flex-col items-center justify-center overflow-hidden">

            <div className="absolute bottom-[-120px] left-[-15%] w-116 h-150 bg-[#8CC33F30] rounded-full filter blur-[100px] pointer-events-none" />

            <div className="absolute top-[-120px] right-[-15%] w-116 h-150 bg-[#6A9AB620] rounded-full filter blur-[130px] pointer-events-none" />

            <div className="max-w-3xl w-full mx-auto relative z-10 flex flex-col items-center">

                <div className="mb-4">
                    <span className="inline-block bg-[#8CC33F] text-white text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm shadow-[#8CC33F]/20 font-kumbh">{homeContent.commonFaqs.capsuleText}</span>
                </div>

                <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0f172a] text-center tracking-tight mb-[14px] font-kumbh relative inline-block">
                    <div className="bg-[#6A9AB610] h-[30px] w-[190px] rounded-2xl absolute top-[20px] left-[-8px] z-[-1]" />
                    {homeContent.commonFaqs.title}
                </h2>

                <p className="text-sm md:text-base text-gray-500 text-center max-w-2xl mx-auto leading-relaxed font-['Inter'] mb-[56px]">{homeContent.commonFaqs.subtitle}</p>

                <div className="w-full flex flex-col items-center gap-4 mb-[18px] px-[18px]">
                    {faqData.map((faq) => {
                        const isOpen = openFaqId === faq.id;
                        return (<FaqItem faq={faq} key={faq.id} isOpen={isOpen} onToggle={toggleFaq} />);
                    })}
                </div>

                <div className="text-[14px] text-gray-400 font-medium font-['Inter']">
                    Still have questions?{' '}
                    <Link
                        href="#contact"
                        className="text-[#0f172a] font-bold font-kumbh hover:text-[#8CC33F] transition-colors duration-200 underline underline-offset-4"
                    >
                        Let's talk
                    </Link>
                </div>

            </div>
        </section>
    );
}