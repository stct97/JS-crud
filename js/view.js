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
        this.createRow(todo);
    }

    toggeCompleted(id) {
        this.model = this.toggeCompleted(id);
    }
    removeTodo(id) {
        document.getElementById(id).remove();
        this.model.removeTodo(id);
    }

    createRow(todo) {
        const row = table.insertRow();
        row.setAttribute('id', todo.id);
        row.innerHTML = `
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td>
        <td class="text-center">
        <input type="checkbox">
    </td>
    <td class="text-right">
        <button class="btn btn-primary mb-1">
<i class="fa fa-pencil"></i>
</button>
    </td>`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.model.toggeCompleted(todo.id);
        row.children[2].appendChild(checkbox);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'm1-1');
        removeBtn.innerHTML = '<i class= "fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeTodo(todo.id);
        row.children[3].appendChild(removeBtn);
    }
}