import { Card, Row, Col } from "react-bootstrap";

const KPIStats = ({ stats }: any) => {
  return (
    <Row className="mb-4">
      {[
        { label: "Total Students", value: stats.students, color: "primary" },
        { label: "Total Earnings", value: `₹${stats.earnings}`, color: "success" },
        { label: "Courses Published", value: stats.courses, color: "info" },
        { label: "Avg Rating", value: stats.rating.toFixed(1), color: "warning" },
      ].map((kpi, i) => (
        <Col md={3} sm={6} key={i} className="mb-3">
          <Card className={`border-${kpi.color} shadow-sm`}>
            <Card.Body>
              <h6 className="text-muted">{kpi.label}</h6>
              <h3 className={`text-${kpi.color} fw-bold`}>{kpi.value}</h3>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default KPIStats;
