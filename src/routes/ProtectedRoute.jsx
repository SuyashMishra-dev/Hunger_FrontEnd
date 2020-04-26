import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouter = ({ component: Component, isAuth, ...rest }) => {
  return isAuth ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRouter;
