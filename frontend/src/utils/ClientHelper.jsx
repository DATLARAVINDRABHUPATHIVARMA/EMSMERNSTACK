import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S.No",
    selector: (row) => row.sno,
    width: "58px",
    center: true
  },
  {
    name: "Client ID",
    selector: (row) => row.clientID,
    sortable: true,
    width: "120px",
    center: true
  },
  {
    name: "Client Name",
    selector: (row) => row.clientName,
    sortable: true,
    width: "300px",
    center: true
  },
  {
    name: "Client Services",
    selector: (row) => row.departmentName,
    sortable: true,
    width: "180px",
    center: true
  },
  {
    name: "Client Location",
    selector: (row) => row.siteName,
    sortable: true,
    width: "180px",
    center: true
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center: true
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

export const ClientButtons = ({ _id, onClientDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you want to Delete Client?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/client/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          onClientDelete(id);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    }
  };

  return (
    <div className="flex space-x-3">
      <button className="px-3 py-1 bg-emerald-600 text-white rounded"
      onClick={() => navigate(`/admin-dashboard/clients/${_id}`)}
      >
        View
      </button>
      <button
        className="px-3 py-1 bg-purple-600 text-white rounded"
        onClick={() => navigate(`/admin-dashboard/client/${_id}`)}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-red-600 text-white rounded"
        onClick={() => handleDelete(_id)}
      >
        Delete
      </button>
    </div>
  );
};