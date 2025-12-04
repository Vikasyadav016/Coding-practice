import React from "react";

const ProfileContact = ({ user }: any) => {
  return (
    <div>
      <h3 style={styles.title}>Contact Information</h3>

      <div style={styles.grid}>
        <Field label="Email" value={user.email} />
        <Field label="Phone" value={user.phone} />
        <Field label="Address" value={user.address} />
        <Field label="City" value={user.city} />
        <Field label="State" value={user.state} />
        <Field label="Country" value={user.country} />
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
  label: { display: "block", color: "#666", fontSize: "13px" },
  text: { fontSize: "15px", marginTop: "5px" },
};

export default ProfileContact;
