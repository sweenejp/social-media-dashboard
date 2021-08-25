import React from "react";
import ThemeSwitcherComponent from "./ThemeSwitcherComponent";

function Header(props) {
  return (
    <header className="header">
      <div className="header__title-section">
        <h1 className="header__title">Social Media Dashboard</h1>
        <h2 className="header__subtitle">
          Total Followers: {props.totalFollowers.toLocaleString("en-us")}
        </h2>
      </div>
      <ThemeSwitcherComponent {...props} />
    </header>
  );
}

export default Header;
