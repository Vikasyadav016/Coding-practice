import React from "react";

const ProfileHeader = ({ user }: any) => {
  return (
    <div style={styles.header}>
      <img src={user.banner} style={styles.banner} />

      <div style={styles.avatarContainer}>
        <img src={user.avatar} style={styles.avatar} />
      </div>

      <h2 style={styles.name}>{user.name}</h2>
      <p style={styles.role}>{user.role}</p>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "relative",
    textAlign: "center",
    marginBottom: "60px",
  },
  banner: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
  },
  avatarContainer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "-45px",
  },
  avatar: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    border: "5px solid white",
    boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
  },
  name: {
    marginTop: "60px",
    fontSize: "24px",
    fontWeight: 700,
  },
  role: {
    color: "#666",
    marginTop: "-5px",
  },
};

export default ProfileHeader;
