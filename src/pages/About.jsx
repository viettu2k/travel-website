import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/PageContainer";
import Footer from "../components/footer/Footer";

export default function About() {
  const [state] = useState({
    heading: "about us",
    pageHeading: "world best travel agency company since 2005",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro vel consequuntur minus id quam in vitae saepe veniam. Alias, tempore distinctio laborum molestiae odio dicta corrupti quia debitis! Deserunt?",
  });

  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state} />
      <Footer />
    </>
  );
}
