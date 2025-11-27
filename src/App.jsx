/** @format */
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Visual } from "./components/Visual";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { Case } from "./components/Case";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Navbar />

      <main className="flex-1">
        {/* Hero full width */}

        {/* Sections dengan container */}
        <div className="max-w-7xl mx-auto w-full px-1 md:px-28">
          <Hero />
          <Visual />
          <Features />
          <Case />
          <Process />
          <Pricing />
          <Faq />
        </div>
      </main>
      <Footer />

      {/* <Footer /> */}
    </div>
  );
}
