import React from 'react';
import '../css/App.css';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';

import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';

const colorBlue = blue[700]
const colorOrange = orange[700]

let unitData = [
    {
        numeroObjetivo: "1",
        descripcionObjetivo: "Demostrar capacidad para ejecutar de forma combinada las habilidades motrices básicas de locomoción, manipulación y estabilidad en diferentes direcciones, alturas y niveles, como correr y lanzar un objeto con una mano, caminar sobre una línea y realizar un giro de 180° en un pie.",
        selectObjetivo: true,
        colorObjetivo: blue[600]
        },
    {
        numeroObjetivo: "",
        descripcionObjetivo: "Ejecutar acciones motrices que presenten una solución a un problema, reconociendo diversos criterios (tiempo, espacio y números de personas), por ejemplo, juegos de uno contra uno, juegos en grupos reducidos y juegos con superioridad numérica.",
        selectObjetivo: false,
        colorObjetivo: ""
        },
    {
        numeroObjetivo: "2",
        descripcionObjetivo: "Practicar juegos pre-deportivos con reglas y espacios adaptados, aplicando los principios generales de juego, como avanzar y retroceder en bloque, recuperar el balón, acompañar la jugada y la visión periférica.",
        selectObjetivo: true,
        colorObjetivo: orange[600]
        },
    {
        numeroObjetivo: "4",
        descripcionObjetivo: "Practicar juegos pre-deportivos con reglas y espacios adaptados, aplicando los principios generales de juego, como avanzar y retroceder en bloque, recuperar el balón, acompañar la jugada y la visión periférica.",
        selectObjetivo: true,
        colorObjetivo: purple[600]
    }
]

let habilidadesData = [
    
            {
                item: "Combinar habilidades motrices básicas de locomoción, manipulación y equilibrio en diferentes situaciones.",
                selectItem: true
            },
            {
                item: "Aplicar habilidades motrices básicas para practicar diversos juegos recreativos y predeportivos.",
                selectItem: true
            },
            {
                item: "Emplear normas de higiene, prevención y seguridad durante la práctica de actividad física.",
                selectItem: true
            },
            {
                item: "Demostrar situaciones de riesgo que pueden afectar a la seguridad personal.",
                selectItem: true
            }
    
]


function TabPanel(props) {

    console.log(habilidadesData)

    const { children, value, index, ...other } = props;
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box pt={2}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }
  

function TabsUnit(props) {

    const [value, setValue] = React.useState("one");

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
      };

    return (

        <Grid container>
            <Grid item lg={12} md={12} xs={12}>
                <Typography variant="h6" color="textPrimary" className="subtitle">
                    Atributos
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
                <Paper className="content-tabs-unit">
                    <Tabs
                        className="tabs"
                        value={value}
                        indicatorColor="primary"
                        variant="fullWidth"
                        textColor="primary"
                        onChange={handleChangeTab}
                        aria-label="disabled tabs example"
                    >
                        <Tab value="one" label="Objetivos" {...a11yProps('one')}/>
                        <Tab value="two" label="Habilidades" {...a11yProps('two')} />
                        <Tab value="three" label="Actitudes" {...a11yProps('three')}/>
                    </Tabs>
                </Paper>

            <TabPanel value={value} index="one">
                <Typography variant="body1" color="textPrimary" className="title-atributes">
                    Habilidades Motrices
                </Typography>
                <Divider />
                {unitData.map((unit, index) => (
                    <div >
                    <Divider />
                    <Grid container key={index}>
                        <Grid item lg={1} md={1} xs={2}>
                            <Avatar className="number-avatar" style={{backgroundColor:unit.colorObjetivo}}>
                                {unit.numeroObjetivo}
                            </Avatar>
                        </Grid>
                        <Grid item lg={10} md={10} xs={8}>
                            <Typography variant="body2" color="textSecondary" className="title-atributes">
                                {unit.descripcionObjetivo}
                            </Typography>
                        </Grid>
                        <Grid item lg={1} md={1} xs={2}>
                            <div className="check-unit">
                                <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div> 
                        </Grid>
                    </Grid>
                    </div>
                ))}
            </TabPanel>
            <TabPanel value={value} index="two">
                <Typography variant="body1" color="textPrimary" className="title-atributes">
                    Unidad 1
                </Typography>
                <Divider />
                {habilidadesData.map((habilidades, index) => (
                    <div >
                    <Divider />
                    <Grid container key={index}>
                        <Grid item lg={11} md={11} xs={10}>
                            <Typography variant="body2" color="textSecondary" className="title-atributes">
                                {habilidades.item}
                            </Typography>
                        </Grid>
                        <Grid item lg={1} md={1} xs={2}>
                            <div className="check-unit">
                                <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div> 
                        </Grid>
                    </Grid>
                    </div>
                ))}   
            </TabPanel>
            <TabPanel value={value} index="three">
                Item Three
            </TabPanel>

            </Grid>
        </Grid>
  );
}

export default TabsUnit;
