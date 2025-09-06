import React, { useState } from "react";
import { Link } from "react-router-dom";

function HookUseOptimistic() {
  const [inputValue, setInputValue] = useState("");
  const [optimisticText, setOptimisticText] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    setOptimisticText(inputValue); // Actualiza el texto optimista
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
  };

  return (
    <div className="container text-center">
      <h2>Simulación de useOptimistic 🐻‍❄️</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        disabled={isSaving}
        className="form-control mb-2"
      />
      <button onClick={handleSave} disabled={isSaving} className="btn btn-primary">
        {isSaving ? "Guardando..." : "Guardar"}
      </button>
      <p>
        <strong>Texto optimista:</strong> {optimisticText}
      </p>
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default HookUseOptimistic;