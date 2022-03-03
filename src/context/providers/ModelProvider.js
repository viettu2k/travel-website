import React, { useState, useReducer } from "react";
import ModelContext from "../ModelContext";

const ModelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      return state;
    },
    { modelStatus: false }
  );

  const openModel = () => {
    dispatch({ modelStatus: true });
  };

  const closeModel = () => {
    dispatch({ modelStatus: false });
  };

  return (
    <ModelContext.Provider value={{ state, dispatch, openModel, closeModel }}>
      {children}
    </ModelContext.Provider>
  );
};

export default ModelProvider;
