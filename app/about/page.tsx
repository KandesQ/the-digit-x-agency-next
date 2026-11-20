import { Metadata } from "next";
import CardAction from "./CardAction";
import Hero from "./Hero";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";


export const metadata: Metadata = {
  title: "About The DigitX | Trusted Digital Marketing Agency",
};

export default function About() {
  return (
    <main className="padding-from-header">
      <Hero />
      <OurStory />
      <OurTeam />
      <CardAction />
    </main>
  );
}
