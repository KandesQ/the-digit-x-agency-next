import ContactForm from "./ContactForm/ContactForm";
import Hero from "./Hero";
import Location from "./Location";

export default function ContactPage() {
    return (
        <main className="padding-from-header">
            <Hero />
            <ContactForm />
            <Location />
        </main>
    )
}