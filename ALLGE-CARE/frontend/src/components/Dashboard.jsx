import React from "react";

export default function Dashboard({ onLogout }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Bienvenido a ALLGE CARE</h2>
      <p>Aquí se mostrarán los datos de monitoreo.</p>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}