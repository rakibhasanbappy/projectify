import Content from "./Content";
import Topbar from "./Topbar";

export default function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <Topbar />
      <Content />
    </div>
  );
}
