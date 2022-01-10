import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TimeByCity from './TimeByCity';

const useStyles = makeStyles({
  root: {
    direction: 'rtl',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ded4a4',
    whiteSpace: 'pre-wrap',
    fontSize: '3rem',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TimeByCity city={'ירושלים'}/>
    </div>
  )
}

export default App;
