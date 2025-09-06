import React, { useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";

const ThemeContext = createContext();

function Tema() {
  const theme = useContext(ThemeContext);
  return <div>El tema actual es: {theme}</div>;
}

function HookUseContext() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="container text-center ">
        <h2>Ejemplo de useContext 🐻‍❄️</h2>
        <Tema />
        <button className="btn btn-secondary" onClick={() => setTheme("light")}>
          tema claro 🤍
        </button>
        <div> 🐻‍❄️ </div>
        <button className="btn btn-secondary" onClick={() => setTheme("dark")}>
          tema oscuro 🖤
        </button>
        <div><Link to="/">Volver al Home</Link></div>
      </div>
    </ThemeContext.Provider>
  );
}

export default HookUseContext;
