import { Todo } from "../todos/models/todo.models";

const filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {

    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del infinito'),
    ],
    filter: filters.All,
}

const initStore = () =>{
    console.log(state);
    console.log('Init Store');
}

const loadStore = () =>{
    throw new Error('Not implemented');
}

const addTodo = (description) =>{
   if(!description) throw new Error('Descripcion is required');

   state.todos.push(new Todo(description));
}

const getTodos = (filter = Filters.All) =>{
    
    switch(filters) {
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed:
            return state.todos.filter( todo =>{todo.done});

        case Filters.Pending:
            return state.todos.filter(todo => {!todo.done});

        default:
            throw new Error(`${filter} is not valid`)
    }
}

const toggleTodo = () =>{
    throw new Error('Not implemented');
}

const deleteTodo = () =>{
    throw new Error('Not implemented');
}

const deleteCompleted = () => {
    throw new Error('Not implemented');
}

const setFilter = (newFilter = filters.all) =>{

}

const getCurrentFilter = ()=>{
    throw new Error('Not implemented');
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getTodos,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}