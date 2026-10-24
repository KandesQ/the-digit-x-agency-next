export default function QuickGlance() {
  const bulletsInfo = [
    {
      id: 1,
      title: "why choose us",
      description:
        "Data driven strategy, creative content, and growth focused execution.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Our Process",
      description:
        "Four clear steps from understanding your business to scaling results.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Industries We Serve",
      description:
        "Jewellery, textiles, supermarkets, cinema, finance, IT and more.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
    {
      id: 4,
      title: "Real Client Results",
      description:
        "Honest feedback from brands we've helped grow across South India.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
    <section className="pt-[80]">
      <div className="flex flex-col gap-[40] quick-glance__container">
        <div className="flex flex-col items-center gap-[12]">
          <div className="flex items-center gap-[8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--primary-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>

            <span className="text-[var(--primary-color)] uppercase text-xs font-semibold leading-[16px] tracking-[2.4px]">
              Quick Glance
            </span>
          </div>

          <h2 className="font-bold text-3xl text-center text-white leading-[36px] tracking-[-0.6px] max-sm:text-2xl">
            Everything you'll find on this page
          </h2>
        </div>

        <ul className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[16]">
          {bulletsInfo.map((bulletInfo) => (
            <li
              className="group flex flex-col p-[21] border rounded-[16] gap-[13] border-[var(--border-color)] hover:border-[var(--primary-color)]/60 hover:-translate-y-1 transition-all"
              key={bulletInfo.id}
            >
              <div className="flex items-center gap-[12]">
                
                <div className="p-[10] text-[var(--primary-color)] bg-[var(--primary-color)]/10 rounded-[12] group-hover:bg-[var(--primary-color)] group-hover:text-black transition-all">
                  {bulletInfo.icon}
                </div>

                <h3 className="capitalize font-semibold text-sm text-white leading-[20px] tracking-[-0.28px]">
                  {bulletInfo.title}
                </h3>
              </div>

              <p className="text-xs leading-[19.5px]">
                {bulletInfo.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
