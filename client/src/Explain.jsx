import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto 30px',
        fontSize: '1.7rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem'    
          },
    },
}))

function Explain() {
  const classes = useStyles();
  const githubLink = 'https://github.com/AviadSofer/zmanim-in-jerusalem'
  const contactLink = 'https://api.whatsapp.com/send?phone=972556691119&text=%D7%94%D7%99%D7%99%2C%20%D7%91%D7%A7%D7%A9%D7%A8%20%D7%9C%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%20%D7%A9%D7%9C%20%D7%96%D7%9E%D7%A0%D7%99%20%D7%94%D7%99%D7%95%D7%9D'
  return (
  <div className={classes.root}>
      <p>
          פרוייקט בקוד פתוח שכל מטרתו היא להציג את זמני היום בצורה פשוטה ואמינה.
          <br/>
          <a href={githubLink}>קישור לפרויקט בגיטהב</a>
          <br/>
          <a href={contactLink}>קישור לשליחת הודעה בוואטסאפ</a>
      </p>
  </div>
  )
}

export default Explain;
