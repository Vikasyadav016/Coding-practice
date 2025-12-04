
const ProfileBio = ({ user }: any) => {
  return (
    <div>
      <h3 style={styles.title}>About / Bio</h3>
      <p style={styles.text}>{user.bio || "No bio provided."}</p>
    </div>
  );
};

const styles = {
  title: { marginBottom: "15px", fontSize: "20px", fontWeight: 600 },
  text: { fontSize: "15px", lineHeight: "1.6", color: "#444" },
};

export default ProfileBio;
