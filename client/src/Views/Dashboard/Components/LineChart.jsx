import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartGradient, setChartGradient] = useState(null);

  // Monate als Labels für die X-Achse
  const monthLabels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dez"
  ];

  // 100 zufällige Werte generieren
  const allData = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * (25000 - 4000 + 1)) + 4000
  );

  // Teile die 100 Werte auf die 12 Monate auf (durchschnittliche Werte pro Monat)
  const monthlyAverages = monthLabels.map((_, i) => {
    const start = Math.floor((i / 12) * 100);
    const end = Math.floor(((i + 1) / 12) * 100);
    const subset = allData.slice(start, end);
    return subset.reduce((a, b) => a + b, 0) / subset.length; // Durchschnitt berechnen
  });

  // Setze den Gradient, wenn die Chart-Fläche existiert
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;

      if (ctx && chartArea) {
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(72, 128, 255, 0.6)"); // Oben Blau
        gradient.addColorStop(0.5, "rgba(72, 128, 255, 0.3)"); // Mitte heller
        gradient.addColorStop(1, "rgba(72, 128, 255, 0)"); // Unten transparent
        setChartGradient(gradient);
      }
    }
  }, []);

  const data = {
    labels: monthLabels, // Monate an der X-Achse
    datasets: [
      {
        data: monthlyAverages, // Monatliche Durchschnittswerte
        borderColor: "#4880ff", // Blaue Linie
        fill: true, // Hintergrund aktivieren
        backgroundColor: chartGradient, // Verlauf innerhalb der Chart-Fläche
        pointBackgroundColor: "#4880ff",
        pointBorderColor: "#fff",
        pointRadius: 6, // Nur 12 Breakpoints sichtbar
        pointHoverRadius: 8,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `Sales: ${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
      legend: {
        display: false, // Keine Legende
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineChart;
