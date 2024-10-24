import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar />
        <MainContent />
        <ToastContainer />
      </div>
    </div>
  );
}
