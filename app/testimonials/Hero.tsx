export default function Hero() {
   
  return (
    <section className="py-[132px] max-sm:py-[96px]">
    

      <div className="flex flex-col items-center text-center hero__container">
        <span className="font-semibold text-xs tracking-[2.4px] uppercase text-[var(--primary-color)]">
          Testimonials
        </span>

        <h1 className="mt-[20px] text-6xl max-sm:text-4xl font-bold leading-[1.05] text-white">
          What Our Clients <span className="text-gradient">Say</span>
        </h1>

        <p className="mt-[26px] text-lg leading-[var(--leading-relaxed)] max-w-4xl">
          Honest words from the brands we've partnered with. No scripts, no
          fluff — just real feedback from real businesses.
        </p>
      </div>
    </section>
  );
}
