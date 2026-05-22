'use client'
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
//   Facebook, 
//   Instagram, 
//   Linkedin, 
//   Youtube,
  HelpCircle, // Using a generic fallback for Pinterest if needed, or see custom setup below
  MapPinned,
  PhoneCall
} from 'lucide-react';
import ZestgeekLogo from "@/public/assets/svgs/zestgeek_logo_2.svg";
import UpworkkLogo from "@/public/assets/images/upwork_logo.png";
import GuruLogo from "@/public/assets/images/guru_logo.png";


// Custom X (formerly Twitter) SVG Icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Pinterest SVG Icon component
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.947-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.211-.174.256-.402.151-1.504-.699-2.443-2.895-2.443-4.661 0-3.794 2.753-7.277 7.946-7.277 4.173 0 7.414 2.974 7.414 6.953 0 4.155-2.621 7.508-6.261 7.508-1.222 0-2.374-.635-2.765-1.377l-.756 2.872c-.273 1.055-.1 2.376-.156 2.451-.059.08-.114.1-.114.01 0-.115-.125-.375-.125-.375l-.543-2.074s-.211-.8-.211-.8c-.14-.52-.315-1.18-.315-1.18z" />
  </svg>
);

// Mapable Contact Header Blocks
const contactBlocks = [
  {
    id: 1,
    icon: MapPinned,
    title: 'Find us',
    details: 'F-539, 3rd Floor, Mohali Tower, Phase 8B, Industrial Area, Sector 74, Mohali (Punjab)',
  },
  {
    id: 2,
    icon: PhoneCall,
    title: 'Call us',
    details: '+91 99885 34287, +91 99885 53766',
  },
  {
    id: 3,
    icon: Mail,
    title: 'Mail us',
    details: 'info@zestgeek.com',
  },
];

// Mapable Footer Link Matrices
const footerMenuLinks = {
  solutions: [
    { label: 'AI Solutions', href: '#icon' },
    { label: 'SaaS Development', href: '#saas' },
    { label: 'Product Engineering', href: '#product' },
    { label: 'Dedicated Teams', href: '#teams' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Contact Us', href: '#contact' },
  ],
  resources: [
    { label: 'Blogs', href: '#blogs' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Privacy Policy', href: '#privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white via-[#f4faf7]/30 to-[#eaf5ef]/40 pt-[50px] px-[135px] border-t border-gray-100 font-sans">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Top Segment: Core Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-200/60">
          {contactBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.id} className="flex gap-3 items-start group">
                {/* Icon Circle Container */}
                <div className="">
                  <Icon className="w-[30px] h-[30px] stroke-[1.5] text-[#6A9AB6]" />
                </div>
                {/* Text Block */}
                <div className="flex flex-col text-left">
                  <h4 className="text-[18px] font-bold text-[#0f172a] font-['Inter'] mb-2">
                    {block.title}
                  </h4>
                  <p className="text-[14px] text-[#98989A] font-normal font-['Inter'] leading-relaxed">
                    {block.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle Segment: Company Taxonomy & Platform Portals */}
        <div className="flex flex-row gap-4 my-10 justify-between">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="relative h-fit w-fit mb-6 flex items-center justify-center">
              <ZestgeekLogo />
            </div>
            
            <h5 className="text-[14px] font-medium text-[#0f172a] font-kumbh mb-2  line-clamp-2">
              Building scalable AI products for global businesses.
            </h5>
            <p className="text-[12px] text-[#040505] font-normal font-['Inter'] leading-relaxed">
              We turn ideas into high-performance digital solutions.
            </p>
          </div>

          {/* Solutions Column Menu */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[16px] font-medium text-[#000000] font-['Inter'] mb-4 tracking-tight ">
              Solutions
            </h4>
            <ul className="space-y-3.5">
              {footerMenuLinks.solutions.map((link, idx) => (
                <li key={idx} className='mb-[18px]'>
                  <a href={link.href} className="text-[14px] text-[#98989A] hover:text-[#8CC33F] font-medium font-['Inter'] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column Menu */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[16px] font-medium text-[#000000] font-['Inter'] mb-4 tracking-tight ">
              Company
            </h4>
            <ul className="space-y-3.5">
              {footerMenuLinks.company.map((link, idx) => (
                <li key={idx} className='mb-[18px]'>
                  <a href={link.href} className="text-[13px] md:text-[14px] text-gray-400 hover:text-[#8CC33F] font-medium font-['Inter'] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column Menu */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[16px] font-medium text-[#000000] font-['Inter'] mb-4 tracking-tight ">
              Resources
            </h4>
            <ul className="space-y-3.5">
              {footerMenuLinks.resources.map((link, idx) => (
                <li key={idx} className='mb-[18px]'>
                  <a href={link.href} className="text-[13px] md:text-[14px] text-gray-400 hover:text-[#8CC33F] font-medium font-['Inter'] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire & Social External Integrations Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            
            {/* Hire platforms segment */}
            <div className='flex flex-col'>
              <h4 className="text-[16px] font-medium text-[#0f172a] font-['Inter'] mb-2 tracking-tight">
                Hire Us On
              </h4>
              <div className="flex flex-row items-center gap-2">
                <span className=''><Image className='w-[113px] h-[43px]' src={UpworkkLogo} alt="Upwork" /></span>
                <span className='w-[113px] h-[43px]'><Image className='h-full w-full' src={GuruLogo} alt="Upwork" /></span>
              </div>
            </div>

            {/* Social channels segment */}
            <div>
              <h4 className="text-[16px] font-medium text-[#000000] font-['Inter'] mb-5 tracking-tight">
                Follow Us On
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Phone, href: '#fb' },
                  { icon: Phone, href: '#ig' },
                  { icon: XIcon, href: '#x' },
                  { icon: Phone, href: '#in' },
                  { icon: PinterestIcon, href: '#pin' },
                  { icon: Phone, href: '#yt' },
                ].map((social, idx) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-8 h-8 rounded-full border border-gray-200 text-gray-400 bg-white flex items-center justify-center hover:text-white hover:bg-[#8CC33F] hover:border-transparent transition-all duration-300"
                    >
                      <SocialIcon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Segment: Copyright Notice Label */}
        <div className="w-full py-5 border-t border-gray-200/50 text-center">
          <p className="text-[14px] text-[#040505] font-normal font-['Inter']">
            © 2026 ZestGeek. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}