import React from "react";
import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <h1>About page</h1>
    </>
  );
}
