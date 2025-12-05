import { AddIcon, AddTeacherIcon, AdminPanelIcon, CourseIcon, DashboardIconNew, InstituteIcon, ManageSubjectsIconB, ProfileIcon, SettingsIcon, UpdateIcon, UsersIcon } from "../SvgIcons/SVGIcons";

// STUDENT MENU (ROLE 01)
export const Student_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/dashboard/my-courses", label: "My Courses", icon: CourseIcon },
  { path: "/dashboard/become-instructor", label: "Become Instructor", icon: ProfileIcon },
  { path: "/dashboard/profile", label: "Settings", icon: SettingsIcon },
];

// Institute MENU (ROLE 02)
export const Institute_Working = [
  { path: "/institute-dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/institute-dashboard/add/teacher/tutor", label: "Add Tutor", icon: AddTeacherIcon },
  {
    label: "Manage Courses",
    icon: CourseIcon,
    children: [
      { path: "/institute-dashboard/manage-course/add", label: "Add Course", icon: AddIcon },
      { path: "/institute-dashboard/manage-course/edit", label: "Edit Course", icon: UpdateIcon },
      { path: "/institute-dashboard/manage-course/add-lesson", label: "Add Lesson", icon: AddTeacherIcon },
      { path: "/institute-dashboard/manage-course/content", label: "Manage Course Content", icon: AddTeacherIcon },
    ],
  },
  {
    label: "Manage Subject",
    icon: ManageSubjectsIconB,
    children: [
      { path: "/institute-dashboard/manage-subject/add", label: "Add Subject", icon: AddIcon },
      { path: "/institute-dashboard/manage-subject/update", label: "Update Subject", icon: UpdateIcon },]
  },
  {
    label: "Manage Instructors",
    icon: ProfileIcon,
    children: [
      { path: "/institute-dashboard/manage-tutor/add/teacher-tutor", label: "Add Tutor/Instructor", icon: AddIcon },
      { path: "/institute-dashboard/manage-course/edit", label: "Update ", icon: UpdateIcon },
    ]
  },
  { path: "/institute-dashboard/students", label: "Manage Students", icon: UsersIcon },
  { path: "/institute-dashboard/profile", label: "Settings", icon: SettingsIcon },
];


// TUTOR / TEACHER MENU (ROLE 03)
export const Instructor_Tutor_Working = [
  { path: "/tutor-dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/tutor-dashboard/course-wizard", label: "Courses Wizard", icon: CourseIcon },
  { path: "/tutor-dashboard/courses", label: "My Courses", icon: CourseIcon },
  { path: "/tutor-dashboard/profile", label: "Settings", icon: SettingsIcon },
];

// ADMIN MENU (ROLE 05)
export const Admin_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/dashboard/users", label: "Users", icon: UsersIcon },
  { path: "/dashboard/courses", label: "Courses", icon: CourseIcon },
  { path: "/dashboard/institutes", label: "Institutes", icon: InstituteIcon },
  { path: "/dashboard/profile", label: "Settings", icon: SettingsIcon },
];

// SUPER ADMIN MENU (ROLE 04)
export const Super_Admin_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/dashboard/admin-panel", label: "Admin Panel", icon: AdminPanelIcon },
  { path: "/dashboard/users", label: "Users", icon: UsersIcon },
  { path: "/dashboard/courses", label: "Courses", icon: CourseIcon },
  { path: "/dashboard/institutes", label: "Institutes", icon: InstituteIcon },
  { path: "/dashboard/profile", label: "Settings", icon: SettingsIcon },
];

// DEFAULT MENU (ROLE 06)
export const Default_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/dashboard/profile", label: "Settings", icon: SettingsIcon },
];
