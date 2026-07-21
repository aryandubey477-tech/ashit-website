import "../styles/FeatureRibbon.css";

import {
  Car,
  Sparkles,
  Trash2,
  ShieldCheck,
  Briefcase
} from "lucide-react";

export default function FeatureRibbon() {

  const features = [

    {
      icon:<Car size={28}/>,
      title:"Portable",
      text:"Fits anywhere"
    },

    {
      icon:<Sparkles size={28}/>,
      title:"Cleaner",
      text:"Less mess"
    },

    {
      icon:<Trash2 size={28}/>,
      title:"Easy Disposal",
      text:"Dispose quickly"
    },

    {
      icon:<ShieldCheck size={28}/>,
      title:"Safe Gel",
      text:"Locks ash"
    },

    {
      icon:<Briefcase size={28}/>,
      title:"Travel Ready",
      text:"Perfect on the go"
    }

  ];

  return (

    <section className="feature-ribbon">

      <div className="feature-wrapper">

        {features.map((item,index)=>(

          <div
            className="feature-item"
            key={index}
          >

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>

  );

}