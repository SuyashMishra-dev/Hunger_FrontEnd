import React from "react";
import { connect } from "react-redux";

const Loder = (props) => {
  const { isLoading } = props;
  return isLoading ? (
    <div
      className="loading d-flex juxtify-content-center align-items-center w-100 text-center position-absolute bg-dark"
      style={{ height: "100vh", zIndex: 11, opacity: 0.7 }}
    >
      <img className="d-block mx-auto" src="loader.gif" alt="" height="150px" />
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
});

export default connect(mapStateToProps, null)(Loder);
