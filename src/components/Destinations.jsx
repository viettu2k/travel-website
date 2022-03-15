import React, { useState } from "react";

function Destinations() {
  const [state] = useState({
    heading:
      "Discover the most engaging places in the world with Travel Friends",
    paragraph:
      "Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it.",
  });

  return (
    <div className="destinations">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="destinations__heading">{state.heading}</h3>
          </div>
          <div className="col-6">
            <p className="destinations__paragraph">{state.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
