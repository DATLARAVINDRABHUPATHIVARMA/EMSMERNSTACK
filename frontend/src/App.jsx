import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import ManagerDashboard from "./Pages/ManagerDashboard.jsx";
import StaffDashboard from "./Pages/StaffDashboard.jsx";
import EmployeeDashboard from "./Pages/EmployeeDashboard.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import RoleBaseRoutes from "./utils/RoleBaseRoutes.jsx";
import AdminSummary from "./components/dashboard/AdminSummary.jsx";
import EmployeeList from "./Components/Employee/EmployeeList.jsx";
import AddEmployee from "./Components/Employee/AddEmployee.jsx";
import ViewEmployee from "./Components/Employee/ViewEmployee.jsx";
import EditEmployee from "./Components/Employee/EditEmployee.jsx";
import DepartmentList from "./components/department/DepartmentList.jsx";
import AddDepartment from "./components/department/AddDepartment.jsx";
import ViewDepartment from "./Components/Department/ViewDepartment.jsx";
import EditDepartment from "./components/department/EditDepartment.jsx";
import ClientList from "./Components/Client/ClientList.jsx";
import AddClient from "./Components/Client/AddClient.jsx";
import ViewClient from "./Components/Client/ViewClient.jsx";
import EditClient from "./components/client/EditClient.jsx";
import SiteList from "./components/site/SiteList.jsx";
import AddSite from "./components/site/AddSite.jsx";
import ViewSite from "./Components/Site/ViewSite.jsx";
import EditSite from "./components/site/EditSite.jsx";
import AddSalary from "./Components/Salary/AddSalary.jsx";
import ViewSalary from "./Components/Salary/ViewSalary.jsx";
import ContractList from "./Components/Contract/ContractList.jsx";
import AddContract from "./Components/Contract/AddContract.jsx";
import AddLicense from "./Components/License/AddLicense.jsx";
import Summary from "./Components/EmployeeDashboard/Summary.jsx";
import LeaveList from "./Components/Leave/LeaveList.jsx";
import AddLeave from "./Components/Leave/AddLeave.jsx";
import Setting from "./Components/EmployeeDashboard/Setting.jsx";

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
          <Route path="/admin-dashboard/employees" element={<EmployeeList />}></Route>
          <Route path="/admin-dashboard/add-employee" element={<AddEmployee />}></Route>
          <Route path="/admin-dashboard/employees/:id" element={<ViewEmployee />}></Route>
          <Route path="/admin-dashboard/employees/edit/:id" element={<EditEmployee />}></Route>
          <Route path="/admin-dashboard/employees/salary/:id" element={<ViewSalary />}></Route>
          <Route path="/admin-dashboard/departments" element={<DepartmentList />}></Route>
          <Route path="/admin-dashboard/add-department" element={<AddDepartment />}></Route>
          <Route path="/admin-dashboard/departments/:id" element={<ViewDepartment />}></Route>
          <Route path="/admin-dashboard/department/:id" element={<EditDepartment />}></Route>
          <Route path="/admin-dashboard/clients" element={<ClientList />}></Route>
          <Route path="/admin-dashboard/add-client" element={<AddClient />}></Route>
          <Route path="/admin-dashboard/clients/:id" element={<ViewClient />}></Route>
          <Route path="/admin-dashboard/clients/edit/:id" element={<EditClient />}></Route>
          <Route path="/admin-dashboard/sites" element={<SiteList />}></Route>
          <Route path="/admin-dashboard/add-site" element={<AddSite />}></Route>
          <Route path="/admin-dashboard/sites/:id" element={<ViewSite />}></Route>
          <Route path="/admin-dashboard/sites/edit/:id" element={<EditSite />}></Route>
          <Route path="/admin-dashboard/salary/addSalary" element={<AddSalary />}></Route>
          <Route path="/admin-dashboard/contracts" element={<ContractList />}></Route>
          <Route path="/admin-dashboard/add-contract" element={<AddContract />}></Route>
          <Route path="/admin-dashboard/add-license" element={<AddLicense />}></Route>
        </Route>
        <Route path="/manager-dashboard" element={<ManagerDashboard />}></Route>
        <Route path="/staff-dashboard" element={<StaffDashboard />}></Route>
        <Route path="/employee-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["admin", "manager", "staff", "employee"]}>
              <EmployeeDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>
        <Route index element={<Summary/>}></Route>
        <Route path="/employee-dashboard/profile/:id" element={<ViewEmployee/>}></Route>
        <Route path="/employee-dashboard/leaves" element={<LeaveList/>}></Route>
        <Route path="/employee-dashboard/add-leave" element={<AddLeave/>}></Route>
        <Route path="/employee-dashboard/salary/:id" element={<ViewSalary/>}></Route>
        <Route path="/employee-dashboard/settings" element={<Setting/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
