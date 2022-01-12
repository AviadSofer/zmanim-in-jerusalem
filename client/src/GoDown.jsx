import { IconButton, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles(theme => ({
    goDown: {
        color: 'grey',
        fontSize: '3.6rem'
    }
}))

function GoDown() {
  const classes = useStyles();
  return (
  <div>
    <Scroll to={'explain'} smooth={true}>
        <IconButton>
          <ExpandMoreIcon className={classes.goDown}/>
        </IconButton>
    </Scroll>
  </div>
  )
}

export default GoDown;
