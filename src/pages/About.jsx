import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import Footer from "../components/footer/Footer";
import AboutImage from "../components/pages-parts/AboutImage";

export default function About() {
  const [state] = useState({
    heading: "about us",
    pageHeading: "world best travel agency company since 2005",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro vel consequuntur minus id quam in vitae saepe veniam. Alias, tempore distinctio laborum molestiae odio dicta corrupti quia debitis! Deserunt?",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
      <Footer />
    </>
  );
}
