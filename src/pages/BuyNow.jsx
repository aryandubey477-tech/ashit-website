import "../styles/BuyNow.css";

import BuyNavbar from "../components/BuyNavbar";
import Footer from "../components/Footer";

import ProductCard from "../components/ProductCard";
import Includes from "../components/Includes";
import OrderSteps from "../components/OrderSteps";
import ShippingInfo from "../components/ShippingInfo";
import FeatureRibbon from "../components/FeatureRibbon";
import WhyBuy from "../components/WhyBuy";
import LifestyleGallery from "../components/LifestyleGallery";
import StickyBuyBar from "../components/StickyBuyBar";
import PurchaseFAQ from "../components/PurchaseFAQ";
import FinalCTA from "../components/FinalCTA";


export default function BuyNow() {
  return (
    <>
      <BuyNavbar />

      <main className="buy-page">

        <section className="buy-hero">

          <div className="buy-heading">

            <span className="section-tag">
              GET ASH IT
            </span>

            <h1>
              Cleaner Ash
              <br />
              Starts Here.
            </h1>

            <p>
              Every box contains 3 premium disposable gel ashtrays
              designed for cleaner tables, cleaner cars and cleaner
              outdoor experiences.
            </p>

          </div>

        </section>

        <ProductCard /> 

        <FeatureRibbon />

        <WhyBuy />

<LifestyleGallery />

<Includes />

<OrderSteps />

<ShippingInfo />

<PurchaseFAQ />

<FinalCTA />

<StickyBuyBar />

</main>

<Footer />
    </>
  );
}