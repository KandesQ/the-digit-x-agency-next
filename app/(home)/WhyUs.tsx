export default function WhyUs() {
  const bulletsInfo = [
    {
      id: 1,
      title: "Data Driven Strategy",
      description:
        "Every move is backed by audience insights, real metrics, and clear business outcomes.",
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
          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Creative Content",
      description:
        "Design and storytelling that makes people stop, watch, and remember your brand.",
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
      id: 3,
      title: "Performance Marketing",
      description:
        "Campaigns built around conversions and revenue, not just impressions.",
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
      id: 4,
      title: "Clear Communication",
      description:
        "Honest reporting and a team that genuinely cares about your growth.",
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
          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-[112] max-sm:py-[80]">
      <div className="flex flex-col gap-[60] why-us__container">
        <div className="flex flex-col items-center gap-[16] text-center">
          <div className="flex flex-col gap-[9]">
            <span className="uppercase font-semibold text-xs leading-[16px] tracking-[2.4px] text-[var(--primary-color)]">
              Why Businesses Choose The Digitx
            </span>
            <h2 className="max-w-2xl font-bold text-5xl leading-[60px] tracking-[-1.44px] text-white max-md:text-4xl max-sm:text-3xl max-md:leading-[40px]">
              We Focus on Growth,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C8FF] to-[#6FEAFF]">
                Not Just Marketing
              </span>
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-[1.625] max-sm:text-base">
            A lot of agencies talk about reach, impressions, and engagement. We
            care about something much more important: helping your business
            grow. Every strategy we create is designed around real business
            goals — more leads, more customers, stronger branding, and
            measurable results.
          </p>
        </div>

        <ul className="grid grid-cols-4 gap-[16] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {bulletsInfo.map((bulletInfo) => (
            <li key={bulletInfo.id} className="flex flex-col group p-[25] gap-[9] border border-[var(--border-color)] rounded-[16] hover:border-[var(--primary-color)]/60 transition-all hover:-translate-y-2  hover:shadow-[0_0_30px_var(--primary-color)]/60">
              <div className="flex flex-col gap-[16]">
                <div className="w-fit p-[12] rounded-[16] bg-[var(--primary-color)]/10 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] transition-all group-hover:text-black">{bulletInfo.icon}</div>
                <h3 className="font-semibold text-lg leading-[28px] tracking-[-0.36px] text-white">{bulletInfo.title}</h3>
              </div>

              <p className="text-sm leading-[22.8px]">{bulletInfo.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
