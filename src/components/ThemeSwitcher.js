import React from "react";
import { MainContext, useContext } from "../context";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(MainContext);

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={switchTheme}>Switch theme</button>;
}

export default ThemeSwitcher;
