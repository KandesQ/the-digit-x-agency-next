"use client";

import { ReactNode, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Service = {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  linkPath: string;
  icon: ReactNode;
};

export default function Services() {
  const servicesInfo: Service[] = [
    {
      id: 1,
      title: "SEO Services",
      description:
        "Show up where customers are searching. We make your business easy to find on Google.",
      benefits: [
        "Keyword Research",
        "On Page SEO",
        "Technical Audit",
        "Local Visibility",
      ],
      linkPath: "/seo-services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m21 21-4.34-4.34"></path>
          <circle cx="11" cy="11" r="8"></circle>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description:
        "Stay visible where your audience already spends time. Consistent content that builds trust.",
      benefits: [
        "Content Planning",
        "Daily Posting",
        "Community Reply",
        "Monthly Reports",
      ],
      linkPath: "/social-media-marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
          <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
          <path d="M8 6v8"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Google Ads",
      description:
        "Search, Performance Max and YouTube campaigns that turn high-intent clicks into customers.",
      benefits: ["Search Ads", "Performance Max", "Lead Forms", "Remarketing"],
      linkPath: "/google-ads",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Website Development",
      description:
        "Fast, premium websites that turn visitors into customers and look great on every device.",
      benefits: [
        "UI and UX Design",
        "Mobile First",
        "SEO Ready",
        "Lightning Fast",
      ],
      linkPath: "/website-development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Branding",
      description:
        "Identity and design that helps customers recognise you and feel premium from day one.",
      benefits: [
        "Logo Design",
        "Brand Identity",
        "Style Guide",
        "Marketing Collateral",
      ],
      linkPath: "/branding",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Performance Marketing",
      description:
        "Full-funnel paid media engineered for measurable leads, revenue and return on ad spend.",
      benefits: [
        "Meta Ads",
        "Google Ads",
        "Creative Testing",
        "ROAS Reporting",
      ],
      linkPath: "/performance-marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      id: 7,
      title: "Content Creation",
      description:
        "Reels, photos and copy that get watched, saved and shared by the right people.",
      benefits: [
        "Reels and Shorts",
        "Photography",
        "Copywriting",
        "Trend Research",
      ],
      linkPath: "/content-creation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
          <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
          <path d="m2.3 2.3 7.286 7.286"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
    },
    {
      id: 8,
      title: "Video Editing",
      description:
        "Cinematic edits, reels and brand films that make your story scroll-stopping.",
      benefits: [
        "Reels and Shorts",
        "Brand Films",
        "Motion Graphics",
        "Colour Grading",
      ],
      linkPath: "/video-editing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
          <rect x="2" y="6" width="14" height="12" rx="2"></rect>
        </svg>
      ),
    },
    {
      id: 9,
      title: "Advertisement Campaigns",
      description:
        "End-to-end ad campaigns across Meta, Google and YouTube built for measurable ROI.",
      benefits: ["Meta Ads", "Google Ads", "Ad Creatives", "Landing Pages"],
      linkPath: "/advertisement-campaigns",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
          <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
        </svg>
      ),
    },
    {
      id: 10,
      title: "Influencer Marketing",
      description:
        "Creator-led campaigns across Tamil Nadu that build real trust and drive conversions.",
      benefits: [
        "Creator Discovery",
        "Contracts",
        "Content Approvals",
        "Performance",
      ],
      linkPath: "/influencer-marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
      ),
    },
  ];

  const pathName = usePathname();

  useEffect(() => {
    const revealingElements = document.querySelectorAll(
      ".reveal:not(.reveal-in)",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    revealingElements.forEach((el) => observer.observe(el));

    return () => {

        revealingElements.forEach(el => {
            el.classList.remove("reveal-in")
        })

      observer.disconnect();
    };
  }, [pathName]);

  return (
    <section className="pb-[80px]">
      <div className="flex flex-col items-center w-full max-w-[1280px] mx-auto px-[20px]">
        <h2 className="reveal capitalize font-bold text-4xl text-center text-white max-sm:text-3xl">
          What We <span className="text-gradient">Offer</span>
        </h2>

        <ul className="mt-[40px] grid grid-cols-3 gap-[20] w-full max-lg:grid-cols-2 max-md:grid-cols-1">
          {servicesInfo.map((serviceInfo, index) => (
            <li
              key={serviceInfo.id}
              style={{ transitionDelay: `${index * 40}ms` }}
              className="
              reveal
              relative
              transition-all 
              duration-500 
              group p-[30px]
              rounded-[16px] border border-[var(--border-color)] w-full hover:border-[var(--primary-color)]/60 hover:glow-effect-lg hover:rotate-[0.5deg] hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 -z-10 rounded-[16px] bg-gradient-to-br from-[var(--primary-color)]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity
                "
              ></div>

              <div className="flex items-center gap-[16]">
                <div className="relative">
                  <div className="absolute inset-0 blur-2xl rounded-[16px] bg-[var(--primary-color)]/70" />

                  <div
                    style={{ animationDelay: `${index * 0.4}s` }}
                    className="relative flex justify-center items-center w-fit p-[14px] rounded-[16px] bg-[var(--primary-color)]/10 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] transition-all duration-500 group-hover:text-black group-hover:scale-110 animate-floating"
                  >
                    {serviceInfo.icon}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-xs">
                    {serviceInfo.id != 10 ? `0` : ``}
                    {serviceInfo.id}
                  </div>
                  <h4 className="font-bold text-xl text-white tracking-[-0.4px]">
                    {serviceInfo.title}
                  </h4>
                </div>
              </div>

              <p className="mt-[17px] text-sm leading-[var(--leading-relaxed)]">
                {serviceInfo.description}
              </p>

              <ServiceBenefits benefitList={serviceInfo.benefits} />

              <Link
                className="mt-[24px] font-semibold text-sm group/link text-[var(--primary-color)] flex items-center gap-[4]"
                href={serviceInfo.linkPath}
              >
                Learn more{" "}
                <svg
                  className="transition-transform group-hover/link:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33325 8H12.6666"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  />
                  <path
                    d="M8 3.33331L12.6667 7.99998L8 12.6666"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type ServiceBenefitsProps = {
  benefitList: string[];
};

function ServiceBenefits({ benefitList }: ServiceBenefitsProps) {
  return (
    <ul className="mt-[20px] grid grid-cols-2 w-full gap-y-[8px]">
      {benefitList.map((benefit, index) => (
        <li key={benefit} className="flex gap-[8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>

          <span className="text-xs">{benefit}</span>
        </li>
      ))}
    </ul>
  );
}
