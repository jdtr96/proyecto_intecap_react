// src/Activities.js
import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';

const Activities = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');

  const handleAddActivity = () => {
    const newActivity = { activity, duration, distance };
    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push(newActivity);
    localStorage.setItem('activities', JSON.stringify(activities));
    setActivity('');
    setDuration('');
    setDistance('');
    alert('¡Actividad Agregada!');
  };

  return (
    <Box sx={{ maxWidth: 300, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Agregar Actividad
      </Typography>
      <TextField
        select
        label="Actividad"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        fullWidth
        margin="normal"
      >
        <MenuItem value="Correr">Correr</MenuItem>
        <MenuItem value="Nadar">Nadar</MenuItem>
        <MenuItem value="Ciclismo">Ciclismo</MenuItem>
        <MenuItem value="Caminata">Caminata</MenuItem>
      </TextField>
      <TextField
        label="Dureción (minutos)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Distancia (km)"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddActivity} sx={{ mt: 2 }}>
        + Actividad
      </Button>
    </Box>
  );
};

export default Activities;
