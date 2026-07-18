function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add Water",
      desc: "Pour a small amount of water into the Ash It cup.",
    },
    {
      number: "02",
      title: "Ash It",
      desc: "Drop your cigarette ash or butt into the gel safely.",
    },
    {
      number: "03",
      title: "Dispose",
      desc: "Throw it away responsibly once you're finished.",
    },
  ];

  return (
    <section className="how">
      <div className="how-header">
        <p className="how-subtitle">Simple Process</p>
        <h2 className="how-title">
          How <span>Ash It</span> Works
        </h2>
      </div>

      <div className="how-steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{step.number}</div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

            {index !== steps.length - 1 && (
              <div className="step-line"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;