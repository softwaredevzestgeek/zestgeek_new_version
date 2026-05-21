import React from "react"
import { type TestimonialType } from "../Testimonials"
import { Star } from "lucide-react"
import Image from "next/image"

type TestimonialProps = {
  testimonial: TestimonialType
}

export function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div
      key={testimonial.id}
      className={`snap-center flex-shrink-0 w-[380px] rounded-[12px] p-8 text-left border transition-all duration-300 flex flex-col justify-between ${testimonial.isFeatured
          ? 'bg-[#fafdfa] border-[#8CC33F]/30 shadow-[0_15px_40px_rgba(140,195,63,0.06)] scale-[1.01]'
          : 'bg-white/60 backdrop-blur-sm border-gray-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-gray-200'
        }`}
    >
      <div>
        <div className="flex gap-1 mb-5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-[24px] h-[24px] fill-[#8CC33F] stroke-[#8CC33F]"
            />
          ))}
        </div>

        {/* Testimonial Quote String */}
        <p className="text-[16px] md:text-[15px] text-gray-500 font-medium leading-relaxed font-['Inter'] mb-8">
          {testimonial.quote}
        </p>
      </div>

      {/* Identity Footer Container */}
      <div className="flex items-center gap-3.5 mt-auto">
        <div className="w-11 h-11 rounded-full relative overflow-hidden bg-gray-100 border border-gray-100 flex-shrink-0">

          {/* Fallback displayed when avatarSrc is blank */}
          {testimonial.avatarSrc?.length ? (
            <Image
              src={testimonial.avatarSrc}
              alt={`${testimonial.name} Headshot profile`}
              fill
              sizes="44px"
              className="object-cover object-center"
            />

          ) : <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-[10px] text-gray-500 font-bold uppercase select-none">
            {testimonial.name.charAt(0)}
          </div>}
        </div>

        {/* Profile Details */}
        <div className="flex flex-col min-w-0">
          <span className="text-[18px] font-semibold text-[#0F172A] tracking-tight font-kumbh truncate">
            {testimonial.name}
          </span>
          <span className="text-[16px] text-[#98989A] font-normal font-['Inter'] truncate">
            {testimonial.role}
          </span>
        </div>
      </div>

    </div>
  )
}