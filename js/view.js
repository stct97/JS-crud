import AddTodo from './components/add-todo.js';
export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        //btn.onclick = () => this.addTodo('Titulo', 'Desc');

        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));

    }

    setModel(model) {
        this.model = model;
    }

    addTodo(title, description) {
        const todo = this.model.addTodo(title, description);
    }
}