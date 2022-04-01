import React, { useEffect } from "react";
import AnimationsContext from "../AnimationsContext";

const AnimationsProvider = ({ children }) => {
  useEffect(() => {}, []);

  return (
    <AnimationsContext.Provider value>{children}</AnimationsContext.Provider>
  );
};

export default AnimationsProvider;
