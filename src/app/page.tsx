import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Listings from "@/components/listings";
import CallToAction from "@/components/cta";
import Footer from "@/components/footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <Features />
        <Listings />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}