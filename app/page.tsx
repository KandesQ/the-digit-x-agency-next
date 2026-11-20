import { Metadata } from "next";
import CardAction from "./(home)/CardAction";
import FAQs from "./(home)/FAQs";
import Hero from "./(home)/Hero";
import OurProcess from "./(home)/OurProcess";
import QuickGlance from "./(home)/QuickGlance";
import WhatWeDo from "./(home)/WhatWeDo";
import WhyUs from "./(home)/WhyUs";


export const metadata: Metadata = {
  title: "The DigitX | Digital Marketing Agency in Thoothukudi",
};

export default function Home() {
  return (
    <div>
      <main className="pt-[66]">
        <Hero />
        <QuickGlance />
        <WhyUs />
        <OurProcess />
        <WhatWeDo />
        <FAQs />
        <CardAction />
      </main>
    </div>
  );
}
