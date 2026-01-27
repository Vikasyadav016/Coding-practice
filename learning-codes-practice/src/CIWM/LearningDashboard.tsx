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
    <div style={container}>
      <h2 style={heading}>📊 Learning Dashboard</h2>

      {/* Charts */}
      <div style={grid}>
        <div style={cardStyle}>
          <h3 style={cardTitle}>Concept Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitle}>Learning Progress</h3>
          <ResponsiveContainer width="100%" height={260}>
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
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div style={{ ...cardStyle, marginTop: "2rem" }}>
        <h3 style={cardTitle}>Topic Overview</h3>

        <div style={{ overflowX: "auto" }}>
          <table style={table}>
            <thead>
              <tr>
                 <th style={{ ...thStyle, width: "10%" ,textAlign: "center"}}>Sl.No</th>
                <th style={{ ...thStyle, width: "35%" ,textAlign: "center"}}>Topic</th>
                <th style={{ ...thStyle, width: "20%" ,textAlign: "center"}}>Status</th>
                <th style={{ ...thStyle, width: "15%", textAlign: "center" }}>
                  Score
                </th>
                <th style={{ ...thStyle, width: "20%", textAlign: "center" }}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} style={rowStyle}>
                  <td style={tdStyle}>{`0${idx+1}`}</td>
                  <td style={tdStyle}>{row.topic}</td>
                  <td style={tdStyle}>
                    <span style={statusBadge(row.status)}>
                      {row.status}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    {row.score}
                  </td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    <button style={actionBtn}>View</button>
                    <button style={secondaryBtn}>Resume</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const container: CSSProperties = {
  padding: "1.5rem",
  maxWidth: "1200px",
  margin: "auto",
};

const heading: CSSProperties = {
  fontSize: "1.75rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "1.5rem",
};

const cardStyle: CSSProperties = {
  background: "#ffffff",
  borderRadius: "14px",
  padding: "1.25rem",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const cardTitle: CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 600,
  marginBottom: "1rem",
};

const table: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "650px",
};

const thStyle: CSSProperties = {
  textAlign: "left",
  padding: "0.9rem",
  fontWeight: 600,
  borderBottom: "2px solid #e5e7eb",
  background: "#f9fafb",
};

const tdStyle: CSSProperties = {
  padding: "0.9rem",
  borderBottom: "1px solid #f1f5f9",
  verticalAlign: "middle",
};

const rowStyle: CSSProperties = {
  transition: "background 0.2s",
};

const actionBtn: CSSProperties = {
  padding: "0.4rem 0.7rem",
  borderRadius: "6px",
  border: "none",
  background: "#4F46E5",
  color: "#fff",
  cursor: "pointer",
  marginRight: "0.4rem",
};

const secondaryBtn: CSSProperties = {
  padding: "0.4rem 0.7rem",
  borderRadius: "6px",
  border: "1px solid #c7d2fe",
  background: "#EEF2FF",
  color: "#3730a3",
  cursor: "pointer",
};

const statusBadge = (status: string): CSSProperties => {
  const base: CSSProperties = {
    padding: "0.3rem 0.6rem",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: 600,
    display: "inline-block",
  };

  switch (status) {
    case "Completed":
      return { ...base, background: "#DCFCE7", color: "#166534" };
    case "In Progress":
      return { ...base, background: "#FEF3C7", color: "#92400E" };
    default:
      return { ...base, background: "#E5E7EB", color: "#374151" };
  }
};
