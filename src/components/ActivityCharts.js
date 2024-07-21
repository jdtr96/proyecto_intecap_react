import React from 'react';
import { Box, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const ActivityCharts = () => {
  const activities = JSON.parse(localStorage.getItem('activities')) || [];

  const data = {
    labels: activities.map((activity, index) => `${activity.activity} ${index + 1}`),
    datasets: [
      {
        label: 'Activity Data',
        data: activities.map((activity) => activity.distance || 0),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Grafica de Actividades
      </Typography>
      <Pie data={data} />
    </Box>
  );
};

export default ActivityCharts;
