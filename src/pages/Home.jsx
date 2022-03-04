import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Register from "../auth/Register";

export default function Home() {
  const { dispatch } = useContext(ModelContext);

  const [state] = useState({
    heading: "We are travel friends",
    paragraph:
      " Come and join us we travel the most famous and beautiful places in the worlds",
  });
  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          onClick={() => dispatch({ type: OPEN_MODEL })}
          className="btn-default"
        >
          Get Started
        </button>
      </Header>
      <Model>
        <Register />
      </Model>
    </>
  );
}
