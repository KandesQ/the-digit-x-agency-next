import { Metadata } from "next";
import ContactForm from "./ContactForm/ContactForm";
import Hero from "./Hero";
import Location from "./Location";

export const metadata: Metadata = {
  title: "Contact The DigitX | Get a Free Consultation",
};

export default function ContactPage() {
  return (
    <main className="padding-from-header">
      <Hero />
      <ContactForm />
      <Location />
    </main>
  );
}
