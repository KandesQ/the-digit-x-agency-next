import { clientsReviews } from "./clients.reviews.data";

export default function Testimonials() {
  return (
    <section className="pb-[96px]">
      <div className="w-full max-w-[1152px] px-[20px] mx-auto">
        <div className="grid grid-cols-3 gap-[20px] max-md:grid-cols-1">
          {clientsReviews.map((clientReview) => (
            <article key={clientReview.id} className="group p-[32px] backdrop-blur-md bg-[var(--card-color)]/40 rounded-[24px] border border-[var(--border-color)] transition-all hover:border-[var(--primary-color)]/60 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary-color)"
                className="opacity-60"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              </svg>

              <p className="mt-[21px] text-sm leading-[--leading-relaxed]">"{clientReview.reviewText}"</p>

              <div className="mt-[27px] border-t border-[var(--border-color)]">
                <div className="pt-[25px] flex gap-[12px] items-center">
                    <div className="p-[12px] bg-[var(--primary-color)]/10 w-fit rounded-[16px] text-[var(--primary-color)] transition-all group-hover:bg-[var(--primary-color)] group-hover:text-black">{clientReview.icon}</div>

                    <h3 className="font-bold text-md text-white">{clientReview.clientName}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
