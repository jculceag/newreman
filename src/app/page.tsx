import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { Contact } from "@/components/sections/Contact";
import { ForWorkshops } from "@/components/sections/ForWorkshops";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { ProofBar } from "@/components/sections/ProofBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofBar />
        <Products />
        <Process />
        <ForWorkshops />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
