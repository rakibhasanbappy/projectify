import { useReducer, useState } from "react";
import { SearchContext, TaskContext } from "../context";
import tasksData from "../data/tasksData";
import taskReducer from "../reducers/taskReducer";
import Content from "./Content";
import Topbar from "./Topbar";

export default function MainContent() {
  const [tasks, dispatch] = useReducer(taskReducer, tasksData);
  const [search, setSearch] = useState("");

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Topbar />
          <Content />
        </div>
      </SearchContext.Provider>
    </TaskContext.Provider>
  );
}
