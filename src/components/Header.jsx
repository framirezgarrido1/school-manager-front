import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../css/App.css';

// Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { MenuIcon, AccountCircle } from '@material-ui/icons';
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
  }));

function Header() {
    
const classes = useStyles();

  return (
      <header>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <AccountCircle />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </header>
  );
}

export default Header;
