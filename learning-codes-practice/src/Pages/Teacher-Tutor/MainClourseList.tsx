import TeacherCourseList from "./TeacherCourseList";

const MainCourseList = () => {
    const courses = [
        { id: 1, title: "React Basics", description: "Learn React", image: "https://source.unsplash.com/random/400x300?tech" },
        { id: 2, title: "Node.js", description: "Backend with Node", image: "https://source.unsplash.com/random/400x300?node" },
        { id: 3, title: "Design", description: "UI/UX Basics", image: "https://source.unsplash.com/random/400x300?design" },
        { id: 1, title: "React Basics", description: "Learn React", image: "https://source.unsplash.com/random/400x300?tech" },
        { id: 2, title: "Node.js", description: "Backend with Node", image: "https://source.unsplash.com/random/400x300?node" },
        { id: 3, title: "Design", description: "UI/UX Basics", image: "https://source.unsplash.com/random/400x300?design" },
        { id: 1, title: "React Basics", description: "Learn React", image: "https://source.unsplash.com/random/400x300?tech" },
        { id: 2, title: "Node.js", description: "Backend with Node", image: "https://source.unsplash.com/random/400x300?node" },
        { id: 3, title: "Design", description: "UI/UX Basics", image: "https://source.unsplash.com/random/400x300?design" },

        // ...add more
    ];

    return (
        <TeacherCourseList
            courses={courses}
            onViewDetails={(id: any) => console.log("Viewing", id)}
            onEdit={(id: any) => console.log("Editing", id)}
            onDelete={(id: any) => console.log("Deleting", id)}
        />
    );
};

export default MainCourseList;
