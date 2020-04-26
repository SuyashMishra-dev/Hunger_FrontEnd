import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 container">
      <div>
        <ul
          className="d-flex justify-content-center align-item-center"
          style={{ listStyle: "none" }}
        >
          <li className="px-3 pt-1">
            <Link className="text-dark" to="/">
              <img src="logo.png" alt="" height="25px" /> Hunger
            </Link>
          </li>
          <li className="px-3">
            <a className="text-dark" href="http://www.instagram.com">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li className="px-3">
            <a className="text-dark" href="http://www.facebook.com">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
          </li>
          <li className="px-3">
            <a className="text-dark" href="http://www.twitter.com">
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div>
        <ul
          className="d-flex justify-content-center align-item-center"
          style={{ listStyle: "none" }}
        >
          <li className="px-3 ">
            <Link to="/contact" className="text-dark">
              <small>Contact Us</small>
            </Link>
          </li>
          <small className="pt-1">|</small>
          <li className="px-3">
            <Link to="/" className="text-dark">
              <small>FAQ</small>
            </Link>
          </li>
          <small className="pt-1">|</small>
          <li className="px-3">
            <Link to="/avout" className="text-dark">
              <small>About Us</small>
            </Link>
          </li>
          <small className="pt-1">|</small>
          <li className="px-3">
            <Link to="/" className="text-dark">
              <small>Term & Condition</small>
            </Link>
          </li>
          <small className="pt-1">|</small>
          <li className="px-3">
            <Link to="/" className="text-dark">
              <small>Privacy Policy</small>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <small> © 2020 Hunger | All Rights Reserved English (India) </small>
      </div>
      <div className=" mb-5">
        <hr />
      </div>
    </div>
  );
};

export default Footer;
