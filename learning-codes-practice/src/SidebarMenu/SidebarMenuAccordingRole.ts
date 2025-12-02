// STUDENT MENU (ROLE 01)

import {  AddTeacherIcon, AdminPanelIcon, CourseIcon, DashboardIconNew, InstituteIcon, ProfileIcon, SettingsIcon, UsersIcon } from "../SvgIcons/SVGIcons";

export const Student_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew  },
  { path: "/dashboard/my-courses", label: "My Courses", icon: CourseIcon },
  { path: "/dashboard/become-instructor", label: "Become Instructor", icon: ProfileIcon },
  { path: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];

// INSTITUTE MENU (ROLE 02)
export const Institute_Working = [
  { path: "/institute-dashboard", label: "Dashboard", icon: DashboardIconNew },
  {path: "/institute-dashboard/add/teacher/tutor", label: "Add Tutor",icon: AddTeacherIcon},
  { path: "/dashboard/courses", label: "Manage Courses", icon: CourseIcon },
  { path: "/dashboard/instructors", label: "Manage Instructors", icon: ProfileIcon },
  { path: "/dashboard/students", label: "Manage Students", icon: UsersIcon },
  { path: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];

// TUTOR / TEACHER MENU (ROLE 03)
export const Instructor_Tutor_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/dashboard/my-courses", label: "My Courses", icon: CourseIcon },
  { path: "/dashboard/create-course", label: "Create Course", icon: CourseIcon },
  { path: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];

// ADMIN MENU (ROLE 05)
export const Admin_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/dashboard/users", label: "Users", icon: UsersIcon },
  { path: "/dashboard/courses", label: "Courses", icon: CourseIcon },
  { path: "/dashboard/institutes", label: "Institutes", icon: InstituteIcon },
  { path: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];

// SUPER ADMIN MENU (ROLE 04)
export const Super_Admin_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/dashboard/admin-panel", label: "Admin Panel", icon: AdminPanelIcon },
  { path: "/dashboard/users", label: "Users", icon: UsersIcon },
  { path: "/dashboard/courses", label: "Courses", icon: CourseIcon },
  { path: "/dashboard/institutes", label: "Institutes", icon: InstituteIcon },
  { path: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];

// DEFAULT MENU (ROLE 06)
export const Default_Working = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIconNew },
  { path: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];
