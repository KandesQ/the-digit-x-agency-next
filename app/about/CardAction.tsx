import Link from "next/link";

export default function CardAction() {
  return (
    <section className="py-[80]">
      <div className="card-action__container">
        <div className="flex flex-col items-center p-[57] text-center border border-[var(--primary-color)]/40 rounded-[24] bg-gradient-to-br from-[var(--card-action)] via-[var(--card-action)] to bg-[var(--primary-color)]/15">
          <h2 className="font-bold text-4xl text-white max-sm:text-3xl">Want to work with us?</h2>
          <p className="mt-[12] text-base leading-[24px]">Let's create something memorable together.</p>
          <Link href="/contact"
          className="mt-[24] py-[14] px-[28] bg-[var(--primary-color)] rounded-full w-fit flex items-center justify-center gap-[8] text-black font-semibold text-sm hover:glow-effect-lg">
            Start a Project
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
