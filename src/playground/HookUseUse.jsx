import React, { use, Suspense, useState } from "react";

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("¡Datos cargados con el hook use!");
    }, 2000);
  });
}

function DataComponent({ promise }) {
  const data = use(promise);
  return <div>{data}</div>;
}

function HookUseUse() {
  const [promise, setPromise] = useState(null);

  return (
    <div className="container text-center">
      <h2>Ejemplo sencillo del hook use 🐻‍❄️</h2>
      <button onClick={() => setPromise(fetchData())} className="btn btn-primary mb-3">
        Cargar datos
      </button>
      {promise && (
        <Suspense fallback={<div>Cargando...</div>}>
          <DataComponent promise={promise} />
        </Suspense>
      )}
      <hr />
      <a href="/">Volver al menú</a>
    </div>
  );
}

export default HookUseUse;