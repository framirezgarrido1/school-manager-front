import React, { useState, useEffect } from 'react';
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

  selects: {
  },
}));


function ContentData(props) {

  const [page] = useState("Estudiantes")
  const [students, setStudents] = useState([])
  const [isLoader, setIsLoader] = useState(false)
  const [level, setLevel] = useState('');

  useEffect(() => {
    document.title = `${page}`;
          
  },[level, page]);


  const findLevels = (level) => {
      
      const urlApi = 'http://localhost:3005/api/students/' + level;

      setIsLoader(true)

      fetch(urlApi)
            .then(response => response.json())
            .then(data => {
              setStudents(data)
              setIsLoader(false)
            })
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
                <MenuItem value={'6'}>Cuarto Básico</MenuItem>
                <MenuItem value={'7'}>Cuarto Básico</MenuItem>
                <MenuItem value={'8'}>Cuarto Básico</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
      </div>
      <Container maxWidth="lg" className="page-content">
        <Grid container>
          <Grid item lg={12} md={12} xs={12}>
            <h1>{level}</h1>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            
            {isLoader && 
              <LinearProgress></LinearProgress>
            }

            {level &&
              <Data data={students} level={level}/>
            }
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContentData;
