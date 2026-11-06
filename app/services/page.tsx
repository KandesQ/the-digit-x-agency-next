import Hero from "./Hero";
import CardAction from "@/app/services/CardAction";

export default function Services() {
    return (
        <main className="padding-from-header">
            <Hero />
            <CardAction />
        </main>
    )
}