import Hero from "./Hero";
import CardAction from "@/app/services/CardAction";
import Services from "./Services";

export default function ServicesPage() {
    return (
        <main className="padding-from-header">
            <Hero />
            <Services />
            <CardAction />
        </main>
    )
}