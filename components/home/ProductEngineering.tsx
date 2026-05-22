'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpRightIcon from '@/public/assets/svgs/arrow_up_right.svg';
import { homeContent } from '@/constants/home';

const tabData = homeContent.productEngineering.tabData;

type TabItem = (typeof tabData)[number];

const CARD_H = 460;
const PEEK_H = 80;
const GAP = 16;

const COL_H = CARD_H + GAP + PEEK_H;

const SCROLL_PER_TAB = 300;

const SENTINEL_EXTRA_H =
  (tabData.length - 1) * SCROLL_PER_TAB;

const IMAGE_LERP = 0.18;

const IMAGE_OPACITY_TRANSITION =
  'opacity 0.22s ease-out';

const SNAP_LOCK_MS = 520;

function getGlowGradient(
  index: number,
  total: number,
): string {
  if (index === 0) {
    return `linear-gradient(
      to bottom,
      rgba(140,195,63,0.30) 0%,
      rgba(140,195,63,0.14) 50%,
      transparent 100%
    )`;
  }

  if (index === total - 1) {
    return `linear-gradient(
      to top,
      rgba(140,195,63,0.30) 0%,
      rgba(140,195,63,0.14) 50%,
      transparent 100%
    )`;
  }

  return `radial-gradient(
    ellipse at center,
    rgba(140,195,63,0.28) 0%,
    rgba(140,195,63,0.10) 45%,
    transparent 100%
  )`;
}

