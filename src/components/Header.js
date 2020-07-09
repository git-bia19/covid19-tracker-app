import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
  testAppBar:{
   backgroundColor: "white",
  },
  fontColor:{
    color: "black",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.testAppBar} elevation ={4} >
        <Toolbar>
        <img src ={require("../components/corona logo.jpg")} alt="covidlogo" width="50" height="40"/>
          <Typography variant="h2" className={classes.title} class ={classes.fontColor}>
           C O V I D-19   T R A C K E R 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
