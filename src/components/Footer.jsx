import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer id="footer" className="footer">

      <div className="footer-container">

        <Link to="/">
  <img
    src={logo}
    alt="Ash It"
    className="footer-logo"
  />
</Link>

        <h3>Ash It</h3>

        <p>
  Cleaner ash disposal for home,
  travel and everyday use.
</p>

<p>
  Cleaner ash disposal for home,
  travel and everyday use.
</p>

<a
  href="mailto:teamashit@gmail.com"
  className="footer-email"
>
  teamashit@gmail.com
</a>

<div className="footer-links">
  <a href="#faq">FAQ</a>
</div>

        <span>
          © 2026 Ash It. All rights reserved.
        </span>

      </div>

    </footer>
  );
}