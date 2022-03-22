import React, { useEffect, useState } from "react";

import { MainContext } from "./context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState("light");

  const [methods, setMethods] = useState({});

  const appendMethods = (newMethods) => {
    setMethods({
      ...methods,
      ...newMethods,
    });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const data = {
    theme,
    setTheme,
    appendMethods,
    ...methods,
  };

  return (
    <MainContext.Provider value={data}>
      <div className="container">
        <Header />
        <ThemeSwitcher></ThemeSwitcher>
        <Footer />
      </div>
    </MainContext.Provider>
  );
}

export default App;
