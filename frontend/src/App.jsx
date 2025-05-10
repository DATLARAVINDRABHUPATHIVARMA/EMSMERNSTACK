import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './Pages/Login.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Navigate to='admin-dashboard'/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/manager-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/staff-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/employee-dashboard" element={<AdminDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
