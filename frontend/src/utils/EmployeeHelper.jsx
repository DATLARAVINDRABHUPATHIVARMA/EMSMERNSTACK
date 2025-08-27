import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S.No",
    selector: (row) => row.sno,
    width: "58px"
  },
  {
    name: "Image",
    selector: (row) => row.profileImage,
    width: '70px'
  },
  {
    name: "Employee ID",
    selector: (row) => row.employeeID,
    sortable: true,
    width: "120px"
  },
  {
    name: ["Name"],
    selector: ((row) => [row.name, <br/>,"Phone Number : ", row.personalContact, <br/>, "Aadhaar : ", row.aadhaarNumber, ]),
    sortable: true,
    width: "205px"
  },
  {
    name: "Joining",
    selector: (row) => row.dateOfJoining,
    sortable: true,
    width: "140px"
  },
  {
    name: "Designation",
    selector: (row) => row.designation,
    width: "180px"
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center: "true"
  },
];

export const fetchDepartments = async () => {
  let departments
  try {
    const response = await axios.get("http://localhost:5000/api/department", {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
      },
    })
    if(response.data.success){
      departments = response.data.departments
    }
  } catch (error) {
    if(error.response && !error.response.data.success){
      alert(error.response.data.error);
    }
  }
  return departments
}

//employees for salary form
export const getEmployees = async (id) => {
  let employees
  try {
    const response = await axios.get(`http://localhost:5000/api/employee/client/${id}`, {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
      },
    })
    if(response.data.success){
      employees = response.data.employees
    }
  } catch (error) {
    if(error.response && !error.response.data.success){
      alert(error.response.data.error);
    }
  }
  return employees
}

export const fetchClients = async () => {
  let clients
  try {
    const response = await axios.get("http://localhost:5000/api/client", {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
      },
    })
    if(response.data.success){
      clients = response.data.clients
    }
  } catch (error) {
    if(error.response && !error.response.data.success){
      alert(error.response.data.error);
    }
  }
  return clients
}

export const fetchSites = async () => {
  let sites
  try {
    const response = await axios.get("http://localhost:5000/api/site", {
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
      },
    })
    if(response.data.success){
      sites = response.data.sites
    }
  } catch (error) {
    if(error.response && !error.response.data.success){
      alert(error.response.data.error);
    }
  }
  return sites
}

export const EmployeeButtons = ({ _id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-1">
      <button className="px-3 py-1 bg-emerald-600 text-white rounded"
        onClick={() => navigate(`/admin-dashboard/employees/${_id}`)}>
        View
      </button>
      <button
        className="px-3 py-1 bg-purple-600 text-white rounded"
        onClick={() => navigate(`/admin-dashboard/employees/edit/${_id}`)}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-yellow-600 text-white rounded"
        onClick={() => navigate(`/admin-dashboard/employees/salary/${_id}`)}
      >
        Salary
      </button>
      <button
        className="px-3 py-1 bg-red-600 text-white rounded"
      >
        Leave
      </button>
      
    </div>
  );
};

