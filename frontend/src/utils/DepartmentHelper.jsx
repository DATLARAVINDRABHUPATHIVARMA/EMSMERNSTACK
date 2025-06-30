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
    name: "Department Name",
    selector: (row) => row.departmentName,
    sortable: true,
    center: true
  },
  {
    name: "Total Employees",
    selector: (row) => row.departmentEmployeeCount,
    sortable: true,
    center: true
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center: true
  },
];

export const DepartmentButtons = ({ _id, onDepartmentDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you want to Delete Department?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/department/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          onDepartmentDelete(id);
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
      onClick={() => navigate(`/admin-dashboard/departments/${_id}`)}
      >
        View
      </button>
      <button
        className="px-3 py-1 bg-purple-600 text-white rounded"
        onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
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