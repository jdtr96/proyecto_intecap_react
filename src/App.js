import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import NavBar from './components/NavBar';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="md">
        <AppRoutes />
      </Container>
    </Router>
  );
}

export default App;
