import React, { useState } from 'react';
import './counter.css';

const CounterApp = () => {
    const [state, setState] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40,
        counter5:50,
    });
    const {counter1, counter2} = state;
    //console.log(counter);
    return (
        <>
            <h1>Counter App 1: {counter1}</h1>
            <h1>Counter App 2: {counter2}</h1>
            <hr></hr>
            <button type="button" className="btn btn-primary btn-lg btn-block"
                onClick={()=>{
                    setState({
                        ...state,
                        counter1:counter1+1,
                    });
                }}
            >+1 contador 1</button>
            <button type="button" className="btn btn-primary btn-lg btn-block"
                onClick={()=>{
                    setState({
                        ...state,
                        counter2:counter2+1,
                    });
                }}
            >+1 contador 2</button>
        </>
    )
}

export default CounterApp
