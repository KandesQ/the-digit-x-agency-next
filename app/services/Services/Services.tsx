import Link from "next/link";

import { servicesInfo } from "./services.data";


export default function Services() {

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
      {benefitList.map((benefit) => (
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
