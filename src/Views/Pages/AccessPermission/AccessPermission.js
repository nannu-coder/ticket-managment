import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import SwitchComponent from "../Common/SwitchComponent/SwitchComponent";
import "./AccessPermission.css";

const animatedComponents = makeAnimated();

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "ShimulBhai", label: "Shimul Bhai" },
  { value: "MunnaBhai", label: "Munna Bhai" },
  { value: "Shakib", label: "Shakib" },
  { value: "NamNai", label: "Nam Nai" },
];

const AccessPermission = () => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="accessPermission-body">
        <div className="accessPermission-title">
          <h3 className="accessPermission-heading">Access and Permission</h3>
          <p className="accessPermission-sub">
            Contrary to popular belief, Lorem Ipsum is not simply random text.{" "}
          </p>
        </div>
        <div className="accessPermission-searchBox">
          <form className="permission-form" action="#">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
            />
            <button className="permission-btn">Save</button>
          </form>
        </div>
        <div className="switchComponent">
          <SwitchComponent />
        </div>
      </div>
    </div>
  );
};

export default AccessPermission;
