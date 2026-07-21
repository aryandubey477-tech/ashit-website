import { Link } from "react-router-dom";
import "../styles/CTA.css";

export default function CTA() {
  return (
    <section className="cta">

      <div className="cta-box">

        <span className="section-tag">
          READY TO TRY?
        </span>

        <h2>
          Make Every Ash
          <br />
          Cleaner.
        </h2>

        <p>
          Keep your surroundings cleaner with Ash It.
          Portable, simple and made for everyday use.
        </p>

        <Link to="/buy" className="cta-btn">
          Buy Now
        </Link>

      </div>

    </section>
  );
}