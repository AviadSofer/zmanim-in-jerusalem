import React, { useState } from 'react';

function TimeByCity(props) {
    const [text, setText] = useState('');
    async function getzman() {
        const response = await fetch(`https://chvsunset.herokuapp.com/api/?city=${props.city}`);
        const data = await response.json();
        setText(`
        הזמנים רלוונטיים ל${props.city}.
        הנץ ב${data.netz},
        הגר"א ב${data.gra},
        חצות ב${data.chatzos},
        שקיעה ב${data.shkia}
        `);
    };
    getzman();

    return (
        <div>
            {text}
        </div>
    )
}

export default TimeByCity;
