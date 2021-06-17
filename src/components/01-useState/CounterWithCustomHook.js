import React from 'react'
import useCounter from '../../hooks/useCounter'
import './counter.css'
const CounterWithCustomHook = () => {

    const {state,increment,decrement,reset} = useCounter(100);

    return (
        <>
            <h1>Counter with custom hook:{state}</h1>
            <button onClick={()=>decrement(2)} type="button" class="btn btn-primary">-1</button>
            <button onClick={reset} type="button" class="btn btn-primary">reset</button>
            <button onClick={()=>increment(2)} type="button" class="btn btn-primary">+1</button>
        </>
    )
}

export default CounterWithCustomHook
