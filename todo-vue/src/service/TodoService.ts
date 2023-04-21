import type TodoDto from "@/swagger/dto/TodoDto";
import type TodoFilterDto from "@/swagger/dto/TodoFilterDto";
import type TodoDataDto from "@/swagger/dto/TodoDataDto";

export default interface TodoService {

    getTodoList(filter?: TodoFilterDto): Promise<TodoDto[]>

    deleteTodos(ids: number[]): Promise<any> //todo remove any

    createTodo(data: TodoDataDto): Promise<any> //todo remove any

    updateTodo(id: number, data: TodoDataDto): Promise<any> //todo remove any

}