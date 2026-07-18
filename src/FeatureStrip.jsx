import {
  Droplets,
  Flame,
  Trash2,
  Leaf,
} from "lucide-react";

function FeatureStrip() {
  return (
    <section className="feature-strip" data-aos="fade-up">

      <div className="feature-item">
        <div className="icon">
          <Droplets size={30} />
        </div>
        <h3>Add Water</h3>
        <p>Activate the gel in seconds.</p>
      </div>

      <div className="feature-item">
        <div className="icon">
          <Flame size={30} />
        </div>
        <h3>Ash It</h3>
        <p>Extinguish cigarettes safely.</p>
      </div>

      <div className="feature-item">
        <div className="icon">
          <Trash2 size={30} />
        </div>
        <h3>Dispose</h3>
        <p>Throw it away responsibly.</p>
      </div>

      <div className="feature-item">
        <div className="icon">
          <Leaf size={30} />
        </div>
        <h3>Eco Friendly</h3>
        <p>Designed with sustainability in mind.</p>
      </div>

    </section>
  );
}

export default FeatureStrip;