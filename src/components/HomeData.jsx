import React from 'react';
import '../css/App.css';
import { NavLink } from 'react-router-dom'


// Material UI Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import EmojiIcon from '@material-ui/icons/EmojiPeople';
import GroupsIcon from '@material-ui/icons/Group';
import BookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/PlaylistAddCheck';
import PasteIcon from '@material-ui/icons/PostAdd';

// Colors
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import cyan from '@material-ui/core/colors/cyan';
import blue from '@material-ui/core/colors/blue';

const colorOrange = orange[700]
const colorCyan = cyan[700]


function HomeData(props) {
  return (
    <div>
    <div className="header-gray">
    <Container maxWidth="lg">
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
            <h4>Establecimiento</h4>
            <Typography variant="h5" color="textPrimary" gutterBottom>
                {props.schooldata.schoolname}
            </Typography>
            <Typography variant="body" color="textSecondary" component="p">
              {props.schooldata.rol} {props.schooldata.username}
            </Typography>
        </Grid>
      </Grid>
    </Container>
    </div>
    <Container maxWidth="lg" className="page-content">
        <Typography variant="h6" color="textPrimary" className="title-dashboard" gutterBottom>Obtener información</Typography> 
        <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
            <Card>
                <CardContent>
                    <FaceIcon fontSize="large" style={{color:colorOrange}} />
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                    Alumnos
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Información personal de alumnos por nivel.
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to="/students/1" className="button-link"><Button size="large" color="primary">Ingresar</Button></NavLink>
                </CardActions>
            </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
            <Card>
                <CardContent>
                    <EmojiIcon fontSize="large" style={{color:colorOrange}}/>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                    Profesores
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Información profesional y personal de profesores.
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to="/teachers" className="button-link"><Button size="large" color="primary">Ingresar</Button></NavLink>
                </CardActions>
            </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
            <Card>
                <CardContent>
                    <GroupsIcon fontSize="large" style={{color:colorOrange}}/>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                    Dirección
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Información profesional y personal de Directivos.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" color="primary">Ingresar</Button>
                </CardActions>
            </Card>
        </Grid>
        
      </Grid>
    </Container>
    <Container maxWidth="lg" className="page-content">
        <Typography variant="h6" color="textPrimary" className="title-dashboard" gutterBottom>Pruebas, Tareas y Planificaciones</Typography> 
        <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
            <Card>
                <CardContent>
                    <ListIcon fontSize="large" style={{color:colorCyan}} />
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                    Pruebas
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Crea y revisa prueba de todos los alumnos.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" color="primary">Ingresar</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
            <Card>
                <CardContent>
                    <BookIcon fontSize="large" style={{color:colorCyan}} />
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                    Tareas
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Crea y revisa tareas de todos los alumnos.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" color="primary">Ingresar</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
            <Card>
                <CardContent>
                    <PasteIcon fontSize="large" style={{color:colorCyan}} />
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                    Unidades y Planificaciones
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    Crea y administra las planificaciones por nivel.
                    </Typography>
                </CardContent>
                <CardActions>
                <NavLink to="/create/unit" className="button-link"><Button size="large" color="primary">Ingresar</Button></NavLink>
                </CardActions>
            </Card>
        </Grid>
      </Grid>
    </Container>
  </div>
  );
}

export default HomeData;
