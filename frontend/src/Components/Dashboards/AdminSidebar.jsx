import React from 'react'
import {NavLink} from 'react-router-dom';
import { FaTachometerAlt } from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <div>
      <div>
        <h3>Employee MS</h3>
      </div>
      <div>
        <NavLink>
          <FaTachometerAlt /> 
        </NavLink>
      </div>
    </div>
  )
}

export default AdminSidebar