function TabRow({
  tab,
  index,
  total,
  isActive,
  onClick,
}: {
  tab: TabItem;
  index: number;
  total: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = tab.icon;

  return (
    <div
      className={`relative overflow-hidden transition-transform duration-500 cursor-pointer ${isActive ? 'scale-[1.015]' : 'scale-100'
        }`}
      onClick={onClick}
    >
      <div
        aria-hidden
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          background: getGlowGradient(index, total),
        }}
      />

      <div className="w-full text-left p-[24px] flex items-start gap-4 relative z-10">
        <div className="flex-1 pr-[12px]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0 text-black">
                <Icon className="w-[26px] h-[26px] stroke-[1.8]" />
              </div>

              <span className="text-[18px] text-black font-['Inter'] font-medium leading-tight">
                {tab.title}
              </span>
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

function ImageColumn({
  smoothValue,
}: {
  smoothValue: number;
}) {
  const slotPx = CARD_H + GAP;

  return (
    <div className="lg:col-span-7 h-full">
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ height: COL_H }}
      >
        {tabData.map((tab, index) => {
          const topPx =
            index * slotPx - smoothValue * slotPx;

          const offset = index - smoothValue;

          const absOff = Math.abs(offset);

          const scale =
            1 - Math.min(absOff, 2) * 0.02;

          const opacity = 1 - Math.min(absOff, 1.5) * 0.35;

          return (
            <div
              key={tab.id}
              className="absolute left-0 right-0 transform-gpu will-change-transform"
              style={{
                top: topPx,
                height: CARD_H,
                transform: `translateZ(0) scale(${scale})`,
                transformOrigin: 'top center',
                opacity,
                zIndex: 100 - Math.abs(Math.round(offset)),
                transition: IMAGE_OPACITY_TRANSITION,
              }}
            >
              <div className="relative group rounded-2xl overflow-hidden border border-gray-100 shadow-sm w-full h-full bg-[#0f172a]">
                <Image
                  src={tab.image_uri}
                  alt={tab.alt}
                  fill
                  className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.01]"
                  priority={index === 0}
                  loading="eager"
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

export function ProductEngineering() {
  const sentinelRef =
    useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [smoothValue, setSmoothValue] =
    useState(0);

  const targetRef = useRef(0);

  const currentRef = useRef(0);

  const rafRef = useRef<number | null>(null);

  // prevents multi-card skipping
  const isAnimatingRef = useRef(false);

  // touch support
  const touchStartYRef = useRef(0);

  // latest index ref
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // ─────────────────────────────────────────────────────────────
  // IMAGE INTERPOLATION
  // ─────────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    const diff =
      targetRef.current - currentRef.current;

    if (Math.abs(diff) < 0.0015) {
      currentRef.current = targetRef.current;

      setSmoothValue(targetRef.current);

      rafRef.current = null;

      return;
    }

    currentRef.current += diff * IMAGE_LERP;

    setSmoothValue(currentRef.current);

    rafRef.current =
      requestAnimationFrame(tick);
  }, []);

  const startRAF = useCallback(() => {
    if (rafRef.current === null) {
      rafRef.current =
        requestAnimationFrame(tick);
    }
  }, [tick]);

  // ─────────────────────────────────────────────────────────────
  // MAIN NAVIGATION
  // ─────────────────────────────────────────────────────────────
  const goToTab = useCallback(
    (
      nextIndex: number,
      smoothScroll = true,
    ) => {
      const sentinel = sentinelRef.current;

      if (!sentinel) return;

      const clamped = Math.max(
        0,
        Math.min(
          tabData.length - 1,
          nextIndex,
        ),
      );

      // hard lock immediately
      isAnimatingRef.current = true;

      setActiveIndex(clamped);

      targetRef.current = clamped;

      startRAF();

      const sentinelTop =
        sentinel.getBoundingClientRect().top +
        window.scrollY;

      const targetScrollY =
        sentinelTop +
        clamped * SCROLL_PER_TAB;

      console.log("sentinelTop: ", sentinelTop)
      console.log("TARGET clamped: ", clamped)
      console.log("TARGET SCROLL: ", targetScrollY)

      window.scrollTo({
        top: targetScrollY,
        behavior: smoothScroll
          ? 'smooth'
          : 'auto',
      });

      // unlock AFTER scroll settles
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, SNAP_LOCK_MS);
    },
    [startRAF],
  );

  // ─────────────────────────────────────────────────────────────
  // TAB CLICK
  // ─────────────────────────────────────────────────────────────
  const handleTabClick = useCallback(
    (index: number) => {
      if (isAnimatingRef.current) return;

      goToTab(index);
    },
    [goToTab],
  );

  // ─────────────────────────────────────────────────────────────
  // HARD SNAP WHEEL
  // THIS FIXES MULTI IMAGE SKIP
  // ─────────────────────────────────────────────────────────────
  // ─── constants (top of file) ───────────────────────────────────
  const SNAP_LOCK_MS = 1200;
  const WHEEL_COOLDOWN_MS = 900;

  // ─── inside ProductEngineering() ──────────────────────────────
  const lastWheelHandledRef = useRef(0);

  // ─── replace your handleWheel useEffect ───────────────────────
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const sentinel = sentinelRef.current;
      if (!sentinel) return;

      const rect = sentinel.getBoundingClientRect();
      const isInsideSection =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isInsideSection) return;

      const now = Date.now();
      const sinceLastHandled = now - lastWheelHandledRef.current;

      // block during animation OR within cooldown window after last handled event
      if (isAnimatingRef.current || sinceLastHandled < WHEEL_COOLDOWN_MS) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const current = activeIndexRef.current;
      const nextIndex = current + direction;

      if (nextIndex < 0 || nextIndex > tabData.length - 1) return;

      e.preventDefault();
      e.stopPropagation();
      lastWheelHandledRef.current = Date.now(); // stamp before navigating
      goToTab(nextIndex);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goToTab]);

  // ─────────────────────────────────────────────────────────────
  // TOUCH SNAP
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleTouchStart = (
      e: TouchEvent,
    ) => {
      touchStartYRef.current =
        e.touches[0].clientY;
    };

    const handleTouchEnd = (
      e: TouchEvent,
    ) => {
      const sentinel = sentinelRef.current;

      if (!sentinel) return;

      const rect =
        sentinel.getBoundingClientRect();

      const isInsideSection =
        rect.top <= 0 &&
        rect.bottom >= window.innerHeight;

      if (!isInsideSection) return;

      if (isAnimatingRef.current) return;

      const endY =
        e.changedTouches[0].clientY;

      const delta =
        touchStartYRef.current - endY;

      if (Math.abs(delta) < 40) return;

      const direction =
        delta > 0 ? 1 : -1;

      const nextIndex =
        activeIndexRef.current +
        direction;

      if (
        nextIndex < 0 ||
        nextIndex > tabData.length - 1
      ) {
        return;
      }

      goToTab(nextIndex);
    };

    window.addEventListener(
      'touchstart',
      handleTouchStart,
      {
        passive: true,
      },
    );

    window.addEventListener(
      'touchend',
      handleTouchEnd,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        'touchstart',
        handleTouchStart,
      );

      window.removeEventListener(
        'touchend',
        handleTouchEnd,
      );
    };
  }, [goToTab]);

  return (
    <div
      ref={sentinelRef}
      style={{
        height: `calc(100vh + ${SENTINEL_EXTRA_H}px)`,
      }}
      className="relative w-full"
    >
      <div className="sticky top-0 w-full bg-gradient-to-br from-white via-[#fcfefe] to-[#f4faf6] px-[135px] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-4 right-4 w-96 h-96 bg-[#588C0F30] rounded-full opacity-60 blur-[80px]" />

          <div className="absolute bottom-8 left-4 w-52 h-52 bg-[#6A9AB690] rounded-full opacity-60 blur-[80px]" />
        </div>

        <div className="relative z-10 py-[60px]">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#8CC33F] text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-full mb-4 shadow-sm shadow-[#8CC33F]/20 font-kumbh">
              Product Engineering
            </span>

            <h2 className="text-[32px] font-semibold text-[#0f172a] tracking-tight max-w-2xl mx-auto mb-4 relative">
              <div className="bg-[#6A9AB610] h-[30px] w-[240px] rounded-2xl absolute top-3.5 right-[110] z-[-1]" />
              Build Scalable Digital Products
            </h2>

            <p className="text-[16px] text-gray-500 max-w-2xl mx-auto leading-relaxed font-['Inter'] font-medium">
              We design and develop
              high-performance web, mobile,
              and SaaS products that drive
              business growth.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div
              className="lg:col-span-5 bg-white/40 backdrop-blur-sm border border-[#8CC33F40] rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.01)] z-20"
              style={{ height: CARD_H }}
            >
              <div className="flex flex-col divide-y divide-gray-100/70 h-full justify-between">
                {tabData.map((tab, index) => {
                  return (
                    <TabRow
                      key={tab.id}
                      tab={tab}
                      index={index}
                      total={tabData.length}
                      isActive={
                        activeIndex === index
                      }
                      onClick={() =>
                        handleTabClick(index)
                      }
                    />
                  );
                })}
              </div>
            </div>

            <ImageColumn
              smoothValue={smoothValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}