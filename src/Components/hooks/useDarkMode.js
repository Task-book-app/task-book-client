import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setCurrentTheme(mode);
  };

  const themeToggler = () => {
    currentTheme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setCurrentTheme(localTheme) : setMode("light");
    setMountedComponent(true);
  }, []);

  return [currentTheme, themeToggler, mountedComponent];
};

export default useDarkMode;
