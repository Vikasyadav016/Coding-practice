let courses = [
  {
    id: "1",
    title: "React Masterclass",
    description: "Learn React from scratch",
    students: 180,
    status: "Published",
  },
  {
    id: "2",
    title: "Node.js Bootcamp",
    description: "Backend mastery",
    students: 120,
    status: "Draft",
  },
];

export const getAllCourses = () => courses;

export const getCourseById = (id: string) =>
  courses.find((c) => c.id === id);

export const addNewCourse = (course: any) => {
  courses.push({
    id: crypto.randomUUID(),
    students: 0,
    status: "Draft",
    ...course,
  });
};

export const updateCourse = (id: string, updated: any) => {
  courses = courses.map((c) => (c.id === id ? { ...c, ...updated } : c));
};
