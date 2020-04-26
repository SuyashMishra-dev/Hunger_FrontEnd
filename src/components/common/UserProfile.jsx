import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutUser } from "../../redux/authAction";

const UserProfile = (props) => {
  const { isAuth, user, logoutUser } = props;
  const logout = () => {
    logoutUser();
  };
  return (
    <div className="container mt-5">
      <div className="col-sm-6 col-md-3 mx-auto py-5 px-4 shadow border border-rounded">
        {isAuth && user ? (
          <>
            <h3>User Profile</h3>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <div>
              <button className="btn px-3 py-1 btn-primary" onClick={logout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  user: state.authReducer.user,
});

const mapDispatchToProps = {
  logoutUser: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
