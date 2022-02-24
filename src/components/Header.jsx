import React from "react";
import { useState } from "react";

export default function Header({ heading, paragraph, children }) {
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
      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">{heading}</h1>
              <p className="header__contents__text__child__p">{paragraph}</p>
              <div className="header__contents__text__child__link">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
