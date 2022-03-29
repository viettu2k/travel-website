import React, { useState, useContext } from "react";
import SharedContext from "../../context/SharedContext";

const Reviews = () => {
  const {
    sharedData: { reviews },
  } = useContext(SharedContext);

  return <div></div>;
};

export default Reviews;
