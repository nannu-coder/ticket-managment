import React from "react";
import DataTable from "../../../Components/Common/DataTable/DataTable";
import SearchBar from "../../../Components/Common/SearchBar/SearchBar";
import "animate.css";
import "./CurrentTickets.css";

const CurrentTickets = () => {
  return (
    <div className="current-tickets__part">
      <div className="crnt-header">
        <div className="crnt-header__heading">
          <h2>Current Tickets</h2>
        </div>
        <div className="crnt_searchBar search-input">
          <SearchBar />
        </div>
      </div>
      <div
        className="crnt_tables animate__animated animate__fadeInUp"
        style={{ marginTop: "30px" }}
      >
        <DataTable />
      </div>
    </div>
  );
};

export default CurrentTickets;
