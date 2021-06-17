const initialState = [{
    id:1,
    todo:'Comprar Pan',
    done:false,
}];

const todoReducer = (state = initialState ,action) => {
    
    if(action?.type==='agregar'){
        return [...state, action.payload];
    } 
    return state;
}

let todos=todoReducer();

const newTodo = {
    id:2,
    todo:'Comprar Leche',
    done:false,
};
const agregaTodoAction = {
    type:  'agregar',
    payload: newTodo
}

todos = todoReducer(todos,agregaTodoAction);

console.log(todos);