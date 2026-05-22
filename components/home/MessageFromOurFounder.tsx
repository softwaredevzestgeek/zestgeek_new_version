'use client'
import Image from 'next/image';
import FounderAvatar from '@/public/assets/images/founder_avatar.png';

const statMetrics = [
  { id: 1, value: 10, label: 'Years Experience' },
  { id: 2, value: 250, label: 'Product Engagements' },
  { id: 3, value: 50, label: 'Team Members Led' },
  { id: 4, value: 100, label: 'Global Clients' },
];

export function MessageFromOurFounder() {
  return (
    <section className="relative w-full bg-[#fcfdfd] py-[100px] px-[135px] flex flex-col items-center justify-center font-sans overflow-hidden bg-[#F8FAF9]">
      
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copywriting & Company Metrics */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Top Label Badge */}
            <div className="mb-[12px]">
              <span className="inline-block bg-[#8CC33F] text-white text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm shadow-[#8CC33F]/20 font-kumbh">
                Message from Our Founder
              </span>
            </div>

            <h2 className="text-[32px] font-semibold text-[#0f172a] tracking-tight mb-[14px] font-kumbh relative">
              <div className="bg-[#6A9AB610] h-[30px] w-[200px] rounded-2xl absolute top-4 left-[-10px] z-[-1]"/>
              Love Trevedi
            </h2>

            {/* Quote Heading */}
            <h3 className="text-[18px]font-semibold text-[#0f172a] leading-snug font-['Inter'] mb-[12px]">
              Building scalable digital products with real business impact
            </h3>

            {/* Founder Message Body Paragraphs */}
            <div className="space-y-4 text-[14px] text-gray-400 font-normal leading-relaxed max-w-2xl mb-9 font-['Inter']">
              <p>
                At Zestgeek, our goal is simple - to help businesses turn ideas into scalable, high-performance digital products.
              </p>
              <p>
                With deep experience in AI and product engineering, we focus on solving real business problems with the right technology.
              </p>
              <p>
                We partner with startups and enterprises to build AI solutions, SaaS platforms, and engineering teams that drive growth. Our approach is built on clarity, speed, and long-term thinking.
              </p>
            </div>

            {/* Mapped Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {statMetrics.map((metric) => (
                <div key={metric.id} className="flex flex-col">
                  <span className="text-[32px] font-extrabold text-[#0f172a] tracking-tight mb-1 font-semibold font-['Inter']">
                    {metric.value}<span className='text-[#8CC33F]'>+</span>
                  </span>
                  <span className="text-[12px] text-gray-400 font-normal leading-tight whitespace-pre-line font-['Inter']">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-[500px]">
            <Image
              src={FounderAvatar}
              alt="Love Trevedi - Founder of Zestgeek"
              fill
              priority
              sizes="(max-w-1024px) 100vw, 450px"
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}