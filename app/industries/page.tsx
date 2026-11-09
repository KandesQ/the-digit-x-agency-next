import Brands from "./Brands/Brands";
import CardAction from "./CardAction";
import Hero from "./Hero";

export default function IndustriesPage() {
    return (
        <main className="padding-from-header">
            <Hero />
            <Brands />
            <CardAction />
        </main>
    )
}