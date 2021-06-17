import React from 'react'
import useForm from '../../hooks/useForm';

const TodoAdd = ({handleAdd}) => {
    const [{descripcion},handleInputChange,reset] = useForm({
        descripcion:'',

    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(descripcion.trim().length <=1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        }
        
        handleAdd(newTodo);
        reset();
    }
    return (
        <>
            <h4>Agregar todo</h4>
            <hr></hr>
            
            <form onSubmit={handleSubmit}>
                
                <label>Descripcion</label>
                <input type="text"
                className="form-control" 
                name="descripcion" 
                id="descripcion" 
                placeholder="Por hacer..."
                value={descripcion}
                onChange={handleInputChange}/>

                <button type="submit" 
                name="add" 
                id="add" 
                className="btn btn-primary mt-1 btn-block">Agregar</button>
                
                
            </form>
                    
        </>
    )
}

export default TodoAdd
