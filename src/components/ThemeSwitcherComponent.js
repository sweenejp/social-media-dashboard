import React from "react";

function ThemeSwitcherComponent(props) {
  return (
    <div className="theme-switcher">
      <p className="theme-switcher__text">{props.currentTheme} Mode</p>
      <button
        className="theme-switcher__switch theme-switcher__switch-outer"
        onClick={props.themeSwitcher}
      >
        <div
          id="theme-switcher-inner"
          className={
            props.currentTheme === "Light"
              ? "theme-switcher__switch theme-switcher__switch-inner"
              : "theme-switcher__switch theme-switcher__switch-inner theme-switcher__switch-inner--on"
          }
        ></div>
      </button>
    </div>
  );
}

export default ThemeSwitcherComponent;
