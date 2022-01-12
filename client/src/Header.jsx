import React, { useEffect, useState } from 'react'
import { Collapse, makeStyles } from '@material-ui/core';
import GoDown from './GoDown';
import TimeByCity from './TimeByCity';

const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
}))

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      setChecked(true);
  }, [])
  return (
  <Collapse in={checked} {...(checked ? { timeout: 1300 } : {})} collapsedHeight={50}>
  <div className={classes.root}>
      <TimeByCity city={'ירושלים'}/>
  </div>
  </Collapse>
  )
}

export default Header;
