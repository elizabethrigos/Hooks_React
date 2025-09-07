import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// forwardRef es necesario para que el ref funcione correctamente
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current && inputRef.current.focus();
    },
    clear() {
      if (inputRef.current) inputRef.current.value = "";
    },
  }), []);

  return <input {...props} ref={inputRef} />;
});

function HookUseImperativeHandle() {
  const inputRef = useRef();

  return (
    <div className="container text-center">
      <h2>Ejemplo de useImperativeHandle 🐻‍❄️</h2>
      <hr />
      <MyInput ref={inputRef} placeholder="Escribe algo..." />
      <button onClick={() => inputRef.current.focus()} className="btn btn-primary m-2">
        Enfocar input
      </button>
      <button onClick={() => inputRef.current.clear()} className="btn btn-secondary m-2">
        Limpiar input
      </button>
      <hr />
      <a href="/">Volver al menú</a>
    </div>
  );
}

export default HookUseImperativeHandle;