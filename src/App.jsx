import React from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./component/Auth/ProtectedRoutes";
import Home from "./component/others/Home";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    // {
    //   path: "/",
    //   element: <Login/>,
    // },
    {
      path:"/EmployeeDashboard",
      element:(<ProtectedRoutes Element={<EmployeeDashboard />} role={["user"]}/>)
    },
    {
      path:"/AdminDashboard",
      element:(<ProtectedRoutes Element={<AdminDashboard />} role={["admin"]}/>)
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
