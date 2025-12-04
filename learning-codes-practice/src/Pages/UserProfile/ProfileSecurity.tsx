import React from "react";

const ProfileSecurity = ({ user }: any) => {
  return (
    <div>
      <h3 style={styles.title}>Security Settings</h3>

      <div style={styles.box}>
        <strong>Two Factor Authentication:</strong>
        <p>{user.security.twoFactorEnabled ? "Enabled 🔒" : "Disabled"}</p>
      </div>

      <div style={styles.box}>
        <strong>Last Password Change:</strong>
        <p>{user.security.lastPasswordChange}</p>
      </div>
    </div>
  );
};

const styles = {
  title: { marginBottom: "20px", fontSize: "20px", fontWeight: 600 },
  box: {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    border: "1px solid #eee",
  },
};

export default ProfileSecurity;
