import React from "react";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="travel friends not found page" />
      </Helmet>
      <h1>NotFound</h1>;
    </>
  );
}
