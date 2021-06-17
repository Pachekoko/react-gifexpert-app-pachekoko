import React, { useRef } from 'react'
import './focus.css';
const FocusScreen = () => {

    const inputRef = useRef();
    //console.log(ref);

    const handleClick=()=>{
        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <>
            <h1>Maincraf</h1>
            <hr></hr>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input 
                type="text" 
                ref={inputRef}
                className="form-control" 
                name="name" id="name"  
                placeholder="Ingrese su nombre"/>

              <button type="button" 
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
                >
                  Focus
              </button>
            </div>
        </>
    )
}

export default FocusScreen;
