import "../styles/WhyBuy.css";

import product from "../assets/open-box.png";

const sections = [

  {
    title: "Cleaner Anywhere",
    text: "No more ash on tables, cups, bottles or the ground. Keep every space cleaner with one simple disposable solution.",
    reverse: false,
  },

  {
    title: "Made for Travel",
    text: "Whether you're driving, camping, at a café or on vacation, Ash It goes wherever you do.",
    reverse: true,
  },

  {
    title: "Dispose in Seconds",
    text: "Once you're done, simply close it and throw it away. No washing. No lingering smell. No mess.",
    reverse: false,
  }

];

export default function WhyBuy(){

  return(

    <section className="why-buy">

      <div className="section-heading">

        <span className="section-tag">
          WHY ASH IT
        </span>

        <h2>
          Designed for cleaner everyday moments.
        </h2>

      </div>

      {sections.map((item,index)=>(

        <div
          key={index}
          className={`why-row ${item.reverse ? "reverse" : ""}`}
        >

          <div className="why-image">

            <img
              src={product}
              alt="Ash It"
            />

          </div>

          <div className="why-content">

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        </div>

      ))}

    </section>

  );

}