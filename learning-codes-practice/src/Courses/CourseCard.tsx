
const CourseCard = ({ title, instructor, rating, category }:any) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ color: i < rating ? "#ffc107" : "#e4e5e9" }}>
      ★
    </span>
  ));

  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Category:</strong> {category}</p>
      <div>{stars}</div>
      <button>Detail</button>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "16px",
    marginBottom: "12px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default CourseCard;
