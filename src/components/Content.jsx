import React from 'react';
import '../css/App.css';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Content(props) {
  return (
      <Container maxWidth="xl" className="page-content">
        <Grid container>
          <Grid item lg={12} md={12} xs={12}>
            <h1>{props.name}</h1>
          </Grid>
        </Grid>
      </Container>
  );
}

export default Content;
