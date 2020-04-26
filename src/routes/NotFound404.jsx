import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <p className="display-3 text-danger">404 Not Found</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default NotFound;
