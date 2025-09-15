import React, { useState, useDeferredValue } from 'react';

function fakeSearch(query) {
  const allAlbums = [
    "Abbey Road",
    "Back in Black",
    "Hotel California",
    "Thriller",
    "The Dark Side of the Moon",
    "Rumours",
    "Kikuo",
    "Led Zeppelin IV",
    "Nevermind",
    "Born to Run",
    "Elizabeth Easter Egg",
    "Matheo es demasiado pro",
    "Purple Rain"
  ];
  if (!query) return [];
  return allAlbums.filter(album =>
    album.toLowerCase().includes(query.toLowerCase())
  );
}

function SearchResults({ query }) {
  const results = fakeSearch(query);
  return (
    <ul>
      {results.length === 0 ? (
        <li>No hay resultados</li>
      ) : (
        results.map(album => <li key={album}>{album}</li>)
      )}
    </ul>
  );
}

function HookUseDeferredValue() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="container text-center">
      <h2>Ejemplo de useDeferredValue, Buscar álbumes</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="form-control mb-3"
        placeholder="Escribe para buscar..."
        style={{ maxWidth: "300px", margin: "0 auto" }}
      />
      <SearchResults query={deferredQuery} />
      
      <hr />
      <a href="/">Volver al menú</a>
    </div>
  );
}

export default HookUseDeferredValue;