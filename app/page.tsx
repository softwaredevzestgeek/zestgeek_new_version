'use server'

import { HomeHeaderBanner, HeroSection,AiSolutions, ProductEngineering,HowWeWork,MessageFromOurFounder, TrustedPartners, CaseStudies, Testimonials,WhyChooseUs, FrequentlyAskedQuestions } from "@/components";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     <HomeHeaderBanner />
     <HeroSection />
     <AiSolutions />
     <ProductEngineering/>
     <HowWeWork/>
     <MessageFromOurFounder/>
     <TrustedPartners/>
     <CaseStudies/>
     <Testimonials/>
     <WhyChooseUs/>
     <FrequentlyAskedQuestions />
    </div>
  );
}
