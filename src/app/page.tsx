import { getAllTodos } from "../../api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

<video src="background.mp4" ></video>


export default async function Home() {
  const tasks = await getAllTodos()
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-between my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Todo List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>

  )
}
