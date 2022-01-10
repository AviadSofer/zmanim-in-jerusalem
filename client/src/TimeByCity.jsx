import React, { useState } from 'react';

function TimeByCity(props) {
    const [time, setTime] = useState('');
    async function getzman() {
        const response = await fetch(`https://chvsunset.herokuapp.com/api/?city=${props.city}`);
        const data = await response.json();
        const resultString = `
        הזמנים רלוונטיים לירושלים.
        הנץ ב${data.netz},
        הגר"א ב${data.gra},
        חצות ב${data.chatzos},
        שקיעה ב${data.shkia}
        `;
        setTime(resultString);
    };
    getzman();

    return (
        <div>
            {time}
        </div>
    )
}

export default TimeByCity;
