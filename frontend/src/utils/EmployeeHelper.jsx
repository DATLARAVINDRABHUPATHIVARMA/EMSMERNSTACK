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
    width: '80px'
  },
  {
    name: "Employee ID",
    selector: (row) => row.employeeID,
    sortable: true,
    width: "114px"
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    width: "250px"
  },
  {
    name: "Joining",
    selector: (row) => row.dateOfJoining,
    sortable: true,
    width: "92px"
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
    <div className="flex space-x-3">
      <button className="px-3 py-1 bg-emerald-600 text-white rounded"
        onClick={() => navigate(`/admin-dashboard/employees/${_id}`)}>
        View
      </button>
      <button
        className="px-3 py-1 bg-purple-600 text-white rounded"
        onClick={() => navigate(`/admin-dashboard/client/${_id}`)}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-yellow-600 text-white rounded"
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

