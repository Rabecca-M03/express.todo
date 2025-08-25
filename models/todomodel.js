let todos = [];

module.exports = {
    getAll:() => todos,
    getById: (id) => todos.find(todo => todo.id === Id),
    create: (todo) => {
        todos.push(todo);
        return todo;
    },
    update: (id, newTodo) => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos[index] = { ...todods[index], ...newTodo};
            return todos[index];
        }
        return null;
    },
    delete: (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            return todos.splice(index, 1);
        }
        return null;       
    }
};