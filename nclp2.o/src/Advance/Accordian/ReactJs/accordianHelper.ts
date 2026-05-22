export const getMenuById = (
    menus: any[],
    id: number | null | string
): any => {

    for (const menu of menus) {
        if (menu.id === id) {
            return menu;
        }

        // Search inside children
        if (menu.children && menu.children.length > 0) {
            const found = getMenuById(
                menu.children,
                id
            );
            if (found) {
                return found;
            }
        }
    }
    return null;
};