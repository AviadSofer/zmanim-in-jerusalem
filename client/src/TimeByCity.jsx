import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '150px 30px',
        fontSize: '2rem',
        whiteSpace: 'pre-wrap',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem'
          },
    }
}))

function TimeByCity(props) {
    const classes = useStyles();
    const [text, setText] = useState('');
    async function getTimeInCity(city) {
        const response = await fetch(`https://chvsunset.herokuapp.com/api/?city=${city}`);
        const data = await response.json();
        return (
        `הזמנים רלוונטיים ל${city}.
        הנץ ב${data.netz},
        הגר"א ב${data.gra},
        חצות ב${data.chatzos},
        שקיעה ב${data.shkia}`
        );
    };
    (async () => setText(await getTimeInCity(props.city)))();

    return (
        <div className={classes.root}>
            {text}
        </div>
    )
}

export default TimeByCity;
