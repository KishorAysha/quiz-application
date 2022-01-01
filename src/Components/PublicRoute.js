import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/Auth.Context";

export default function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/" />
  );
}
