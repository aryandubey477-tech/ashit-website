import hero from "./assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div
        className="hero-left"
        data-aos="fade-right"
      >

        <h1>
          Small choice.
          <br />
          Cleaner tomorrow.
        </h1>

        <p>
          Ash It is a portable, disposable ashtray
          designed for a cleaner you and a cleaner planet.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Buy Now
          </button>

          <button className="secondary-btn">
            Explore →
          </button>

        </div>

      </div>

      <div
        className="hero-right"
        data-aos="fade-left"
      >

        <div className="spotlight"></div>

        <img
          src={hero}
          alt="ASHIT"
          className="hero-image"
        />

      </div>

    </section>
  );
}

export default Hero;