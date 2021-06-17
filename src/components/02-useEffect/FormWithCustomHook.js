import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm';

import './effects.css'
const FormWithCustomHook = () => {
    
    const [formValues, handleInputChange, handleSubmit] = useForm({
        name:'',
        email:'',
        password:''
    });
    
    const {name,email,password} = formValues;
    
    useEffect(() => {
    
        console.log("email cambio");

    }, [email]);

    

    return (
        <form onSubmit={handleSubmit}>
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
                autoComplete="off"
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
                autoComplete="off"
                placeholder="Ingresa tu Correo"/>
            </div>
            <div className="form-group">
              <label >Correo</label>
              <input 
                type="password"
                className="form-control" 
                name="password" id="password" 
                value={password}
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="***************"/>
            </div>
            <button type="submit" name="save" id="save" className="btn btn-primary btn-lg btn-block">
                Guardar
            </button>
            
        </form>
    )
}

export default FormWithCustomHook;