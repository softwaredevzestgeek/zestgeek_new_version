import { AudioLines, Bot, BotMessageSquare, BrainCircuit, Repeat2, SlidersHorizontal, Laptop, Smartphone, Cloud, Rocket, TrendingUp } from "lucide-react";
import ProdEngineerImg2 from '@/public/assets/images/prod_eng_1.png';

export const homeContent = {
  homeHeaderBanner: {
    bannerPrimaryText: 'Get Your MVP Built in Just 5 Days.',
    bannerButtonCtaText: 'Let’s Talk',
  },
  heroSection: {
    capsuleText: 'AI & Product Engineering',
    heroText: 'Build $AI$ Products, SaaS Platforms & Engineering Teams That Scale',
    heroSubText: 'We help startups and growing businesses launch AI solutions, SaaS products, mobile apps, and offshore engineering teams.',
    consultButtonCtaText: 'Book Free Consultation',
    viewCaseStudiesButtonCtaText: 'View Case Studies',
    stats: [{
        count: 1500,
        title: 'Clients'
      },
      {
        count: 50,
        title: 'Technologies Covered'
      },
      {
        count: 27,
        title: 'Countries Served'
      }]
  },
  aiSolutions: {
    capsuleText: 'AI Solutions',
    title: 'AI Solutions That Drive Real Business Outcomes',
    subtitle: 'We help businesses automate workflows, build intelligent systems, and leverage AI to improve efficiency, reduce costs, and scale faster.',
    solutions: [
      {
        icon: BotMessageSquare,
        title: 'AI Chatbots Development',
        description: 'Automate customer support and engagement with intelligent AI chatbots that reduce response time and operational cost.',
      },
      {
        icon: Repeat2,
        title: 'AI Workflow Automation',
        description: 'Leverage AI-powered automation to streamline workflows, eliminate repetitive tasks, improve accuracy, and enhance overall business efficiency.',
      },
      {
        icon: BrainCircuit,
        title: 'LLM Integration',
        description: 'Integrate advanced language models into your product to enable intelligent conversations, automate workflows, and enhance user experience.',
      },
      {
        icon: AudioLines,
        title: 'AI Voice Agent Development',
        description: 'Develop AI voice agents to handle calls, automate interactions, improve customer support, and deliver seamless communication experiences.',
      },
      {
        icon: Bot,
        title: 'Agentic AI Development',
        description: 'Build autonomous AI agents capable of making decisions, executing tasks, optimizing workflows, and driving intelligent business operations.',
      },
      {
        icon: SlidersHorizontal,
        title: 'Model Fine-tuning',
        description: 'Fine-tune AI models with your data to improve accuracy, enhance performance, and deliver more relevant and domain-specific results.',
      },
    ],
  },
  productEngineering: {
    capsuleText: 'Product Engineering',
    title: 'Build Scalable Digital Products',
    subtitle: `We design and develop high-performance web, mobile, and SaaS products that drive business growth.`,
      tabData: [
  {
    id: 'web',
    image_uri: ProdEngineerImg2,
    icon: Laptop,
    title: 'Web Application Development',
    description: 'Build scalable, high-performance web applications',
    badge: null,
    alt: 'Web Application Mockup Dashboard',
  },
  {
    id: 'mobile',
    image_uri: ProdEngineerImg2,
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Create intuitive iOS and Android apps',
    badge: null,
    alt: 'Mobile & SaaS Overview Dashboard',
  },
  {
    id: 'saas',
    image_uri: ProdEngineerImg2,
    icon: Cloud,
    title: 'SaaS Development',
    description: 'Develop secure and scalable SaaS platforms',
    badge: null,
    alt: 'SaaS Dashboard Preview',
  },
  {
    id: 'mvp',
    image_uri: ProdEngineerImg2,
    icon: Rocket,
    title: 'MVP Development',
    description: 'Validate and launch your product quickly',
    badge: 'Most Popular',
    alt: 'MVP Product Showcase',
  },
  {
    id: 'marketing',
    image_uri: ProdEngineerImg2,
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Drive growth with data-driven strategies',
    badge: null,
    alt: 'Marketing Analytics Dashboard',
  },
] 
  },
  testimonials: {
    testimonial_data: [
      {
        id: 1,
        quote: '"We saw a significant improvement in performance and user experience after working with ZestGeek. Highly recommended for serious product development."',
        name: 'David Wilson',
        role: 'CTO, E-commerce Platform',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 2,
        quote: '"ZestGeek helped us launch our AI product faster than expected. Their team understood our vision and delivered a scalable solution without compromising quality."',
        name: 'James Anderson',
        role: 'Founder, SaaS Startup',
        avatarSrc: '',
        rating: 5,
        isFeatured: true
      },
      {
        id: 3,
        quote: '"The team was highly professional and proactive. From planning to execution, everything was smooth and transparent."',
        name: 'Emily Carter',
        role: 'Operations Manager',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 4,
        quote: '"Working with ZestGeek felt like having an in-house engineering team. Communication and delivery were excellent throughout the project."',
        name: 'Arjun Mehta',
        role: 'Product Lead',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 5,
        quote: '"Their expertise in AI and SaaS architecture helped us scale our platform confidently while maintaining performance and reliability."',
        name: 'Sophia Martinez',
        role: 'CEO, AI Solutions',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 6,
        quote: '"The UI/UX improvements delivered by the team significantly boosted engagement and customer satisfaction across our application."',
        name: 'Michael Brown',
        role: 'Head of Product',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 7,
        quote: '"ZestGeek delivered beyond expectations. Their attention to detail and structured workflow made the entire process seamless."',
        name: 'Olivia Johnson',
        role: 'Founder, Fintech Startup',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 8,
        quote: '"From MVP development to deployment, the team handled everything efficiently and kept us updated at every stage."',
        name: 'Daniel Lee',
        role: 'Startup Founder',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 9,
        quote: '"Their development standards and technical guidance helped us modernize our legacy platform successfully."',
        name: 'Sarah Thompson',
        role: 'Technical Director',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 10,
        quote: '"We appreciated their proactive communication and ability to quickly adapt to changing project requirements."',
        name: 'Ethan Walker',
        role: 'Project Manager',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 11,
        quote: '"The collaboration was smooth from start to finish. Their team consistently delivered high-quality work on time."',
        name: 'Isabella Moore',
        role: 'Marketing Technology Lead',
        avatarSrc: '',
        rating: 5
      },
      {
        id: 12,
        quote: '"Their deep understanding of scalable systems and modern technologies gave us confidence throughout the product journey."',
        name: 'Noah Davis',
        role: 'CTO, HealthTech Platform',
        avatarSrc: '',
        rating: 5
      }
    ]
  },
  commonFaqs: {
    capsuleText: 'FAQs',
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about our services, process, and how we help businesses build scalable digital products.',
    faqData: [
      {
        id: 1,
        question: 'How long does it take to build a product?',
        answer: 'Most MVPs are delivered within 4–8 weeks, depending on the scope and complexity. For full-scale platforms, timelines may vary based on features, integrations, and business requirements.',
      },
      {
        id: 2,
        question: 'What services does ZestGeek offer?',
        answer: 'We offer end-to-end digital product engineering services, including Web Application Development, Mobile App Development, SaaS Architecture Development, MVP strategy design, and customized Agentic AI implementations.',
      },
      {
        id: 3,
        question: 'Where can I purchase AlignUI Design System?',
        answer: 'You can purchase the full AlignUI Design System directly via our official platform marketplace. It gives your UI/UX design team a comprehensive toolkit optimized explicitly for Figma environments.',
      },
      {
        id: 4,
        question: 'What are the recent updates and enhancements in AlignUI?',
        answer: 'Our latest version introduces deep Tailwind CSS v4 mapping support, fully native light/dark tokens variables, responsive wireframe scaffolding patterns, and over 150+ predefined semantic component libraries.',
      },
      {
        id: 5,
        question: 'How do I install AlignUI Design System in Figma?',
        answer: 'Simply download the asset source file, open your Figma Workspace, click on "Import File", and upload the file. From there, you can publish it straight to your team library context for fast global usage.',
      },
      {
        id: 6,
        question: 'Can I use AlignUI Design System for commercial projects?',
        answer: 'Yes, absolutely! Every purchased commercial license grants full developer privileges to construct, design, deploy, and scale unlimited client-facing or internal corporate software platforms.',
      },
    ]
  }
}