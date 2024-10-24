import { useContext } from "react";
import { SearchContext, TaskContext } from "../context";
import Sort from "../SvgComponents/Sort";
import Task from "./Task";

export default function Revise() {
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

  const reviseTasks = searchedTasks.filter(
    (task) => task.category === "revised"
  );

  function handleSortClick() {
    // get the revise tasks
    const reviseTasks = tasks.filter((task) => task.category === "revised");
    // sort the tasks based on date
    const sortedTask = [...reviseTasks].sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    // update the state
    dispatch({
      type: "SORT_TASKS",
      payload: { sortedTask, type: "revised" },
    });
  }

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-rose-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{`Revise (${reviseTasks.length})`}</h3>
          <a href="#" onClick={handleSortClick}>
            <Sort />
          </a>
        </div>

        {reviseTasks.length === 0 && (
          <p className="text-zinc-200">Task List is Empty!</p>
        )}

        {reviseTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
