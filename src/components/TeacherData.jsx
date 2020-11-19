import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../css/App.css';
import Data from './Data';



// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import DataTeacherList from './DataTeacherList';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

function TeacherData(props){

    let history = useHistory();

    const [isLoader, setIsLoader] = useState(false)
    const [data, setData] = useState([])


    useEffect(() => {
    
          const urlApi = 'http://localhost:3005/api/teachers/all';
    
          setIsLoader(true)
    
          fetch(urlApi)
                .then(response => response.json())
                .then(data => {
                  setData(data)
                  setIsLoader(false)    
                })
                
      }, []);

    return(
        <div>
            <div className="header-normal">
            <Container maxWidth="lg">
                <Grid container >
                    <Grid item lg={12} md={12} xs={12}>
                        <div className="content-header-normal">
                            <Button variant="outlined" startIcon={<ArrowBackIcon />} className="btn-back" onClick={() => history.goBack()}>Atrás</Button>
                            <h1>{props.name}</h1>
                        </div>
                    </Grid>
                </Grid>
                <Divider/>
            </Container>
            </div>
            <Container maxWidth="lg" className="page-content">
                <Grid container>
                    <Grid item lg={12} md={12} xs={12}>
                        <DataTeacherList data={data} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default TeacherData;
