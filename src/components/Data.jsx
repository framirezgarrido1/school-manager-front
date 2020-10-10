import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 950,
  },
});

function Data(props) {
    const classes = useStyles();

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
              <TableCell>Fecha Nacimiento</TableCell>
              <TableCell>Nacionalidad</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow key={row.email}>
                <TableCell component="th" scope="row">{row.level}º</TableCell>
                <TableCell>{row.names}</TableCell>
                <TableCell>{row.fatherLastname}</TableCell>
                <TableCell>{row.motherLastname}</TableCell>
                <TableCell>{row.DNI}</TableCell> 
                <TableCell>{row.birthDate}</TableCell>
                <TableCell>{row.nationality}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default Data;
