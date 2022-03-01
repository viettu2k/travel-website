import React, { useContext } from "react";
import ModelContext from "../context/ModelContext";

const Model = () => {
  const { state, dispatch, closeModel } = useContext(ModelContext);

  const close = (e) => {
    if (e.target.getAttribute("class") === "model") {
      closeModel();
    }
  };

  return state.modelStatus ? (
    <div className="model" onClick={close}>
      <div className="model__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        est. Nesciunt eos corrupti unde possimus ipsa, neque tenetur eius iusto
        amet. Rem eligendi quam doloremque ut ratione porro maiores deleniti?
      </div>
    </div>
  ) : (
    ""
  );
};

export default Model;
