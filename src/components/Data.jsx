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


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 840,
  },
  link:{
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

function Data(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [datalevel] = ([props.data]);
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
              <TableCell>Curso</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>A. Paterno</TableCell>
              <TableCell>A. Materno</TableCell>
              <TableCell>DNI</TableCell> 
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datalevel.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{row.codGrado}º</TableCell>
                <TableCell>{row.nombres}</TableCell>
                <TableCell>{row.apellidoPaterno}</TableCell>
                <TableCell>{row.apellidoMaterno}</TableCell>
                <TableCell>{row.run}-{row.digitoVer}</TableCell> 
                <TableCell className="text-minuscula">{row.email}</TableCell>
                <TableCell>{row.celular}</TableCell>
                <TableCell>
                  <Button id={row._id} onClick={handleClick}>
                    <Icon>more_vert</Icon>
                  </Button>
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
            <NavLink to={'/student/' + idselect} className={classes.link} ><MenuItem onClick={handleClose}>Ver matricula</MenuItem></NavLink>
            <MenuItem onClick={handleClose}>Editar datos</MenuItem>
            <MenuItem onClick={handleClose}>Eliminar</MenuItem>
        </Menu>
        </Table>
      </TableContainer>
    );
}

export default Data;
