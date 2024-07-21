import React from 'react';
import { Box, Typography } from '@mui/material';

const ActivityHistory = () => {
  const activities = JSON.parse(localStorage.getItem('activities')) || [];

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Historial de actividades
      </Typography>
      {activities.length > 0 ? (
        activities.map((activity, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="body1">
              Actividad: {activity.activity}
            </Typography>
            <Typography variant="body2">
              Dureción: {activity.duration} Minutos
            </Typography>
            <Typography variant="body2">
              Distancia: {activity.distance} km
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Ingrese una Actividad</Typography>
      )}
    </Box>
  );
};

export default ActivityHistory;
