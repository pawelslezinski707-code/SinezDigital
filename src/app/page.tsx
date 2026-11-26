import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Apps } from "@/components/apps";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Websites } from "@/components/websites";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Apps />
        <Process />
        <About />
        <Websites />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
