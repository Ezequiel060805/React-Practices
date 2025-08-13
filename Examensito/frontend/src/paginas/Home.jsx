import React from "react"; 
import Ejemplonavbar from "./Navbar";
import PieChart from "./Graficas"; // Asegúrate de que la ruta sea correcta

function Inicio() {
    return (
        <div>
            <Ejemplonavbar />
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Dashboard de Alumnos</h1>
            <PieChart />
        </div>
    )
}
export default Inicio;