import React, { useActionState } from "react";
import { Link } from "react-router-dom";

function increment(previousState, formData) {
  return previousState + 1;
}

function StatefulForm() {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form className="d-flex align-items-center justify-content-center mb-3">
      <span className="me-3">Contador: {state}</span>
      <button type="submit" formAction={formAction} className="btn btn-primary">
        Incrementar
      </button>
    </form>
  );
}

function HookUseActionState() {
  return (
    <div className="container text-center mt-5">
      <h2>Ejemplo de useActionState</h2>
      <StatefulForm />
      <Link to="/" className="btn btn-link mt-3">
        Volver al home
      </Link>
    </div>
  );
}

export default HookUseActionState;