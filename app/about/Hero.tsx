export default function Hero() {
  return (
    <section className="relative py-[132]">
      
      <div className="absolute inset-0 -z-10 max-sm:overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  size-[448] max-sm:size-[320] bg-[var(--primary-color)]/20 blur-3xl rounded-full" />
        <div className="absolute size-24 max-sm:size-20 top-[12%] left-[8%] rounded-2xl border border-[var(--primary-color)]/40 bg-[var(--primary-color)]/10 backdrop-blur-sm rotate-12 animate-floating" />
        <div className="absolute bottom-[18%] left-[14%] size-[80] max-sm:size-[64] rotate-44 border border-[var(--primary-color)]/40 animate-floating" />
        <div className="absolute size-[128] top-[20%] right-[10%] max-sm:size-[96] rounded-full border border-[var(--primary-color)]/40 animate-floating" />
        <div className="absolute size-[112] bottom-[14%] right-[18%] max-sm:size-[96] rounded-3xl bg-gradient-to-br from-[var(--primary-color)]/30 to-transparent blur-md animate-floating" />
      </div>

      <div className="flex flex-col items-center text-center hero__container">
        <span className="uppercase font-semibold text-xs leading-[16px] tracking-[2.4px] text-[var(--primary-color)]">
          About The Digitx
        </span>

        <h2 className="mt-[18] text-white font-bold text-6xl leading-[63px] tracking-[-1.2px] max-sm:text-4xl">
          About <span className="text-gradient">The DigitX</span>
        </h2>

        <p className="mt-[26] leading-[29.3px] text-lg max-w-[818]">
          The Digitx was created with a simple belief: marketing should do more
          than look good. It should help businesses attract better customers,
          build trust, and create consistent growth.
        </p>
      </div>
    </section>
  );
}
