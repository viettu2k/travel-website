import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const PageContainer = ({ data, children }) => {
  return (
    <>
      <Header heading={data.heading} />
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="col-6 animation">{children}</div>
            <div className="col-6">
              <div className="page__info">
                <h2 className="heading headingAnimation">{data.heading}</h2>
                <h1 className="page__info__heading animation">
                  {data.pageHeading}
                </h1>
                <p className="page__info__msg animation">{data.msg}</p>
                <div className="page__info__link animation">
                  <Link to="/" className="btn-dark">
                    go back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContainer;
