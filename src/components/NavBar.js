// src/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Fitness
          </Typography>
          <Button color="inherit" component={Link} to="/actividades">
            + Actividades
          </Button>
          <Button color="inherit" component={Link} to="/historial">
            Historial
          </Button>
          <Button color="inherit" component={Link} to="/estadistica">
            Estadisticas
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/actividades" onClick={toggleDrawer}>
            <ListItemText primary="Activities" />
          </ListItem>
          <ListItem button component={Link} to="/historial" onClick={toggleDrawer}>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem button component={Link} to="/estadistica" onClick={toggleDrawer}>
            <ListItemText primary="Charts" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
