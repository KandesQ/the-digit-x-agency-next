import CardAction from "../common-components/CardAction";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="relative padding-from-header">
      {/* Hero decoractions */}
      <div className="absolute inset-0 overflow-hidden -z-[10]">
        <div className="absolute top-100 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[576px] rounded-full bg-[var(--primary-color)]/20 blur-3xl -z-[10] animate-glow-pulse" />
        <div className="absolute size-[448px] top-15 right-1/4 rounded-full bg-[var(--primary-color)]/15 blur-3xl -z-[9] animate-floating" />
      </div>

      <Hero />

      <Testimonials />

      <CardAction
        title="Ready to join them?"
        buttonText="Book a Free Consultation"
      >
        Let's create the next success story together.
      </CardAction>
    </main>
  );
}
