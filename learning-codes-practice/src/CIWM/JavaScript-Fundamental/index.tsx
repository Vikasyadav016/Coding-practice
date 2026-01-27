import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom"; // For dynamic routing
import type { CSSProperties } from "react";
import jsContent from './JsFundamentalTopic.json'
import reactContent from "../ReactJs-Fundamental/reactJsFundamentalTopic.json"

export const FundamentalJSContent = () => {
  const isFundamentReactJs = location.pathname.includes('fundamental-react-js')
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [filter, setFilter] = useState<"All" | "Completed" | "In Progress" | "Pending">("All");
  const [sortAsc, setSortAsc] = useState(true);
  const topics = isFundamentReactJs ? reactContent?.reactJsFundamentalContent : jsContent?.jsFundamentalContent
  // const topics = [
  //   {
  //     name: "Variables & Data Types",
  //     status: "Completed",
  //     progress: 100,
  //     details: "Learn about let, const, var and primitive types.",
  //     route: "/courses/variables",
  //   },
  //   {
  //     name: "Functions",
  //     status: "Completed",
  //     progress: 100,
  //     details: "Understand how functions work, arguments, return values.",
  //     route: "/courses/functions",
  //   },
  //   {
  //     name: "Hooks (useState)",
  //     status: "In Progress",
  //     progress: 50,
  //     details: "React hooks for managing state inside functional components.",
  //     route: "/courses/hooks",
  //   },
  //   {
  //     name: "Props & Components",
  //     status: "Pending",
  //     progress: 0,
  //     details: "Learn how to pass data via props and create reusable components.",
  //     route: "/courses/props",
  //   },
  // ];

  // Apply filter
  const filteredTopics = filter === "All" ? topics : topics.filter(t => t.status === filter);

  // Apply sorting by progress
  const sortedTopics = [...filteredTopics].sort((a, b) =>
    sortAsc ? a.progress - b.progress : b.progress - a.progress
  );

  const chartData = [
    { name: "Completed", value: topics.filter(t => t.status === "Completed").length },
    { name: "In Progress", value: topics.filter(t => t.status === "In Progress").length },
    { name: "Pending", value: topics.filter(t => t.status === "Pending").length },
  ];

  const COLORS = ["#16A34A", "#FACC15", "#EF4444"];

  return (
    <div style={container}>
      <h2 style={heading}>📊 {`Fundamental of ${isFundamentReactJs ? 'React Js' : 'Javascript'}`}</h2>

      {/* Pie Chart */}
      <div style={chartContainer}>
        <h3 style={chartTitle}>Course Progress Overview</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {chartData.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Filters & Sorting */}
      <div style={filterContainer}>
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value as any)} style={selectStyle}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
        </label>
        <button style={sortBtn} onClick={() => setSortAsc(!sortAsc)}>
          Sort by Progress {sortAsc ? "↑" : "↓"}
        </button>
      </div>

      {/* Course Table */}
      <div style={cardStyle}>
        <h3 style={cardTitle}>Course Content</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={table}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: "10%", textAlign: "center" }}>Sl.No</th>
                <th style={{ ...thStyle, width: "25%", textAlign: "center" }}>Topic</th>
                <th style={{ ...thStyle, width: "25%", textAlign: "center" }}>Status</th>
                <th style={{ ...thStyle, width: "15%", textAlign: "center" }}>Progress</th>
                <th style={{ ...thStyle, width: "35%", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedTopics.map((t, i) => (
                <tr key={i} style={rowStyle}>
                  <td style={tdStyle}>{i + 1}</td>
                  <td style={tdStyle}>{t.name}</td>
                  <td style={tdStyle}>
                    <span style={statusBadge(t.status)}>{t.status}</span>
                  </td>
                  <td style={tdStyle}>
                    <div style={progressBarBackground}>
                      <div style={{ ...progressBarFill, width: `${t.progress}%` }} />
                    </div>
                    <span style={{ fontSize: "0.75rem" }}>{t.progress}%</span>
                  </td>
                  <td style={tdStyle}>
                    <button
                      style={actionBtn}
                      onClick={() => navigate(t.route)}
                    >
                      Go
                    </button>
                    <button
                      style={secondaryBtn}
                      onClick={() => {
                        setSelectedTopic(t.details);
                        setModalOpen(true);
                      }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedTopic && (
        <div style={overlay} onClick={() => setModalOpen(false)}>
          <div
            style={modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={modalTitle}>📖 Topic Details</h3>
            <p>{selectedTopic}</p>
            <button
              style={primaryBtn}
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const container: CSSProperties = {
  padding: "1.5rem",
  maxWidth: "1000px",
  margin: "auto",
  fontFamily: "sans-serif",
};

const heading: CSSProperties = {
  fontSize: "1.75rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
  alignItems: 'left'
};

const chartContainer: CSSProperties = {
  marginBottom: "2rem",
  background: "#fff",
  borderRadius: "12px",
  padding: "1rem",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
};

const chartTitle: CSSProperties = {
  marginBottom: "0.5rem",
  fontWeight: 600,
};

const filterContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  flexWrap: "wrap",
  gap: "0.5rem",
};

const selectStyle: CSSProperties = {
  marginLeft: "0.5rem",
  padding: "0.3rem 0.5rem",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
};

const sortBtn: CSSProperties = {
  padding: "0.4rem 0.8rem",
  borderRadius: "6px",
  border: "1px solid #4F46E5",
  background: "#EEF2FF",
  color: "#4F46E5",
  cursor: "pointer",
};

const cardStyle: CSSProperties = {
  background: "#fff",
  borderRadius: "12px",
  padding: "1rem",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
};

const cardTitle: CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 600,
  marginBottom: "0.75rem",
};

const table: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "650px",
};

const thStyle: CSSProperties = {
  textAlign: "left",
  padding: "0.75rem",
  fontWeight: 600,
  borderBottom: "2px solid #e5e7eb",
};

const tdStyle: CSSProperties = {
  padding: "0.75rem",
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

/* Progress Bar */
const progressBarBackground: CSSProperties = {
  width: "100%",
  height: "8px",
  background: "#f3f4f6",
  borderRadius: "4px",
  marginBottom: "0.25rem",
};

const progressBarFill: CSSProperties = {
  height: "8px",
  borderRadius: "4px",
  background: "#4F46E5",
  transition: "width 0.5s ease-in-out",
};

/* ---------- Modal ---------- */
const overlay: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  padding: "1rem",
};

const modal: CSSProperties = {
  background: "#fff",
  borderRadius: "12px",
  maxWidth: "480px",
  width: "100%",
  padding: "1.5rem",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
};

const modalTitle: CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: 700,
  marginBottom: "0.75rem",
};

const primaryBtn: CSSProperties = {
  marginTop: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  border: "none",
  background: "#4F46E5",
  color: "#fff",
  cursor: "pointer",
};

