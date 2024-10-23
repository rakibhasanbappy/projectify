import Calendar from "../SvgComponents/Calendar";
import Contact from "../SvgComponents/Contact";
import Dashboard from "../SvgComponents/Dashboard";
import Kanban from "../SvgComponents/Kanban";
import Messages from "../SvgComponents/Messages";
import Project from "../SvgComponents/Project";
import Settings from "../SvgComponents/Settings";
import logo from "../assets/lws-logo-en.svg";

export default function Sidebar() {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={logo} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center">
              <Dashboard />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Project />
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Contact />
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Kanban />
              Kanban
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Calendar />
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Messages />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Settings />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
