import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const API = "http://localhost:3001/api";

function App() {
  const [datos, setDatos] = useState([]);
  const [range, setRange] = useState("dia");

  // Fetch data from API
  const fetchDatos = async () => {
    try {
      const res = await axios.get(`${API}/datos`);
      setDatos(res.data.reverse());
    } catch (error) {
      console.error("Error fetching datos:", error);
    }
  };

  useEffect(() => {
    fetchDatos();
    const intervalo = setInterval(fetchDatos, 3000);
    return () => clearInterval(intervalo);
  }, []);

  // Compute filtered data based on selected range
  const now = new Date();
  const filteredDatos = datos.filter((d) => {
    const fecha = new Date(d.fecha);
    const diff = now - fecha;
    if (range === "dia") {
      return diff <= 24 * 60 * 60 * 1000; // last 24h
    }
    if (range === "semana") {
      return diff <= 7 * 24 * 60 * 60 * 1000; // last 7 days
    }
    if (range === "mes") {
      return diff <= 30 * 24 * 60 * 60 * 1000; // last 30 days
    }
    return true;
  });

  // Prepare chart data
  const chartData = {
    labels: filteredDatos.map((d) => new Date(d.fecha).toLocaleString()),
    datasets: [
      {
        label: "Valores",
        data: filteredDatos.map((d) => d.valor),
        borderColor: "pink",
        backgroundColor: "purple",
      },
    ],
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <h2>Gráfica en Tiempo Real</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setRange("dia")} style={{ fontWeight: range === "dia" ? "bold" : "normal" }}>
          Día
        </button>
        <button onClick={() => setRange("semana")} style={{ fontWeight: range === "semana" ? "bold" : "normal", marginLeft: "0.5rem" }}>
          Semana
        </button>
        <button onClick={() => setRange("mes")} style={{ fontWeight: range === "mes" ? "bold" : "normal", marginLeft: "0.5rem" }}>
          Mes
        </button>
      </div>
      <Line data={chartData} />
    </div>
  );
}

export default App;

