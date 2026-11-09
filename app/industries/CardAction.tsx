import Link from "next/link";

export default function CardAction() {
  return (
    <section className="py-[48]">
      <div className="card-action__container">
        <div className="flex flex-col items-center p-[57] text-center border border-[var(--primary-color)]/40 rounded-[24] bg-gradient-to-br from-[var(--card-action)] via-[var(--card-action)] to bg-[var(--primary-color)]/15">
          <h2 className="font-bold text-4xl text-white max-sm:text-3xl">
            Your industry could be <span className="text-gradient">next.</span>
          </h2>
          <p className="mt-[12] text-base leading-[24px]">
            Let's craft a digital strategy tailored to your business.
          </p>
          <Link
            href="/contact"
            className="mt-[24] py-[14] px-[28] bg-[var(--primary-color)] rounded-full w-fit flex items-center justify-center gap-[8] text-black font-semibold text-sm transition hover:shadow-[var(--shadow-glow)]"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
