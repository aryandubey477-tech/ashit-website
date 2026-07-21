import "../styles/BuyNavbar.css";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import logo from "../assets/logo.png";
import { whatsappLink } from "../utils/whatsapp";

export default function BuyNavbar() {
  return (
    <header className="buy-navbar">

      <div className="buy-nav-container">

        <Link to="/" className="buy-logo">
          <img src={logo} alt="Ash It" />
          <h2>Ash It</h2>
        </Link>

        <nav className="buy-nav-links">

          <Link to="/">Home</Link>

          <a href="#support">
            Support
          </a>

        </nav>

       <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="buy-nav-button"
>
  <ShoppingBag size={18} />

  Get Ash It • ₹75
</a>

      </div>

    </header>
  );
}