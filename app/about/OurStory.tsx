export default function OurStory() {
  const bulletsInfo = [
    { title: "projects", numbers: "150+" },
    { title: "Brands Served", numbers: "80+" },
    { title: "Industries", numbers: "13+" },
    { title: "Client Retention", numbers: "98%" },
  ];

  return (
    <section className="py-[48]">
      <div className="our-story__container">
        <div className="grid grid-cols-2 gap-[50] max-lg:grid-cols-1">
          <div>
            <span className="uppercase font-semibold text-xs leading-[16px] tracking-[2.4px] text-[var(--primary-color)]">
              Our Story
            </span>

            <h2 className="mt-[12] font-bold text-4xl text-white max-sm:text-3xl">
              We don't just want to be another agency
            </h2>

            <p className="mt-[20] text-base leading-[26px]">
              We work closely with every client because we believe great
              marketing starts with understanding the people behind the
              business.
            </p>

            <p className="mt-[20] text-base leading-[26px] max-w-[555]">
              Whether you're a startup, a local brand, or a growing company, our
              goal is to become a partner in your growth journey — not just
              another agency on your invoice list.
            </p>
          </div>

          <div>
            <h3 className="capitalize font-bold text-2xl text-left text-white leading-[32px] tracking-[-0.48px] max-sm:text-xl">
              By The Numbers
            </h3>

            <ul className="mt-[16] grid grid-cols-2 gap-[16]">
              {bulletsInfo.map((bulletInfo) => (
                <li
                  key={bulletInfo.title}
                  className="w-full flex flex-col items-center border border-[var(--border-color)] py-[25] rounded-[16] hover:border-[var(--primary-color)]/60 transition-all"
                >
                  <span className="font-bold text-3xl leading-[32px] text-gradient">
                    {bulletInfo.numbers}
                  </span>

                  <h4 className="mt-[4] text-xs leading-[16px]">
                    {bulletInfo.title}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
