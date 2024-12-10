import React from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./component/Auth/PrivateRoutes";
import CheckLoginStatus from "./component/Auth/CheckLoginStatus";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CheckLoginStatus Element={<Login/>} />,
    },
    {
      path:"/EmployeeDashboard",
      element:(<PrivateRoutes Element={<EmployeeDashboard />} role={["user"]}/>)
    },
    {
      path:"/AdminDashboard",
      element:(<PrivateRoutes Element={<AdminDashboard />} role={["Admin"]}/>)
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
