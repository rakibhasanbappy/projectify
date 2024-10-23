import { useContext } from "react";
import { TaskContext } from "../context";

import Sort from "../SvgComponents/Sort";
import Task from "./Task";

export default function Todo() {
  const { tasks, dispatch } = useContext(TaskContext);

  const todoTasks = tasks.filter((task) => task.category === "todo");

  function handleSortClick() {
    // sort the tasks based on date
    const sortedTask = [...todoTasks].sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    // update the state
    dispatch({ type: "SORT_TASKS", payload: { sortedTask, type: "todo" } });
  }

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{`To-Do (${todoTasks.length})`}</h3>
          <a href="#" onClick={handleSortClick}>
            <Sort />
          </a>
        </div>
        {todoTasks.length === 0 && (
          <p className="text-zinc-200">Task List is Empty!</p>
        )}
        {todoTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
