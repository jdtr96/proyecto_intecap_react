import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Activities from '../components/Activities';
import ActivityHistory from '../components/ActivityHistory';
import ActivityCharts from '../components/ActivityCharts';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('user');
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/actividades"
        element={
          <PrivateRoute>
            <Activities />
          </PrivateRoute>
        }
      />
      <Route
        path="/historial"
        element={
          <PrivateRoute>
            <ActivityHistory />
          </PrivateRoute>
        }
      />
      <Route
        path="/estadistica"
        element={
          <PrivateRoute>
            <ActivityCharts />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
