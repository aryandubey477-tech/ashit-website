import { useState } from "react";
import "../styles/Showcase.css";

import front from "../assets/front.png";
import back from "../assets/back.png";
import side from "../assets/side.png";
import top from "../assets/top.png";
import openBox from "../assets/open-box.png";

const images = [
  {
    id: 1,
    title: "Front View",
    image: front,
  },
  {
    id: 2,
    title: "Back View",
    image: back,
  },
  {
    id: 3,
    title: "Side View",
    image: side,
  },
  {
    id: 4,
    title: "Top View",
    image: top,
  },
  {
    id: 5,
    title: "Open Box",
    image: openBox,
  },
];

export default function Showcase() {
  const [selected, setSelected] = useState(images[0]);
  const [fade, setFade] = useState(false);

  const changeImage = (item) => {
    if (item.id === selected.id) return;

    setFade(true);

    setTimeout(() => {
      setSelected(item);
      setFade(false);
    }, 180);
  };

  return (
    <section className="showcase" id="showcase">

      <div
        className="showcase-header"
        data-aos="fade-up"
      >

        <span className="section-tag">
          PRODUCT SHOWCASE
        </span>

        <h2>
          See <span>Ash It</span>
          <br />
          From Every Angle
        </h2>

        <p>
          Explore every detail of Ash It before you buy.
          Tap any image below to switch views.
        </p>

      </div>

      <div
        className="showcase-main"
        data-aos="zoom-in"
      >

        <div className="showcase-image">

          <img
            src={selected.image}
            alt={selected.title}
            className={fade ? "fade" : ""}
          />

          <div className="showcase-caption">
            <h3>{selected.title}</h3>
          </div>

        </div>

      </div>

      <div
        className="thumbnail-row"
        data-aos="fade-up"
        data-aos-delay="250"
      >

        {images.map((item) => (

          <button
            key={item.id}
            onClick={() => changeImage(item)}
            className={
              selected.id === item.id
                ? "thumb active"
                : "thumb"
            }
          >

            <img
              src={item.image}
              alt={item.title}
            />

          </button>

        ))}

      </div>

    </section>
  );
}