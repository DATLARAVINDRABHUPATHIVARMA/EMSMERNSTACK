import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './Pages/Login.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import ManagerDashboard from './Pages/ManagerDashboard.jsx';
import StaffDashboard from './Pages/StaffDashboard.jsx';
import EmployeeDashboard from './Pages/EmployeeDashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='admin-dashboard'/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/manager-dashboard" element={<ManagerDashboard />}></Route>
        <Route path="/staff-dashboard" element={<StaffDashboard />}></Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
