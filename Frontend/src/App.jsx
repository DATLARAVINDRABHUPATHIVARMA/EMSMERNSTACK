import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import AdminDashboard from './Pages/AdminDashboard';

function App() {

  return (<>
  aaaaa
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/admin-dashboard'/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
      </Routes>
    </BrowserRouter></>
  )
}

export default App
