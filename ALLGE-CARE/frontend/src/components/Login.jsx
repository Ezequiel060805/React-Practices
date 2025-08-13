import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Aquí iría la lógica real de login
    if (username && password) {
      onLogin();
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} /><br />
        <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}