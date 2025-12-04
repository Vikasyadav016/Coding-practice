import React from "react";

const ProfilePreferences = ({ user }: any) => {
  return (
    <div>
      <h3 style={styles.title}>Preferences</h3>

      <div style={styles.grid}>
        <Field label="Theme" value={user.preferences.theme} />
        <Field label="Language" value={user.preferences.language} />
        <Field
          label="Email Notifications"
          value={user.preferences.emailNotifications ? "Enabled" : "Disabled"}
        />
        <Field
          label="SMS Notifications"
          value={user.preferences.smsNotifications ? "Enabled" : "Disabled"}
        />
      </div>
    </div>
  );
};

const Field = ({ label, value }: any) => (
  <div>
    <span style={styles.label}>{label}</span>
    <p style={styles.text}>{value}</p>
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

export default ProfilePreferences;
