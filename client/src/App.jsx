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
    fontFamily: 'Secular One, sans-serif'
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
