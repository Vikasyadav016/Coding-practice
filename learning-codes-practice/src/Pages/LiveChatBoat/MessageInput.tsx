import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const MessageInput = ({ onSend }: any) => {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <InputGroup className="mt-2">
      <FormControl
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
      />
      <Button variant="primary" onClick={send}>
        Send
      </Button>
    </InputGroup>
  );
};

export default MessageInput;
