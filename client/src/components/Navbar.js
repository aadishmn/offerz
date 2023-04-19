import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ologo from "../assets/ologo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const user = localStorage.getItem("token");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const admin = localStorage.getItem("admin");

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  //logout func
  const handleLogout = () => {
    localStorage.removeItem("admin");

    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <i class='fab fa-typo3' /> */}
            <img src={ologo} width={100}></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  window.scroll({ top: 10, behavior: "auto" });
                  console.log("Called the function");
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={() => {
                  window.scroll({ top: 2050, behavior: "auto" });
                  console.log("Called the function");
                }}
              >
                About
              </Link>
            </li>
            {admin && (
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                to="/contactform"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact us
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login/Sign Up
              </Link>
            </li>
          </ul>
          {button && !user && (
            <Button buttonStyle="btn--outline">SIGN UP</Button>
          )}
          {user && (
            <Button buttonStyle="btn--outline" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
