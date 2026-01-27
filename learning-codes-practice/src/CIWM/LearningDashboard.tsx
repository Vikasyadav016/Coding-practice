import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import type { CSSProperties } from "react";

const pieData = [
  { name: "JavaScript", value: 60 },
  { name: "React", value: 40 },
];

const COLORS = ["#FACC15", "#38BDF8"];

const progressData = [
  { week: "Week 1", progress: 20 },
  { week: "Week 2", progress: 40 },
  { week: "Week 3", progress: 65 },
  { week: "Week 4", progress: 80 },
];

const tableData = [
  { topic: "Variables & Data Types", status: "Completed", score: "85%" },
  { topic: "Functions", status: "Completed", score: "90%" },
  { topic: "Hooks (useState)", status: "In Progress", score: "—" },
  { topic: "Props & Components", status: "Pending", score: "—" },
];

export const LearningDashboard = () => {
  return (
    <div style={{ padding: "1rem", maxWidth: "1200px", margin: "auto" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        📊 Learning Dashboard
      </h2>

      {/* Charts Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {/* Pie Chart */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Concept Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Learning Progress</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#4F46E5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div style={{ ...cardStyle, marginTop: "1.5rem" }}>
        <h3 style={cardTitle}>Topic Overview</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>Topic</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Score</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td style={tdStyle}>{row.topic}</td>
                  <td style={tdStyle}>{row.status}</td>
                  <td style={tdStyle}>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* 🎨 Styles */
// const cardStyle = {
//   background: "#fff",
//   borderRadius: "12px",
//   padding: "1rem",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
// };

// const cardTitle = {
//   fontSize: "1rem",
//   fontWeight: "600",
//   marginBottom: "0.5rem",
// };

// const thStyle = {
//   textAlign: "left",
//   padding: "0.75rem",
//   borderBottom: "1px solid #e5e7eb",
// };

// const tdStyle = {
//   padding: "0.75rem",
//   borderBottom: "1px solid #f1f5f9",
// };



const thStyle: CSSProperties = {
  textAlign: "left",
  padding: "0.75rem",
  borderBottom: "1px solid #e5e7eb",
};

const tdStyle: CSSProperties = {
  padding: "0.75rem",
  borderBottom: "1px solid #f1f5f9",
};

const cardStyle: CSSProperties = {
  background: "#fff",
  borderRadius: "12px",
  padding: "1rem",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const cardTitle: CSSProperties = {
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
};

