import { useState } from "react";
import "../styles/FAQ.css";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Ash It?",
    answer:
      "Ash It is a disposable gel ashtray designed to trap ash and make disposal cleaner and more convenient."
  },
  {
    question: "Can I use it in my car?",
    answer:
      "Yes. Ash It is compact and portable, making it suitable for use in cars, balconies, outdoor seating, and travel."
  },
  {
    question: "Is the gel safe?",
    answer:
      "Yes. The gel is non-toxic and intended to safely hold ash until the cup is disposed of."
  },
  {
    question: "How do I dispose of it?",
    answer:
      "Once you're done using it, dispose of the entire cup responsibly according to local waste guidelines."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq">

      <div className="faq-header">
        <span className="section-tag">FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything you need to know before buying Ash It.
        </p>
      </div>

      <div className="faq-container">

        {faqs.map((item, index) => (

          <div
            key={item.question}
            className="faq-item"
          >

            <button
              className="faq-question"
              onClick={() =>
                setOpen(open === index ? -1 : index)
              }
            >

              {item.question}

              {open === index ? (
                <Minus size={18}/>
              ) : (
                <Plus size={18}/>
              )}

            </button>

            {open === index && (

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}