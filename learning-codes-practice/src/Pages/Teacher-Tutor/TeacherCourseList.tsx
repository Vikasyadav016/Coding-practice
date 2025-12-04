import { useEffect, useState } from "react";
import "./TeacherCourseList.css";
import Tabs from "../TabFilter/Tabs";
import SearchBar from "../TabFilter/SearchBar";
import SortDropdown from "../TabFilter/SortDropdown";
import SkeletonCourseCard from "../TabFilter/SkeletonCourseCard";

const TeacherCourseList = ({ fetchCoursesAPI, onView, onEdit, onDelete, onAdd }: any) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    const [activeTab, setActiveTab] = useState("All");
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("Newest");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        setLoading(true);
        const data = await fetchCoursesAPI(); 
        setCourses(data);
        setLoading(false);
    };

    const tabs = [
        { label: "All", icon: "📚" },
        { label: "Published", icon: "✅" },
        { label: "Draft", icon: "✏️" },
        { label: "Archived", icon: "🗂️" },
    ];

    const filtered = courses.filter((c: any) => {
        const matchesTab = activeTab === "All" || c.status === activeTab;
        const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const sorted = [...filtered].sort((a: any, b: any) => {
        if (sortBy === "A-Z") return a.title.localeCompare(b.title);
        if (sortBy === "Z-A") return b.title.localeCompare(a.title);

        if (sortBy === "Newest")
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

        if (sortBy === "Oldest")
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();

        return 0;
    });


    const paginated = sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(sorted.length / itemsPerPage);

    return (
        <div className="course-container">
            <div className="course-header">
                <h2 className="course-title">My Listed Courses</h2>

                <button className="add-btn" onClick={onAdd}>
                     Add New Course
                </button>
            </div>

            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="top-filters">
                <SearchBar search={search} setSearch={setSearch} />
                <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
            </div>

            {loading ? (
                <div className="course-grid">
                    {Array(6).fill(0).map((_, i) => <SkeletonCourseCard key={i} />)}
                </div>
            ) : paginated.length === 0 ? (
                <p className="empty-state">No courses found.</p>
            ) : (
                <div className="course-grid">
                    {paginated.map((course: any) => (
                        <div className="course-card" key={course.id}>
                            <img src={course.image} alt={course.title} className="course-image" />

                            <div className="course-content">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>

                                <div className="btn-group">
                                    <button className="details-btn" onClick={() => onView(course.id)}>View</button>
                                    <button className="edit-btn" onClick={() => onEdit(course.id)}>Edit</button>
                                    <button className="delete-btn" onClick={() => onDelete(course.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="pagination">
                {[...Array(totalPages).keys()].map((n) => (
                    <button
                        key={n}
                        className={`page-btn ${currentPage === n + 1 ? "active" : ""}`}
                        onClick={() => setCurrentPage(n + 1)}
                    >
                        {n + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TeacherCourseList;

