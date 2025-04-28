import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import { logotext, socialprofils } from "../../content_option";
// import Themetoggle from "../themetoggle";

const Headermain = () => {
  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Logo */}
          <Link className="navbar-brand nav_ac" to="/">
            {/* <img
              src={process.env.PUBLIC_URL + "/favicon-64X64.ico"}
              alt="Logo"
              style={{ width: "70px", height: "70px", objectFit: "cover" }}
            /> */}
            <h1 className="logo_letters">SONA</h1>
          </Link>

          {/* Navigation Links */}
          <nav className="d-flex align-items-center">
            <ul className="d-flex mb-0">
              <li className="menu_item mx-2">
                <Link to="/" className="text_2">
                  <div id="button_h" className="ac_btn btn ">
                    Home
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
              </li>
              <li className="menu_item mx-2">
                <Link to="/portfolio" className="text_2">
                  <div id="button_h" className="ac_btn btn ">
                    My Portfolio
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
              </li>
              <li className="menu_item mx-2">
                <Link to="/blogs" className="text_2">
                  <div id="button_h" className="ac_btn btn ">
                    Blogs
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
              </li>
              <li className="menu_item mx-2">
                <Link to="/about" className="text_2">
                  <div id="button_h" className="ac_btn btn ">
                    Resume
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
              </li>
              <li className="menu_item mx-2">
                <Link to="/contact" className="text_2">
                  <div id="button_h" className="ac_btn btn ">
                    Contact
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
              </li>
            </ul>

            {/* <Themetoggle /> */}
          </nav>
        </div>
      </header>

      {/* Decorative borders */}
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;