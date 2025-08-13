import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Grafica() {
  const [datos, setDatos] = useState([]);
  const [rango, setRango] = useState('dia');

  useEffect(() => {
    axios.get(`http://localhost:3001/api/datos?rango=${rango}`)
      .then(res => setDatos(res.data))
      .catch(err => console.error(err));
  }, [rango]);

  const data = {
    labels: datos.map(d => d.fecha),
    datasets: [
      {
        label: 'Valores en tiempo real',
        data: datos.map(d => d.valor),
        borderColor: 'magenta',
        backgroundColor: 'rgba(255,0,255,0.3)',
        pointBackgroundColor: 'purple',
        fill: true,
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  };

  return (
    <div>
      <div
        style={{
          marginBottom: '110px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <button onClick={() => setRango('dia')}>Día</button>
        <button onClick={() => setRango('semana')}>Semana</button>
        <button onClick={() => setRango('mes')}>Mes</button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

