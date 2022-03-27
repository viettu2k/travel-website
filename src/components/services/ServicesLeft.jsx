import React from "react";

const ServicesLeft = ({ heading, subHeading }) => {
  return (
    <div className="services__left">
      <h1 className="services__left__heading">{heading}</h1>
      <p className="services__left_paragraph">{subHeading}</p>
    </div>
  );
};

export default ServicesLeft;
