import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import TabsUnit from './TabsUnit'
import '../css/App.css';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


  let asignaturaData = [ "Lenguaje", "Historia", "Educación Física", "Ingles", "Religión"]
  

  let nivelData = [
    {
        nivel: "Primero",
        ciclo: "Primer ciclo",
        valueNivel: 1
    },
    {
        nivel: "Segundo",
        ciclo: "Primer ciclo",
        valueNivel: 2
    },
    {
        nivel: "Tercero",
        ciclo: "Primer ciclo",
        valueNivel: 3
    },
    {
        nivel: "Cuarto",
        ciclo: "Primer ciclo",
        valueNivel: 4
    },
    {
        nivel: "Quinto",
        ciclo: "Segundo ciclo",
        valueNivel: 5
    },
    {
        nivel: "Sexto",
        ciclo: "Segundo ciclo",
        valueNivel: 6
    },
    {
        nivel: "Séptimo",
        ciclo: "Segundo ciclo",
        valueNivel: 7
    },
    {
        nivel: "Octavo",
        ciclo: "Segundo ciclo",
        valueNivel: 8
    }
]

function TeacherData(props){

    let history = useHistory();

    const [nameUnit, setNameUnit] = useState("Unidad sin nombre")
    

    const handleChange = (event) => {
        setNameUnit(event.target.value);

        if (event.target.value === "" ) {
            setNameUnit("Unidad sin nombre")
        }
      };

    return(
        <div>
            <div className="header-normal">
            <Container maxWidth="md">
                <Grid container >
                    <Grid item lg={12} md={12} xs={12}>
                        <div className="content-header-normal">
                            <Button variant="outlined" startIcon={<ArrowBackIcon />} className="btn-back" onClick={() => history.goBack()}>Atrás</Button>
                            <h2>{props.name}</h2>
                            <Typography variant="h4" color="textPrimary" gutterBottom>
                                {nameUnit}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            </div>
            <Container maxWidth="md" className="page-content" >
            <form noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} xs={12}>
                        <TextField id="outlined-basic" label="Nombre unidad" variant="outlined" onChange={handleChange} fullWidth/>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Nivel</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Nivel" 
                            >   
                                <MenuItem value=""><em>None</em></MenuItem>
                                {nivelData.map((nivel, index) => (
                                    <MenuItem value={nivel.nivel}>{nivel.nivel} básico - {nivel.ciclo}</MenuItem>
                                ))}
                                
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Semestre</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Semestres" 
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={1}>Primer Semestre</MenuItem>
                                <MenuItem value={2}>Segundo Semestre</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Asignatura</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Asignatura" 
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                {asignaturaData.map((asignatura, index) => (
                                    <MenuItem value={asignatura}>{asignatura}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <TextField id="outlined-basic" label="Cantidad de clases" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <TextField id="outlined-basic" label="Cantidad de horas" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                        <TextField id="outlined-basic" label="Descripción de la unidad" variant="outlined" fullWidth/>
                    </Grid>
                </Grid>
                </form>

                <TabsUnit />

            </Container>
        </div>
    )
}

export default TeacherData;
