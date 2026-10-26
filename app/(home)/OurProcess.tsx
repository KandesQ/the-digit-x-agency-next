import { title } from "process";

export default function OurProcess() {
  const bulletsInfo = [
    {
      id: 1,
      title: "Understand",
      description:
        "We learn your goals, customers, and what makes your brand different.",
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
      title: "Strategize",
      description:
        "A focused plan covering content, channels, and the metrics that matter.",
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
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
          <path d="M20 2v4"></path>
          <path d="M22 4h-4"></path>
          <circle cx="4" cy="20" r="2"></circle>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Launch",
      description:
        "We put the strategy into motion with strong creative and clean targeting.",
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
      id: 4,
      title: "Optimize",
      description:
        "Weekly reviews and refinements so results keep getting stronger.",
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
          <path d="M16 7h6v6"></path>
          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-28 relative max-sm:overflow-hidden max-sm:py-20">
        <div className="absolute top-1/2 -translate-y-1 z-0 left-0 size-96 bg-[var(--primary-color)]/10 blur-3xl rounded-full" />
      
      <div className="flex flex-col items-center our-process__container">
        <span className="uppercase font-semibold text-xs leading-[16px] tracking-[2.4px] text-[var(--primary-color)]">
          Our Process
        </span>

        <h2 className="mt-[12] capitalize font-bold text-5xl leading-[1.25] tracking-[-0.96px] text-white max-md:text-4xl max-sm:text-3xl">
          How We{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C8FF] to-[#6FEAFF]">
            Work
          </span>
        </h2>

        <p className="mt-[16] text-center text-lg max-sm:text-base">
          A clear, simple process designed to keep things focused and your
          business growing.
        </p>

        <ul className="mt-[56] w-full max-w-[1240px] grid grid-cols-4 gap-[20] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {bulletsInfo.map((bulletInfo) => (
            <li
              key={bulletInfo.id}
              className="p-[24] relative group bg-[var(--background-color)] border border-[var(--border-color)] rounded-[16] hover:border-[var(--primary-color)]/60 transition-all hover:-translate-y-2"
            >
              <div className="absolute -top-3 -right-3 bg-[var(--primary-color)] size-10 flex items-center justify-center text-black font-bold text-base leading-[24px] rounded-full glow-effect">
                {bulletInfo.id}
              </div>

              <div className="w-fit p-[14] rounded-[16] bg-[var(--primary-color)]/10 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] transition-all group-hover:text-black">
                {bulletInfo.icon}
              </div>

              <h3 className="mt-[20] text-white font-semibold text-lg leading-[28px] tracking-[-0.36px]">
                {bulletInfo.title}
              </h3>

              <p className="mt-[9] text-sm leading-[22.4px]">
                {bulletInfo.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
