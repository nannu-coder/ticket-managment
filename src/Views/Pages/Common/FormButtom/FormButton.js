import React from "react";
import "./FormButton.css";

const FormButton = (props) => {
  console.log(props);
  return (
    <button type={props.type} className="common-components--submit_btn">
      {props.children}
    </button>
  );
};

export default FormButton;
