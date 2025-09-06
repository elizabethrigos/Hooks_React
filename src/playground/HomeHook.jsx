import React from "react";

function HomeHook() {
  return (
    <div className="container justify-content-center text-center align-content-center">
      <div className="text-center">
        <h2>Ejemplos de UseNavigate 🐻‍❄️</h2>
      </div>
      <div className="list-group">
        <a href="UseState" className="list-group-item">
          UseState = Gestiona el estado de un componente, permitiéndole recordar y actualizar valores.
          </a>
        <a href="UseNavigate" className="list-group-item">ir a Navigate ^_^</a>
        <a href="useDebug" className="list-group-item">ir a debug ^_^</a>
        <a href="useEffect" className="list-group-item">ir a effects😎</a>
        <a href="useRef" className="list-group-item">ir a Ref😎</a>
        <a href="useCallback" className="list-group-item">ir a Callback😎</a>
        <a href="useContext" className="list-group-item">ir a context ^_^</a>
        <a href="useReducer" className="list-group-item">ir a reducer ^_^</a>
        <a href="useMemo" className="list-group-item">ir a memo ^_^</a>
        <a href="useTransition" className="list-group-item">ir a transition ^_^</a>
        <a href="useActionState" className="list-group-item">ir a ActionState ^_^</a> 
        <a href="useSyncExternalStore" className="list-group-item">ir a SyncExternalStore ^_^</a>    
      </div>
    </div>
  );
}

export default HomeHook;
