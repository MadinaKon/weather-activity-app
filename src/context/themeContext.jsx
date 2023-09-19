import React from "react";

const ThemeContext = React.createContext(false);

const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = React.useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
    document.body.classList.toggle("dark-theme");
  };
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
