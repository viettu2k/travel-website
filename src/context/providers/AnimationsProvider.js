import React, { useEffect } from "react";
import AnimationsContext from "../AnimationsContext";

const AnimationsProvider = ({ children }) => {
  const scrollAnimations = () => {
    const elements = document.querySelectorAll(".animation");
    elements.forEach((element) => {
      console.log(element);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimations);
  }, []);

  return (
    <AnimationsContext.Provider value>{children}</AnimationsContext.Provider>
  );
};

export default AnimationsProvider;
