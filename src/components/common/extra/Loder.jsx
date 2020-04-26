import React from "react";
import { connect } from "react-redux";

const Loder = ({ isLoading }) => {
  return isLoading ? (
    <div
      className="loading d-flex juxtify-content-center align-items-center w-100 text-center position-absolute"
      style={{ height: "100vh", zIndex: 15, background: "rgba(0,0,0,0.6)" }}
    >
      <img className="d-block mx-auto" src="loader.gif" alt="" height="150px" />
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading || state.foodReducer.isLoading,
});

export default connect(mapStateToProps, {})(Loder);
