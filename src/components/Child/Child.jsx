import React from "react";
import "./Child.css";
import { ThemeContext } from "../../context/themeContext";
export default function Child() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleFunction} className="btn-toggle">
        Change theme
      </button>
      {toggle}
    </div>
  );
}
