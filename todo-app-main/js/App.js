// Imports
import UI from './UI.js';
import TODO from './TODO.js';

// Selectores
const input = document.querySelector('#newtodo');
const form = document.querySelector('#form');

let upgrade = false;

let newTodo = {
    todo: '',
    status: 'Success'
}


// Instance for UI class
const ui = new UI();

// Instance for TODO class
const todo = new TODO();

eventListeners();

function eventListeners(){
    
    document.addEventListener('DOMContentLoaded', () => {
        ui.displayTODOS(todo);
    });

    input.addEventListener('input', fillInput);
    form.addEventListener('submit', onSubmit);
}

function fillInput(e){
    const inputValue = e.target.value;
    newTodo[e.target.name] = inputValue;
}

function onSubmit(e){
    e.preventDefault();

    const data = {
        id: Date.now(),
        ...newTodo
    }

    if(!upgrade){
        console.log(data)
        if(input.value.trim() === ''){
            ui.displayAlert('Empty Field, please fill the input', 'error');
            return;
        } else {
            ui.displayAlert('TODO added');
        }

        todo.addTODO(data);
    
        form.reset()
    
        ui.displayTODOS(todo)
    } else {
        todo.updateTODO(data);
        form.reset();
        ui.displayTODOS(todo);

        input.classList.remove('text-white');
        upgrade = false;
        console.log(data)
        newTodo = {
            todo: '',
            status: 'Success'
        }
        console.log(data)
    }
    

}

export function updateTODO(item){
    const { todo } = item;
   input.value = todo;
   input.classList.add('text-white');

    newTodo = item;

   upgrade = true;
}

export function deleteTODO(id){
    todo.removeTODO(id);

    form.reset();
    ui.displayTODOS(todo)
}