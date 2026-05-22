'use client'

import Image from 'next/image';
import DockerIcon from "@/public/assets/images/docker.png"
import ReactIcon from "@/public/assets/images/reactjs.png"
import NextjsIcon from "@/public/assets/images/nextjs.png"
import TailwindIcon from "@/public/assets/images/tailwind.png"
import PrismaIcon from "@/public/assets/images/prisma.png"
import PythonIcon from "@/public/assets/images/python.png"
import FastapiIcon from "@/public/assets/images/fastapi.png"
import PytorchIcon from "@/public/assets/images/pytorch.png"

const technologyLogos = [
  { id: 1, src: DockerIcon,   alt: "Docker Logo"       },
  { id: 2, src: ReactIcon,    alt: "React Logo"        },
  { id: 3, src: NextjsIcon,   alt: "Next.js Logo"      },
  { id: 4, src: TailwindIcon, alt: "Tailwind CSS Logo" },
  { id: 6, src: PrismaIcon,   alt: "Prisma Logo"       },
  { id: 7, src: PythonIcon,   alt: "Python Logo"       },
  { id: 8, src: FastapiIcon,  alt: "FastAPI Logo"      },
  { id: 9, src: PytorchIcon,  alt: "PyTorch Logo"      },
];

function LogoRow({ prefix }: { prefix: string }) {
  return (
    <div className="flex items-center gap-16 px-8">
      {technologyLogos.map((logo) => (
        <div
          key={`${prefix}-${logo.id}`}
          className="w-14 h-14 relative flex-shrink-0 flex items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="56px"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export function TrustedPartners() {
  return (
    <section className="relative w-full bg-[#fcfdfd] py-[100px] flex flex-col items-center justify-center overflow-hidden">

      <div className="absolute bottom-[-80px] right-[-20px] w-90 h-45 bg-[#6A9AB6] rounded-full opacity-60 blur-[130px] pointer-events-none" />

      <div className="w-full mx-auto text-center relative z-10 flex flex-col items-center">

        {/* Badge */}
        <div className="mb-4">
          <span className="inline-block bg-[#8CC33F] text-white text-[14px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm shadow-[#8CC33F]/20 font-kumbh">
            Trusted by Clients & Partners
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] font-semibold text-[#0f172a] tracking-tight mb-[14px] font-kumbh relative inline-block">
          <div className="bg-[#6A9AB610] h-[30px] w-[240px] rounded-2xl absolute top-[14px] left-[18.5%] z-[-1]" />
          Building Digital Products with Modern Teams
        </h2>

        {/* Subtitle */}
        <h3 className="text-[18px] font-semibold text-gray-500 leading-snug font-['Inter'] mb-[12px]">
          Trusted for AI, SaaS, and scalable product engineering solutions.
        </h3>

      </div>

      {/* Marquee */}
      <div className="w-full relative mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee-seamless items-center">
          <LogoRow prefix="a" />
          <LogoRow prefix="b" />
          <LogoRow prefix="c" />
        </div>
      </div>

    </section>
  );
}