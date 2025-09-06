import React, { useId } from "react";
import { Link } from "react-router-dom";

function HookUseId() {
  const id = useId();
  const passwordHintId = useId();
  return (
    <form>
      <label htmlFor={id + '-firstName'}>Primer nombre:</label>
      <input id={id + '-firstName'} type="text" />
      <hr />
      <label htmlFor={id + '-lastName'}>Apellido:</label>
      <input id={id + '-lastName'} type="text" />
          <>
        <hr />
      <label>
        Contraseña:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        Ponle algo difícil de adivinar, como el nombre de tu primera mascota.
      </p>
    </>
    <Link to="/">Volver al Home</Link>
    </form>
    
  );
}


export default HookUseId;