export class TodolistServices {

    todolist = ["Honda", "Yamaha", "Ducati"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        });
    }

    getTodoList(request, response) {

        response.write(this.getJsonTodoList());
        response.end();
    }

    createTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString()); // parsing data buffer ke string kemudian ke jsonf
            this.todolist.push(body.todo);

            response.write(this.getJsonTodoList());
            console.info(this.getJsonTodoList());
            response.end();
        });
    }
}