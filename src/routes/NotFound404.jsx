import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column mt-2"
      style={{ height: "70vh" }}
    >
      <img
        height="90%"
        className="img-fluid"
        src="https://cdn.dribbble.com/users/1756402/screenshots/4238057/404_dribbble.jpg"
        alt=""
      />
      <Link className="mt-3" to="/">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
