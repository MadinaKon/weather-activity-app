import React from "react";
import { ThemeContext } from "../../context/themeContext";
export default function Child() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleFunction}>Change theme</button>
      {toggle ? "Dark" : "Light"}
    </div>
  );
}
