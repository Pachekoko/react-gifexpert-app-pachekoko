import React, { useEffect, useState } from 'react'
import './effects.css'
import Message from './Message';
const SimpleForm = () => {

    const [formState, setformState] = useState({
        name:'',
        email:''
    });
    
    const {name,email} = formState;

    useEffect(()=>{
        //console.log('effect');
    },[]);

    useEffect(()=>{
        //console.log('formState Cambio!');
    },[formState]);

    useEffect(()=>{
        //console.log('Correo Cambio!');
    },[email]);

    const handleInputChange = ({target}) => {
        setformState({
            ...formState,
            [target.name]:target.value,
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr></hr>
            
            <div className="form-group">
              <label >Nombre</label>
              <input 
                type="text"
                className="form-control" 
                name="name" id="name" 
                value={name}
                onChange={handleInputChange}
                placeholder="Ingresa tu Nombre"/>
            </div>
            <div className="form-group">
              <label >Correo</label>
              <input 
                type="text"
                className="form-control" 
                name="email" id="email" 
                value={email}
                onChange={handleInputChange}
                placeholder="Ingresa tu Correo"/>
            </div>
            {(name==="alfredo") && <Message />}
        </>
    )
}

export default SimpleForm
