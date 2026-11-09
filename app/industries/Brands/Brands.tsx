import { brands } from "./brands.data";

export default function Brands() {
  return (
    <section>
      <div className="flex flex-col items-center brands__container">
        <h2 className="font-bold text-center text-white text-4xl tracking-[-0.72px] max-sm:text-3xl">
          Brands We Have <span className="text-gradient">Helped Grow</span>
        </h2>

        <ul className="mt-[40px] grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {brands.map((brand) => (
            <li
              key={brand.id}
              className="group relative p-[25px] border border-[var(--border-color)] rounded-[16px] transition-all duration-500 hover:border-[var(--primary-color)]/60 hover:shadow-[var(--shadow-glow)] hover:-translate-y-2"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--primary-color)]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-[14px] rounded-[16px] bg-[var(--primary-color)]/10 w-fit text-[var(--primary-color)] group-hover:scale-110 group-hover:bg-[var(--primary-color)] group-hover:text-black transition-all duration-500">
                {brand.icon}
              </div>

              <h3 className="mt-[20px] font-bold text-lg text-white tracking-[-0.36px]">
                {brand.title}
              </h3>

              <p className="mt-[13px] text-sm leading-[var(--leading-relaxed)]">
                {brand.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
