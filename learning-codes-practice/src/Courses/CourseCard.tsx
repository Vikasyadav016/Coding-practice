
// const CourseCard = ({ title, instructor, rating, category }:any) => {
//   const stars = Array.from({ length: 5 }, (_, i) => (
//     <span key={i} style={{ color: i < rating ? "#ffc107" : "#e4e5e9" }}>
//       ★
//     </span>
//   ));

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Course.css"


//   return (
//     <div style={styles.card}>
//       <h3>{title}</h3>
//       <p><strong>Instructor:</strong> {instructor}</p>
//       <p><strong>Category:</strong> {category}</p>
//       <div>{stars}</div>
//       <button>Detail</button>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     background: "#fff",
//     padding: "16px",
//     marginBottom: "12px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
// };

// export default CourseCard;



const CourseCard = (course:any) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state:any) => state.wishlist);
  const navigate = useNavigate();

  return (
    <div
      className="course-card"
      onClick={() => navigate(`/course/${course._id}`)}
    >
      <img src={course.image} className="course-img" />

      {course.bestseller && <span className="badge">Bestseller</span>}

      <div className="wishlist-btn"
        onClick={(e) => {
          e.stopPropagation();
          // dispatch(toggleWishlist(course._id));
        }}
      >
        {wishlist.includes(course._id) ? "❤️" : "🤍"}
      </div>

      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.instructor.name}</p>

        <div className="rating">
          ⭐ {course.rating} <span>({course.students})</span>
        </div>

        <div className="price">
          <strong>${course.discountPrice}</strong>
          <span className="old">${course.price}</span>
        </div>

        <button
          className="add-cart"
          onClick={(e) => {
            e.stopPropagation();
            // dispatch(addToCart(course));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

