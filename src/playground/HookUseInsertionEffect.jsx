import React, { useInsertionEffect, useState } from "react";

function HookUseInsertionEffect() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .insertion-effect-demo {
        color: white;
        background: #007bff;
        padding: 16px;
        border-radius: 8px;
        margin-top: 16px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [text, setText] = useState("Texto inicial");

  return (
    <div className="container text-center" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Ejemplo de InsertionEffect</h1>
        <hr />
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="form-control"
        style={{ maxWidth: "300px", margin: "0 auto" }}
        placeholder="Escribe algo..."
      />
      <div className="insertion-effect-demo" style={{width: "200px"}}>{text}</div>
      <hr />
      <a href="/">Volver al menú</a>
    </div>
  );
}

export default HookUseInsertionEffect;