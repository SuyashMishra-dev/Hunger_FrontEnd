import React from "react";

const ImageCard = (props) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card w-100">
        <img
          src={props.url}
          className="card-img-top"
          width="w-100"
          height="250px"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-text">{props.head}</h3>
          <p className="card-text">{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
