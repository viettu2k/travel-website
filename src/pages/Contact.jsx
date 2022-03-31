import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/pages-parts/ContactForm";
import PageContainer from "../components/pages-parts/PageContainer";

export default function Contact() {
  const [state] = useState({
    heading: "contact us",
    pageHeading: "leave your message in the contact form",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro vel consequuntur minus id quam in vitae saepe veniam. Alias, tempore distinctio laborum molestiae odio dicta corrupti quia debitis! Deserunt?",
  });

  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
    </>
  );
}
