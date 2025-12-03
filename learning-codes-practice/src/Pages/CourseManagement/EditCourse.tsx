import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCourseById, updateCourse } from "../../Services/tutorCourseService";

const EditCourse: React.FC = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<any>({});

  useEffect(() => {
    const data = getCourseById(id!);
    if (data) setCourse(data);
  }, [id]);

  const handleUpdate = () => {
    updateCourse(id!, course);
    alert("Course updated!");
    window.location.href = "/tutor/courses";
  };

  return (
    <div className="p-3">
      <h3 className="fw-bold mb-4">✏️ Edit Course</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            type="text"
            value={course.title}
            onChange={(e) =>
              setCourse({ ...course, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </Form.Group>

        <Button onClick={handleUpdate}>Save Changes</Button>
      </Form>
    </div>
  );
};

export default EditCourse;
