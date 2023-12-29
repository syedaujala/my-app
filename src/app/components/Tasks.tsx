import React from "react"
import { ITask } from "../../../type/tasks"
import { Html } from "next/document"

interface TasksProps {
    tasks: ITask
}



const Tasks: React.FC<TasksProps> = ({ tasks }) => {
    return (
        <tr key={tasks.id}>
            <td>{tasks.text}</td>
            <td>Blue</td>
        </tr>
    )
}

export default Tasks



