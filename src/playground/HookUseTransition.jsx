import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom";

function HookUseTransition() {
  const [mensaje, setMensaje] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleEnviar = () => {
    setMensaje(""); 
    startTransition(() => {
      setTimeout(() => {
        setMensaje("Mensaje enviado");
      }, 1500); // Simula 1.5 segundos de carga
    });
  };

  return (
    <div>
      <button disabled={isPending} onClick={handleEnviar}>
        Enviar mensaje
      </button>
      <div style={{ marginTop: 10 }}>{mensaje}</div>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default HookUseTransition;