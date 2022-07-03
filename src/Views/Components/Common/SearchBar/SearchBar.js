import React from "react";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

const SearchBar = () => {
  return (
    <>
      <input
        className="tickets__part-search-input"
        placeholder="Search Here"
        type="search"
      />
      <IconContext.Provider value={{ className: "tickets__part-search-icon" }}>
        <BsSearch />
      </IconContext.Provider>
    </>
  );
};

export default SearchBar;
