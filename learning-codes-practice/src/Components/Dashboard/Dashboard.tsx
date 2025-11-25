import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 300, 150, 200],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Visitors",
        data: [500, 800, 750, 900, 1200],
        fill: false,
        borderColor: "#007bff",
        tension: 0.3,
      },
    ],
  };

  return (
    <Container fluid className="mt-1">
      <h2 className="mb-4">Welcome to Dashboard</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <h3>1,245</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Monthly Sales</Card.Title>
              <h3>$53,400</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Active Orders</Card.Title>
              <h3>342</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm p-3">
            <Card.Title>Sales Overview</Card.Title>
            <Bar data={barData} />
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="shadow-sm p-3">
            <Card.Title>Visitor Analytics</Card.Title>
            <Line data={lineData} />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="shadow-sm p-3">
            <Card.Title>Recent Orders</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>Headphones</td>
                  <td>Delivered</td>
                  <td>$99</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Emily Smith</td>
                  <td>Laptop</td>
                  <td>Processing</td>
                  <td>$799</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Michael Brown</td>
                  <td>Smartwatch</td>
                  <td>Shipped</td>
                  <td>$199</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
