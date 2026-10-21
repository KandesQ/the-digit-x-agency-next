"use client"

import Image from "next/image";

import star from "@/public/hero/Star.svg"

import Increment from "../common-components/animated/Increment";

type Advantage = {
    id: number;
    number: number;
    postfix: string;
    desc: string;
}

export default function Hero()
{
    const advantages: Advantage[] = [
        {id: 1, number: 150, postfix: "+", desc: "Projects Delivered"},
        {id: 2, number: 80, postfix: "+", desc: "Happy Clients"},
        {id: 3, number: 5, postfix: "M+",desc: "Reach Generated"},
        {id: 4, number: 98, postfix: "%", desc: "Client Retention"}
    ]

    return (
        <section
        style={{
            backgroundImage: "url('/hero/Background.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
        }}
        className="relative pt-[144] pb-[160] max-lg:pb-[128] max-sm:pb-[96] z-10 overflow-hidden max-lg:pt-[112] max-sm:pt-[80]">
            <div
            className="
                absolute
                overflow-hidden
                left-1/2 top-0
                -translate-x-1/2
                translate-y-[100px]
                size-[488px]
                rounded-full
                bg-[#00C8FF]/15
                blur-[64px]
                max-sm:size-[320px]
                max-[425px]:translate-y-[210px]
            "
            />

            <div 
            className="
            absolute 
            top-[12%] 
            left-[8%] 
            size-20 
            sm:size-24 
            rounded-2xl 
            border
            border-[var(--primary-color)]/40
            bg-[var(--primary-color)]/5 
            backdrop-blur-sm 
            rotate-12
            animate-floating
            "
            />

            <div 
            className="
            absolute 
            top-[20%] 
            right-[10%] 
            size-24 
            sm:size-32 
            rounded-full
            border 
            border-[var(--primary-color)]/30
            animate-floating
            "
            style={{ animationDelay: "1.2s" }}
            />

            <div className="
            absolute 
            bottom-[18%]
            -z-10
            left-[14%] 
            size-16 
            sm:size-20 
            rotate-44
            border 
            border-[var(--primary-color)]/40
            animate-floating
            "
            style={{ animationDelay: "0.6s" }}
            />

            <div className="
            absolute 
            -z-20
            bottom-[14%] 
            right-[18%] 
            size-24 
            sm:size-28 
            rounded-3xl 
            bg-gradient-to-br 
            from-[var(--primary-color)]/30 
            to-transparent 
            blur-md
            animate-floating
            "
            style={{ animationDelay: "2s" }}
            />

            <div className="flex flex-col items-center hero__container">
                
                <div className="flex flex-col items-center w-fit">
                    <div className="flex flex-col items-center text-center gap-[24] max-sm:gap-[18] max-w-4xl slide-up">
                        <div className="flex w-fit pt-[7] pb-[7] pl-[17] pr-[17] font-medium backdrop-blur-[64px] bg-[#020508] text-xs items-center justify-center border rounded-[33554400] border-[#19232A]/60 gap-[8]">
                            <Image src={star} alt="Star" unoptimized />
                            <span className="capitalize">premium digital marketing agency</span>
                        </div>

                        <h1 className="capitalize text-7xl font-bold tracking-[-1.44] leading-[1.05] max-lg:tracking-[-1.2] max-lg:leading-[.8]  max-sm:leading-[15px]  max-sm:tracking-[-.72]">
                            <span className=" overflow-visible bg-clip-text text-transparent bg-gradient-to-r from-[#00C8FF] to-[#6FEAFF] max-lg:text-6xl max-sm:text-4xl max-sm:leading-[30px]">digital marketing</span><br/>
                            <span className="text-white max-lg:text-6xl max-sm:text-4xl max-sm:leading-[30px]">& website development agency</span>
                        </h1>
                    </div>

                    <div className="mt-[24] max-sm:leading-[26px] max-sm:text-base flex flex-col text-center font-normal text-lg max-w-2xl slide-up">
                        We help businesses stand out, attract the right customers, and grow with smart
                        marketing that actually makes an impact.
                    </div>

                    <div className="mt-[43] flex max-sm:flex-col max-sm:w-full gap-[12] slide-up">
                        <button
                            type="button"
                            className="flex max-sm:w-full items-center justify-center gap-[8] rounded-[33554400] capitalize pt-[14] pb-[14] pl-[29] pr-[29] bg-[#00C8FF] text-black text-sm font-semibold hover:shadow-[0_2px_60px_rgba(0,200,255,0.4),0_3px_8px_rgba(0,200,255,0.3)]
                            cursor-pointer duration-300 transition-all group"
                        >
                            book a free consultation

                            <svg 
                            className="transition-transform group-hover:translate-x-1"
                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33325 8H12.6666" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="black"/>
                                <path d="M8 3.33331L12.6667 7.99998L8 12.6666" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" stroke="black"/>
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="flex max-sm:w-full items-center justify-center gap-[8] rounded-[33554400] capitalize pt-[13] pb-[13] pl-[30] pr-[30] bg-[#020508]/50 border rounded-[33554400] border-[#19232A]/60 text-white text-sm font-semibold hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition"
                        >
                            view our services
                        </button>
                    </div>

                    <div className="mt-[80] grid grid-cols-4 w-full max-md:grid-cols-2 items-stretch gap-[24] text-center">
                        {advantages.map(advantage => (
                            <div key={advantage.id} className="p-6 border rounded-[16] border-[var(--border-color)] hover:border-[var(--primary-color)]/60 hover:-translate-y-1 transition-all bg-[#020508]">
                                <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C8FF] to-[#6FEAFF] font-bold text-4xl max-sm:text-3xl">
                                    <Increment value={advantage.number} duration={1500} />{advantage.postfix}
                                </div>

                                <div className="mt-1 text-sm font-normal max-sm:text-xs">{advantage.desc}</div>
                            </div>  
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}