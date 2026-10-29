import Image from "next/image";
import Link from "next/link";

import logo from "@/public/Logo.svg";
import Instagram from "@/public/footer/Instagram.svg";
import Whatsapp from "@/public/footer/WhatsApp.svg";

type CategoryLink = {
  title: string;
  path: string;
};

export default function Footer() {
  const quickLinks: CategoryLink[] = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "services", path: "/services" },
    { title: "industries", path: "/industries" },
    { title: "packages", path: "/packages" },
    { title: "testimonials", path: "/testimonials" },
    { title: "contact", path: "/contact" },
  ];

  const serviceLinks: CategoryLink[] = [
    { title: "SEO Optimizaton", path: "/seo-services" },
    { title: "Social Media Marketing", path: "/social-media-marketing" },
    { title: "Website Development", path: "/website-development" },
    { title: "Branding & Design", path: "/branding" },
    { title: "Content Creation", path: "/content-creation" },
    { title: "Video Editing", path: "/video-editing" },
    { title: "Adverisement Campaigns", path: "/advertisement-campaigns" },
    { title: "Influencer Marketing", path: "/influencer-marketing" },
  ];

  return (
    <footer className="mt-[96] border border-[var(--border-color)]">
      <div className="footer__container">
        <div className="flex py-[65] justify-between gap-12 max-md:flex-col max-md:text-left">
          <CompanyInfo />
          <LinkCategory title="Quick Links" links={quickLinks} />

          <LinkCategory title="Services" links={serviceLinks} />

          <Contact />
        </div>
      </div>

      <div className="px-[20] text-xs leading-[16px] text-center py-[24] border-t border-[var(--border-color)]">
        © 2026 The Digitx. Helping businesses grow with smart marketing,
        creative thinking, and strategies that actually work.
      </div>
    </footer>
  );
}

function CompanyInfo() {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="logo" unoptimized loading="eager" />
      </Link>

      <p className="mt-[16] text-sm leading-[22.8px] max-w-md">
        Helping businesses grow with smart marketing, creative thinking, and
        strategies that actually work. Built for founders, local brands, and
        growing companies.
      </p>

      <div className="mt-[24] flex gap-[12]">
        <Link
          href="https://wa.me/918248116779"
          className="text-white p-[12] rounded-full transition-all border border-[var(--border-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
        >
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </Link>

        <Link
          className="text-white p-[12] rounded-full transition-all border border-[var(--border-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
          href="https://www.instagram.com/digit.x._?igsh=MXI5NDlhMWcxZHJrdw=="
        >
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
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

type CategoryProps = {
  title: string;
  links: CategoryLink[];
};

function LinkCategory({ title, links }: CategoryProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h4 className="uppercase whitespace-nowrap font-semibold text-sm leading-[20px] tracking-[0.05em] text-white">
        {title}
      </h4>

      <ul className="flex flex-col space-y-3">
        {links.map((link) => (
          <li key={link.title} className="flex">
            <Link
              className="hover:text-[var(--primary-color)] transition-all capitalize text-sm"
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h4 className="uppercase font-semibold text-sm leading-[20px] tracking-[0.05em] text-white">
        Contact
      </h4>

      <ul className="mt-[16] flex flex-col space-y-3">
        <li className="text-sm flex gap-[8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="2"
            strokeLinecap="round"
            className="mt-[2] shrink-0"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="max-w-[181] max-md:max-w-none">
            26A, Emperor St, Matha Koil, Thoothukudi, Tamil Nadu 628001
          </span>
        </li>

        <li className="flex gap-[8] text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="2"
            className="mt-[2] shrink-0"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
          </svg>
          <Link
            className="hover:text-[var(--primary-color)] transition-all"
            href="tel:+918248116779"
          >
            +91 82481 16779
          </Link>
        </li>

        <li className="text-sm flex gap-[8]">
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
            className="mt-[2] shrink-0"
            aria-hidden="true"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
          <Link
            className="hover:text-[var(--primary-color)] transition-all"
            href="mailto:digitx77@gmail.com"
          >
            digitx77@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
}
