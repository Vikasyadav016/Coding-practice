import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddLessonModal = ({ show, onHide, addLesson }: any) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleSave = () => {
    if (!title) return alert("Lesson title required");
    addLesson({ title, duration });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Lesson</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Lesson Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lesson name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Duration (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., 10 min"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button onClick={handleSave}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddLessonModal;
