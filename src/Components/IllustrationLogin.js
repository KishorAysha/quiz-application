import React from "react";
import login from "../assets/images/login.svg";
import classes from "../styles/illustration.module.css";
export default function IllustrationLogin() {
  return (
    <div className={classes.illustration}>
      <img src={login} alt="Login" />
    </div>
  );
}
