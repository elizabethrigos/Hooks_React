import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function HookUseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(c => c + 1), []);

  return (
    <div className="container text-center">
      <h2>Incrementador usando Callback 🐻‍❄️</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <br />
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default HookUseCallback;