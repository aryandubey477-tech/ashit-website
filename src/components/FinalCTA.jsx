import "../styles/FinalCTA.css";
import { ShoppingBag, Truck, ShieldCheck, Package } from "lucide-react";
import { whatsappLink } from "../utils/whatsapp";

export default function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="cta-content">

        <span className="cta-tag">
          READY TO ORDER?
        </span>

        <h2>
          Clean Ash.
          <br />
          Simple Disposal.
        </h2>

        <p>
          Designed for people who want a cleaner,
          more convenient way to dispose of cigarette ash.
        </p>

        <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button"
>
  <ShoppingBag size={20} />
  Get Ash It • ₹75
</a>

        <div className="cta-features">

          <div>
            <Package size={18} />
            <span>Pack of 3</span>
          </div>

          <div>
            <Truck size={18} />
            <span>2–3 Day Delivery</span>
          </div>

          <div>
            <ShieldCheck size={18} />
            <span>Secure Checkout</span>
          </div>

        </div>

      </div>

    </section>
  );
}