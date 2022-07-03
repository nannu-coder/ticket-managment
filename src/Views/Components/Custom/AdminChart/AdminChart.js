import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import LineChart from "../LineChart/LineChart";

const AdminChart = () => {
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <>
      <div className="header--oprions">
        <h4 className="header--oprions__title__sm">Current Issues</h4>
        <div className="chartDropdown">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Filter</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={select}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Yearly</MenuItem>
              <MenuItem value={20}>Monthly</MenuItem>
              <MenuItem value={30}>Weekly</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <LineChart />
    </>
  );
};

export default AdminChart;
