import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addNewCourse } from "../../Services/tutorCourseService";

const AddCourse: React.FC = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (!title) return alert("Course title is required.");

    addNewCourse({ title, description: desc });

    alert("Course added successfully!");
    window.location.href = "/tutor/courses";
  };

  return (
    <div className="p-3">
      <h3 className="fw-bold mb-4">➕ Add New Course</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Course short description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" onClick={handleSubmit}>
          Save Course
        </Button>
      </Form>
    </div>
  );
};

export default AddCourse;
