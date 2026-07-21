import { Link } from "react-router-dom";
import "../styles/Hero.css";
import hero from "../assets/hero.png";
import {
  ShieldCheck,
  Leaf,
  Trash2
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* Left Content */}

        <div className="hero-content">

          <span className="hero-tag">
            Portable Gel Ashtray
          </span>

          <h1>
            A Cleaner
            <br />
            Way to <span>Ash.</span>
          </h1>

          <p>
            The premium disposable gel ashtray that traps ash,
            helps reduce odor, and makes disposal cleaner—
            whether you're at home, in the car, or outdoors.
          </p>

          <div className="hero-buttons">

            <Link to="/buy" className="primary-btn">
  Buy Now
</Link>

            <a href="#showcase" className="secondary-btn">
              Learn More
            </a>

          </div>

          <div className="hero-features">

            <div>
              <ShieldCheck size={18} />
              <span>Safe Gel</span>
            </div>

            <div>
              <Leaf size={18} />
              <span>Eco Friendly</span>
            </div>

            <div>
              <Trash2 size={18} />
              <span>Easy Disposal</span>
            </div>

          </div>

        </div>

        {/* Right Image */}

        <div className="hero-image">

          <div className="hero-glow"></div>

          <img
            src={hero}
            alt="Ash It Portable Gel Ashtray"
            className="hero-product"
          />

        </div>

      </div>

    </section>
  );
}