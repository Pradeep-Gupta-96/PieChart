
// // ==================================vartical line graphs=============================
import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Tooltip } from 'chart.js';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale, BarController, BarElement, Tooltip);

    let chartInstance = null;
    const ctx = chartRef.current.getContext('2d');
    console.log(ctx)

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Apple', 'Papaya', 'Banana', 'Pineapple', 'Rambutan', 'Grape'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 6, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)', // Red
            'rgba(54, 162, 235, 0.8)', // Blue
            'rgba(255, 205, 86, 0.8)', // Yellow
            'rgba(75, 192, 192, 0.8)', // Green
            'rgba(153, 102, 255, 0.8)', // Purple
            'rgba(255, 159, 64, 0.8)' // Orange
          ],
          borderColor: [
            'rgba(54, 162, 235, 0.8)', // Blue
            'rgba(255, 205, 86, 0.8)', // Yellow
            'rgba(255, 99, 132, 0.8)', // Red
            'rgba(153, 102, 255, 0.8)', // Purple
            'rgba(255, 159, 64, 0.8)', // Orange
            'rgba(75, 192, 192, 0.8)', // Green
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.formattedValue || '';
                return `${label}: ${value}`;
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} id="myChart"></canvas>;
};

export default BarChart;


//===============================circular===================================

// import React, { useEffect, useRef } from 'react';
// import { Chart, CategoryScale, LinearScale, PieController, ArcElement, Tooltip } from 'chart.js';

// const PieChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     Chart.register(CategoryScale, LinearScale, PieController, ArcElement, Tooltip);

//     let chartInstance = null;
//     const ctx = chartRef.current.getContext('2d');

//     if (chartInstance) {
//       chartInstance.destroy();
//     }

//     chartInstance = new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: ['Amazone', 'Flipkart', 'Areness', 'Apple', 'Google'],
//         datasets: [{
//           data: [12, 19, 3, 5, 2],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.8)', // Red
//             'rgba(54, 162, 235, 0.8)', // Blue
//             'rgba(255, 205, 86, 0.8)', // Yellow
//             'rgba(153, 102, 255, 0.8)', // Purple
//             '#dcedc8' // Orange
//           ],
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'bottom',
//           },
//           tooltip: {
//             callbacks: {
//               label: (context) => {
//                 const label = context.label || '';
//                 const value = context.formattedValue || '';
//                 return `${label}: ${value}`;
//               }
//             }
//           }
//         },
//         elements: {
//           arc: {
//             borderWidth: 1,
//           }
//         },
//       }
//     });

//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//     };
//   }, []);

//   return <canvas ref={chartRef} id="myChart"></canvas>;
// };

// export default PieChart;
