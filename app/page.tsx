import Hero from "./(home)/Hero";
import OurProcess from "./(home)/OurProcess";
import QuickGlance from "./(home)/QuickGlance";
import WhatWeDo from "./(home)/WhatWeDo";
import WhyUs from "./(home)/WhyUs";

export default function Home() {
  return (
    <div>
      <main className="pt-[66]">
        <Hero />
        <QuickGlance />
        <WhyUs />
        <OurProcess />
        <WhatWeDo />
      </main>
    </div>
  );
}
