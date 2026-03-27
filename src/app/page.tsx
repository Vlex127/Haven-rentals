import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Listings from "@/components/listings";
import CallToAction from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      <main className="w-full flex flex-col items-center">
        <BackgroundBeamsWithCollision className="min-h-[90vh] md:min-h-[90vh] pt-24 pb-16 px-6 bg-white dark:bg-zinc-950">
          <Hero />
        </BackgroundBeamsWithCollision>
        <Features />
        <Listings />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}