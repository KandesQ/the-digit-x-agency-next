"use client";

import { useState } from "react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export default function FAQs() {
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "Where is The DigitX based?",
      answer:
        "We're a Thoothukudi-based digital marketing agency serving clients across Tamil Nadu and India. Our studio is at 26A, Emperor St, Matha Koil, Thoothukudi.",
    },
    {
      id: 2,
      question: "What services does The DigitX offer?",
      answer:
        "SEO, Google Ads, Social Media Marketing, Website Development, Branding, Performance Marketing, Content Creation and Video Editing — full-stack digital marketing under one roof.",
    },
    {
      id: 3,
      question: "How do you charge for your services?",
      answer:
        "Most clients work with us on monthly retainers tailored to their goals. We also offer project-based pricing for websites, branding and one-off campaigns.",
    },
    {
      id: 4,
      question: "How long until I see results?",
      answer:
        "Paid ads can generate leads within days. SEO typically shows meaningful movement in 3–6 months. Social media engagement lifts within 30–60 days of consistent posting.",
    },
    {
      id: 5,
      question: "Do you work with small businesses?",
      answer:
        "Yes. We work with everyone from local Thoothukudi businesses to growing brands across South India. We have packages designed for every stage of growth.",
    },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col items-center faqs__container">
        <span className="uppercase font-semibold text-xs leading-[16px] tracking-[2.4px] text-[var(--primary-color)]">
          FAQs
        </span>

        <h2 className="mt-[12] text-center text-white font-bold text-5xl leading-[1.25] tracking-[-0.96px] max-md:text-4xl max-sm:text-3xl">
          Questions People <span className="text-gradient">Often Ask</span>
        </h2>

        <ul className="mt-[40] border border-[var(--border-color)] rounded-[16] w-full max-w-[728px] divide-y divide-[var(--border-color)]">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </ul>
      </div>
    </section>
  );
}

type FAQItemProps = {
  faq: FAQ;
};

function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(faq.id === 1);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-left flex items-center justify-between px-[20] py-[16] w-full gap-4"
      >
        <span className="font-semibold text-base text-white max-sm:text-sm">
          {faq.question}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>

      {isOpen && (
        <p className="text-sm leading-[22.8px] px-[20] pb-[25]">{faq.answer}</p>
      )}
    </li>
  );
}
