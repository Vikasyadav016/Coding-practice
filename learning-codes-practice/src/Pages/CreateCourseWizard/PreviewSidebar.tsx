import { Card } from "react-bootstrap";

const PreviewSidebar = ({ course }: any) => {
  return (
    <Card style={{ width: "350px", height: "100%", position: "sticky", top: "20px" }} className="p-3 shadow-sm">
      <h5 className="fw-bold">Live Preview</h5>
      <hr />

      {course.thumbnail ? (
        <img src={course.thumbnail} className="img-fluid rounded mb-3" />
      ) : (
        <div className="bg-light p-4 rounded text-center mb-3">
          No Thumbnail
        </div>
      )}

      <h6 className="fw-bold">{course.title || "Untitled Course"}</h6>
      <small className="text-muted">{course.category}</small>

      <p className="mt-2">{course.description?.slice(0, 120)}...</p>

      <strong>Outcomes:</strong>
      <ul>
        {course.outcomes.map((o: string, i: number) => (
          <li key={i}>{o}</li>
        ))}
      </ul>

      <strong>Requirements:</strong>
      <ul>
        {course.requirements.map((o: string, i: number) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </Card>
  );
};

export default PreviewSidebar;
