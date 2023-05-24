import { deleteTODO, updateTODO } from './App.js';

const content = document.querySelector('#content');
const header = document.querySelector('#header');

class UI {
    constructor(){}

    displayAlert(message, type){
        const alert = document.querySelector('.alertActive');

        if(!alert){
            // Create new HTML element
            const pMessage = document.createElement('p');

            // Add global styles
            pMessage.classList.add('w-full', 'block', 'py-1', 'px-4', 'tracking-wider', 'text-gray-100', 'rounded-lg', 'text-sm', 'font-bold', 'mt-5', 'alertActive');

            if(type !== 'error'){
                // Add class
                pMessage.classList.add('text-green-500');
                // Add some text to p element
                pMessage.textContent = message;
            } else {
                pMessage.classList.add('text-red-500');
                // Add some text to p element
                pMessage.textContent = message;
            }
            
            header.appendChild(pMessage);

            setTimeout(() => {
                pMessage.remove()
            },3000);
        }


    }

    displayTODOS({todos}){

        this.clearHTML();

        if(todos.length <= 0 ) {
            content.classList.add('text-white')
            content.textContent = 'Please add new TODOS :)';
            return;
        }

        todos.forEach( item => {
            // Parent Element
            const div = document.createElement('div');
            
            // Child elements for buttons
            const buttonsDIV = document.createElement('div');
            const btnUpdate = document.createElement('button');
            const btnDelete = document.createElement('button');

            // Child Element for TODO
            const newItem = document.createElement('div');
            const textTODO = document.createElement('p');
            const textStatus = document.createElement('span');

            div.classList.add('flex', 'justify-between', 'w-full', 'bg-slate-900', 'rounded-lg', 'px-2', 'flex-wrap', 'py-2');
            newItem.classList.add('w-auto', 'p-1', 'rounded-lg', 'px-2', 'bg-slate-900');
            textTODO.classList.add('w-full','text-gray-200', 'tracking-wider');
            textStatus.classList.add('py-1', 'rounded-lg', 'tracking-wider');
            buttonsDIV.classList.add('flex', 'gap-2');
            btnUpdate.classList.add('px-4', 'bg-yellow-500', 'rounded-lg', 'h-8', 'self-center', 'text-gray-900', 'text-sm');
            btnDelete.classList.add('px-4', 'bg-red-500', 'rounded-lg', 'h-8', 'self-center', 'text-gray-100', 'text-sm');

            textTODO.textContent = item.todo;
            textStatus.textContent = item.status;
            btnUpdate.textContent = 'Update';
            btnDelete.textContent = 'Delete';

            btnUpdate.onclick = () => updateTODO(item);
            btnDelete.onclick =() => deleteTODO(item.id);

            if( textStatus.textContent === 'Pending'){
                textStatus.classList.add('text-orange-500');
            } else {
                textStatus.classList.add('text-green-500');
            }

            newItem.appendChild(textTODO);
            newItem.appendChild(textStatus);

            buttonsDIV.appendChild(btnUpdate);
            buttonsDIV.appendChild(btnDelete);

            div.appendChild(newItem);
            div.appendChild(buttonsDIV);


            content.appendChild(div);
        });
    }

    clearHTML(){
        while(content.firstChild){
            content.removeChild(content.firstChild)
        }
    }
}

export default UI;