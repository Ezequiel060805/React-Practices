import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

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
const styleDinamica = {
  width: "80%",
  height: "400px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  alignContent: "center",
  display: "flex",
}
function Grafica_Estatica() {
  return (
    <div>
      <p className="page-description">Grafica Estatica</p>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Grafica_Estatica;
