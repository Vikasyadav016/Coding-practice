import { menuByRole } from "../config/Role";
import { Default_Working } from "../SidebarMenu/SidebarMenuAccordingRole";

export const getMenuByRole = (roleId:any) => {
  return menuByRole[roleId] || Default_Working;
};
