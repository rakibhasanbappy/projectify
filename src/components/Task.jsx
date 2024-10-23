import { useContext } from "react";
import Delete from "../SvgComponents/Delete";
import Edit from "../SvgComponents/Edit";
import { FormContext, TaskContext } from "../context";
import getWrittenDate from "../helper/convertDate";

export default function Task({ task }) {
  const { dispatch } = useContext(TaskContext);
  const { setIsEditing, setFormData, setShowAddTaskModal } =
    useContext(FormContext);

  const handleDeleteClick = function () {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  const handleEditClick = function () {
    setIsEditing(true);
    setFormData(task);
    setShowAddTaskModal(true);
  };

  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {task.title}
        </h4>

        <div className="flex gap-2">
          <a href="#" onClick={handleDeleteClick}>
            <Delete />
          </a>
          <a href="#" onClick={handleEditClick}>
            <Edit />
          </a>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{getWrittenDate(task.date)}</p>
    </div>
  );
}
