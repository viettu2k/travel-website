import React from "react";

const DestinationInfo = ({ details }) => {
  return (
    <div className="destinationInfo">
      <div className="container">
        <h2 className="heading">Overview</h2>
        <div className="row">
          <div className="col-8">
            <p className="destinationInfo__p">{details.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
