import React from "react";

const ProfilePersonal = ({ user }: any) => {
  return (
    <div>
      <h3 style={styles.title}>Personal Information</h3>

      <div style={styles.grid}>
        <Field label="Full Name" value={user.name} />
        <Field label="Gender" value={user.gender} />
        <Field label="Date of Birth" value={user.dob} />
      </div>
    </div>
  );
};

const Field = ({ label, value }: any) => (
  <div style={styles.field}>
    <span style={styles.label}>{label}</span>
    <p style={styles.text}>{value || "-"}</p>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  title: { marginBottom: "20px", fontSize: "20px", fontWeight: 600 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  field: {},
  label: { display: "block", color: "#666", fontSize: "13px" },
  text: { fontSize: "15px", marginTop: "5px" },
};

export default ProfilePersonal;
