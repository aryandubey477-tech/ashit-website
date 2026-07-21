import "../styles/LifestyleGallery.css";

const cards = [

  {
    title: "Cafés",
    text: "Enjoy a cleaner table while relaxing with friends.",
    size: "large"
  },

  {
    title: "Road Trips",
    text: "Fits perfectly in your car cup holder.",
    size: "small"
  },

  {
    title: "Camping",
    text: "No ash left behind in nature.",
    size: "small"
  },

  {
    title: "Beach Days",
    text: "Keep the sand clean and dispose responsibly.",
    size: "small"
  },

  {
    title: "Evening Gatherings",
    text: "Perfect for balconies, terraces and outdoor events.",
    size: "wide"
  }

];

export default function LifestyleGallery(){

  return(

    <section className="gallery-section">

      <div className="section-heading">

        <span className="section-tag">

          EVERYDAY MOMENTS

        </span>

        <h2>

          Wherever life takes you.

        </h2>

      </div>

      <div className="gallery-grid">

        {cards.map((card,index)=>(

          <div
            key={index}
            className={`gallery-card ${card.size}`}
          >

            <div className="gallery-overlay">

              <h3>{card.title}</h3>

              <p>{card.text}</p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}