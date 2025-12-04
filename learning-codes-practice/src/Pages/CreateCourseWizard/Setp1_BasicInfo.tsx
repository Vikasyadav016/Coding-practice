import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Step1_BasicInfo = ({ course, setCourse, next }: any) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!course.title || !course.category || !course.level) {
      setError("Please fill all required fields!");
      return;
    }
    next();
  };

  return (
    <>
      <h5>Step 1 — Basic Course Information</h5>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Course Title *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course title"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category *</Form.Label>
          <Form.Select
            value={course.category}
            onChange={(e) => setCourse({ ...course, category: e.target.value })}
          >
            <option value="">Select category</option>
            <option>Programming</option>
            <option>Design</option>
            <option>Business</option>
            <option>Language</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Level *</Form.Label>
          <Form.Select
            value={course.level}
            onChange={(e) => setCourse({ ...course, level: e.target.value })}
          >
            <option value="">Select level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description *</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write a detailed course description"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Thumbnail *</Form.Label>
          <Form.Control
            type="file"
            onChange={(e:any) => 
              setCourse({ ...course, thumbnail: URL.createObjectURL(e.target.files![0]) })
            }
          />
        </Form.Group>

        {error && <p className="text-danger mt-2">{error}</p>}

        <div className="mt-3 d-flex justify-content-end">
          <Button onClick={handleNext}>Next →</Button>
        </div>
      </Form>
    </>
  );
};

export default Step1_BasicInfo;
