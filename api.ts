import { json } from "stream/consumers";
import { ITask } from "./type/tasks";

const baseUrl = 'http://localhost:3001';
 
export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`,{cache:"no-store"});
    const todos = await res.json();
    return todos ;
}

export const addTodo = async (todo:ITask):Promise<ITask> => {
    const res = await fetch (`${baseUrl}/tasks`,{
        method : "POST",
        headers : {
            "content-Type":"application/json"
        },
        body : JSON.stringify(todo)
    })

    const newTODO = await res.json();
    return newTODO  
}
