import React from 'react';
import '../css/App.css';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Content(props) {
  return (
    <div>
    <div className="header-gray">
    <Container maxWidth="lg">
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <h2>{props.name}</h2>
        </Grid>
      </Grid>
    </Container>
    </div>
    <Container maxWidth="lg" className="page-content">
      <Grid container>
        <Grid item lg={12} md={12} xs={12}>
          <h1>Data</h1>
        </Grid>
        
      </Grid>
    </Container>
  </div>
  );
}

export default Content;
