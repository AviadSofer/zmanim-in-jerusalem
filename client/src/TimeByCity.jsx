import React, { useState } from 'react';

function TimeByCity(props) {
    const [text, setText] = useState('');
    async function getTimeInCity(city) {
        const response = await fetch(`https://chvsunset.herokuapp.com/api/?city=${city}`);
        const data = await response.json();
        return (`
        הזמנים רלוונטיים ל${city}.
        הנץ ב${data.netz},
        הגר"א ב${data.gra},
        חצות ב${data.chatzos},
        שקיעה ב${data.shkia}
        `);
    };
    (async () => setText(await getTimeInCity(props.city)))();

    return (
        <div>
            {text}
        </div>
    )
}

export default TimeByCity;
