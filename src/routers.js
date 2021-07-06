import AdminHomePage from "./containers/AdminHomePage";
import TaskBoard from "./containers/TaskBoard";
import LoginPage from "./containers/loginPage";
export const routersAdmin = [
  {
    path: "/admin",
    name: "Trang quan ly Admin",
    exact: true,
    main: <AdminHomePage />,
  },
  {
    path: "/admin/task-board",
    name: "Trang quan ly cong viec",
    exact: true,
    main: <TaskBoard />,
  },
];

export const routersDefault = [
  {
    path: "/login",
    name: "Trang Login",
    exact: true,
    main: <LoginPage />,
  },
];
