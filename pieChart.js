import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Tooltip, PieController, ArcElement } from 'chart.js';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const BarChart = () => {
  const chartRef = useRef(null);
  const chartRefP = useRef(null);

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale, BarController, BarElement, Tooltip);

    let chartInstance = null;
    const ctx = chartRef.current.getContext('2d');

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

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale, PieController, ArcElement, Tooltip);

    let chartInstance = null;
    const ctx = chartRefP.current.getContext('2d');

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Amazone', 'Flipkart', 'Areness', 'Apple', 'Google'],
        datasets: [{
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)', // Red
            'rgba(54, 162, 235, 0.8)', // Blue
            'rgba(255, 205, 86, 0.8)', // Yellow
            'rgba(153, 102, 255, 0.8)', // Purple
            '#dcedc8' // Orange
          ],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.formattedValue || '';
                return `${label}: ${value}`;
              }
            }
          }
        },
        elements: {
          arc: {
            borderWidth: 1,
          }
        },
      }
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} >
          <Item>
            <canvas ref={chartRef} id="myChart" width="100%" height="46%"></canvas>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <canvas ref={chartRefP} id="myChartP" width="100%" height="50%"></canvas>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BarChart;
