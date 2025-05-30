import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ManagerDashboard from "./pages/ManagerDashboard.jsx";
import StaffDashboard from "./pages/StaffDashboard.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import RoleBaseRoutes from "./utils/RoleBaseRoutes.jsx";
import AdminSummary from "./components/dashboard/AdminSummary.jsx";
import DepartmentList from "./components/department/DepartmentList.jsx";
import AddDepartment from "./components/department/AddDepartment.jsx";
import ClientList from "./components/client/ClientList.jsx";
import AddClient from "./components/client/AddClient.jsx";
import SiteList from "./components/site/SiteList.jsx";
import AddSite from "./components/site/AddSite.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
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
          <Route path="/admin-dashboard/departments" element={<DepartmentList />}></Route>
          <Route path="/admin-dashboard/add-department" element={<AddDepartment />}></Route>
          {/* <Route path="/admin-dashboard/department/:id" element={<EditDepartment />}></Route> */}
          <Route path="/admin-dashboard/clients" element={<ClientList />}></Route>
          <Route path="/admin-dashboard/add-client" element={<AddClient />}></Route>
          {/* <Route path="/admin-dashboard/client/:id" element={<EditClient />}></Route> */}
          <Route path="/admin-dashboard/sites" element={<SiteList />}></Route>
          <Route path="/admin-dashboard/add-site" element={<AddSite />}></Route>
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
