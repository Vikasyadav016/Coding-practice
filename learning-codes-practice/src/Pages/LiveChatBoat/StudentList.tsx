import { ListGroup, Image } from "react-bootstrap";

const StudentList = ({ students, activeId, onSelect }: any) => {
  return (
    <ListGroup variant="flush" className="border-end" style={{ height: "100%", overflowY: "auto" }}>
      {students.map((student: any) => (
        <ListGroup.Item
          key={student.id}
          active={activeId === student.id}
          onClick={() => onSelect(student)}
          style={{ cursor: "pointer" }}
          className="d-flex align-items-center"
        >
          <Image
            src={student.avatar}
            roundedCircle
            width={40}
            height={40}
            className="me-3"
          />
          <div>
            <strong>{student.name}</strong>
            <div className="small text-muted">{student.lastMessage}</div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default StudentList;
