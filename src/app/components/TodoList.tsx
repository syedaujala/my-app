import React from "react"
import { ITask } from "../../../type/tasks"
import next from "next"
import Tasks from "./Tasks"


interface TodoListProps {
  tasks : ITask[]
}


const TodoList: React.FC<TodoListProps> = ({tasks}) => {
    return <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {tasks.map((tasks) => (<Tasks key={tasks.id} tasks={tasks}/> ))}
      </tbody>
    </table>
  </div>
}

export default TodoList