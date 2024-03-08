const todos = [];


class TodoRepository {

    insert(todoText) {
        todos.push({id: todos.length, text: todoText});
    }

    getAll() {
        return todos;
    }

    get(id) {
        return todos.filter(todos => todos.id == id)[0];
    }
}

module.exports = TodoRepository;