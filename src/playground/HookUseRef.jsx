import React, { useRef } from "react";
import { Link } from "react-router-dom";

function HookUseRef() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('Diste Like ' + ref.current + ' Veces!');
  }

  return (
    <div>
      <h1>Ejemplo de Ref</h1>
    <button onClick={handleClick}>
      Like
    </button>
    <hr />
    <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default HookUseRef;