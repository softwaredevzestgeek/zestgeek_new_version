'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Laptop, Smartphone, Cloud, Rocket, TrendingUp } from 'lucide-react';
import ArrowUpRightIcon from '@/public/assets/svgs/arrow_up_right.svg';
import ProdEngineerImg2 from '@/public/assets/images/prod_engineer_img2.png';

// ─── IMAGES ──────────────────────────────────────────────────────────────────
const TAB_IMAGES = {
  web:       ProdEngineerImg2,
  mobile:    ProdEngineerImg2,
  saas:      ProdEngineerImg2,
  mvp:       ProdEngineerImg2,
  marketing: ProdEngineerImg2,
} as const;

// ─── TAB DATA ─────────────────────────────────────────────────────────────────
const tabData = [
  { id: 'web',       icon: Laptop,     title: 'Web Application Development', description: 'Build scalable, high-performance web applications',  badge: null,           alt: 'Web Application Mockup Dashboard'   },
  { id: 'mobile',    icon: Smartphone, title: 'Mobile App Development',       description: 'Create intuitive iOS and Android apps',              badge: null,           alt: 'Mobile & SaaS Overview Dashboard'   },
  { id: 'saas',      icon: Cloud,      title: 'SaaS Development',             description: 'Develop secure and scalable SaaS platforms',         badge: null,           alt: 'SaaS Dashboard Preview'             },
  { id: 'mvp',       icon: Rocket,     title: 'MVP Development',              description: 'Validate and launch your product quickly',           badge: 'Most Popular', alt: 'MVP Product Showcase'               },
  { id: 'marketing', icon: TrendingUp, title: 'Digital Marketing',            description: 'Drive growth with data-driven strategies',           badge: null,           alt: 'Marketing Analytics Dashboard'      },
] as const;

type TabId = typeof tabData[number]['id'];

// ─── LAYOUT CONSTANTS ─────────────────────────────────────────────────────────
// Height of the main (active) image card
const CARD_H = 460;
// Height of the peeking next card shown below
const PEEK_H = 80;
// Gap between active card and peek card
const GAP = 16;
// Total column height = active card + gap + peek
const COL_H = CARD_H + GAP + PEEK_H;

// ─── GLOW GRADIENTS ───────────────────────────────────────────────────────────
function getGlowGradient(index: number, total: number): string {
  if (index === 0)
    return `linear-gradient(to bottom, rgba(140,195,63,0.30) 0%, rgba(140,195,63,0.14) 50%, transparent 100%)`;
  if (index === total - 1)
    return `linear-gradient(to top,   rgba(140,195,63,0.30) 0%, rgba(140,195,63,0.14) 50%, transparent 100%)`;
  return `radial-gradient(ellipse at center, rgba(140,195,63,0.28) 0%, rgba(140,195,63,0.10) 45%, transparent 100%)`;
}

