import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import TemChild1 from "./TemChild1";
import TemChild2 from "./TemChild2";

function Template() {
  const [theme, settheme] = useState("light");
  const lighttheme = () => {
    settheme("light");
  };
  const darktheme = (e) => {
    settheme("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <div className="w-screen h-screen flex flex-col flex-wrap justify-center content-center">
      <ThemeContext.Provider value={{ theme, lighttheme, darktheme }}>
        <TemChild1 />
        <TemChild2 />
      </ThemeContext.Provider>
    </div>
  );
}

export default Template;
