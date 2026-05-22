import Image from "next/image";
import HeroImage from "@/public/assets/images/hero-image.png";
import { GradientThemeButton } from "@/components/ui/GradientThemeButton";
import { homeContent } from "@/constants/home";

export function HeroSection() {

  return (
    <section
      className="
        relative
        h-screen
        max-h-[700px]
        overflow-hidden
        bg-black px-[135px]
      "
    >
      <Image
        src={HeroImage}
        alt="AI Globe"
        priority
        fill
        className="
            object-cover
            object-right
            scale-[1.04]
            opacity-95
          "
      />
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          mt-16
        "
      >
        <div className="max-w-[560px]">
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#8CC33F]
              bg-black/40
              px-3
              py-1
              text-[12px]
              font-medium
              tracking-[0.01em]
              text-white
              shadow-[0_0_0_1px_rgba(166,243,110,0.08)]
              backdrop-blur-md
              font-kumbh
            "
          >
            {homeContent.heroSection?.capsuleText}
          </div>

          <h1
            className="mt-[18px] max-w-[820px] text-[60px] leading-[1.04] tracking-[-0.04em] text-white lg:text-[52px] relative z-2">
            <div className="bg-[#1c2619] h-7.5 w-93 rounded-2xl absolute top-6 right-20 z-[-1]" />
            {homeContent.heroSection.heroText
              .split(" ")
              .map((text, index) => {
                const isHighlighted =
                  text.startsWith("$") && text.endsWith("$");

                if (isHighlighted) {
                  return (
                    <span
                      key={index}
                      className="text-[var(--lime-green)] drop-shadow-[0_0_18px_rgba(132,255,84,0.18)] font-kumbh text-[48px] font-semibold"
                    >
                      {text.replaceAll("$", "")}{" "}
                    </span>
                  );
                }

                return <span key={index} className="font-kumbh text-[48px] font-semibold">{text} </span>;
              })}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[18px]
              max-w-[640px]
              text-[18px]
              font-normal
              leading-[1.65]
              text-[rgba(255,255,255,0.8)]
              font-['Inter']
            "
          >
            {homeContent.heroSection.heroSubText}
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-[36px] flex flex-wrap items-center gap-5">

            <GradientThemeButton
              innerText={homeContent.heroSection.consultButtonCtaText}
              className="
                w-[261px] h-[50px]
                rounded-[6px]
                shadow-[0_10px_40px_rgba(132,255,84,0.18)]
                cursor-pointer
                px-[30px]
              "
              textClassName="
                text-[16px]
                font-semibold
                text-white
                font-['Inter']
              "
            />

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
              {homeContent.heroSection.viewCaseStudiesButtonCtaText}
            </button>
          </div>
        </div>
      </div>
      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          w-[56vw]
          overflow-hidden
          border-t
          border-r
          border-black/20
          bg-[rgba(0,0,0,0)]
          backdrop-blur-[3px]
        "
      >

        <div
          className="
            relative
            grid
            grid-cols-1
            md:grid-cols-3
            bg-gradient-to-tr
            from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)]
          "
        >
          {homeContent.heroSection.stats.map((stat, index) => {
            const number = stat.count.toString();
            return (
              <div
                key={stat.title}
                className={`relative
                  h-[144px]
                  flex items-center border-l-[0.8px] border-t border-t-black/20
                  border-black/30 ${index == 0 ? 'justify-center' : 'justify-start pl-[20px]'}`}
              >
                <div className={`relative z-10 flex items-start justify-center flex-col`}>

                  {/* VALUE */}
                  <div
                    className={`flex
                      items-start
                      text-[32px]
                      font-semibold
                      leading-none
                      tracking-[-0.03em]
                      text-white font-['Inter']`}
                  >
                    <span>{number}</span>

                    <span className="text-[var(--lime-green)]">
                      +
                    </span>
                  </div>

                  {/* LABEL */}
                  <p
                    className=" mt-2
                      text-[14px]
                      font-normal
                      text-gray-400 font-['Inter']
                    "
                  >
                    {stat.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}