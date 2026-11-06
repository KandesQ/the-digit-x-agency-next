import Link from "next/link";

export default function CardAction() {
  return (
    <section className="py-[160]">
      <div className="flex flex-col text-center items-center card-action__container">
        <span className="uppercase font-semibold text-xs leading-[16px] tracking-[2.4px] text-[var(--primary-color)]">
          Packages
        </span>
        <h2 className="mt-[12] font-bold text-5xl leading-15 tracking-[-0.96px] text-white max-md:text-4xl max-sm:text-3xl">
          Looking For A <span className="text-gradient">Complete Plan?</span>
        </h2>
        <p className="mt-[16] text-lg leading-[1.625]">
          We bundle our most requested services into flexible packages for every
          stage of growth.
        </p>
        <Link href="/packages" className="mt-[40] text-black text-sm font-semibold py-[14px] px-[28px] rounded-full bg-[var(--primary-color)] w-fit flex items-center gap-[8] hover:glow-effect-lg hover:-translate-y-0.5 transition-all duration-300 shadow-[var(--shadow-glow)]">
          View Packages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
