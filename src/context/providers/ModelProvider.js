import React, { useState } from "react";
import ModelContext from "../ModelContext";

const ModelProvider = (props) => {
  const [state, dispatch] = useState({ modelStatus: false });

  const openModel = () => {
    dispatch({ modelStatus: true });
  };

  const closeModel = () => {
    dispatch({ modelStatus: false });
  };

  return (
    <ModelContext.Provider
      value={{ state, dispatch, openModel, closeModel }}
    ></ModelContext.Provider>
  );
};

export default ModelProvider;
