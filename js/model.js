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

    findTodo(id){
        const index = this.todos.findIndex((todo) => todo.id === id);
    }
    toggleCompleted(id){
        console.log(id)
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
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

    removeTodo(id) {
        const index = this.findTodo(id);
        console.log(this.todos[index])
        this.todos.splice(index, 1);
    }
}