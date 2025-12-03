import React, { useEffect, useState } from "react";
import { Button, Table, Badge } from "react-bootstrap";
// import { getAllCourses } from "../../Services/tutorCourseService";

interface Course {
  id: string;
  title: string;
  students: number;
  status: "Published" | "Draft";
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses([]);
  }, []);

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">📚 Course Management</h3>
        <Button href="/tutor/courses/add" variant="primary">
          + Add New Course
        </Button>
      </div>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Students</th>
            <th>Status</th>
            <th style={{width: "140px"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.students}</td>
              <td>
                <Badge bg={c.status === "Published" ? "success" : "secondary"}>
                  {c.status}
                </Badge>
              </td>
              <td>
                <Button
                  size="sm"
                  variant="outline-primary"
                  href={`/tutor/courses/edit/${c.id}`}
                >
                  Edit
                </Button>{" "}
                <Button
                  size="sm"
                  variant="outline-dark"
                  href={`/tutor/courses/content/${c.id}`}
                >
                  Manage
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CourseList;
