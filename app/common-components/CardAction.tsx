import Link from "next/link";
import { ReactNode } from "react";

type CardActionProps = {
  title: string;
  buttonText: string;
  children: ReactNode;
};

export default function CardAction({
  title,
  buttonText,
  children,
}: CardActionProps) {
  return (
    <section className="pb-[96px]">
      <div className="card-action__container">
        <div className="flex flex-col items-center p-[57] max-sm:p-[40px] text-center border border-[var(--primary-color)]/40 rounded-[24] bg-gradient-to-br from-[var(--card-action)] via-[var(--card-action)] to bg-[var(--primary-color)]/15">
          <h2 className="font-bold text-4xl text-white max-sm:text-3xl">
            {title}
          </h2>
          <p className="mt-[12] text-base max-w-xl">{children}</p>
          <CardActionButton linkPath="/contact" buttonText={buttonText} />
        </div>
      </div>
    </section>
  );
}

type CardActionButtonProps = {
  linkPath: string;
  buttonText: string;
};

function CardActionButton({ linkPath, buttonText }: CardActionButtonProps) {
  return (
    <Link
      href={linkPath}
      className="mt-[24] py-[14] px-[28] bg-[var(--primary-color)] rounded-full w-fit flex items-center transition-all justify-center gap-[8] text-black font-semibold text-sm hover:shadow-[var(--shadow-glow)]"
    >
      {buttonText}
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
  );
}
