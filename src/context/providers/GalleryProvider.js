import { useReducer } from "react";
import GalleryContext from "../GalleryContext";
import GalleryReducer from "../reducers/GalleryReducer";
import gallery from "../../data/gallery";

const NavProvider = ({ children }) => {
  const [galleryStore, dispatch] = useReducer(GalleryReducer, {
    gallery,
    lightBoxStatus: false,
  });

  return (
    <GalleryContext.Provider value={{ galleryStore, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default NavProvider;
