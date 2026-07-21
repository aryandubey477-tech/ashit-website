import "../styles/BuyNow.css";

import {
  Package,
  ShieldCheck,
  BookOpen,
  Trash2
} from "lucide-react";

export default function Includes() {
  return (
    <section className="includes">

      <div className="section-heading">

        <span className="section-tag">
          WHAT'S INSIDE
        </span>

        <h2>
          Everything You Need
        </h2>

        <p>
          Every Ash It box is carefully packed to provide a clean,
          convenient and premium experience from the moment you open it.
        </p>

      </div>

      <div className="includes-grid">

        <div className="include-card">
          <Package size={34}/>
          <h3>3 Gel Ashtrays</h3>
          <p>Ready to use straight out of the box.</p>
        </div>

        <div className="include-card">
          <ShieldCheck size={34}/>
          <h3>Premium Packaging</h3>
          <p>Compact, durable and easy to carry.</p>
        </div>

        <div className="include-card">
          <BookOpen size={34}/>
          <h3>Usage Guide</h3>
          <p>Simple instructions for first-time users.</p>
        </div>

        <div className="include-card">
          <Trash2 size={34}/>
          <h3>Easy Disposal</h3>
          <p>Designed for quick and responsible disposal.</p>
        </div>

      </div>

    </section>
  );
}