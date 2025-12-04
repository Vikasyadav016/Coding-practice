import React from "react";
import {
  Bar,
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
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

const TutorDashboard: React.FC = () => {
  // ---- CHART DATA ---- //
  const courseProgressData = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Node"],
    datasets: [
      {
        label: "Course Progress (%)",
        data: [80, 65, 90, 70, 55],
        backgroundColor: "#0d6efd",
      },
    ],
  };

  const studentPerformanceData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Avg Performance (%)",
        data: [60, 72, 68, 80],
        borderColor: "#6610f2",
        backgroundColor: "#6610f2",
      },
    ],
  };

  return (
    <div className="p-4" style={{ marginLeft: "25px" }}>
      <div className="row g-4">
        {/* Course Progress */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-3">
            <h5 className="fw-semibold mb-3">Course Progress</h5>
            <Bar data={courseProgressData} />
          </div>
        </div>

        {/* Student Performance */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-3">
            <h5 className="fw-semibold mb-3">Student Performance Trend</h5>
            <Line data={studentPerformanceData} />
          </div>
        </div>
      </div>

      {/* UPCOMING CLASSES + NOTIFICATIONS */}
      <div className="row mt-4 g-4">
        {/* Upcoming Classes */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-3">
            <h5 className="fw-semibold mb-3">Upcoming Classes</h5>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { course: "React Basics", date: "12 Jan 2025", time: "10:00 AM" },
                  { course: "Node API", date: "13 Jan 2025", time: "2:00 PM" },
                  { course: "HTML Mastery", date: "14 Jan 2025", time: "11:00 AM" }
                ].map((c, i) => (
                  <tr key={i}>
                    <td>{c.course}</td>
                    <td>{c.date}</td>
                    <td>{c.time}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">
                        Join
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

        {/* Notifications */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-3">
            <h5 className="fw-semibold mb-3">Notifications</h5>

            <ul className="list-group">
              {[
                "New student enrolled in JavaScript course",
                "Assignment submitted by Rahul",
                "Live class scheduled for tomorrow"
              ].map((note, index) => (
                <li key={index} className="list-group-item">
                  <i className="bi bi-bell me-2 text-primary"></i>
                  {note}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
