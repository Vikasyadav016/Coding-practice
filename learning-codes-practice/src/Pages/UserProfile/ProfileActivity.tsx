import React from "react";

const ProfileActivity = ({ user }: any) => {
  const activity = user.activity;

  return (
    <div>
      <h3 style={styles.title}>Activity Summary</h3>

      <div style={styles.grid}>
        <Box label="Courses" value={activity.courses} />
        <Box label="Students" value={activity.students} />
        <Box label="Reviews" value={activity.reviews} />
      </div>
    </div>
  );
};

const Box = ({ label, value }: any) => (
  <div style={styles.box}>
    <span style={styles.label}>{label}</span>
    <strong style={styles.value}>{value}</strong>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  title: { marginBottom: "20px", fontSize: "20px", fontWeight: 600 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  box: {
    padding: "20px",
    borderRadius: "10px",
    background: "#f8f9fa",
    border: "1px solid #eee",
    textAlign: "center",
  },
  label: { display: "block", color: "#555", marginBottom: "5px" },
  value: { fontSize: "22px", fontWeight: 700 },
};

export default ProfileActivity;
