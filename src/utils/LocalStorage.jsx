const employees = [
  {
    id: 1,
    name: "Employee One",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Refactor dashboard layout",
        description: "Clean up grid structure and make it modular",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-28",
        category: "UI/UX",
      },
      {
        title: "Fix auth redirect bug",
        description: "Users stuck after successful login",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-27",
        category: "Authentication",
      },
      {
        title: "Animate success modals",
        description: "Use GSAP to smooth transitions on order success",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-26",
        category: "UI/UX",
      },
    ],
  },
  {
    id: 2,
    name: "Employee Two",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Create vendor CRUD module",
        description: "Add create/edit/delete functionality for vendors",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-29",
        category: "Backend",
      },
      {
        title: "Debug broken image imports",
        description: "Resolve path sensitivity issue on Vercel",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-28",
        category: "Deployment",
      },
      {
        title: "Build order detail component",
        description: "Display expanded order info with status tracking",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-27",
        category: "UI Components",
      },
      {
        title: "Add map view to dashboard",
        description: "Embed vendor locations with clickable markers",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-07-29",
        category: "Maps",
      },
    ],
  },
  {
    id: 3,
    name: "Employee Three",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Optimize chart rendering",
        description: "Avoid re-renders during dashboard updates",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-29",
        category: "Performance",
      },
      {
        title: "Setup admin notification service",
        description: "Trigger toast updates on new orders",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-27",
        category: "Feedback",
      },
      {
        title: "Fix dashboard overflow issue",
        description: "Scrollbar breaks on smaller screen sizes",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-28",
        category: "UI/UX",
      },
    ],
  },
  {
    id: 4,
    name: "Employee Four",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Build delivery status component",
        description: "Reflect delivery stage with card animation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-29",
        category: "UI Components",
      },
      {
        title: "Create feedback modal",
        description: "Users should submit issues via modal form",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-26",
        category: "Forms",
      },
      {
        title: "Resolve loading spinner bug",
        description: "Stuck spinner when navigating to vendor panel",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-27",
        category: "Debugging",
      },
    ],
  },
  {
    id: 5,
    name: "Employee Five",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Implement cost splitting logic",
        description: "Divide order value among vendors based on weight",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-07-29",
        category: "Business Logic",
      },
      {
        title: "Create dynamic revenue dashboard",
        description: "Show earnings trends with filterable charts",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-07-27",
        category: "Analytics",
      },
      {
        title: "Fix auth flow on mobile",
        description: "Login redirect doesn’t persist across reloads",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-07-28",
        category: "Authentication",
      },
      {
        title: "Add search to vendor panel",
        description: "Enable fuzzy search for vendor names and tags",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-07-29",
        category: "Feature",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Admin One",
    email: "admin1@example.com",
    password: "123",
  },
  {
    id: 2,
    name: "Admin Two",
    email: "admin2@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};