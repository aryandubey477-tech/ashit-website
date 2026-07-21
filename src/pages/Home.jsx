import "../App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyAshIt from "../components/WhyAshIt";
import Showcase from "../components/Showcase";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
useEffect(() => {
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 100,
  });

  AOS.refresh();
}, []);

  return (
    <>
      <Navbar />
      <Hero />
      <WhyAshIt />
      <Showcase />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;