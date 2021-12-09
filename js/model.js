export default class Model {
    constructor() {
        this.view = null;
        this.todos = [];
        this.currentID = 1;
    }

    setView(view) {
        this.view = view;
    }

    getTodos() {
        return this.todos;
    }

    addTodo(title, description) {
        const todo = {
            id: this.currentID++,
            title,
            description,
            completed: false,
        }
        this.todos.push(todo);
        console.log(this.todos)

        //Object.assign({},todo)
        return { ...todo }
    }
}