import "../styles/FeatureStrip.css";
import { ShieldCheck, Leaf, Car } from "lucide-react";

export default function FeatureStrip() {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Traps Ash",
      text: "Gel locks ash and helps reduce mess."
    },
    {
      icon: <Leaf size={32} />,
      title: "Eco Friendly",
      text: "Disposable paper cup with non-toxic gel."
    },
    {
      icon: <Car size={32} />,
      title: "Use Anywhere",
      text: "Perfect for home, car and outdoor use."
    }
  ];

  return (
    <section className="feature-strip">
      <div className="feature-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}