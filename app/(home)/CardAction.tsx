import Link from "next/link";

export default function CardAction() {
  return (
    <section className="py-28">
      <div className="flex justify-center action-form__container">
        <div className="max-w-7xl w-full relative flex flex-col text-center items-center overflow-hidden p-[65] max-sm:p-[40] border border-[var(--primary-color)]/40 rounded-[24] bg-gradient-to-br from-[var(--card-action)] via-[var(--card-action)] to bg-[var(--primary-color)]/10">
          <div className="absolute size-96 -top-32 left-1/2 -translate-x-1/2 blur-3xl bg-[var(--primary-color)]/30 rounded-full"></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M16 7h6v6"></path>
            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
          </svg>

          <h2 className="z-10 mt-[16] font-bold text-5xl w-full text-white max-sm:text-3xl">
            Ready to grow with <span className="text-gradient">The Digitx?</span>
          </h2>

          <p className="z-10 mt-[17] text-base leading-[24px] max-w-xl">
            Let's talk about your business and explore how we can help you reach
            the right customers.
          </p>

          <Link
            href="/contact"
            className="mt-[33] pl-[32] pr-[32] flex h-12 gap-[8] justify-center items-center bg-[var(--primary-color)] font-semibold text-sm rounded-full text-black hover:glow-effect-lg"
          >
            Book a Free Consultation
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
      </div>
    </section>
  );
}
