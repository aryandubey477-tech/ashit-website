import "../styles/StickyBuyBar.css";
import { ShoppingBag } from "lucide-react";
import { whatsappLink } from "../utils/whatsapp";

export default function StickyBuyBar() {
  return (
    <div className="sticky-buy-bar">

      <div className="sticky-left">
        <h4>Ash It</h4>
        <p>Pack of 3 • ₹75</p>
      </div>

      <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="sticky-btn"
>
  <ShoppingBag size={18} />
  Buy Now
</a>

    </div>
  );
}