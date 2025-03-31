import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const Theme = (props) => {
  const [theme, setTheme] = useState('dark'); // Vaikimisi tume

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? 'dark' : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { Theme, ThemeContext };