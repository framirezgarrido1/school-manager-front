import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
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
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';



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

    let history = useHistory();

    const classes = useStyles();

    const [isLoader, setIsLoader] = useState(true)
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [idStudent] = useState(props.id)
    const [student, setStudent] = useState([])
    const [fieldEdit, setFieldEdit] = useState('')
    const [valueEdit, setValueEdit] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [valueTextfield, setValueTextfield] = useState('')

    const handleClickOpen = (event) => {
        setOpen(true);
        setFieldEdit(event.currentTarget.name)
        setValueEdit(event.currentTarget.value)
        setIdEdit(event.currentTarget.id)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert(false);
      };


    useEffect(() => {

        loadData(); 
        
    },[]);

    const saveValueTextfield = (event) => {
        setValueTextfield(event.target.value)
    }

    function loadData(){

        setIsLoader(true)
        const urlApi = 'http://104.131.113.47:3005/api/students/only/' + idStudent;

        fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                setIsLoader(false)
                setStudent(data)
            })    
    }

    function updateData(id) {

        const urlApi = 'http://104.131.113.47:3005/api/update/' + id + '/' + idEdit + '/' + valueTextfield;

        fetch(urlApi, {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                setAlert(true)
                loadData()
            })

        handleClose();
    }


    return (
        
        <div> 
            {isLoader && 
                <div className="content-spinner">
                    <CircularProgress/>
                </div>   
            }
            {student.map((row, index) => (
                <div>
                    <div className="header-normal">
                    <Container maxWidth="lg">
                    <Grid container key={index}>
                        <Grid item lg={12} md={12} xs={12}>
                            <div className="content-header-normal">
                                <Button variant="outlined" startIcon={<ArrowBackIcon />} className="btn-back" onClick={() => history.goBack()}>Atrás</Button>
                                <h1>Información Matricula</h1>
                                <h2>Alumno {row.descGrado}</h2>
                            </div>
                        </Grid>
                    </Grid>
                    </Container>
                    </div>
                    <Container maxWidth="lg">
                    <div class="content-body-normal">
                        <Grid container>
                            <Grid item lg={5} md={12} xs={12}>
                                <p>Nombre completo</p>
                                <h4>{row.nombres} {row.apellidoPaterno} {row.apellidoMaterno}</h4>
                                <Divider light={true}/>
                                <p>RUT</p>
                                <h4>{row.run}-{row.digitoVer}</h4>
                                <Divider light={true}/>
                                <p>Género</p>
                                <h4>{row.genero === "F"? 'Femenino': 'Masculino'}</h4>
                                <Divider light={true}/>
                            </Grid>
                            <Grid item lg={1} md={12} xs={12}></Grid>
                            <Grid item lg={5} md={12} xs={12}>
                                <p>Comuna de residencia</p>
                                <h4>{row.comunaResidencia}</h4>
                                <div className="content-item-normal">
                                    <Divider light={true}/>
                                    <p>Email</p>
                                    <h4>{row.email === undefined ? 'No existe información' : row.email}</h4>
                                    <Button variant="outlined" startIcon={<EditIcon />} color="primary" size="small" name="Email" value={row.email} id="email" onClick={handleClickOpen}>Editar</Button>
                                </div>
                                <div className="content-item-normal">
                                    <Divider light={true}/>
                                    <p>Teléfono</p>
                                    <h4>{row.celular === undefined ? 'No existe información' : '+56 ' + row.celular}</h4>
                                    <Button variant="outlined" startIcon={<EditIcon />} color="primary" size="small" name="Teléfono" value={row.celular} id="celular" onClick={handleClickOpen}>Editar</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="content-alerts">
                        <Snackbar open={alert} autoHideDuration={3000} onClose={handleCloseAlert}>
                            <Alert variant="filled" severity="success" in={alert}>{fieldEdit} se guardo correctamente</Alert>
                        </Snackbar>
                    </div>
                    
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
                                    margin="normal"
                                    id="name"
                                    label={fieldEdit}
                                    type="email"
                                    placeholder={valueEdit}
                                    variant="outlined"
                                    onChange={saveValueTextfield}
                                    fullWidth
                                />
                                </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancelar
                            </Button>
                            <Button onClick={() => updateData(row._id)} color="primary">
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
