import React from "react";

const ImageText = (props) => {
  return (
    <div className="col-md-5 d-flex justify-content-center align-items-center flex-column text-center">
      <h2>{props.head}</h2>

      <p>{props.para}</p>
    </div>
  );
};

export default ImageText;
