import React, { useMemo, useState } from 'react'
import procesoPesado from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

const MemoHook = () => {
    
    const {counter,increment}=useCounter(5000);
    const [show, setShow] = useState(true)
    const memoProcesoPesado=useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: {counter} </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>
            <button onClick={increment} 
            type="button" name="" id="" 
            className="btn btn-primary btn-lg btn-block">+</button>

            <button onClick={() => { setShow(!show) }} 
            type="button" name="" id="" 
            className="btn btn-primary btn-lg btn-block">Show/Hide{JSON.stringify(show)}</button>
            
        </div>
    )
}

export default MemoHook;