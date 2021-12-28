import React from "react";
import classes from "../styles/button.module.css";

export default function Button({ children, className }) {
  return <div className={`${classes.button} ${className}`}>{children}</div>;
}
