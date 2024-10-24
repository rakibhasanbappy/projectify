import { useContext } from "react";
import { SearchContext, TaskContext } from "../context";

import Sort from "../SvgComponents/Sort";
import Task from "./Task";

export default function Todo() {
  const { tasks, dispatch } = useContext(TaskContext);
  const { search } = useContext(SearchContext);

  let searchedTasks = tasks;

  if (search.length > 0) {
    searchedTasks = searchedTasks.filter((task) => {
      return task.title.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    searchedTasks = tasks;
  }

  const todoTasks = searchedTasks.filter((task) => task.category === "todo");

  function handleSortClick() {
    // update the state
    dispatch({ type: "SORT_TASKS", payload: { type: "todo" } });
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
