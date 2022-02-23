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
      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents_text_child_h1">
                We are travel friends
              </h1>
              <p className="header__contents__text__child__p">
                Come and join us we travel the most famous and beautiful places
                in the worlds
              </p>
              <div className="header__contents__text__child__link">
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
