import React, { useContext, useState } from "react";
import GalleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  const {
    galleryStore: { gallery },
    // dispatch,
  } = useContext(GalleryContext);
  const [heading] = useState("Travelers captured images");

  return (
    <div className="gallery">
      <div className="container">
        <h2 className="heading mb-55">{heading}</h2>
        <div className="row">
          {gallery.length > 0
            ? gallery.map((glr, index) => (
                <GalleryImage key={index} glr={glr} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
