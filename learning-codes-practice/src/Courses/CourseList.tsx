import { useState } from "react";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const initialCourses = [
    { id: 1, title: "React for Beginners", instructor: "John Doe", rating: 4, category: "Web Development" },
    { id: 2, title: "Advanced JavaScript", instructor: "Jane Smith", rating: 5, category: "Programming" },
    { id: 3, title: "UI/UX Fundamentals", instructor: "Alex Johnson", rating: 3, category: "Design" },
    { id: 4, title: "Node.js API Masterclass", instructor: "Mike Collins", rating: 5, category: "Backend" },
    { id: 5, title: "Graphic Design Basics", instructor: "Sara Cook", rating: 4, category: "Design" },
  ];

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [category, setCategory] = useState("All");

  const filtered = initialCourses
    .filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())
    )
    .filter((course) =>
      category === "All" ? true : course.category === category
    )
    .sort((a, b) =>
      sortOrder === "desc" ? b.rating - a.rating : a.rating - b.rating
    );

  return (
    <div style={styles.container}>
      <h2>Course Catalog</h2>

      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <div style={styles.controls}>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} style={styles.select}>
          <option value="desc">Rating: High → Low</option>
          <option value="asc">Rating: Low → High</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.select}>
          <option>All</option>
          <option>Web Development</option>
          <option>Programming</option>
          <option>Design</option>
          <option>Backend</option>
        </select>
      </div>

      {filtered.length > 0 ? (
        filtered.map((course) => <CourseCard key={course.id} {...course} />)
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "650px",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  controls: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  select: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default CourseList;
