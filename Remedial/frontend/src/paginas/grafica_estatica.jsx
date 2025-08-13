import '../App.css';
import NavBar from './Navbar';
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

function Grafica_estatica() {
  return (
    <>
      <div>
        <NavBar />
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  )
}
export default Grafica_estatica;
