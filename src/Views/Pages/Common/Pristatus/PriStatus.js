import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { BiEdit } from "react-icons/bi";
import { Paper } from "@mui/material";
import "./Pristatus.css";

const PriStatus = (props) => {
  return (
    <Paper className="priorities--options--box" elevation={0}>
      <div className="priorities--options-text">{props.title}</div>
      <div className="priorities--options-icon">
        <button className="priorities--options-btns">
          <IconContext.Provider
            value={{ className: "priorities--options-icon-delete" }}
          >
            <RiDeleteBin6Line color="#7B7F90" size={18} />
          </IconContext.Provider>
        </button>
        <button className="priorities--options-btns">
          <IconContext.Provider
            value={{ className: "priorities--options-icon-edit" }}
          >
            <BiEdit color="#7B7F90" size={18} />
          </IconContext.Provider>
        </button>
      </div>
    </Paper>
  );
};

export default PriStatus;
