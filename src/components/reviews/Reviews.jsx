import React, { useState, useContext } from "react";
import SharedContext from "../../context/SharedContext";
import ReviewBody from "./ReviewBody";

const Reviews = () => {
  const [heading] = useState("what our customers are saying?");
  const {
    sharedData: { reviews },
  } = useContext(SharedContext);

  return (
    <div className="reviews">
      <div className="container">
        <h2 className="heading animation">{heading}</h2>
        <div className="row ml-minus-15 mr-minus-15">
          {reviews.length > 0
            ? reviews.map((review, index) => (
                <ReviewBody review={review} key={index} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
