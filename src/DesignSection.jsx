import hero from "./assets/hero.png";

function DesignSection() {
  return (
    <section className="design-section" data-aos="fade-up">
      <div className="design-left">
        <span className="design-tag">
          PREMIUM DESIGN
        </span>

        <h2>
          Elegant by Design.
          <br />
          Responsible by Nature.
        </h2>

        <p>
          Ash it combines a clean, minimal design with a practical disposable
          solution—keeping your surroundings cleaner wherever you go.
        </p>

        <button className="primary-btn">
          Learn More
        </button>
      </div>

      <div className="design-right">
        <img
          src={hero}
          alt="Ash it Product"
          className="design-image"
        />
      </div>
    </section>
  );
}

export default DesignSection;