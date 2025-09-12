import React, { useReducer } from "react";
import { Link } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age':
      return { age: state.age + 1 };
    case 'decremented_age':
      return { age: state.age - 1 };
    default:
      return state;
  }
}

function HookUseReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 20 });

  return (
    <div className="container text-center">
      <h2>Ejemplo de useReducer 🐻‍❄️</h2>
      <p>Edad: {state.age}</p>
      <button className="btn btn-secondary" onClick={() => dispatch({ type: 'incremented_age' })}>
        Incrementar edad
      </button>
      <div>🐻‍❄️</div>
      <button className="btn btn-secondary" onClick={() => dispatch({ type: 'decremented_age' })}>
        Decrementar edad
      </button>
      <hr />
      <div><Link to="/">Volver al Home</Link></div>
    </div>
  );
}

export default HookUseReducer;
