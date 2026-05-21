export interface MegaMenuLink {
  title: string;
  subTitle?: string;
  href: string | null;
}

export interface MegaMenuSection {
  links: MegaMenuLink[];
}

export interface NavbarItem {
  title: string;
  href?: string;

  megaMenu?: {
    sections: MegaMenuSection[];
  };
}

export const NavbarContent = {
  megaMenu: {
    bottomText: "Not sure where to start? Talk to our experts",
    bottomButtonCtaText: "Talk to an Expert",
  },
};

export const navbarItems: NavbarItem[] = [
  {
    title: "Solutions",

    megaMenu: {
      sections: [
        {
          links: [
            {
              title: "Product Engineering",
              subTitle: "Drive growth with digital marketing",
              href: null,
            },
            {
              title: "Web Application Development",
              subTitle: "Build fast, scalable web applications",
              href: null,
            },
            {
              title: "Mobile App Development",
              subTitle: "Create intuitive iOS & Android apps",
              href: null,
            },
            {
              title: "SaaS Development",
              subTitle: "Launch scalable SaaS platforms",
              href: null,
            },
            {
              title: "MVP Development",
              subTitle: "Validate ideas with rapid MVP builds",
              href: null,
            },
            {
              title: "Digital Marketing",
              subTitle: "Drive growth through modern marketing",
              href: null,
            },
          ],
        },

        {
          links: [
            {
              title: "AI Solutions",
              subTitle: "Streamline operations with AI",
              href: null,
            },
            {
              title: "AI Chatbots",
              subTitle: "Automate customer conversations",
              href: null,
            },
            {
              title: "AI Workflow Automation",
              subTitle: "Automate workflows efficiently",
              href: null,
            },
            {
              title: "LLM Integration",
              subTitle: "Integrate AI language models",
              href: null,
            },
            {
              title: "AI Voice Agent Development",
              subTitle: "Build AI voice call agents",
              href: null,
            },
            {
              title: "Agentic AI Development",
              subTitle: "Create autonomous AI systems",
              href: null,
            },
            {
              title: "Model Fine-tuning",
              subTitle: "Train models with custom data",
              href: null,
            },
          ],
        },

        {
          links: [
            {
              title: "GCC / Offshore",
              subTitle: "Scale offshore engineering teams",
              href: null,
            },
            {
              title: "Scale Engineering Teams",
              subTitle: "Expand development capacity",
              href: null,
            },
            {
              title: "Dedicated Product Teams",
              subTitle: "Build teams aligned to goals",
              href: null,
            },
          ],
        }]
    },
  },

  {
    title: "Hire Us",

    megaMenu: {
      sections: [
      {
        links: [
          {
            title: "AI / ML",
            subTitle: "",
            href: null,
          },
          {
            title: "AI Engineers",
            href: null,
          },
          {
            title: "LLM Engineers",
            href: null,
          },
        ],
      },

      {
        links: [
          {
            title: "Mobile",
            subTitle: "",
            href: null,
          },
          {
            title: "Android",
            href: null,
          },
          {
            title: "iOS",
            href: null,
          },
          {
            title: "React Native",
            href: null,
          },
        ],
      },

      {
        links: [
          {
            title: "Frontend",
            subTitle: "",
            href: null,
          },
          {
            title: "React.js",
            href: null,
          },
          {
            title: "Next.js",
            href: null,
          },
          {
            title: "Angular",
            href: null,
          },
        ],
      },

      {
        links: [
          {
            title: "Backend",
            subTitle: "",
            href: null,
          },
          {
            title: "PHP",
            href: null,
          },
          {
            title: "Python",
            href: null,
          },
          {
            title: "Node.js",
            href: null,
          },
        ],
      },

      {
        links: [
          {
            title: "Ecommerce & CMS",
            subTitle: "",
            href: null,
          },
          {
            title: "WordPress",
            href: null,
          },
          {
            title: "Shopify",
            href: null,
          },
          {
            title: "Magento",
            href: null,
          },
        ],
      },
    ],
    },
  },

  {
    title: "Industries",
    href: "/industries",
  },

  {
    title: "Case Studies",
    href: "/case-studies",
  },

  {
    title: "About",
    href: "/about",
  },
];