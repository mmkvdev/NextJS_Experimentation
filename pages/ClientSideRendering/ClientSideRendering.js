import { useState, useEffect } from 'react';

function ClientSideRendering() {
    const [stateValidation, setStateValidation] = useState(false)
    useEffect(() => {
        setStateValidation(true)
    })

    return (
        stateValidation? (<h1>It's True</h1>) : (<h1>Better Luck Next Time</h1>)
    );
}

export default ClientSideRendering;