import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Engage } from "@/components/sections/engage";
import { Hero } from "@/components/sections/hero";
import { Investors } from "@/components/sections/investors";
import { Products } from "@/components/sections/products";
import { Reasons } from "@/components/sections/reasons";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { Team } from "@/components/sections/team";
import { VisionValues } from "@/components/sections/vision-values";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export default function Home() {
  return (
    <div id="top" className="min-h-full bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-teal focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <VisionValues />
        <Services />
        <Products />
        <Investors />
        <Stack />
        <Team />
        <Reasons />
        <Engage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
