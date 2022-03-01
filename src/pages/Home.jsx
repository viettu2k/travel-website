import React, { useState } from "react";
import Header from "../components/Header";
import Model from "../components/Model";

export default function Home() {
  const [state] = useState({
    heading: "We are travel friends",
    paragraph:
      " Come and join us we travel the most famous and beautiful places in the worlds",
  });
  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button className="btn-default">Get Started</button>
      </Header>
      <Model />
    </>
  );
}
