import React from "react";

function HomeHook() {
  return (
    <div className="container justify-content-center text-center align-content-center">
      <div className="text-center">
        <h2>Ejemplos de UseNavigate 🐻‍❄️</h2>
      </div>
      <div className="list-group">
        <a href="UseState" className="list-group-item">ir a UseState ^_^</a>
        <a href="UseNavigate" className="list-group-item">ir a Navigate ^_^</a>
        <a href="useDebug" className="list-group-item">ir a debug ^_^</a>
        <a href="useContext" className="list-group-item">ir a context ^_^</a>
        <a href="useReducer" className="list-group-item">ir a reducer ^_^</a>
        <a href="useMemo" className="list-group-item">ir a memo ^_^</a>
      </div>
    </div>
  );
}

export default HomeHook;
