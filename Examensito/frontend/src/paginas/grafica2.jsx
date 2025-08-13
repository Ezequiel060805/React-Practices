import React, { useState,useEffect } from 'react';
import { Bar,Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function Graficanysql() {
  const [chartData, setChartData] = useState({labels: [], datasets: [] });

  useEffect(()=> {
    axios.get('http://localhost:3001/api/data')
      .then((res)=>{
        const nombres = res.data.map(item => item.nombre);
        const cantidades = res.data.map(item =>item.cantidad);
        setChartData({
          labels:nombres,
          datasets: [
            {
              label:'Cantidad de alumnos',
              data:cantidades,
              backgroundColor: [
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
                'rgba(75,192,192,0.6)',
                'rgba(153,102,255,0.6)'
              ],
              borderColor:'rgb(255,255,255)',
              borderWidth:1
            }
          ]
        });
      })
      .catch((error)=>{
        console.error('Error al obtener los datos',error);
      });
  },[]);
  return (
  <div style={{ width: '600px',margin: '0 auto' }}>
    <h2>Graficas de Alumnos</h2>
    <Pie data={chartData}/>
    <Bar data={chartData}/>
  </div>
  );
}
