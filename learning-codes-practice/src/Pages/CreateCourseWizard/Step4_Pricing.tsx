import { Form, Button } from "react-bootstrap";

const Step4_Pricing = ({ course, setCourse, prev, submit }: any) => {
  return (
    <>
      <h5>Step 4 — Pricing & Publish</h5>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Course Price (₹)</Form.Label>
          <Form.Control
            type="number"
            value={course.price}
            onChange={(e) => setCourse({ ...course, price: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Discount (%)</Form.Label>
          <Form.Control
            type="number"
            value={course.discount}
            onChange={(e) =>
              setCourse({ ...course, discount: e.target.value })
            }
          />
        </Form.Group>

        <Form.Check
          type="switch"
          label="Publish Immediately"
          checked={course.status === "Published"}
          onChange={(e) =>
            setCourse({
              ...course,
              status: e.target.checked ? "Published" : "Draft",
            })
          }
        />
      </Form>

      <div className="mt-4 d-flex justify-content-between">
        <Button variant="secondary" onClick={prev}>← Back</Button>
        <Button variant="success" onClick={submit}>Finish & Publish</Button>
      </div>
    </>
  );
};

export default Step4_Pricing;
