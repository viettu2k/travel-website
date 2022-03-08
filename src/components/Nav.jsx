import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="navLayer"></div>
      <div className="nav">
        <div className="nav__content">
          <li to="/">
            <Link>Home</Link>
          </li>
          <li to="/about">
            <Link>About</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
