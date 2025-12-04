import TeacherCourseList from "./TeacherCourseList";

const MainCourseList = () => {
    const courses = [
        { id: 1, title: "React Basics", description: "Learn React", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" ,status: "Published"},
        { id: 2, title: "Node.js", description: "Backend with Node", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
        { id: 3, title: "Design", description: "UI/UX Basics", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
        { id: 1, title: "React Basics", description: "Learn React", image: "https://source.unsplash.com/random/400x300?tech" },
        { id: 2, title: "Node.js", description: "Backend with Node", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
        { id: 3, title: "Design", description: "UI/UX Basics", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
        { id: 1, title: "React Basics", description: "Learn React", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
        { id: 2, title: "Node.js", description: "Backend with Node", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
        { id: 3, title: "Design", description: "UI/UX Basics", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },

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
