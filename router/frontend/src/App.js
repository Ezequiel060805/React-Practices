import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Home";
import Ejemplo1 from "./paginas/Ejemplo";
import Ejemplonavbar from "./paginas/Navbar";
import "./App.css";
import Graficanysql from "./paginas/grafica2.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />  {/* Ruta raíz añadida */}
        <Route path="/Home" element={<Inicio />} />
        <Route path="/Ejemplo" element={<Ejemplo1 />} />
        <Route path="/Ejemplonavbar" element={<Ejemplonavbar />} />
        <Route path="Graficanysql" element={<Graficanysql />}/>
      </Routes>
    </Router>
  );
}

export default App;
