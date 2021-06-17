import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css'
const RefUsage = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RefUsage</h1>
            <hr></hr>
            {show && <MultipleCustomHooks />}
            <button onClick={()=>setShow(!show)} type="button" className="btn btn-outline-primary">{show ? "Ocultar" : "Mostrar"} App</button>
        </div>
    )
}

export default RefUsage;
