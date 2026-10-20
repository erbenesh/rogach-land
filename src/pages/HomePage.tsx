import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { About } from "../sections/About/About";
import { Approach } from "../sections/Approach/Approach";
import { Contact } from "../sections/Contact/Contact";
import { Hero } from "../sections/Hero/Hero";
import { SelectedWork } from "../sections/SelectedWork/SelectedWork";
export function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <SelectedWork />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
