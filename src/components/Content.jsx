import { useState } from "react";

import Plus from "../SvgComponents/Plus";

import { FormContext } from "../context";
import AddTaskModal from "./AddTaskModal";
import Done from "./Done";
import OnProgress from "./OnProgress";
import Revise from "./Revise";
import Todo from "./Todo";

export default function Content() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    date: "",
    category: "todo",
  });

  return (
    <FormContext.Provider
      value={{
        isEditing,
        setIsEditing,
        formData,
        setFormData,
        setShowAddTaskModal,
      }}
    >
      {showAddTaskModal ? (
        <AddTaskModal onCancelClick={setShowAddTaskModal} />
      ) : (
        <div className="mx-auto max-w-7xl p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Projectify</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowAddTaskModal(true)}
                className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              >
                <Plus />
                Add
              </button>
            </div>
          </div>
          <div className="-mx-2 mb-6 flex flex-wrap">
            <Todo />

            <OnProgress />

            <Done />

            <Revise />
          </div>
        </div>
      )}
    </FormContext.Provider>
  );
}
