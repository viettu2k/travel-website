import React from "react";
import { useState } from "react";

export default function Header() {
  const [state] = useState({
    video: "/assets/videos/header.mp4",
    poster: "/assets/images/screen.png",
  });

  return (
    <div className="header">
      <div className="header__video">
        <video
          src={state.video}
          autoPlay
          loop
          muted
          poster={state.poster}
        ></video>
      </div>
    </div>
  );
}
