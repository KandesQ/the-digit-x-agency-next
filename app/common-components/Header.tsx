"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/Logo.svg";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const burgerIcon = (
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
    <path d="M4 5h16"></path>
    <path d="M4 12h16"></path>
    <path d="M4 19h16"></path>
  </svg>
);

const crossIcon = (
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
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

type MenuCategory = {
  id: number;
  pageLink: string;
  title: string;
};

export default function Header() {
  const router = useRouter();

  const pathname = usePathname();

  const menuCategories: MenuCategory[] = [
    { id: 1, pageLink: "/", title: "Home" },
    { id: 2, pageLink: "/about", title: "About" },
    { id: 3, pageLink: "/services", title: "Services" },
    { id: 4, pageLink: "/industries", title: "Industries" },
    { id: 5, pageLink: "/packages", title: "Packages" },
    { id: 6, pageLink: "/testimonials", title: "Testimonials" },
    { id: 7, pageLink: "/contact", title: "Contact" },
  ];

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b transition-colors ${isScrolled ? "border-[#19232A]/60" : "border-transparent"}`}
    >
      <div className="flex justify-between items-center h-[65] header__container">
        <Link onClick={() => setIsMenuOpen(false)} href="/">
          <Image src={logo} alt="logo" unoptimized loading="eager" />
        </Link>

        <nav className="hidden lg:flex items-center header__navigation">
          <ul className="flex gap-[28] header__menu">
            {menuCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={category.pageLink}
                  className="text-[#9AA7B0] font-medium text-sm transition-colors duration-300 hover:text-white"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden lg:flex bg-[#00C8FF] pt-[10] pb-[10] pr-[20] pl-[20] rounded-[33554400] text-black text-sm
                        shadow-[0_-3px_6px_rgba(0,200,255,0.3),0_3px_6px_rgba(0,200,255,0.3)]
                        transition-all duration-300
                        hover:shadow-[0_2px_30px_rgba(0,200,255,0.4),0_3px_8px_rgba(0,200,255,0.3)]
                        cursor-pointer font-semibold header__button"
        >
          Let's talk
        </Link>

        <button
          type="button"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="lg:hidden"
        >
          <div className="text-white">
            {isMenuOpen ? crossIcon : burgerIcon}
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-color)] slide-up">
          <nav>
            <ul className="py-[16px] px-[20px] flex flex-col gap-[4px] w-full">
              {menuCategories.map((category) => (
                <li
                  key={category.id}
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push(category.pageLink);
                  }}
                  className={`p-[12px] text-sm font-medium ${pathname == category.pageLink ? "bg-[var(--primary-color)]/10 rounded-lg" : ""}`}
                >
                  {category.title}
                </li>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/contact");
                }}
                className="capitalize mt-[8px] px-[20px] cursor-pointer bg-[var(--primary-color)] rounded-full text-black text-sm flex items-center justify-center font-semibold h-[44px]"
              >
                Let's talk
              </button>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
