import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const ServicesList = ({ services }) => {
  const [current, setCurrent] = useState(0);
  const showDetails = (index) => {
    setCurrent(index);
  };

  return services.length > 0
    ? services.map((service, index) => (
        <div className="services__list" key={index}>
          <h4
            className="services__list__heading"
            onClick={() => showDetails(index)}
          >
            <BiChevronRight size={25} />
            {service.heading}
          </h4>
          <p
            className={`services__list__details ${
              current === index ? "services__list__details--show" : ""
            }`}
          >
            {service.p}
          </p>
        </div>
      ))
    : "";
};

export default ServicesList;
