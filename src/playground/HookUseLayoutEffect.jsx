import React, { useLayoutEffect, useRef, useState } from "react";

function HookUseLayoutEffect() {
  const ref = useRef();
  const [height, setHeight] = useState(0);
  const [padding, setPadding] = useState(20);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, [padding]);

  return (
    <div className="container text-center">
      <h1>Ejemplo de LayoutEffect</h1>
      <div>Al cambiar el padding cambia el valor de la altura</div>
      <input
        type="number"
        value={padding}
        min={0}
        onChange={e => setPadding(Number(e.target.value))}
        className="form-control mb-2"
        style={{ maxWidth: "200px", margin: "0 auto" }}
        placeholder="Padding en px"
      />
      <div ref={ref} style={{ background: "#eee", padding: `${padding}px` }}>
        Altura: {height}px
      </div>
      <a href="/">Volver al menú</a>
    </div>
  );
}

export default HookUseLayoutEffect;