import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <input
      className="form-control common-components--input"
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      required
    />
  );
};

export default Input;
