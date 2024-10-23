import { useState } from "react";

import Plus from "../SvgComponents/Plus";

import AddTaskModal from "./AddTaskModal";
import Done from "./Done";
import OnProgress from "./OnProgress";
import Revised from "./Revised";
import Todo from "./Todo";

export default function Content() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <>
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

            <Revised />
          </div>
        </div>
      )}
    </>
  );
}
