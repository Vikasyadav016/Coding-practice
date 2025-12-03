import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../Services/tutorCourseService";
import AddLessonModal from "./AddLessionModal";


const ManageContent: React.FC = () => {
  const { id } = useParams();
  const course = getCourseById(id!);

  const [lessons, setLessons] = useState([
    { title: "Introduction", duration: "5 min" },
    { title: "Basics of React", duration: "18 min" },
  ]);

  const [show, setShow] = useState(false);

  return (
    <div className="p-3">
      <h3 className="fw-bold mb-2">{course?.title}</h3>
      <h5 className="text-muted mb-4">Manage Course Content 📘</h5>

      <Button onClick={() => setShow(true)} className="mb-3">
        + Add Lesson
      </Button>

      <ListGroup>
        {lessons.map((l, i) => (
          <ListGroup.Item key={i} className="d-flex justify-content-between">
            <div>
              <strong>{l.title}</strong>
              <div className="small text-muted">{l.duration}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <AddLessonModal
        show={show}
        onHide={() => setShow(false)}
        addLesson={(lesson:any) => setLessons([...lessons, lesson])}
      />
    </div>
  );
};

export default ManageContent;
