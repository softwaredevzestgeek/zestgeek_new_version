"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ZestgeekLogo from "@/public/assets/svgs/zestgeek_logo.svg";
import { NavbarContent, navbarItems } from "@/constants/navbar";
import { GradientThemeButton } from "@/components";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="relative z-50 bg-black px-[135px]">
      <div className="flex h-[73px] max-w-screen items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <ZestgeekLogo className="h-[48px] w-auto" />
        </Link>

        <div className="flex h-full items-center gap-10">
          {navbarItems.map((item) => {
            const hasMegaMenu = !!item.megaMenu;
            const isActive = activeMenu === item.title;

            const isSolutions = item.title === "Solutions";
            const isHireUs = item.title === "Hire Us";

            return (
              <div
                key={item.title}
                className="h-full"
                onMouseEnter={() => {
                  if (hasMegaMenu) {
                    setActiveMenu(item.title);
                  }
                }}
              >
                {/* NAV ITEM */}
                <div
                  className={`
                    flex
                    h-full
                    cursor-pointer
                    items-center
                    gap-1
                    text-[16px]
                    font-[500]
                    tracking-[-0.01em]
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-[#6BE234]"
                        : "text-white hover:text-[#6BE234]"
                    }
                  `}
                >
                  {item.href ? (
                    <Link href={item.href}>{item.title}</Link>
                  ) : (
                    <span>{item.title}</span>
                  )}

                  {hasMegaMenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* MEGA MENU */}
                {hasMegaMenu && (
                  <div
                    className={`
                      absolute
                      left-0
                      top-full
                      w-full
                      overflow-hidden
                      bg-black/80
                      backdrop-blur-[90px]
                      transition-all
                      duration-500
                      ease-out
                      ${
                        isActive
                          ? "visible opacity-100"
                          : "invisible pointer-events-none opacity-0"
                      }
                    `}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {/* BACKGROUND GLOW */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute left-[6%] top-[14%] h-[280px] w-[280px] rounded-full bg-[#65ff0030] blur-[120px]" />

                      <div className="absolute left-[32%] top-[18%] h-[300px] w-[300px] rounded-full bg-[#22c55e26] blur-[140px]" />

                      <div className="absolute right-[8%] top-[18%] h-[320px] w-[320px] rounded-full bg-[#16a34a25] blur-[140px]" />

                      <div className="absolute bottom-[-120px] left-[18%] h-[260px] w-[260px] rounded-full bg-[#84cc1620] blur-[130px]" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 mx-auto max-w-screen px-[135px] py-[40px]">
                      <div
                        className="grid gap-[120px]"
                        style={{
                          gridTemplateColumns: `repeat(${item.megaMenu?.sections.length}, minmax(0, 1fr))`,
                        }}
                      >
                        {item?.megaMenu?.sections.map((section, idx) => (
                          <div
                            key={idx}
                            className="flex min-w-[180px] max-w-[200px] flex-col gap-3"
                          >
                            {section.links.map((link) => {

                              return (
                                <Link
                                  key={link.title}
                                  href={link.href || "#"}
                                  className="group block w-fit"
                                >
                                  <div className="space-y-[2px]">
                                    {/* TITLE */}
                                    <h3
                                      className="
                                        text-[16px]
                                        leading-[22px]
                                        font-[500]
                                        tracking-[-0.01em]
                                        text-white
                                        transition-colors
                                        duration-300
                                        group-hover:text-blue-400
                                      "
                                    >
                                      {link.title}
                                    </h3>

                                    {/* SUBTITLE */}
                                    {link.subTitle && (
                                      <p
                                        className="
                                          max-w-[280px]
                                          text-[14px]
                                          leading-[22px]
                                          font-[400]
                                          text-[#A1A1AA]
                                          transition-colors
                                          duration-300
                                        "
                                      >
                                        {link.subTitle}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>

                      {/* BOTTOM CTA */}
                      <div className="mt-[52px] flex items-center justify-between">
                        <p className="text-[15px] font-[400] text-[#E4E4E7]">
                          {NavbarContent.megaMenu.bottomText}
                        </p>

                        <button
                          className="
                            flex
                            h-[50px]
                            items-center
                            justify-center
                            rounded-[6px]
                            border
                            border-white
                            px-8
                            text-[14px]
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:border-white/60
                            hover:bg-white/5
                            cursor-pointer
                          "
                        >
                          {NavbarContent.megaMenu.bottomButtonCtaText}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT CTA */}
        <GradientThemeButton
          innerText="Book Free Consultation"
          className="
            h-[45px]
            w-[261px]
            rounded-[6px]
            px-[30px]
            shadow-[0_0_30px_rgba(101,255,0,0.15)]
          "
          textClassName="text-[15px] font-[600] text-white"
        />
      </div>
    </nav>
  );
};

export { Navbar };