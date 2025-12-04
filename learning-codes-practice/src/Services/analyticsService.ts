export const getTutorStats = () => ({
  students: 280,
  earnings: 54000,
  courses: 12,
  rating: 4.6,
});

export const getHeatmapData = () =>
  Array.from({ length: 180 }).map(() => Math.floor(Math.random() * 10));

export const getMonthlyEnrollments = () => [
  { month: "Jan", value: 22 },
  { month: "Feb", value: 30 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 40 },
  { month: "May", value: 65 },
  { month: "Jun", value: 54 },
];

export const getWeeklyEngagement = () => [
  { day: "Mon", minutes: 120 },
  { day: "Tue", minutes: 150 },
  { day: "Wed", minutes: 180 },
  { day: "Thu", minutes: 90 },
  { day: "Fri", minutes: 200 },
  { day: "Sat", minutes: 210 },
  { day: "Sun", minutes: 175 },
];

export const getCoursePopularity = () => [
  { name: "React", value: 40 },
  { name: "Node", value: 25 },
  { name: "Python", value: 20 },
  { name: "UI/UX", value: 15 },
];
