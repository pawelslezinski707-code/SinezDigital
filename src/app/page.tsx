import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
