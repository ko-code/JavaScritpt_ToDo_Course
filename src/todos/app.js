import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases/render-todos';


const ElementIDs  ={
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input'
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

//  Referencias HTML
const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
const todoListUl = document.querySelector(ElementIDs.TodoList);
// Listerner

newDescriptionInput.addEventListener('keyup', (event) =>{
    // console.log(event);
    if(event.keyCode !== 13) return;
    if(event.target.value.trim() === 0 ) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
});

todoListUl.addEventListener('click', (event) =>{
    const element = event.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
});
}