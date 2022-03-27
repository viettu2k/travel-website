import React, { useState } from "react";
import ServicesLeft from "./ServicesLeft";

const Services = () => {
  const [state] = useState({
    heading:
      "Why customers love travel friends? because we provide unique services.",
    subHeading:
      "Our aim is to provide professional and unique services to customers, and we have provided high quality services to our customers that why they love travel friends.",
  });
  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row ml-minus-15 mr-minus-15">
            <div className="col-6 p-15">
              <ServicesLeft
                heading={state.heading}
                subHeading={state.subHeading}
              />
            </div>
            <div className="col-6 p-15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              commodi quis beatae perferendis accusantium sit ullam animi
              adipisci dicta a, reprehenderit laudantium aliquid voluptatibus,
              deserunt quibusdam distinctio eligendi eius itaque?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
