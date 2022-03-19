import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS } from "../context/types/DestinationTypes";

const Details = () => {
  const { destinationsData, dispatch } = useContext(DestinationsContext);
  const { id } = useParams();

  console.log(destinationsData.details);

  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
  }, [id]);

  return (
    <div>
      <h1>Details {id}</h1>
    </div>
  );
};

export default Details;
