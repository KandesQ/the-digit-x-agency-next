"use client"

import Image from "next/image"
import Link from "next/link";

import logo from "@/public/Logo.svg"
import burger from "@/public/header/Burger.svg"

import { useEffect, useState } from "react";

type MenuCategory = {
    id: number;
    pageLink: string;
    title: string;
}

export default function Header()
{
    const menuCategories: MenuCategory[] = [
        {id: 1, pageLink: "/", title: "Home"},
        {id: 2, pageLink: "/about", title: "About"},
        {id: 3, pageLink: "/services", title: "Services"},
        {id: 4, pageLink: "/industries", title: "Industries"},
        {id: 5, pageLink: "/portfolio", title: "Packages"},
        {id: 6, pageLink: "/testimonials", title: "Testimonials"},
        {id: 7, pageLink: "/contact", title: "Contact"}
    ]

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b transition-colors ${isScrolled ? "border-[#19232A]/60": "border-transparent"}`}>
            <div className="flex justify-between items-center h-[65] header__container">
                
                <Link href="/">
                    <Image src={logo} alt="logo" unoptimized loading="eager" />
                </Link>
                

                <nav className="hidden lg:flex items-center header__navigation">
                    <ul className="flex gap-[28] header__menu">
                       {menuCategories.map(category => (
                        <li key={category.id}>
                            <Link href={category.pageLink} className="text-[#9AA7B0] font-medium text-sm transition-colors duration-300 hover:text-white">
                                {category.title}
                            </Link>
                        </li>
                       ))} 
                    </ul>
                </nav>

                <button 
                    type="button"
                    className="hidden lg:flex bg-[#00C8FF] pt-[10] pb-[10] pr-[20] pl-[20] rounded-[33554400] text-black text-sm
                        shadow-[0_-3px_6px_rgba(0,200,255,0.3),0_3px_6px_rgba(0,200,255,0.3)]
                        transition-all duration-300
                        hover:shadow-[0_2px_30px_rgba(0,200,255,0.4),0_3px_8px_rgba(0,200,255,0.3)]
                        cursor-pointer font-semibold header__button">
                    Let's talk
                </button>

                <button
                    type="button" 
                    className="lg:hidden">
                    <Image
                        src={burger}
                        alt="menu"
                        width={24}
                        height={24}
                    />
                </button>

            </div>
        </header>
    )
}   