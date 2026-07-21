import { useState } from "react";

import front from "../assets/front.png";
import back from "../assets/back.png";
import side from "../assets/side.png";
import top from "../assets/top.png";
import hero from "../assets/hero.png";
import lifestyle from "../assets/lifestyle.png";
import openBox from "../assets/open-box.png";

function Gallery() {
  const images = [
    {
      src: front,
      title: "Front View",
    },
    {
      src: back,
      title: "Back View",
    },
    {
      src: side,
      title: "Side View",
    },
    {
      src: top,
      title: "Top View",
    },
    {
      src: openBox,
      title: "Open Box",
    },
    {
      src: lifestyle,
      title: "Lifestyle",
    },
  ];

  const [selected, setSelected] = useState(images[0]);

  return (
    <section className="gallery" data-aos="fade-up">
      <span className="mini-title">
        PRODUCT GALLERY
      </span>

      <h2>
        See Ash It From Every Angle
      </h2>

      <p className="gallery-text">
        Premium design, compact size, and thoughtfully built for everyday
        convenience.
      </p>

      <div className="gallery-main">
  <img
    key={selected.title}
    src={selected.src}
    alt={selected.title}
    className="gallery-image"
  />
</div>

      <div className="gallery-grid">
        {images.map((image) => (
          <button
            key={image.title}
            className={`thumb ${
              selected.title === image.title ? "active" : ""
            }`}
            onClick={() => setSelected(image)}
          >
            <img
              src={image.src}
              alt={image.title}
            />
            <span>{image.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Gallery;