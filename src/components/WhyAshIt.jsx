import "../styles/WhyAshIt.css";
import openBox from "../assets/open-box.png";

import {
  ShieldCheck,
  Droplets,
  Car,
  Leaf
} from "lucide-react";

export default function WhyAshIt() {
  return (
    <section className="why">

      <div className="why-container">

        <div className="why-image">

          <img
            src={openBox}
            alt="Ash It Open Box"
          />

        </div>

        <div className="why-content">

          <span className="section-tag">
            WHY ASH IT?
          </span>

          <h2>
  A Cleaner Way
  <br />
  To <span>Dispose Ash</span>
</h2>

          <p>
            Ash It is designed for smokers who want a cleaner,
            portable and more responsible way to dispose of ash
            without making a mess.
          </p>

          <div className="why-list">

            <div>
              <ShieldCheck size={22}/>
              <div>
                <h4>Locks Ash</h4>
                <p>Gel traps ash instantly.</p>
              </div>
            </div>

            <div>
              <Droplets size={22}/>
              <div>
                <h4>Less Mess</h4>
                <p>Keeps tables cleaner.</p>
              </div>
            </div>

            <div>
              <Car size={22}/>
              <div>
                <h4>Carry Anywhere</h4>
                <p>Perfect for cars and travel.</p>
              </div>
            </div>

            <div>
              <Leaf size={22}/>
              <div>
                <h4>Eco Friendly</h4>
                <p>Disposable paper cup.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}