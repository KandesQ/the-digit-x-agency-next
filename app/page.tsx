import Hero from "./(home)/Hero";
import QuickGlance from "./(home)/QuickGlance";
import WhyUs from "./(home)/WhyUs";

export default function Home() {
  return (
    <div>
      <main className="pt-[66]">
        <Hero />
        <QuickGlance />
        <WhyUs />
      </main>
    </div>
  );
}
