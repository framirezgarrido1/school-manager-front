import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import '../css/App.css';

// Material UI Components
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex:9999,
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[800],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[700]),
      backgroundColor: deepPurple[900],
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    link:{
      textDecoration: 'none',
      color: theme.palette.text.primary
    }
  }));

function Header(props) {

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


const menuItems = [
  {name:'Home', rute:'/', icon:'home'},
  {name:'Alumnos', rute:'/students/1', icon:'face'},
  {name:'Profesores', rute:'/teachers', icon:'emoji_people'},
  {name:'Dirección', rute:'/directors', icon:'groups'}
]

const menuModules = [
  {name:'Notas', rute:'/', icon:'format_list_numbered'},
  {name:'Asistencia', rute:'/students/1', icon:'fact_check'},
  {name:'Planificaciones', rute:'/teachers', icon:'file_copy'},
  {name:'Tareas', rute:'/directors', icon:'book'}
]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((text, index) => (
          <NavLink to={text.rute} className={classes.link}>
            <ListItem button key={index}>
              <ListItemIcon><Icon>{text.icon}</Icon></ListItemIcon>
              <ListItemText primary={text.name} ></ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {menuModules.map((text, index) => (
          <NavLink to={text.rute} className={classes.link}>
            <ListItem button key={index}>
              <ListItemIcon><Icon>{text.icon}</Icon></ListItemIcon>
              <ListItemText primary={text.name} ></ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

const classes = useStyles();

  return (
      <div>
        <AppBar position="fixed" className="appBar">
          <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Gestión de Escuelas
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </div>
  );
}

export default Header;
