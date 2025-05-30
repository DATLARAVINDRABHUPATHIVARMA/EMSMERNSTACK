import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S.No",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.siteName,
    sortable: true
  },
  {
    name: "Total Employees",
    selector: (row) => row.siteEmployeeCount,
    sortable: true
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const SiteButtons = ({ _id, onSiteDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you want to Delete Site?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/site/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          onSiteDelete(id);
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
      <button className="px-3 py-1 bg-emerald-600 text-white rounded">
        View
      </button>
      <button
        className="px-3 py-1 bg-purple-600 text-white rounded"
        onClick={() => navigate(`/admin-dashboard/site/${_id}`)}
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