// ─── TAB ROW ──────────────────────────────────────────────────────────────────
function TabRow({ tab, index, total, isActive, onClick }: {
  tab: typeof tabData[number];
  index: number;
  total: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = tab.icon;
  return (
    <div
      className={`relative overflow-hidden transition-transform duration-500 cursor-pointer ${isActive ? 'scale-[1.015]' : 'scale-100'}`}
      onClick={onClick}
    >
      <div
        aria-hidden
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: getGlowGradient(index, total) }}
      />
      <div className="w-full text-left p-[24px] flex items-start gap-4 relative z-10">
        <div className="flex-1 pr-[12px]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0 text-black">
                <Icon className="w-[26px] h-[26px] stroke-[1.8]" />
              </div>
              <span className="text-[18px] text-black font-['Inter'] font-medium leading-tight">{tab.title}</span>
            </div>
            {tab.badge && (
              <span className="text-[10px] font-medium text-[#8CC33F] border border-[#8CC33F] px-1 py-[1px] rounded-full font-['Inter']">
                {tab.badge}
              </span>
            )}
          </div>
          <p className="text-[13px] ml-[38px] text-gray-400 font-medium leading-relaxed font-['Inter'] mt-1">
            {tab.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── IMAGE COLUMN ─────────────────────────────────────────────────────────────
// Layout: active card sits at top (CARD_H tall), peek card shows below with GAP.
// On transition, cards slide up by (CARD_H + GAP) px — one slot at a time.
// smoothValue is the fractional active index (lerped).

function ImageColumn({ smoothValue }: { smoothValue: number }) {
  const slotPx = CARD_H + GAP; // pixels per slot

  return (
    <div className="lg:col-span-7 h-full">
      {/* Clip to exactly the visible area: active card + gap + peek strip */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ height: COL_H }}
      >
        {tabData.map((tab, index) => {
          // Each card's top = index * slotPx, then offset by -smoothValue * slotPx
          const topPx = index * slotPx - smoothValue * slotPx;

          // Scale & opacity: only active card is full; others fade/shrink
          const offset  = index - smoothValue;
          const absOff  = Math.abs(offset);
          const scale   = 1 - Math.min(absOff, 2) * 0.02;
          const opacity = offset < -0.05
            ? 0                                        // above active → hide
            : 1 - Math.min(absOff, 3) * 0.15;        // below → fade gradually

          return (
            <div
              key={tab.id}
              className="absolute left-0 right-0 transform-gpu will-change-transform"
              style={{
                top:       topPx,
                height:    CARD_H,
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                opacity,
                zIndex: 100 - Math.abs(Math.round(offset)),
                transition: 'opacity 0.4s ease',
              }}
            >
              <div className="relative group rounded-2xl overflow-hidden border border-gray-100 shadow-sm w-full h-full bg-white">
                <Image
                  src={TAB_IMAGES[tab.id as TabId]}
                  alt={tab.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
                <div className="absolute top-6 right-6 z-10">
                  <Link
                    href="#explore"
                    className="w-11 h-11 rounded-full bg-transparent border border-[#8CC33F] flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:bg-[#8CC33F]/20"
                  >
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function ProductEngineering() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [smoothValue, setSmoothValue] = useState(0);

  // Animation refs
  const targetRef  = useRef(0);
  const currentRef = useRef(0);
  const rafRef     = useRef<number | null>(null);

  // Scroll control refs
  const isLockedRef    = useRef(false);
  const activeRef      = useRef(0);
  // Gate: true while we're animating to a tab — ignores ALL scroll until done
  const isAnimatingRef = useRef(false);

  const LERP_FACTOR      = 0.10;
  const SETTLE_THRESHOLD = 0.002;

  // ── LERP animation loop ────────────────────────────────────────────────────
  const tick = useCallback(() => {
    const diff = targetRef.current - currentRef.current;
    if (Math.abs(diff) < SETTLE_THRESHOLD) {
      currentRef.current = targetRef.current;
      setSmoothValue(targetRef.current);
      rafRef.current    = null;
      // Animation done — re-open the gate after a short settled pause
      setTimeout(() => { isAnimatingRef.current = false; }, 120);
      return;
    }
    currentRef.current += diff * LERP_FACTOR;
    setSmoothValue(currentRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const startRAF = useCallback(() => {
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const goToTab = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(tabData.length - 1, index));
    if (clamped === activeRef.current && isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    activeRef.current      = clamped;
    targetRef.current      = clamped;
    setActiveIndex(clamped);
    startRAF();
  }, [startRAF]);

  // ── Scroll-lock & hijack ───────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Lock when section is ≥50% visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isLockedRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.5;
      },
      { threshold: 0.5 }
    );
    observer.observe(section);

    const handleWheel = (e: WheelEvent) => {
      if (!isLockedRef.current) return;

      const scrollingDown = e.deltaY > 0;
      const current       = activeRef.current;

      if (scrollingDown && current < tabData.length - 1) {
        // Still tabs to show → always hijack, ignore deltaY magnitude
        e.preventDefault();
        if (isAnimatingRef.current) return; // ignore during animation
        goToTab(current + 1);
        return;
      }

      if (!scrollingDown && current > 0) {
        e.preventDefault();
        if (isAnimatingRef.current) return;
        goToTab(current - 1);
        return;
      }

      // At boundary → let page scroll naturally
    };

    // Touch
    let touchStartY  = 0;
    let touchLocked  = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchLocked = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      const deltaY       = touchStartY - e.touches[0].clientY;
      const scrollingDown = deltaY > 30;  // require 30px threshold
      const scrollingUp   = deltaY < -30;
      const current       = activeRef.current;

      if (scrollingDown && current < tabData.length - 1) {
        e.preventDefault();
        if (touchLocked || isAnimatingRef.current) return;
        touchLocked = true;
        goToTab(current + 1);
        touchStartY = e.touches[0].clientY;
      } else if (scrollingUp && current > 0) {
        e.preventDefault();
        if (touchLocked || isAnimatingRef.current) return;
        touchLocked = true;
        goToTab(current - 1);
        touchStartY = e.touches[0].clientY;
      }
    };

    window.addEventListener('wheel',      handleWheel,      { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true  });
    window.addEventListener('touchmove',  handleTouchMove,  { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel',      handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove',  handleTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [goToTab]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-white via-[#fcfefe] to-[#f4faf6] px-[135px]"
    >
      {/* Ambient blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-4   right-4  w-96 h-96 bg-[#588C0F30] rounded-full opacity-60 blur-[80px]" />
        <div className="absolute bottom-8 left-4  w-52 h-52 bg-[#6A9AB690] rounded-full opacity-60 blur-[80px]" />
      </div>

      <div className="relative z-10 py-[60px]">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#8CC33F] text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-full mb-4 shadow-sm shadow-[#8CC33F]/20 font-kumbh">
            Product Engineering
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight max-w-2xl mx-auto mb-4 relative">
            <div className="bg-[#6A9AB610] h-[30px] w-[280px] rounded-2xl absolute top-3.5 right-18 z-[-1]" />
            Build Scalable Digital Products
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-['Inter'] font-medium">
            We design and develop high-performance web, mobile, and SaaS products that drive business growth.
          </p>
        </div>

        {/* Sticky grid */}
        <div className="sticky top-[60px]">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* LEFT — tab list, height matches active card exactly */}
            <div
              className="lg:col-span-5 bg-white/40 backdrop-blur-sm border border-[#8CC33F40] rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.01)] z-20"
              style={{ height: CARD_H }}
            >
              <div className="flex flex-col divide-y divide-gray-100/70 h-full justify-between">
                {tabData.map((tab, index) => (
                  <TabRow
                    key={tab.id}
                    tab={tab}
                    index={index}
                    total={tabData.length}
                    isActive={activeIndex === index}
                    onClick={() => goToTab(index)}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — image stack with peek */}
            <ImageColumn smoothValue={smoothValue} />
          </div>
        </div>

      </div>
    </section>
  );
}