import React, { useContext } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";

const Register = ({ currentModel }) => {
  const { dispatch } = useContext(ModelContext);

  return (
    <form>
      <div className="model__heading">
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Enter name"
        />
      </div>
      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="Enter email"
        />
      </div>
      <div className="group">
        <input
          type="password"
          name=""
          className="group__control"
          placeholder="Create password"
        />
      </div>
      <div className="group flex space-between y-center">
        <input type="submit" name="" className="btn-dark " value="Register" />
        <span
          onClick={() => dispatch({ type: OPEN_MODEL, payload: currentModel })}
        >
          Already have an account?
        </span>
      </div>
    </form>
  );
};

export default Register;
