import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";

function useCustomHook(value) {
  useDebugValue(value ? "Activo" : "Inactivo");
  return value;
}

function UseDebug() {
  const estado = useCustomHook(true);

  return (
    <div className="container text-center">
      <h2>Ejemplo de useDebugValue 🐻‍❄️</h2>
      <p>Estado del hook: {estado ? "Activo" : "Inactivo"}</p>
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default UseDebug;