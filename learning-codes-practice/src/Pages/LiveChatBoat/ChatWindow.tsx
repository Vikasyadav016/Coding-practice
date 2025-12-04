import { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";

const ChatWindow = ({ messages, activeStudent }: any) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!activeStudent) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
        <h5>Select a student to start chat</h5>
      </div>
    );
  }

  return (
    <Card className="p-3" style={{ height: "100%", overflowY: "auto" }}>
      <h5 className="fw-bold mb-3">{activeStudent.name}</h5>

      {messages.map((msg: any, index: number) => (
        <div
          key={index}
          className={`d-flex mb-2 ${msg.sender === "tutor" ? "justify-content-end" : "justify-content-start"}`}
        >
          <div
            className={`p-2 rounded shadow-sm ${
              msg.sender === "tutor" ? "bg-primary text-white" : "bg-light"
            }`}
            style={{ maxWidth: "60%" }}
          >
            <div>{msg.text}</div>
            <small className="text-muted">
              {new Date(msg.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </small>
          </div>
        </div>
      ))}

      <div ref={bottomRef} />
    </Card>
  );
};

export default ChatWindow;
