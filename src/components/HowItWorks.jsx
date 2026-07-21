import "../styles/HowItWorks.css";
import { Cigarette, Hand, Trash2 } from "lucide-react";

const steps = [
  {
    no: "01",
    icon: <Cigarette size={34} />,
    title: "Use Normally",
    text: "Smoke as usual wherever you are."
  },
  {
    no: "02",
    icon: <Hand size={34} />,
    title: "Tap Into Gel",
    text: "Drop ash and cigarette butts into the gel."
  },
  {
    no: "03",
    icon: <Trash2 size={34} />,
    title: "Dispose",
    text: "Throw the entire cup away responsibly."
  }
];

export default function HowItWorks() {
  return (
    <section
  className="works"
  id="how-it-works"
>

      <div
        className="works-header"
        data-aos="fade-up"
      >

        <span className="section-tag">
          HOW IT WORKS
        </span>

        <h2>Simple. Clean. Done.</h2>

        <p>
          Three easy steps to keep your surroundings cleaner.
        </p>

      </div>

      <div className="works-grid">

        {steps.map((step, index) => (

          <div
            className="work-card"
            key={step.no}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >

            <span className="step-number">
              {step.no}
            </span>

            <div className="work-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}