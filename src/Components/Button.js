import React from "react";
import classes from "../styles/button.module.css";

export default function Button({ children }) {
  return (
    <div className={classes.button}>
      <span>{children}</span>
    </div>
  );
}
