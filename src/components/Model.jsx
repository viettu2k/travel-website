import React, { useContext } from "react";
import ModelContext from "../context/ModelContext";

const Model = () => {
  const { state, dispatch } = useContext(ModelContext);

  return state.modelStatus ? (
    <div className="model">
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
