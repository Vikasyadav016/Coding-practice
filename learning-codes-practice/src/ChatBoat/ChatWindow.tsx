import  { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";


export default function ChatWindow() {
  const { theme } = useContext(ThemeContext);
  const [message, setMessage] = useState("");

  return (
    <div
      className="chat-window"
      style={{ background: theme.colors.chatBg }}
    >
      <div className="chat-header">
        <img src="/avatar1.png" />
        <div>
          <h6 style={{ color: theme.colors.text }}>John Doe</h6>
          <span style={{ color: theme.colors.primaryLight }}>online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">

        <div
          className="message incoming"
          style={{
            background: theme.colors.incomingBubble,
            color: theme.colors.text
          }}
        >
          Hello! How can I help?
        </div>

        <div
          className="message outgoing"
          style={{
            background: theme.colors.outgoingBubble,
            color: theme.colors.textLight
          }}
        >
          I need help with my course.
        </div>

      </div>

      {/* Message Input */}
      <div className="chat-input">
        <input
          style={{
            borderColor: theme.colors.border,
            color: theme.colors.text
          }}
          placeholder="Type a message…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="send-btn"
          style={{ background: theme.colors.primary }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
