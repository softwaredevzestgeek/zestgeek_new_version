import { homeContent } from "@/constants/home";
import { Rocket } from "lucide-react";

export function HomeHeaderBanner() {
  return (
    <div
      className="
        relative
        overflow-hidden
        border-y
        border-white/10
        bg-black
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,_rgba(132,204,22,0.18),_transparent_45%)]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          mx-auto
          flex
          h-[51px]
          max-w-7xl
          items-center
          justify-center
          gap-2
          px-4
          text-center
        "
      >
        <Rocket
          size={18}
          className="text-[var(--lime-green)]"
        />

        <p className="text-lg font-light text-white text-[16px]">
          {homeContent.homeHeaderBanner.bannerPrimaryText}
        </p>

        <button
          className="
            text-[16px]
            font-semibold
            text-[var(--lime-green)]
            underline
            underline-offset-4
            transition-colors
            hover:text-lime-300
            cursor-pointer
          "
        >
          {homeContent.homeHeaderBanner.bannerButtonCtaText}
        </button>
      </div>
    </div>
  );
}