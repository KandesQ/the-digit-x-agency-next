import { Metadata } from "next";
import Brands from "./Brands/Brands";
import CardAction from "./CardAction";
import Hero from "./Hero";


export const metadata: Metadata = {
  title: "Industries We Serve | The DigitX",
};

export default function IndustriesPage() {
    return (
        <main className="padding-from-header">
            <Hero />
            <Brands />
            <CardAction />
        </main>
    )
}