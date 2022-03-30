import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LightBox = () => {
  return (
    <div className="gallery__lightbox">
      <h4>allakf</h4>
      <div className="gallery__lightbox__card">
        <div className="gallery__lightbox__card__image">
          <LazyLoadImage src="" alt="image name" />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
