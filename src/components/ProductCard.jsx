import "./../styles/BuyNow.css";
import product from "../assets/open-box.png";
import { whatsappLink } from "../utils/whatsapp";

import {
  Check,
  ShieldCheck,
  Car,
  Leaf
} from "lucide-react";

export default function ProductCard() {
  return (
    <section className="product-section">

      <div className="product-card">

        <div className="product-image">

          <div className="product-glow"></div>

          <img
            src={product}
            alt="Ash It Pack of 3"
          />

       

        </div>

        <div className="product-details">

          <span className="best-seller">
            BEST SELLER
          </span>

          <h2>
            Ash It
            <br />
            Pack of 3
          </h2>

          <div className="price">

            ₹75

          </div>

          <p className="description">
            Three premium disposable gel ashtrays designed for cleaner,
            safer and more responsible ash disposal.
          </p>

          <div className="feature-list">

            <div>
              <ShieldCheck size={20}/>
              Locks ash instantly
            </div>

            <div>
              <Car size={20}/>
              Perfect for cars & travel
            </div>

            <div>
              <Leaf size={20}/>
              Disposable paper cup
            </div>

            <div>
              <Check size={20}/>
              Premium packaging included
            </div>

          </div>

          <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button"
>
  Get Ash It • ₹75
</a>

          <div className="trust-bar">

  <span>🔒 Secure Checkout</span>

  <span>📦 Fast Shipping</span>

  <span>⭐ Premium Packaging</span>

</div>

        </div>

      </div>

    </section>
  );
}