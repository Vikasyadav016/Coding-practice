import { Admin_Working, Default_Working, Institute_Working, Instructor_Tutor_Working, Student_Working, Super_Admin_Working } from "../SidebarMenu/SidebarMenuAccordingRole";

export const roleType: any = {
    "01": "Student",
    "02":"Institute",
    "03":"Tutor_Teacher",
    "04":"Super_Admin",
    "05":"Admin",
    "06":"Default"
}

export const userType = [
    'STUDENT',
    'INSTITUTE',
    'TUTOR-TEACHER',
    'SUPER-ADMIN',
    'ADMIN',
    'DEFAULT'
] 

export const menuByRole :any= {
  "01": Student_Working,
  "02": Institute_Working,
  "03": Instructor_Tutor_Working,
  "04": Super_Admin_Working,
  "05": Admin_Working,
  "06": Default_Working,
};
