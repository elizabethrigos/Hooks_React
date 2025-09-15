import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function HookUseEffect() {
  useEffect(() => {
    console.log("Funcionó 🐻‍❄️😼");
  }, []);

  return (
    <div className="container text-center">
      <h2>Ejemplo de useEffect 🐻‍❄️</h2>
      <h3>Mira la consola</h3>
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default HookUseEffect;