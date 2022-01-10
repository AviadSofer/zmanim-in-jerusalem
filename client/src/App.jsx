import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TimeByCity from './TimeByCity';

const useStyles = makeStyles(theme => ({
  root: {
    direction: 'rtl',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ded4a4',
    whiteSpace: 'pre-wrap',
    fontSize: '3rem',
    fontFamily: 'Secular One, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.3rem',
      maxHeight: '100vh'
    },
  },
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TimeByCity city={'ירושלים'}/>
    </div>
  )
}

export default App;
