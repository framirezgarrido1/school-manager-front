import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../css/App.css';
import Data from './Data';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '30ch',
    },
  },
  formControl: {
    minWidth: '100%',
    marginBottom: theme.spacing(3),
  },
  h3:{
    marginBottom: '2rem'
  }
}));


function ContentData(props) {

  let history = useHistory();

  const [students, setStudents] = useState([])
  const [isLoader, setIsLoader] = useState(false)
  const [level, setLevel] = useState(props.level)
  const [nameLevel, setNameLevel] = useState(props.level)
  const [cantidadAlumnos, setCantidadAlumnos] = useState('')
  const [levelRecive, setLevelRecive] = useState(props.level)

  useEffect(() => {

    switch(levelRecive){
      case "1":
        setNameLevel("Primero Básico")
        break;
      
      case "2":
        setNameLevel("Segundo Básico")
        break;
      
      case "3":
        setNameLevel("Tercero Básico")
        break;
      
      case "4":
        setNameLevel("Cuarto Básico")
        break;
      
      case "5":
        setNameLevel("Quinto Básico")
        break;
      
      case "6":
        setNameLevel("Sexto Básico")
        break;
      
      case "7":
        setNameLevel("Séptimo Básico")
        break;
      
      case "8":
        setNameLevel("Octavo Básico")
        break;

      default:
        setNameLevel("Todos los niveles");
        break;

    }

      const urlApi = 'http://104.131.113.47:3005/api/students/' + levelRecive;

      setIsLoader(true)

      fetch(urlApi)
            .then(response => response.json())
            .then(data => {
              setStudents(data)
              setIsLoader(false)
              setCantidadAlumnos(data.length + ' Alumnos')
              history.replace('/students/'+levelRecive)

            })
            
  }, [levelRecive, history]);


  const findLevels = (levelSelect) => {
    
    setLevelRecive(levelSelect)

    }

  const classes = useStyles();

  const levelChange = (event) => {
    setLevel(event.target.value);
    findLevels(event.target.value)

  };

  return (
    <div>
      <div className="header-gray">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={12} md={12} xs={12}>
            <h2>Seleccione un curso</h2>
          </Grid>
          <Grid item lg={4} md={12} xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label" className={classes.selects}>Curso</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={level}
                onChange={levelChange}
                label="Curso"
              > 
                <MenuItem value={'all'}>Todos los niveles</MenuItem>
                <MenuItem value={'1'}>Primero Básico</MenuItem>
                <MenuItem value={'2'}>Segundo Básico</MenuItem>
                <MenuItem value={'3'}>Tercero Básico</MenuItem>
                <MenuItem value={'4'}>Cuarto Básico</MenuItem>
                <MenuItem value={'5'}>Quinto Básico</MenuItem>
                <MenuItem value={'6'}>Sexto Básico</MenuItem>
                <MenuItem value={'7'}>Séptimo Básico</MenuItem>
                <MenuItem value={'8'}>Octavo Básico</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
      </div>
      <div className="bar-progress">
        {isLoader && 
          <LinearProgress />
        }
      </div>
      <Container maxWidth="lg" className="page-content">
        
        <Grid container>
          <Grid item lg={12} md={12} xs={12}>
            <h1>{nameLevel}</h1>
            <h3 className={classes.h3}>{cantidadAlumnos}</h3>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>

            {level &&
              <Data data={students} />
            }
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContentData;
