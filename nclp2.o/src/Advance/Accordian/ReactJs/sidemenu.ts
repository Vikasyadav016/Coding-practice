export const sideMenuForAccordian = [
    {
        id: 1,
        title: "Dashboard",
        icon: "dashboard",
        path: "/dashboard",
        children: []
    },
    {
        id: 2,
        title: "User Management",
        icon: "users",
        path: "/users",
        children: [
            {
                id: 21,
                title: "All Users",
                path: "/users/all"
            },
            {
                id: 22,
                title: "Add User",
                path: "/users/add"
            },
            {
                id: 23,
                title: "User Roles",
                path: "/users/roles"
            }
        ]
    },
    {
        id: 3,
        title: "Forms",
        icon: "form",
        path: "/forms",
        children: [
            {
                id: 31,
                title: "Create Form",
                path: "/forms/create"
            },
            {
                id: 32,
                title: "Submitted Forms",
                path: "/forms/submitted"
            }
        ]
    },
    {
        id: 4,
        title: "Reports",
        icon: "reports",
        path: "/reports",
        children: [
            {
                id: 41,
                title: "Daily Reports",
                path: "/reports/daily"
            },
            {
                id: 42,
                title: "Monthly Reports",
                path: "/reports/monthly"
            }
        ]
    },
    {
        id: 5,
        title: "Settings",
        icon: "settings",
        path: "/settings",
        children: [
            {
                id: 51,
                title: "Profile Settings",
                path: "/settings/profile"
            },
            {
                id: 52,
                title: "Security",
                path: "/settings/security"
            }
        ]
    }
];