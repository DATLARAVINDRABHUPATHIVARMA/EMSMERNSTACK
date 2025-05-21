import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import ManagerDashboard from "./Pages/ManagerDashboard.jsx";
import StaffDashboard from "./Pages/StaffDashboard.jsx";
import EmployeeDashboard from "./Pages/EmployeeDashboard.jsx";
import PrivateRoutes from "./Utils/PrivateRoutes.jsx";
import RoleBaseRoutes from "./Utils/RoleBaseRoutes.jsx";
import AdminSummary from "./Components/Dashboards/AdminSummary.jsx";
import DepartmentList from "./Components/Department/DepartmentList.jsx";
import ClientList from "./Components/Department/ClientList.jsx";
import SitesList from "./Components/Department/SitesList.jsx";
import Store from "./Components/Department/Store.jsx";
import AddDepartment from "./Components/Department/AddDepartment.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<AdminSummary />}></Route>
          <Route
            path="/admin-dashboard/departments"
            element={<DepartmentList />}
          ></Route>
          <Route
            path="/admin-dashboard/add-department"
            element={<AddDepartment />}
          ></Route>
          <Route
            path="/admin-dashboard/clients"
            element={<ClientList />}
          ></Route>
          <Route path="/admin-dashboard/sites" element={<SitesList />}></Route>
          <Route path="/admin-dashboard/store" element={<Store />}></Route>
        </Route>
        <Route path="/manager-dashboard" element={<ManagerDashboard />}></Route>
        <Route path="/staff-dashboard" element={<StaffDashboard />}></Route>
        <Route
          path="/employee-dashboard"
          element={<EmployeeDashboard />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
