import React from "react";
import { useAuth } from "../context/authContext.jsx";
import AdminSidebar from "../components/dashboard/AdminSidebar.jsx";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <AdminSidebar />
    </div>
  );
};

export default AdminDashboard;
