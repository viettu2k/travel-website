import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Destinations from "../components/destinations/Destinations";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

export default function Home() {
  const { dispatch } = useContext(ModelContext);

  const [state] = useState({
    heading: "We are travel friends",
    paragraph:
      " Come and join us we travel the most famous and beautiful places in the worlds",
  });

  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Travel Friends</title>
        <meta
          name="description"
          content="Travel to the world with travel friends"
        />
        <meta name="keywords" content="travel, travel tours, airline" />
      </Helmet>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          onClick={() => dispatch({ type: OPEN_MODEL, payload: registerModel })}
          className="btn-default"
        >
          Get Started
        </button>
      </Header>
      <Model current={registerModel}>
        <Register currentModel={loginModel} />
      </Model>
      <Model current={loginModel}>
        <Login currentModel={registerModel} />
      </Model>
      <Destinations />
      <Services />
      <Reviews />
      <Gallery />
      <Footer />
    </>
  );
}
