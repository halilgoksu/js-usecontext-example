import { MainContext, useContext } from "../context";
//import
import React, { useEffect, useState } from "react";

function Header() {
  const { theme, appendMethods } = useContext(MainContext);

  const [logoText, setLogoText] = useState("www.boomboom.com");

  useEffect(() => {
    appendMethods({ setLogoText });
  }, []);

  return (
    <div>
      <h3>{logoText}</h3>
      Current theme = {theme}
    </div>
  );
}

export default Header;
