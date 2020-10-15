import React, { useState, useEffect } from 'react';
import '../css/App.css';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 200,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  }));

function StudentData(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [idStudent] = useState(props.id)
    const [student, setStudent] = useState([])
    const [fieldEdit, setFieldEdit] = useState('')
    const [valueEdit, setValueEdit] = useState('')

    const handleClickOpen = (event) => {
        setOpen(true);
        setFieldEdit(event.currentTarget.name)
        setValueEdit(event.currentTarget.value)
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
    
        const urlApi = 'http://192.168.0.4:3005/api/students/only/' + idStudent;

        fetch(urlApi)
            .then(response => response.json())
            .then(data => {
              setStudent(data)
            })
        
    },[idStudent]);


    return (
        
        <div> 
            {student.map((row, index) => (
                <div>
                    <div className="header-normal">
                    <Container maxWidth="lg">
                    <Grid container key={index}>
                        <Grid item lg={12} md={12} xs={12}>
                            <div className="content-header-normal">
                                <h1>Información Matricula</h1>
                                <h2>Alumno {row.descGrado}</h2>
                            </div>
                            <Divider light={true}/>
                        </Grid>
                    </Grid>
                    </Container>
                    </div>
                    <Container maxWidth="lg">
                    <Grid container>
                        <Grid item lg={12} md={12} xs={12}>
                            <div class="content-body-normal">
                                <p>Nombre completo</p>
                                <h4>{row.nombres} {row.apellidoPaterno} {row.apellidoMaterno}</h4>
                                <Divider light={true}/>
                                <p>RUT</p>
                                <h4>{row.run}-{row.digitoVer}</h4>
                                <Divider light={true}/>
                                <p>Género</p>
                                <h4>{row.genero === "F"? 'Femenino': 'Masculino'}</h4>
                                <Divider light={true}/>
                                <p>Comuna de residencia</p>
                                <h4>{row.comunaResidencia}</h4>
                                <div className="content-item-normal">
                                    <Divider light={true}/>
                                    <p>Email</p>
                                    <h4 className="text-minuscula">{row.email === undefined ? 'Información no disponible' : row.email}</h4>
                                    <Button variant="outlined" color="primary" size="small" name="email" value={row.email} onClick={handleClickOpen}>Editar</Button>
                                </div>
                                <div className="content-item-normal">
                                    <Divider light={true}/>
                                    <p>Teléfono</p>
                                    <h4>{row.celular}</h4>
                                    <Button variant="outlined" color="primary" size="small" name="teléfono" value={row.celular} onClick={handleClickOpen}>Editar</Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    </Container>
                    <div>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.formControl} >
                            <DialogTitle id="form-dialog-title">Editar {fieldEdit}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Edite el campo para actualizar la información
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label={fieldEdit}
                                    type="email"
                                    placeholder={valueEdit}
                                    fullWidth
                                />
                                </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancelar
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Guardar
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            ))}
        </div>   
  );
}

export default StudentData;
