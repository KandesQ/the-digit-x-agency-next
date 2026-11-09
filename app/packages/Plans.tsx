import Link from "next/link";

type Plan = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

export default function Plans() {
  const plans: Plan[] = [
    {
      id: 1,
      title: "Starter Package",
      subtitle: "For brands just beginning",
      description:
        "Perfect for businesses starting their marketing journey and building a consistent online presence.",
      bullets: [
        "Social Media Management",
        "Content Creation",
        "Monthly Reporting",
        "Strategy Support",
      ],
    },
    {
      id: 2,
      title: "Popular Package",
      subtitle: "Most chosen by growing brands",
      description:
        "Ideal for growing businesses ready to attract more customers and scale faster across channels.",
      bullets: [
        "Everything in Starter",
        "SEO Optimization",
        "Paid Advertising Management",
        "Advanced Analytics",
      ],
    },
    {
      id: 3,
      title: "Premium Package",
      subtitle: "For ambitious, scaling businesses",
      description:
        "For businesses ready to scale aggressively with a complete in-house style marketing partnership.",
      bullets: [
        "Full Marketing Management",
        "SEO",
        "Paid Ads",
        "Content Creation",
        "Branding Support",
        "Dedicated Strategy Consultation",
      ],
    },
  ];

  return (
    <section className="pb-[96px]">
      <div className="max-w-[1152px] px-[20px] w-full mx-auto">
        <div className="grid grid-cols-3 gap-[20px] max-md:grid-cols-1">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} ismostPopular={plan.id === 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

type PlanCardProps = {
  plan: Plan;
  ismostPopular: boolean;
};

function PlanCard({ plan, ismostPopular }: PlanCardProps) {
  return (
    <article
      className={`border rounded-[24px] border-[var(--border-color)] p-[33px] transition-all hover:-translate-y-1 ${ismostPopular ? "relative border-[var(--primary-color)] shadow-[var(--shadow-glow)] bg-gradient-to-b from-[var(--primary-color)]/15 to-[var(--card-action)]" : "hover:border-[var(--primary-color)]/60"}`}
    >
      {ismostPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-bold text-[10px] tracking-[0.5px] text-black uppercase bg-[var(--primary-color)] rounded-full py-[4px] px-[12px]">
          Most popular
        </span>
      )}

      <h3 className="font-bold text-2xl tracking-[-0.48px] text-white">
        {plan.title}
      </h3>

      <span className="mt-[4px] font-semibold text-xs uppercase tracking-[0.6px] text-[var(--primary-color)]">
        {plan.subtitle}
      </span>

      <p className="mt-[17px] text-sm leading-[var(--leading-relaxed)]">
        {plan.description}
      </p>

      <ul className="mt-[27px] flex flex-col gap-[12px]">
        {plan.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-[8px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginTop: "2px" }}
              stroke="var(--primary-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>

            <h4 className="text-white text-sm">{bullet}</h4>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-[32px] flex gap-[8px] items-center justify-center border border-[var(--border-color)] py-[13px] rounded-full transition-all ${ismostPopular ? "bg-[var(--primary-color)] text-black  hover:glow-effect-lg" : "text-white hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"}`}
      >
        <span className="font-semibold text-sm">Get started</span>
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
    </article>
  );
}
