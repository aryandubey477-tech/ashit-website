import "../styles/PurchaseFAQ.css";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does Ash It contain any harmful chemicals?",
    answer:
      "No. Ash It is designed for safe everyday use when used as intended."
  },
  {
    question: "How many ashtrays are included?",
    answer:
      "Each box contains 3 disposable gel ashtrays."
  },
  {
    question: "Is Ash It reusable?",
    answer:
      "No. Ash It is a disposable product designed for convenient single-use disposal."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders are typically delivered within 2–3 business days, depending on your city."
  },
  {
    question: "Can I carry it while travelling?",
    answer:
      "Yes. Its compact design makes it easy to carry in your car, backpack, luggage, or travel bag."
  },
  {
    question: "How do I dispose of it?",
    answer:
      "Once you've finished using it, simply dispose of it in a dustbin."
  }
];

export default function PurchaseFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="purchase-faq">

      <div className="section-heading">
        <span className="section-tag">FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before ordering.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={open === index ? "rotate" : ""}
                size={20}
              />
            </button>

            {open === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}