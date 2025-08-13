import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import NavBar from "./Navbar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Distribución de Alumnos por Carrera",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  labels: ["TI", "Administración", "Contabilidad", "Ingeniería", "Derecho"],
  datasets: [
    {
      label: "Número de Alumnos",
      data: [45, 28, 15, 22, 10],
      backgroundColor: "rgba(54, 162, 235, 0.7)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

function Grafica_Estatica() {
  return (
    <div>
      <NavBar />
      <h1 className="bg-info text-center font-monospace fw-bold lh-base">
        Gráfica de Barras
      </h1>
      <div style={{
        width: "80%",
        height: "400px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        alignContent: "center",
        display: "flex",
      }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Grafica_Estatica;
