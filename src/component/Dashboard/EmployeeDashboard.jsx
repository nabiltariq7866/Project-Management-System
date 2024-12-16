import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { Outlet } from "react-router-dom";
const EmployeeDashboard = () => {
  return (
    <div className="p-4 h-screen">
      <Header />
      <TaskListNumber />
      {/* <TaskList /> */}
      <Outlet></Outlet>
    </div>
  );
};

export default EmployeeDashboard;
