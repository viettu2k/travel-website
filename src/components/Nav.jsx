import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavContext from "../context/NavContext";

const Nav = () => {
  const { state, dispatch } = useContext(NavContext);

  return (
    <>
      {state ? <div className="navLayer"></div> : ""}

      <div className={state ? "nav nav--open" : "nav nav--close"}>
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
