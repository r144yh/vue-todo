import type TodoService from "@/service/TodoService";
import type TodoDataDto from "@/swagger/dto/TodoDataDto";
import type TodoFilterDto from "@/swagger/dto/TodoFilterDto";
import type TodoDto from "@/swagger/dto/TodoDto";

export default class TodoServiceImpl implements TodoService {

    createTodo(data: TodoDataDto): Promise<any> {
        return Promise.resolve(undefined);
    }

    deleteTodos(ids: number[]): Promise<any> {
        return Promise.resolve(undefined);
    }

    getTodoList(filter?: TodoFilterDto): Promise<TodoDto[]> {
        return Promise.resolve([]);
    }

    updateTodo(id: number, data: TodoDataDto): Promise<any> {
        return Promise.resolve(undefined);
    }

}