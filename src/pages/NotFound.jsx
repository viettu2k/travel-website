import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NotFound() {
  const [state] = useState({
    heading: "Oops, 404",
    paragraph: "Sorry, the page you are look for does not exist.",
    image: "/assets/images/404.jpg",
  });

  return (
    <>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="travel friends not found page" />
      </Helmet>
      <h1>NotFound</h1>;
      <Header
        heading={state.heading}
        paragraph={state.paragraph}
        image={state.image}
      >
        <Link className="btn-default" to="/">
          go to home
        </Link>
      </Header>
    </>
  );
}
