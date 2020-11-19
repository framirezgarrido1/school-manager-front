import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 840,
  },
  link:{
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

function DataTeacherList(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [dataTeacher] = ([props.data]);
    const [idselect, setIdselect] = useState('')

    const handleClick = (event) => {
      setIdselect(event.currentTarget.id);
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>RUT</TableCell>
              <TableCell>Asignatura</TableCell>
              <TableCell>Jefatura</TableCell>
              <TableCell>Horas</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTeacher.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell>{row.DNI}</TableCell>
                <TableCell>{row.asignature === "" ? "Sin asignatura" : row.asignature} </TableCell>
                <TableCell>{row.leadLevel === "" ? "Sin jefatura" : row.leadLevel + "º Básico"}</TableCell>
                <TableCell>{row.hours} Horas</TableCell>
                <TableCell className="text-minuscula">
                  {row.email === undefined
                  ? <Tooltip title="No existe información" placement="right"><InfoIcon color="secondary" /></Tooltip>
                  : row.email}
                </TableCell>
                <TableCell>{row.phone === undefined
                ? <Tooltip title="No existe información" placement="right"><InfoIcon color="secondary" /></Tooltip>
                : '+56 ' + row.phone}
                </TableCell>
                <TableCell>
                  <IconButton id={row._id}  onClick={handleClick}>
                    <Icon>more_vert</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <NavLink to={'/teacher/' + idselect} className={classes.link} ><MenuItem onClick={handleClose}>Más información</MenuItem></NavLink>
            <MenuItem onClick={handleClose}>Eliminar</MenuItem>
        </Menu>
        </Table>
      </TableContainer>
    );
}

export default DataTeacherList;
