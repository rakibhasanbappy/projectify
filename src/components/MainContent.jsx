import { useReducer } from "react";
import { TaskContext } from "../context";
import tasksData from "../data/tasksData";
import taskReducer from "../reducers/taskReducer";
import Content from "./Content";
import Topbar from "./Topbar";

export default function MainContent() {
  const [tasks, dispatch] = useReducer(taskReducer, tasksData);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Topbar />
        <Content />
      </div>
    </TaskContext.Provider>
  );
}
