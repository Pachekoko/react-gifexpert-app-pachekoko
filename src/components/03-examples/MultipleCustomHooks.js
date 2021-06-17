import React from 'react'
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './examples.css';
const MultipleCustomHooks = () => {
    const {counter,increment}=useCounter(1);

    const url=`https://www.breakingbadapi.com/api/quotes/${counter}`;
    console.log(url);
    const state = useFetch(url);
    console.log(state);
    const {loading,error,data} = state;
    const {author,quote,series} = !!data && data[0];

    //console.log(author,quote);
    return (
        <>
            <h1>Frases Breaking Bad</h1>
            <hr></hr>
            {
                loading ?
                (
                    <div className="alert alert-primary text-center" role="alert">
                        <strong>Cargando...</strong>
                    </div>
                )
                :
                (
                    <div className="card">
                        <div className="card-body">
                            <blockquote className="blockquote">
                            <p>{quote}</p>
                            <footer className="card-blockquote"> {author}, <cite title="Source title">{series}</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                ) 
                
            }
            <button type="button" 
            name="sig" id="sig" 
            className="btn btn-primary btn-lg btn-block" 
            onClick={increment}>
                Siguiente frase
            </button>
            

            
        </>
    )
}

export default MultipleCustomHooks
