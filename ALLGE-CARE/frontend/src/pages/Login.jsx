import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Pantalla de Login</h2>
      <button onClick={() => navigate("/dashboard")}>Entrar</button>
    </div>
  );
}
