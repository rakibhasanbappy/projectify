import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
