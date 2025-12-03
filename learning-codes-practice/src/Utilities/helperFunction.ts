import { roleDashboardUrl } from "../config/Fixed";
import { menuByRole, roleType } from "../config/Role";
import { Default_Working } from "../SidebarMenu/SidebarMenuAccordingRole";

export const getMenuByRole = (roleId: any) => {
  return menuByRole[roleId] || Default_Working;
};

export const getRoleName = (roleCode: string): string => {
  return roleType[roleCode] || "Unknown Role";
};
export const getDashboardByRole = (role: string) => {
  const path = roleDashboardUrl[role] || "/dashboard";
  return path;
};
