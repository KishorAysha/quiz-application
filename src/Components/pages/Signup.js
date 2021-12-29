import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Illustration from "../Illustration";
import Form from "../pages/Form";
import TextInput from "../TextInput";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <Form classNmae={`${classes.Signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <CheckBox text="I agree to the Term &amp; Conditions" />
          <Button>
            <span>Submit now</span>
          </Button>

          <div className="info">
            Already have an account? <NavLink to="/login">Login</NavLink>{" "}
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}
