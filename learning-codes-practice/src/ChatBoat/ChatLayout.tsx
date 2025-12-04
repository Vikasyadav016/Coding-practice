
import "./chat.css";
import ChatWindow from "./ChatWindow";
import Sidebar from "./Sidebar";

export default function ChatLayout() {
  return (
    <div className="chat-layout">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
