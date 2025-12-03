// import React from "react";
// import {
//   Card,
//   Row,
//   Col,
//   Table,
//   Badge,
//   Dropdown,
// } from "react-bootstrap";
// import { Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const InstituteDashboard: React.FC = () => {

//   const enrollmentData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Student Enrollments",
//         data: [120, 150, 180, 220, 260, 300],
//         backgroundColor: "rgba(54, 162, 235, 0.6)",
//         borderRadius: 6,
//       },
//     ],
//   };

//   const categoryData = {
//     labels: ["Technology", "Design", "Business", "Language"],
//     datasets: [
//       {
//         data: [45, 25, 20, 10],
//         backgroundColor: ["#007bff", "#ffc107", "#28a745", "#dc3545"],
//       },
//     ],
//   };

//   return (
//     <div className="p-1" >
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="fw-bold">Institute Dashboard</h2>

//         <Dropdown align="end">
//           <Dropdown.Toggle variant="light" className="shadow-sm">
//             🔔 Notifications
//           </Dropdown.Toggle>
//           <Dropdown.Menu style={{ width: 300 }}>
//             <Dropdown.Item>
//               New enrollment: <strong>Aryan Singh</strong>
//             </Dropdown.Item>
//             <Dropdown.Item>
//               Payment received: <strong>₹2500</strong>
//             </Dropdown.Item>
//             <Dropdown.Item>
//               New instructor request: <strong>Rahul Kumar</strong>
//             </Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item className="text-center text-primary">
//               View All
//             </Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>

//       <Row className="mb-4">
//         <Col md={3} sm={6} xs={12} className="mb-3">
//           <Card className="shadow-sm quick-btn p-3 text-center">
//             <h5>➕ Add Course</h5>
//           </Card>
//         </Col>
//         <Col md={3} sm={6} xs={12} className="mb-3">
//           <Card className="shadow-sm quick-btn p-3 text-center">
//             <h5>👨‍🏫 Add Instructor</h5>
//           </Card>
//         </Col>
//         <Col md={3} sm={6} xs={12} className="mb-3">
//           <Card className="shadow-sm quick-btn p-3 text-center">
//             <h5>🎓 Manage Students</h5>
//           </Card>
//         </Col>
//         <Col md={3} sm={6} xs={12} className="mb-3">
//           <Card className="shadow-sm quick-btn p-3 text-center">
//             <h5>📊 Reports</h5>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col md={7} className="mb-3">
//           <Card className="shadow-sm p-3">
//             <h5 className="fw-bold">Student Enrollment (Last 6 Months)</h5>
//             <Bar data={enrollmentData} height={200} />
//           </Card>
//         </Col>

//         <Col md={5} className="mb-3">
//           <Card className="shadow-sm p-3">
//             <h5 className="fw-bold">Course Category Distribution</h5>
//             <Pie data={categoryData} height={200} />
//           </Card>
//         </Col>
//       </Row>

//       <Card className="shadow-sm p-3 mb-4">
//         <h5 className="fw-bold mb-3">Instructor Performance</h5>

//         <Table responsive hover>
//           <thead>
//             <tr>
//               <th>Instructor</th>
//               <th>Course</th>
//               <th>Rating</th>
//               <th>Students</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td>Rahul Sharma</td>
//               <td>React Bootcamp</td>
//               <td>4.8 ⭐</td>
//               <td>120</td>
//               <td>
//                 <Badge bg="success">Active</Badge>
//               </td>
//             </tr>

//             <tr>
//               <td>Neha Verma</td>
//               <td>Data Science</td>
//               <td>4.6 ⭐</td>
//               <td>90</td>
//               <td>
//                 <Badge bg="primary">Upcoming</Badge>
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//       </Card>

//       <Row>
//         <Col md={6}>
//           <Card className="shadow-sm p-3">
//             <h5 className="fw-bold">📅 Upcoming Schedule</h5>
//             <ul className="list-group mt-3">
//               <li className="list-group-item">
//                 Live Class — <strong>React Basics</strong>
//                 <span className="float-end text-muted">Tomorrow 10AM</span>
//               </li>
//               <li className="list-group-item">
//                 Assignment Review — <strong>DSA</strong>
//                 <span className="float-end text-muted">Fri 3PM</span>
//               </li>
//             </ul>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card className="shadow-sm p-3">
//             <h5 className="fw-bold">🗓 Mini Calendar</h5>
//             <div className="calendar-placeholder p-5 text-center text-muted">
//               Calendar Integration Coming Soon…
//             </div>
//           </Card>
//         </Col>
//       </Row>

//       <style>{`
//         .quick-btn:hover {
//           background: #f8f9fa;
//           transform: scale(1.02);
//           cursor: pointer;
//           transition: 0.2s;
//         }

//         .calendar-placeholder {
//           background: #fafafa;
//           border: 1px dashed #ccc;
//           border-radius: 8px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InstituteDashboard;

import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Table,
  Badge,
  Button,
  Modal,
  Form,
//   Dropdown,
} from "react-bootstrap";
import { Bar, Pie } from "react-chartjs-2";
import { ToastContainer, toast } from "react-toastify";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Course {
  name: string;
  category: string;
  instructor: string;
  students: number;
  status: "Active" | "Upcoming" | "Closed";
}

interface InstructorRequest {
  name: string;
  course: string;
  status: "Pending" | "Approved" | "Rejected";
}

