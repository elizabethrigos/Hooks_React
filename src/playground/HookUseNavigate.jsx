import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function UseNavigate() {
  const navigate = useNavigate();

  function GoRoute() {
    navigate('/useState');
  }
  return (
     <div className="container justify-content-center text-center align-content-center">
      <div className="text-center">
        <h2>Ejemplos de Hooks 🐻‍❄️</h2>
      </div>
      <div className="list-group">
        <button onClick={GoRoute} className='btn btn-secondary'>Ruta navigate </button>
        <Link to = "name-route" className="list-group-item">Ruta de ejemplo</Link>
        <a href="/" className="list-group-item">ir a home😎</a>
      </div>
    </div>
  );
}

export default UseNavigate;