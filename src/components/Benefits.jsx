import {
  Leaf,
  Briefcase,
  ShieldCheck,
  Trash2,
  Sparkles,
} from "lucide-react";

function Benefits() {
  const benefits = [
    {
      icon: <Briefcase size={32} />,
      title: "Portable",
      text: "Small enough to fit into your pocket, car, backpack or travel kit.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Odor Control",
      text: "Gel traps cigarette ash while helping reduce unpleasant odors.",
    },
    {
      icon: <Trash2 size={32} />,
      title: "Disposable",
      text: "Use it, close it and dispose of it responsibly after use.",
    },
    {
      icon: <Leaf size={32} />,
      title: "Cleaner Spaces",
      text: "Helps keep cafés, cars, balconies and public places cleaner.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Premium Design",
      text: "Compact, minimal and thoughtfully designed for modern lifestyles.",
    },
  ];

  return (
    <section className="benefits" data-aos="fade-up">
      <span className="mini-title">
        WHY CHOOSE ASH IT
      </span>

      <h2 className="benefits-title">
        Cleaner Smoking.
        <br />
        Smarter Disposal.
      </h2>

      <p className="benefits-subtitle">
        Every detail has been designed to make smoking cleaner,
        simpler and more responsible.
      </p>

      <div className="benefits-grid">
        {benefits.map((item) => (
          <div className="benefit-card" key={item.title}>
            <div className="benefit-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;