import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TimeByCity from './TimeByCity';
import Explain from './Explain';

const useStyles = makeStyles(theme => ({
  root: {
    direction: 'rtl',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ded4a4',
    whiteSpace: 'pre-wrap',
    fontFamily: 'Secular One, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem'    
    },
  },
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TimeByCity city={'ירושלים'}/>
      <Explain/>
    </div>
  )
}

export default App;
