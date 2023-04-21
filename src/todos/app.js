import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases/render-todos';


const ElementIDs  ={
    TodoList: '.todo-list',
}

export const App = (elementId) =>{

    const displayTodos = () =>{

        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(ElementIDs.TodoList, todos);
    }

    // cuando la funcion app() se llama invoca esto
(() =>{
    const app =  document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append( app );
    displayTodos();
})();
}