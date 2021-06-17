import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import Small from './Small'

const Memorize = () => {
    const {counter,increment}=useCounter(10);
    
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Counter: <Small value={counter}/> </h1>
            <hr/>
            <button onClick={increment} 
            type="button" name="" id="" 
            className="btn btn-primary btn-lg btn-block">+</button>

            <button onClick={() => { setShow(!show) }} 
            type="button" name="" id="" 
            className="btn btn-primary btn-lg btn-block">Show/Hide{JSON.stringify(show)}</button>
            
        </div>
    )
}

export default Memorize;
