import React from 'react'
import {Link} from 'react-router-dom'

const DepartmentList = () => {
  return (
    <div>
      <div>
        <h3>Department Details</h3>
      </div>
      <div>
        <input type="text" placeholder='Search By Dept Name'/>
        <Link to='/admin-dashboard/add-department'>Add New Department</Link>
      </div>
    </div>
  )
}

export default DepartmentList
