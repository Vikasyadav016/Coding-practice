import React from "react";

const ProfileExperience = ({ user }: any) => {
  return (
    <div>
      <h3 style={styles.title}>Experience</h3>

      {user.experience?.map((e: any, i: number) => (
        <div key={i} style={styles.card}>
          <strong style={styles.titleText}>{e.title}</strong>
          <p style={styles.org}>{e.org}</p>
          <small style={styles.year}>{e.years}</small>
        </div>
      ))}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  title: { marginBottom: "15px", fontSize: "20px", fontWeight: 600 },
  card: {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "12px",
    border: "1px solid #eee",
  },
  titleText: { fontSize: "16px" },
  org: { margin: "4px 0", color: "#666" },
  year: { color: "#999" },
};

export default ProfileExperience;
