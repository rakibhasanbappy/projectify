import { useContext } from "react";
import { SearchContext, TaskContext } from "../context";
import Sort from "../SvgComponents/Sort";
import Task from "./Task";

export default function OnProgress() {
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

  const onProgressTasks = searchedTasks.filter(
    (task) => task.category === "inprogress"
  );

  function handleSortClick() {
    // update the state
    dispatch({
      type: "SORT_TASKS",
      payload: { type: "inprogress" },
    });
  }

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{`On Progress (${onProgressTasks.length})`}</h3>
          <a href="#" onClick={handleSortClick}>
            <Sort />
          </a>
        </div>

        {onProgressTasks.length === 0 && (
          <p className="text-zinc-200">Task List is Empty!</p>
        )}
        {onProgressTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
