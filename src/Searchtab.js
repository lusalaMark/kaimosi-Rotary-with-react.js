import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__right">
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div>
    </div>
  );
}

export default Header;
