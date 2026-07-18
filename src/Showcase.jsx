import hero from "./assets/hero.png";
import {
  Leaf,
  ShieldCheck,
  Package,
  Trash2,
} from "lucide-react";

function Showcase() {
  return (
    <section className="showcase" data-aos="fade-up">

      <div className="showcase-left">

        <span className="mini-title">
          OUR PRODUCT
        </span>

        <h2>
          Designed to disappear.
          <br />
          Built to make an impact.
        </h2>

        <p className="showcase-text">
          A premium disposable gel ashtray that keeps your
          surroundings cleaner while fitting perfectly in
          your pocket, car, café table or balcony.
        </p>

        <div className="showcase-features">

          <div className="badge">
            <Leaf size={18}/>
            Eco Friendly
          </div>

          <div className="badge">
            <Package size={18}/>
Portable
          </div>

          <div className="badge">
            <ShieldCheck size={18}/>
            Odor Control
          </div>

          <div className="badge">
            <Trash2 size={18}/>
            Disposable
          </div>

        </div>

        <button className="buy-btn">
          Buy Now →
        </button>

      </div>

      <div className="showcase-right">
        <img src={hero} alt="Ash It Product"/>
      </div>

    </section>
  );
}

export default Showcase;