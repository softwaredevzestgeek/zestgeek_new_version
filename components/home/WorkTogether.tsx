'use client'

import Image from 'next/image';
import { Globe } from 'lucide-react';
import WorkTogetherImg from '@/public/assets/images/build_together_bg.png';
import { GradientThemeButton } from '../ui/GradientThemeButton';

export function ReadyToBuild() {
  return (
    <section className="relative py-[100px] px-[135px] w-full h-[492px] bg-[#0c151d] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Graphic Asset Container */}
      <div className="absolute w-full h-full select-none">
        <Image
          src={WorkTogetherImg} // Pass your team collaboration office image import here
          alt="ZestGeek product strategy team working together on tech solutions"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        
        {/* Left Dark Gradient Overlay Face — Creates text contrast while elegantly fading out the image on the left */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#070d12] via-[transparent] to-transparent" />
        
        {/* Bottom edge shadow blend */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-[#070d12] to-transparent pointer-events-none" />
      </div>

      {/* Main Structural Layout Grid */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-16 pb-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text / Info Box Matrix */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col text-left">
            
            {/* Top Outline Badge Element */}
            <div className="mb-6">
              <span className="inline-block border border-[#8CC33F] text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full bg-white/5 backdrop-blur-md font-kumbh">
                Let's Build Together
              </span>
            </div>

            {/* Principal Punchy Hero Header */}
            <h1 className="text-[32px] font-semibold text-white tracking-tight leading-[1.15] font-kumbh mb-[18px] relative">
                <div className="bg-[#8CC33F15] h-7 w-67 rounded-2xl absolute bottom-[-2px] left-[-10px] z-[-1]" />
              Ready to Turn Your Idea Into a <span className="text-[#8CC33F]">Scalable</span> Product?
            </h1>

            {/* Subtitle / Copywriting Body Summary */}
            <p className="text-[16px] text-gray-300 font-medium leading-relaxed font-['Inter'] max-w-xl mb-9">
              We help startups and businesses design, build, and launch AI-powered and SaaS products that deliver real results.
            </p>

            {/* Interactive Button Configuration Grid Rows */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-[18px]">
              
              {/* Primary Green Call to Action Block */}
                           <GradientThemeButton
                            innerText={'Book Free Consultation'}
                            className="
                              w-[263px] h-[50px]
                              rounded-[6px]
                              shadow-[0_10px_40px_rgba(132,255,84,0.18)]
                              cursor-pointer
                              px-[30px]
                            "
                            textClassName="
                              text-[16px]
                              font-normal
                              text-white
                              font-['Inter']
                            "
                          />

              {/* Secondary Transparent Outline Variant */}
              <button
                            className="
                              rounded-[6px]
                              border
                              border-white/60
                              bg-white/[0.02]
                              w-[226px] h-[50px]
                              font-medium
                              text-white
                              backdrop-blur-md
                              transition-all
                              duration-300
                              hover:border-white/40
                              hover:bg-white/[0.05]
                              cursor-pointer
                              text-[16px]
                              px-[40px]
                              py-[13px]
                            "
                          >
                            {"View Case Studies"}
                          </button>

            </div>

            {/* Bottom Proof Trust Indicator Footer Row */}
            <div className="flex items-center gap-2 font-medium font-['Inter'] text-[14px] sm:text-[13px] opacity-90">
              <Globe className="w-5 h-5 text-[#8CC33F] stroke-[1.8]" />
              <span>Trusted by Businesses Across USA, UK, Canada, Australia & Worldwide</span>
            </div>

          </div>

          {/* Right Column Spacer — Intentionally left blank to hold layout space for the team image background on desktops */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[400px]" />

        </div>
      </div>

    </section>
  );
}