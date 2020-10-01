import React from 'react';
import '../css/App.css';

// Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
      <header>
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Dashboard
            </Typography>
            </Toolbar>
        </AppBar>
      </header>
  );
}

export default Header;
