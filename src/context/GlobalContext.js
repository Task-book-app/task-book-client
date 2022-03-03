import React, { createContext } from "react";
import useDarkMode from "../Components/hooks/useDarkMode";

export const appContext = createContext();

export function GlobalContext({ children }) {
  const [currentTheme, themeToggler] = useDarkMode();

  const user = { name: "habid" };
  const items = ["item1", "item2", "item3"];

  return (
    <appContext.Provider value={{ user, items, currentTheme, themeToggler }}>
      {children}
    </appContext.Provider>
  );
}
