import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS, CITIES } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import DestinationInfo from "../components/DestinationInfo";

const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);
  const { id } = useParams();
  const { details } = destinationsData;

  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type: CITIES, payload: id });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationInfo details={details} />
    </>
  );
};

export default Details;
