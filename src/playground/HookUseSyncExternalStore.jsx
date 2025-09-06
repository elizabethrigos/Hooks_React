import React, { useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';

// Store de tema externo
const themeStore = {
  theme: "light",
  listeners: [],
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  },
  getSnapshot() {
    return this.theme;
  },
  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.listeners.forEach((cb) => cb());
  }
};

function ThemeSwitcher() {
  const theme = useSyncExternalStore(
    themeStore.subscribe.bind(themeStore),
    themeStore.getSnapshot.bind(themeStore)
  );

  const styles =
    theme === "light"
      ? { background: "#fff", color: "#222", padding: 40 }
      : { background: "#222", color: "#fff", padding: 40 };

  return (
    <div style={styles}>
      <h2>Tema actual: {theme}</h2>
      <button className="btn btn-primary" onClick={() => themeStore.toggleTheme()}>
        Cambiar tema
      </button>
      <Link to="/" className="btn btn-link mt-3">
        Volver al home
      </Link>
    </div>
  );
}

export default ThemeSwitcher;

