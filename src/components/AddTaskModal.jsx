import { useContext } from "react";
import { toast } from "react-toastify";
import { FormContext, TaskContext } from "../context";

export default function AddTaskModal({ onCancelClick }) {
  const { dispatch } = useContext(TaskContext);

  const { isEditing, setIsEditing, formData, setFormData } =
    useContext(FormContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTask = (e) => {
    if (
      formData.title === "" ||
      formData.description === "" ||
      formData.date === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    e.preventDefault();

    if (isEditing) {
      dispatch({ type: "UPDATE_TASK", payload: formData });
      toast.success("Task edited successfully");
      handleCancelClick();
      return;
    }

    const newTask = {
      ...formData,
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
    toast.success("Task added successfully");
    handleCancelClick();
  };

  const handleCancelClick = () => {
    onCancelClick(false);
    setIsEditing(false);
    setFormData({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      date: "",
      category: "todo",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Create Task
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="todo">To-Do</option>
                <option value="inprogress">On Progress</option>
                <option value="done">Done</option>
                <option value="revised">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={(e) => handleAddTask(e)}
              >
                {isEditing ? "Update Task" : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
