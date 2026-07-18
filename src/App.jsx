import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import FeatureStrip from "./FeatureStrip";
import DesignSection from "./DesignSection";
import Showcase from "./Showcase";
import Gallery from "./Gallery";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <DesignSection />
      <Showcase />
      <Benefits />
      <HowItWorks />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;