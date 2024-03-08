class TodoMySQLRepository {
// below code is not work it is for demo 
    insert(todoText) {
        mysql.exec(`INSERT INTO TODOS (todoText) VALUES (${todoText})`);
    }

    getAll() {
        mysql/exec(`SELECT * FROM TODOS;`);
    }

    get(id) {
        mysql.exec(`SELECT * FROM TODOS WHERE ID = ${id}`);
    }
}

module.exports = TodoMySQLRepository;