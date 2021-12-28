import React from "react";
import classes from "../styles/answer.module.css";
import Checkbox from "./CheckBox";
export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="test answer" />;
    </div>
  );
}
