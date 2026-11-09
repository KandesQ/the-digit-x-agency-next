import CardAction from "../common-components/CardAction";
import Hero from "./Hero";
import Plans from "./Plans";

export default function PackagesPage() {
  return (
    <main className="padding-from-header">
      <Hero />
      <Plans />
      <CardAction title="Not sure which plan fits you?" buttonText="Book a Free Consultation">
        Tell us about your business and we'll recommend the right starting point
        — no pressure, no obligation.
      </CardAction>
    </main>
  );
}
