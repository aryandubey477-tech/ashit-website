import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-container">

       <Link to="/" className="logo">
  <img src={logo} alt="Ash It" />
  <h2>Ash It</h2>
</Link>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home">Home</a>
<a href="#showcase">Product</a>
<a href="#how-it-works">How It Works</a>
<a href="#faq" onClick={() => setMenuOpen(false)}></a>
<a href="#footer">Contact</a>
        </nav>

        <Link to="/buy" className="buy-btn">
  <ShoppingBag size={18} />
  Buy Now
</Link>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;
