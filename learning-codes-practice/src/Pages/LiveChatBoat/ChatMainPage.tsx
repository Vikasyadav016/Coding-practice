import  { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { fetchMessages, fetchStudents } from "../../Services/chatService";
import StudentList from "./StudentList";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";



const ChatPage = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [activeStudent, setActiveStudent] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const data = fetchStudents();
    setStudents(data);
  }, []);

  const selectStudent = (student: any) => {
    setActiveStudent(student);
    setMessages(fetchMessages(student.id));
  };

  const sendMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "tutor",
        text,
        time: Date.now(),
      },
    ]);

    // fake student reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "student",
          text: "Okay sir 👍",
          time: Date.now(),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="p-3">
      <h3 className="fw-bold mb-3">💬 Live Chat with Students</h3>

      <Row style={{ height: "75vh" }}>
        {/* Student List */}
        <Col md={4} lg={3}>
          <Card className="h-100">
            <StudentList
              students={students}
              activeId={activeStudent?.id}
              onSelect={selectStudent}
            />
          </Card>
        </Col>

        {/* Chat Area */}
        <Col md={8} lg={9}>
          <ChatWindow messages={messages} activeStudent={activeStudent} />

          {activeStudent && <MessageInput onSend={sendMessage} />}
        </Col>
      </Row>
    </div>
  );
};

export default ChatPage;