const NextDashboard: React.FC = () => {
  // ---------------- STATE ----------------
  const [courses, setCourses] = useState<Course[]>([
    { name: "React Bootcamp", category: "Technology", instructor: "Rahul", students: 50, status: "Active" },
    { name: "Data Science Masterclass", category: "Data", instructor: "Neha", students: 30, status: "Upcoming" },
  ]);

  const [instructorRequests, setInstructorRequests] = useState<InstructorRequest[]>([
    { name: "Anita Kumar", course: "React Bootcamp", status: "Pending" },
    { name: "Rakesh Jain", course: "Data Science Masterclass", status: "Pending" },
  ]);

  const [showCourseModal, setShowCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState<Course>({
    name: "",
    category: "",
    instructor: "",
    students: 0,
    status: "Active",
  });

  const [darkMode, setDarkMode] = useState(false);

  // ---------------- CHART DATA ----------------
  const enrollmentData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{ label: "Student Enrollments", data: [50, 80, 120, 160, 200, 240], backgroundColor: "rgba(54, 162, 235, 0.6)", borderRadius: 6 }],
  };

  const categoryData = {
    labels: ["Technology", "Data Science", "Business", "Language"],
    datasets: [{ data: [50, 30, 10, 10], backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"] }],
  };

  // ---------------- FUNCTIONS ----------------
  const addCourse = () => {
    if (!newCourse.name || !newCourse.category || !newCourse.instructor) {
      toast.error("All fields are required!");
      return;
    }
    setCourses([...courses, newCourse]);
    setShowCourseModal(false);
    setNewCourse({ name: "", category: "", instructor: "", students: 0, status: "Active" });
    toast.success("Course added successfully!");
  };

  const approveInstructor = (index: number) => {
    const updated = [...instructorRequests];
    updated[index].status = "Approved";
    setInstructorRequests(updated);
    toast.success(`${updated[index].name} approved!`);
  };

  const rejectInstructor = (index: number) => {
    const updated = [...instructorRequests];
    updated[index].status = "Rejected";
    setInstructorRequests(updated);
    toast.warn(`${updated[index].name} rejected!`);
  };

  // ---------------- RENDER ----------------
  return (
    <div className={darkMode ? "bg-dark text-light p-4" : "p-4"} style={{ marginLeft: "25px", paddingTop: "50px", minHeight: "100vh" }}>
      <ToastContainer position="top-right" autoClose={3000} />

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Institute Dashboard</h2>
        <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </Button>
      </div>

      {/* QUICK ACTIONS */}
      <Row className="mb-4">
        <Col md={3} sm={6} xs={12}><Button className="w-100" onClick={() => setShowCourseModal(true)}>➕ Add Course</Button></Col>
        <Col md={3} sm={6} xs={12}><Button className="w-100" onClick={() => toast.info("Instructor Request Panel")}>👨‍🏫 Add Instructor</Button></Col>
        <Col md={3} sm={6} xs={12}><Button className="w-100">🎓 Manage Students</Button></Col>
        <Col md={3} sm={6} xs={12}><Button className="w-100">📊 Reports</Button></Col>
      </Row>

      {/* CHARTS */}
      <Row className="mb-4">
        <Col md={7} className="mb-3"><Card className="p-3 shadow-sm"><h5>Student Enrollments</h5><Bar data={enrollmentData} /></Card></Col>
        <Col md={5} className="mb-3"><Card className="p-3 shadow-sm"><h5>Course Distribution</h5><Pie data={categoryData} /></Card></Col>
      </Row>

      {/* COURSE MANAGEMENT TABLE */}
      <Card className="shadow-sm p-3 mb-4">
        <h5>Course Management</h5>
        <Table responsive hover className={darkMode ? "text-light" : ""}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Instructor</th>
              <th>Students</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, i) => (
              <tr key={i}>
                <td>{course.name}</td>
                <td>{course.category}</td>
                <td>{course.instructor}</td>
                <td>{course.students}</td>
                <td><Badge bg={course.status === "Active" ? "success" : course.status === "Upcoming" ? "primary" : "danger"}>{course.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* INSTRUCTOR APPROVAL */}
      <Card className="shadow-sm p-3 mb-4">
        <h5>Instructor Approval</h5>
        <Table responsive hover className={darkMode ? "text-light" : ""}>
          <thead>
            <tr><th>Name</th><th>Course</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {instructorRequests.map((inst, i) => (
              <tr key={i}>
                <td>{inst.name}</td>
                <td>{inst.course}</td>
                <td><Badge bg={inst.status === "Pending" ? "warning" : inst.status === "Approved" ? "success" : "danger"}>{inst.status}</Badge></td>
                <td>
                  {inst.status === "Pending" && <>
                    <Button size="sm" variant="success" className="me-2" onClick={() => approveInstructor(i)}>Approve</Button>
                    <Button size="sm" variant="danger" onClick={() => rejectInstructor(i)}>Reject</Button>
                  </>}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* ADD COURSE MODAL */}
      <Modal show={showCourseModal} onHide={() => setShowCourseModal(false)}>
        <Modal.Header closeButton><Modal.Title>Add New Course</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Control type="text" value={newCourse.name} onChange={e => setNewCourse({...newCourse, name: e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" value={newCourse.category} onChange={e => setNewCourse({...newCourse, category: e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Instructor</Form.Label>
              <Form.Control type="text" value={newCourse.instructor} onChange={e => setNewCourse({...newCourse, instructor: e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select value={newCourse.status} onChange={e => setNewCourse({...newCourse, status: e.target.value as any})}>
                <option>Active</option>
                <option>Upcoming</option>
                <option>Closed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCourseModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={addCourse}>Add Course</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NextDashboard;

