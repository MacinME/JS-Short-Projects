class TODO{
    constructor(){
        this.todos = JSON.parse( localStorage.getItem('todo') ) || [];
    }

    // Method for add a new TODO
    addTODO(newTodo){
        this.todos = [...this.todos, newTodo];
        this.saveLocalStorage();
    }

    saveLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    updateTODO(updateTodo){
        console.log(updateTodo)
        this.todos = this.todos.map( (todo) => {
            if(updateTodo.id === todo.id){
                return updateTodo
            } else {
                return todo;
            }
        });

        this.saveLocalStorage();
    }
    
    removeTODO(id){
        this.todos = this.todos.filter( (todo) => todo.id !== id);

        this.saveLocalStorage();
    }
}

export default TODO;