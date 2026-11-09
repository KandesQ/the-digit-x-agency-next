"use client"

import Hero from "./Hero";
import CardAction from "@/app/services/CardAction";
import Services from "./Services/Services";

import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function ServicesPage() {
  const pathName = usePathname();

  useEffect(() => {
    const revealingElements = document.querySelectorAll(
      ".reveal:not(.reveal-in)",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    revealingElements.forEach((el) => observer.observe(el));

    return () => {
      revealingElements.forEach((el) => {
        el.classList.remove("reveal-in");
      });

      observer.disconnect();
    };
  }, [pathName]);


  return (
    <main className="padding-from-header">
      <Hero />
      <Services />
      <CardAction />
    </main>
  );
}
