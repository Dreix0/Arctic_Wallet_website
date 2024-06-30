"use client"

import Hero from "./components/hero";
import Presentation from "./components/presentation";
import Whitelist from "./components/Whitelist";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Advantages from "./components/advantages";
import Nav from './components/nav';

export default function Home() {

  return (
    <main>
      <Nav />  {/* Faire le choix des langues */}
      <Hero />
      <Presentation />
      <Advantages />
      <Whitelist />
      <FAQ />
      <Footer />
    </main>
  );
}
