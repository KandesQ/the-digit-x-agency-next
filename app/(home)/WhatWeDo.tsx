import Link from "next/link";

export default function WhatWeDo() {
  const bulletsInfo = [
    {
      id: 1,
      title: "SEO Services",
      description: "Local and technical SEO that ranks you on Google.",
      linkPath: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      title: "Google Ads",
      description:
        "Search, Performance Max and YouTube campaigns that convert.",
      linkPath: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      id: 3,
      title: "Social Media Marketing",
      description:
        "Reels, content and community management that grows your brand.",
      linkPath: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      id: 4,
      title: "Website Development",
      description:
        "Fast, SEO-ready websites built to convert visitors into customers.",
      linkPath: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
        "Logo, identity and brand systems that feel premium and trustworthy.",
      linkPath: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      description: "Full-funnel paid media engineered for measurable ROAS.",
      linkPath: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
  ];

  return (
    <section className="py-28 max-sm:py-20">
      <div className="flex flex-col items-center what-we-do__container">
        <span className="uppercase text-xs font-semibold leading-[16px] tracking-[2.4px] text-[var(--primary-color)]">
          What We Do
        </span>

        <h2 className="mt-[9] text-white font-bold text-center text-5xl leading-[1.25] tracking-[-0.96px] max-w-3xl max-md:text-4xl max-sm:text-3xl">
          Digital Marketing Services{" "}
          <span className="text-gradient">Built To Grow Your Brand</span>
        </h2>

        <p className="mt-[16] text-lg text-center leading-[29.3px] max-w-3xl max-sm:text-base">
          Explore the services that help Thoothukudi and Tamil Nadu businesses
          get found, get followed and get chosen.
        </p>

        <ul className="mt-[50] max-w-[1240px] grid grid-cols-3 w-full gap-[20] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {bulletsInfo.map((bulletInfo) => (
            <li
              key={bulletInfo.id}
              className="p-[24] group border border-[var(--border-color)] rounded-[16] hover:border-[var(--primary-color)]/60 transition-all hover:-translate-y-1"
            >
              <div className="p-[12] w-fit rounded-[16] bg-[var(--primary-color)]/10 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] transition-all group-hover:text-black">
                {bulletInfo.icon}
              </div>

              <h3 className="mt-[16] font-semibold text-lg leading-[28px] tracking-[-0.36px] text-white">
                {bulletInfo.title}
              </h3>

              <p className="mt-[9] text-sm leading-[22.8px]">
                {bulletInfo.description}
              </p>

              <Link className="mt-[19] group/link text-[var(--primary-color)] flex items-center gap-[4]" href={bulletInfo.linkPath}>
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
