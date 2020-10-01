import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../css/App.css';

// Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[800],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[700]),
      backgroundColor: deepPurple[900],
    }
  }));

function Header() {
    
const classes = useStyles();

  return (
      <header>
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard School Manager
          </Typography>
          <Avatar className={classes.purple}>F</Avatar>
        </Toolbar>
      </AppBar>
      </header>
  );
}

export default Header;
