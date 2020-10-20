import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/App.css';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function NotFound() {

  return (
    <Container>
        <div className="content-center">
            <h1>404</h1>
            <h2>Pagina no encontrada</h2>
            <NavLink to="/" >Ir al inicio</NavLink>
        </div>
    </Container>
  );
}

export default NotFound;