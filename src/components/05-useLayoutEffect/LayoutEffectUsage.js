import { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './layout.css';
const Layout = () => {
    const {counter,increment}=useCounter(1);

    const url=`https://www.breakingbadapi.com/api/quotes/${counter}`;
    const state = useFetch(url);
    const {data} = state;
    const {quote} = !!data && data[0];
    
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})
    
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())

    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr></hr>
            
            <div className="card">
                <div className="card-body">
                    <blockquote className="blockquote">
                    <p ref={pTag}>
                        {quote}
                    </p>
                    </blockquote>
                    <pre>
                        {JSON.stringify(boxSize,null,3)}
                    </pre>
                </div>
            </div>
                
                
            
            <button type="button" 
            name="sig" id="sig" 
            className="btn btn-primary btn-lg btn-block" 
            onClick={increment}>
                Siguiente frase
            </button>
            

            
        </>
    )
}

export default Layout;
