import React, { useContext } from "react";
import NavContext from "../context/NavContext";
import { NAV_TOGGLE } from "../context/types/NavTypes";

const Toggle = () => {
  const { state, dispatch } = useContext(NavContext);

  return (
    <div className="toggle-open" onClick={() => dispatch({ type: NAV_TOGGLE })}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Toggle;
