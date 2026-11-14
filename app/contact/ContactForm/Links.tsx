import Link from "next/link";
import { links } from "./links.data";

export default function Links() {
  return (
    <ul className="grid grid-cols-1 gap-[58px] col-span-2 max-lg:col-span-1">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.linkPath}
          className="flex gap-[12px] p-[21px] border border-[var(--border-color)] rounded-[16px] transition-all hover:border-[var(--primary-color)]/60"
        >
          <div className="p-[10px] rounded-[12px] w-fit h-fit bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
            {link.icon}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{link.title}</h3>
            {link.subtitles.map((subtitle) => (
              <p className="mt-[4px] text-xs" key={subtitle}>
                {subtitle}
              </p>
            ))}
          </div>
        </Link>
      ))}

      {/* Static block. It doesn't have link so I rearranged it here */}
      <div className="flex gap-[12px] p-[21px] border border-[var(--border-color)] rounded-[16px]">
        <div className="p-[10px] rounded-[12px] w-fit h-fit bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
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
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Working Hours</h3>
          <p className="mt-[4px] text-xs">Mon - Sat · 10:00 AM – 8:00 PM</p>
        </div>
      </div>
    </ul>
  );
}
