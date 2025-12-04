import { useState } from "react";
import { Button, Form, Badge } from "react-bootstrap";

const Step2_Objectives = ({ course, setCourse, next, prev }: any) => {
  const [outcome, setOutcome] = useState("");
  const [req, setReq] = useState("");

  const addOutcome = () => {
    if (!outcome) return;
    setCourse({ ...course, outcomes: [...course.outcomes, outcome] });
    setOutcome("");
  };

  const addRequirement = () => {
    if (!req) return;
    setCourse({ ...course, requirements: [...course.requirements, req] });
    setReq("");
  };

  return (
    <>
      <h5>Step 2 — Learning Outcomes & Requirements</h5>

      <Form>
        <Form.Label>Learning Outcomes</Form.Label>

        <div className="d-flex gap-2 mb-2">
          <Form.Control
            type="text"
            placeholder="Add outcome"
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
          />
          <Button onClick={addOutcome}>Add</Button>
        </div>

        {course.outcomes.map((o: string, i: number) => (
          <Badge bg="info" key={i} className="me-2 mb-2">{o}</Badge>
        ))}

        <hr />

        <Form.Label>Requirements</Form.Label>

        <div className="d-flex gap-2 mb-2">
          <Form.Control
            type="text"
            placeholder="Add requirement"
            value={req}
            onChange={(e) => setReq(e.target.value)}
          />
          <Button onClick={addRequirement}>Add</Button>
        </div>

        {course.requirements.map((r: string, i: number) => (
          <Badge bg="secondary" key={i} className="me-2 mb-2">{r}</Badge>
        ))}
      </Form>

      <div className="mt-3 d-flex justify-content-between">
        <Button variant="secondary" onClick={prev}>← Back</Button>
        <Button onClick={next}>Next →</Button>
      </div>
    </>
  );
};

export default Step2_Objectives;
